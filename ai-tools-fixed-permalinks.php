<?php
/**
 * Plugin Name: AI Tools Platform - Fixed Permalinks
 * Plugin URI: https://yourwebsite.com
 * Description: WordPress plugin for AI Tools platform with fixed permalink handling
 * Version: 1.0.0
 * Author: Your Name
 * License: GPL v2 or later
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('AI_TOOLS_PLUGIN_VERSION', '1.0.0');
define('AI_TOOLS_PLUGIN_URL', plugin_dir_url(__FILE__));
define('AI_TOOLS_PLUGIN_PATH', plugin_dir_path(__FILE__));

/**
 * Main plugin class
 */
class AIToolsPlatformFixed {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('rest_api_init', array($this, 'add_cors_support'));
        add_action('template_redirect', array($this, 'handle_404'));
    }
    
    public function init() {
        // Register custom post type
        $this->register_ai_tool_post_type();
        
        // Add REST API support
        add_action('rest_api_init', array($this, 'add_rest_support'));
        
        // Flush rewrite rules on activation
        if (get_option('ai_tools_flush_rewrite_rules')) {
            flush_rewrite_rules();
            delete_option('ai_tools_flush_rewrite_rules');
        }
    }
    
    /**
     * Register AI Tool custom post type
     */
    public function register_ai_tool_post_type() {
        $labels = array(
            'name' => 'AI Tools',
            'singular_name' => 'AI Tool',
            'menu_name' => 'AI Tools',
            'add_new' => 'Add New Tool',
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
            'show_in_rest' => true,
            'query_var' => true,
            'rewrite' => array(
                'slug' => 'ai-tool',
                'with_front' => false
            ),
            'capability_type' => 'post',
            'has_archive' => true,
            'hierarchical' => false,
            'menu_position' => 5,
            'menu_icon' => 'dashicons-admin-tools',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'rest_base' => 'ai-tools'
        );
        
        register_post_type('ai_tool', $args);
    }
    
    /**
     * Handle 404 errors for AI tools
     */
    public function handle_404() {
        global $wp_query;
        
        if (is_404() && isset($wp_query->query_vars['ai_tool'])) {
            $post = get_posts(array(
                'name' => $wp_query->query_vars['ai_tool'],
                'post_type' => 'ai_tool',
                'post_status' => 'publish',
                'numberposts' => 1
            ));
            
            if ($post) {
                $wp_query->is_404 = false;
                $wp_query->is_single = true;
                $wp_query->is_singular = true;
                $wp_query->queried_object = $post[0];
                $wp_query->queried_object_id = $post[0]->ID;
            }
        }
    }
    
    /**
     * Add REST API support
     */
    public function add_rest_support() {
        // Add custom fields to REST API response
        register_rest_field('ai_tool', 'ai_tool_category', array(
            'get_callback' => array($this, 'get_ai_tool_category'),
            'update_callback' => array($this, 'update_ai_tool_category'),
            'schema' => array(
                'description' => 'AI Tool Category',
                'type' => 'string'
            )
        ));
        
        register_rest_field('ai_tool', 'ai_tool_download_url', array(
            'get_callback' => array($this, 'get_ai_tool_download_url'),
            'update_callback' => array($this, 'update_ai_tool_download_url'),
            'schema' => array(
                'description' => 'AI Tool Download URL',
                'type' => 'string'
            )
        ));
        
        register_rest_field('ai_tool', 'ai_tool_rating', array(
            'get_callback' => array($this, 'get_ai_tool_rating'),
            'update_callback' => array($this, 'update_ai_tool_rating'),
            'schema' => array(
                'description' => 'AI Tool Rating',
                'type' => 'string'
            )
        ));
        
        register_rest_field('ai_tool', 'ai_tool_pricing', array(
            'get_callback' => array($this, 'get_ai_tool_pricing'),
            'update_callback' => array($this, 'update_ai_tool_pricing'),
            'schema' => array(
                'description' => 'AI Tool Pricing',
                'type' => 'string'
            )
        ));
        
        register_rest_field('ai_tool', 'ai_tool_icon', array(
            'get_callback' => array($this, 'get_ai_tool_icon'),
            'update_callback' => array($this, 'update_ai_tool_icon'),
            'schema' => array(
                'description' => 'AI Tool Icon',
                'type' => 'string'
            )
        ));
        
        register_rest_field('ai_tool', 'ai_tool_features', array(
            'get_callback' => array($this, 'get_ai_tool_features'),
            'update_callback' => array($this, 'update_ai_tool_features'),
            'schema' => array(
                'description' => 'AI Tool Features',
                'type' => 'array'
            )
        ));
    }
    
    /**
     * Get AI Tool Category
     */
    public function get_ai_tool_category($object) {
        return get_post_meta($object['id'], 'ai_tool_category', true);
    }
    
    /**
     * Update AI Tool Category
     */
    public function update_ai_tool_category($value, $object) {
        return update_post_meta($object->ID, 'ai_tool_category', $value);
    }
    
    /**
     * Get AI Tool Download URL
     */
    public function get_ai_tool_download_url($object) {
        return get_post_meta($object['id'], 'ai_tool_download_url', true);
    }
    
    /**
     * Update AI Tool Download URL
     */
    public function update_ai_tool_download_url($value, $object) {
        return update_post_meta($object->ID, 'ai_tool_download_url', $value);
    }
    
    /**
     * Get AI Tool Rating
     */
    public function get_ai_tool_rating($object) {
        return get_post_meta($object['id'], 'ai_tool_rating', true);
    }
    
    /**
     * Update AI Tool Rating
     */
    public function update_ai_tool_rating($value, $object) {
        return update_post_meta($object->ID, 'ai_tool_rating', $value);
    }
    
    /**
     * Get AI Tool Pricing
     */
    public function get_ai_tool_pricing($object) {
        return get_post_meta($object['id'], 'ai_tool_pricing', true);
    }
    
    /**
     * Update AI Tool Pricing
     */
    public function update_ai_tool_pricing($value, $object) {
        return update_post_meta($object->ID, 'ai_tool_pricing', $value);
    }
    
    /**
     * Get AI Tool Icon
     */
    public function get_ai_tool_icon($object) {
        return get_post_meta($object['id'], 'ai_tool_icon', true);
    }
    
    /**
     * Update AI Tool Icon
     */
    public function update_ai_tool_icon($value, $object) {
        return update_post_meta($object->ID, 'ai_tool_icon', $value);
    }
    
    /**
     * Get AI Tool Features
     */
    public function get_ai_tool_features($object) {
        $features = get_post_meta($object['id'], 'ai_tool_features', true);
        return is_array($features) ? $features : array();
    }
    
    /**
     * Update AI Tool Features
     */
    public function update_ai_tool_features($value, $object) {
        return update_post_meta($object->ID, 'ai_tool_features', $value);
    }
    
    /**
     * Add CORS support for REST API
     */
    public function add_cors_support() {
        remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
        add_filter('rest_pre_serve_request', array($this, 'add_cors_headers'));
    }
    
    /**
     * Add CORS headers
     */
    public function add_cors_headers($value) {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        return $value;
    }
}

// Initialize the plugin
new AIToolsPlatformFixed();

// Activation hook
register_activation_hook(__FILE__, 'ai_tools_platform_activate');

function ai_tools_platform_activate() {
    // Set flag to flush rewrite rules
    update_option('ai_tools_flush_rewrite_rules', true);
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'ai_tools_platform_deactivate');

function ai_tools_platform_deactivate() {
    // Flush rewrite rules
    flush_rewrite_rules();
}
?>
