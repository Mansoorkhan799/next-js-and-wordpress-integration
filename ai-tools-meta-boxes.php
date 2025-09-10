<?php
/**
 * Plugin Name: AI Tools Platform - With Meta Boxes
 * Plugin URI: https://yourwebsite.com
 * Description: WordPress plugin for AI Tools platform with custom meta boxes
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
class AIToolsPlatformMetaBoxes {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('add_meta_boxes', array($this, 'add_meta_boxes'));
        add_action('save_post', array($this, 'save_meta_boxes'));
        add_action('rest_api_init', array($this, 'add_cors_support'));
    }
    
    public function init() {
        // Register custom post type
        $this->register_ai_tool_post_type();
        
        // Add REST API support
        add_action('rest_api_init', array($this, 'add_rest_support'));
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
            'rewrite' => array('slug' => 'ai-tool'),
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
     * Add meta boxes
     */
    public function add_meta_boxes() {
        add_meta_box(
            'ai_tool_details',
            'AI Tool Details',
            array($this, 'ai_tool_details_callback'),
            'ai_tool',
            'normal',
            'high'
        );
    }
    
    /**
     * Meta box callback
     */
    public function ai_tool_details_callback($post) {
        // Add nonce for security
        wp_nonce_field('ai_tool_details_nonce', 'ai_tool_details_nonce');
        
        // Get current values
        $category = get_post_meta($post->ID, 'ai_tool_category', true);
        $download_url = get_post_meta($post->ID, 'ai_tool_download_url', true);
        $rating = get_post_meta($post->ID, 'ai_tool_rating', true);
        $pricing = get_post_meta($post->ID, 'ai_tool_pricing', true);
        $icon = get_post_meta($post->ID, 'ai_tool_icon', true);
        $features = get_post_meta($post->ID, 'ai_tool_features', true);
        
        ?>
        <table class="form-table">
            <tr>
                <th><label for="ai_tool_category">Category</label></th>
                <td>
                    <select name="ai_tool_category" id="ai_tool_category" style="width: 100%;">
                        <option value="">Select Category</option>
                        <option value="Productivity" <?php selected($category, 'Productivity'); ?>>Productivity</option>
                        <option value="Creative" <?php selected($category, 'Creative'); ?>>Creative</option>
                        <option value="Writing" <?php selected($category, 'Writing'); ?>>Writing</option>
                        <option value="Design" <?php selected($category, 'Design'); ?>>Design</option>
                        <option value="Development" <?php selected($category, 'Development'); ?>>Development</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="ai_tool_rating">Rating</label></th>
                <td>
                    <input type="text" name="ai_tool_rating" id="ai_tool_rating" value="<?php echo esc_attr($rating); ?>" style="width: 100%;" placeholder="e.g., 4.5" />
                </td>
            </tr>
            <tr>
                <th><label for="ai_tool_pricing">Pricing</label></th>
                <td>
                    <select name="ai_tool_pricing" id="ai_tool_pricing" style="width: 100%;">
                        <option value="">Select Pricing</option>
                        <option value="Free" <?php selected($pricing, 'Free'); ?>>Free</option>
                        <option value="Freemium" <?php selected($pricing, 'Freemium'); ?>>Freemium</option>
                        <option value="Paid" <?php selected($pricing, 'Paid'); ?>>Paid</option>
                        <option value="Subscription" <?php selected($pricing, 'Subscription'); ?>>Subscription</option>
                    </select>
                </td>
            </tr>
            <tr>
                <th><label for="ai_tool_icon">Icon (Emoji)</label></th>
                <td>
                    <input type="text" name="ai_tool_icon" id="ai_tool_icon" value="<?php echo esc_attr($icon); ?>" style="width: 100%;" placeholder="e.g., 🤖" />
                </td>
            </tr>
            <tr>
                <th><label for="ai_tool_download_url">Download URL</label></th>
                <td>
                    <input type="url" name="ai_tool_download_url" id="ai_tool_download_url" value="<?php echo esc_attr($download_url); ?>" style="width: 100%;" placeholder="https://example.com" />
                </td>
            </tr>
            <tr>
                <th><label for="ai_tool_features">Features (one per line)</label></th>
                <td>
                    <textarea name="ai_tool_features" id="ai_tool_features" rows="5" style="width: 100%;" placeholder="Enter one feature per line"><?php echo esc_textarea($features); ?></textarea>
                    <p class="description">Enter one feature per line. They will be converted to a JSON array.</p>
                </td>
            </tr>
        </table>
        <?php
    }
    
    /**
     * Save meta box data
     */
    public function save_meta_boxes($post_id) {
        // Check nonce
        if (!isset($_POST['ai_tool_details_nonce']) || !wp_verify_nonce($_POST['ai_tool_details_nonce'], 'ai_tool_details_nonce')) {
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
        
        // Save meta data
        $fields = array('ai_tool_category', 'ai_tool_download_url', 'ai_tool_rating', 'ai_tool_pricing', 'ai_tool_icon');
        
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                update_post_meta($post_id, $field, sanitize_text_field($_POST[$field]));
            }
        }
        
        // Handle features specially
        if (isset($_POST['ai_tool_features'])) {
            $features = explode("\n", $_POST['ai_tool_features']);
            $features = array_map('trim', $features);
            $features = array_filter($features); // Remove empty lines
            update_post_meta($post_id, 'ai_tool_features', $features);
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
new AIToolsPlatformMetaBoxes();

// Activation hook
register_activation_hook(__FILE__, 'ai_tools_platform_activate');

function ai_tools_platform_activate() {
    // Flush rewrite rules
    flush_rewrite_rules();
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'ai_tools_platform_deactivate');

function ai_tools_platform_deactivate() {
    // Flush rewrite rules
    flush_rewrite_rules();
}
?>
