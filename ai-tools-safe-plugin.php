<?php
/**
 * Plugin Name: AI Tools Platform - Safe Version
 * Plugin URI: https://aitoolsplatform.com
 * Description: Safe WordPress integration for AI Tools Platform with error handling.
 * Version: 2.1.0
 * Author: AI Tools Platform
 * License: GPL v2 or later
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class AIToolsPlatformSafePlugin {
    
    public function __construct() {
        add_action('init', array($this, 'register_custom_post_type'));
        add_action('add_meta_boxes', array($this, 'add_meta_boxes'));
        add_action('save_post', array($this, 'save_meta_fields'));
        add_action('rest_api_init', array($this, 'add_custom_fields_to_rest'));
        add_action('init', array($this, 'flush_rewrite_rules'));
        
        // Add CORS headers
        add_action('rest_api_init', array($this, 'add_cors_headers'));
    }
    
    public function register_custom_post_type() {
        $labels = array(
            'name' => 'AI Tools',
            'singular_name' => 'AI Tool',
            'menu_name' => 'AI Tools',
            'add_new' => 'Add New AI Tool',
            'add_new_item' => 'Add New AI Tool',
            'edit_item' => 'Edit AI Tool',
            'new_item' => 'New AI Tool',
            'view_item' => 'View AI Tool',
            'search_items' => 'Search AI Tools',
            'not_found' => 'No AI Tools found',
            'not_found_in_trash' => 'No AI Tools found in Trash'
        );
        
        $args = array(
            'labels' => $labels,
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'query_var' => true,
            'rewrite' => array('slug' => 'ai-tool'),
            'capability_type' => 'post',
            'has_archive' => true,
            'hierarchical' => false,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-admin-tools',
            'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'ai-tools',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
        );
        
        register_post_type('ai_tool', $args);
    }
    
    public function add_meta_boxes() {
        add_meta_box(
            'ai_tool_info',
            'AI Tool Information',
            array($this, 'ai_tool_info_meta_box'),
            'ai_tool',
            'normal',
            'high'
        );
    }
    
    public function ai_tool_info_meta_box($post) {
        // Add nonce for security
        wp_nonce_field('ai_tool_meta_box', 'ai_tool_meta_box_nonce');
        
        // Get existing values
        $category = get_post_meta($post->ID, 'ai_tool_category', true);
        $download_url = get_post_meta($post->ID, 'ai_tool_download_url', true);
        $website_url = get_post_meta($post->ID, 'ai_tool_website_url', true);
        $rating = get_post_meta($post->ID, 'ai_tool_rating', true);
        $pricing = get_post_meta($post->ID, 'ai_tool_pricing', true);
        $icon = get_post_meta($post->ID, 'ai_tool_icon', true);
        $downloads = get_post_meta($post->ID, 'ai_tool_downloads', true);
        $about = get_post_meta($post->ID, 'ai_tool_about', true);
        $features = get_post_meta($post->ID, 'ai_tool_features', true);
        $use_cases = get_post_meta($post->ID, 'ai_tool_use_cases', true);
        
        // Convert arrays to strings for editing
        if (is_array($features)) {
            $features = implode(', ', $features);
        }
        if (is_array($use_cases)) {
            $use_cases = implode(', ', $use_cases);
        }
        
        echo '<table class="form-table" style="width: 100%;">';
        
        // Basic Information Section
        echo '<tr><td colspan="2"><h3 style="margin: 0; padding: 10px 0; border-bottom: 1px solid #ddd;">Basic Information</h3></td></tr>';
        
        echo '<tr><th style="width: 150px;"><label for="ai_tool_category">Category</label></th>';
        echo '<td><input type="text" id="ai_tool_category" name="ai_tool_category" value="' . esc_attr($category) . '" placeholder="e.g., Productivity, Creative, Writing" style="width: 100%;" /></td></tr>';
        
        echo '<tr><th><label for="ai_tool_rating">Rating (0-5)</label></th>';
        echo '<td><input type="number" id="ai_tool_rating" name="ai_tool_rating" value="' . esc_attr($rating) . '" min="0" max="5" step="0.1" placeholder="4.5" style="width: 100px;" /></td></tr>';
        
        echo '<tr><th><label for="ai_tool_pricing">Pricing</label></th>';
        echo '<td><input type="text" id="ai_tool_pricing" name="ai_tool_pricing" value="' . esc_attr($pricing) . '" placeholder="e.g., Freemium, Free, Paid" style="width: 100%;" /></td></tr>';
        
        echo '<tr><th><label for="ai_tool_icon">Icon (Emoji)</label></th>';
        echo '<td><input type="text" id="ai_tool_icon" name="ai_tool_icon" value="' . esc_attr($icon) . '" placeholder="🤖" style="width: 100px;" /></td></tr>';
        
        echo '<tr><th><label for="ai_tool_downloads">Downloads Count</label></th>';
        echo '<td><input type="number" id="ai_tool_downloads" name="ai_tool_downloads" value="' . esc_attr($downloads) . '" placeholder="1000000" style="width: 200px;" /></td></tr>';
        
        // URLs Section
        echo '<tr><td colspan="2"><h3 style="margin: 20px 0 10px 0; padding: 10px 0; border-bottom: 1px solid #ddd;">URLs</h3></td></tr>';
        
        echo '<tr><th><label for="ai_tool_download_url">Download URL</label></th>';
        echo '<td><input type="url" id="ai_tool_download_url" name="ai_tool_download_url" value="' . esc_attr($download_url) . '" placeholder="https://example.com/download" style="width: 100%;" /></td></tr>';
        
        echo '<tr><th><label for="ai_tool_website_url">Website URL</label></th>';
        echo '<td><input type="url" id="ai_tool_website_url" name="ai_tool_website_url" value="' . esc_attr($website_url) . '" placeholder="https://example.com" style="width: 100%;" /></td></tr>';
        
        // Content Section
        echo '<tr><td colspan="2"><h3 style="margin: 20px 0 10px 0; padding: 10px 0; border-bottom: 1px solid #ddd;">Content</h3></td></tr>';
        
        echo '<tr><th><label for="ai_tool_about">About This Tool</label></th>';
        echo '<td><textarea id="ai_tool_about" name="ai_tool_about" rows="4" style="width: 100%;" placeholder="Detailed description of what this tool does...">' . esc_textarea($about) . '</textarea></td></tr>';
        
        echo '<tr><th><label for="ai_tool_features">Features</label></th>';
        echo '<td><textarea id="ai_tool_features" name="ai_tool_features" rows="3" style="width: 100%;" placeholder="Feature 1, Feature 2, Feature 3 (comma-separated)">' . esc_textarea($features) . '</textarea>';
        echo '<p class="description">Enter features separated by commas.</p></td></tr>';
        
        echo '<tr><th><label for="ai_tool_use_cases">Use Cases</label></th>';
        echo '<td><textarea id="ai_tool_use_cases" name="ai_tool_use_cases" rows="3" style="width: 100%;" placeholder="Use case 1, Use case 2, Use case 3 (comma-separated)">' . esc_textarea($use_cases) . '</textarea>';
        echo '<p class="description">Enter use cases separated by commas.</p></td></tr>';
        
        echo '</table>';
    }
    
    public function save_meta_fields($post_id) {
        // Check nonce
        if (!isset($_POST['ai_tool_meta_box_nonce']) || !wp_verify_nonce($_POST['ai_tool_meta_box_nonce'], 'ai_tool_meta_box')) {
            return;
        }
        
        // Check if autosave
        if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
            return;
        }
        
        // Check permissions
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        // Save basic fields
        $fields = array(
            'ai_tool_category',
            'ai_tool_download_url',
            'ai_tool_website_url',
            'ai_tool_rating',
            'ai_tool_pricing',
            'ai_tool_icon',
            'ai_tool_downloads',
            'ai_tool_about'
        );
        
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
            }
        }
        
        // Handle array fields
        if (isset($_POST['ai_tool_features'])) {
            $features = array_map('trim', explode(',', $_POST['ai_tool_features']));
            $features = array_filter($features); // Remove empty values
            update_post_meta($post_id, 'ai_tool_features', $features);
        }
        
        if (isset($_POST['ai_tool_use_cases'])) {
            $use_cases = array_map('trim', explode(',', $_POST['ai_tool_use_cases']));
            $use_cases = array_filter($use_cases); // Remove empty values
            update_post_meta($post_id, 'ai_tool_use_cases', $use_cases);
        }
    }
    
    public function add_custom_fields_to_rest() {
        register_rest_field('ai_tool', 'ai_tool_category', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_category', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_download_url', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_download_url', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_website_url', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_website_url', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_rating', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_rating', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_pricing', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_pricing', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_icon', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_icon', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_downloads', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_downloads', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_about', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_about', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_features', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_features', true);
            }
        ));
        
        register_rest_field('ai_tool', 'ai_tool_use_cases', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'ai_tool_use_cases', true);
            }
        ));
    }
    
    public function add_cors_headers() {
        remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
        add_filter('rest_pre_serve_request', function($value) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            return $value;
        });
    }
    
    public function flush_rewrite_rules() {
        if (get_option('ai_tools_safe_plugin_flush_rewrite_rules_flag')) {
            flush_rewrite_rules();
            delete_option('ai_tools_safe_plugin_flush_rewrite_rules_flag');
        }
    }
}

// Initialize the plugin safely
try {
    new AIToolsPlatformSafePlugin();
} catch (Exception $e) {
    // Log error but don't break the site
    error_log('AI Tools Plugin Error: ' . $e->getMessage());
}

// Activation hook
register_activation_hook(__FILE__, function() {
    update_option('ai_tools_safe_plugin_flush_rewrite_rules_flag', true);
});
