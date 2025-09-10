<?php
/**
 * Plugin Name: AI Tools Platform Integration
 * Plugin URI: https://aitoolsplatform.com
 * Description: Seamlessly integrate WordPress with your Next.js AI Tools Platform. Create AI tools in WordPress and automatically sync them with your Next.js website.
 * Version: 1.0.0
 * Author: AI Tools Platform
 * Author URI: https://aitoolsplatform.com
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: ai-tools-platform
 * Domain Path: /languages
 * Requires at least: 5.0
 * Tested up to: 6.4
 * Requires PHP: 7.4
 * Network: false
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin constants
define('AI_TOOLS_PLATFORM_VERSION', '1.0.0');
define('AI_TOOLS_PLATFORM_PLUGIN_URL', plugin_dir_url(__FILE__));
define('AI_TOOLS_PLATFORM_PLUGIN_PATH', plugin_dir_path(__FILE__));

class AIToolsPlatformIntegration {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('rest_api_init', array($this, 'add_custom_fields_to_rest'));
        add_action('add_meta_boxes', array($this, 'add_meta_boxes'));
        add_action('save_post', array($this, 'save_meta_fields'));
        add_action('admin_enqueue_scripts', array($this, 'admin_scripts'));
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Activation and deactivation hooks
        register_activation_hook(__FILE__, array($this, 'activate'));
        register_deactivation_hook(__FILE__, array($this, 'deactivate'));
        
        // Add CORS headers
        add_action('rest_api_init', array($this, 'add_cors_headers'));
    }
    
    public function init() {
        // Load text domain for translations
        load_plugin_textdomain('ai-tools-platform', false, dirname(plugin_basename(__FILE__)) . '/languages');
        
        // Register custom post type for AI Tools
        $this->register_ai_tools_post_type();
        
        // Add custom fields
        $this->add_custom_fields();
    }
    
    public function register_ai_tools_post_type() {
        $args = array(
            'public' => true,
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'excerpt', 'author', 'comments'),
            'labels' => array(
                'name' => __('AI Tools', 'ai-tools-platform'),
                'singular_name' => __('AI Tool', 'ai-tools-platform'),
                'add_new' => __('Add New AI Tool', 'ai-tools-platform'),
                'add_new_item' => __('Add New AI Tool', 'ai-tools-platform'),
                'edit_item' => __('Edit AI Tool', 'ai-tools-platform'),
                'new_item' => __('New AI Tool', 'ai-tools-platform'),
                'view_item' => __('View AI Tool', 'ai-tools-platform'),
                'search_items' => __('Search AI Tools', 'ai-tools-platform'),
                'not_found' => __('No AI Tools found', 'ai-tools-platform'),
                'not_found_in_trash' => __('No AI Tools found in Trash', 'ai-tools-platform'),
                'menu_name' => __('AI Tools', 'ai-tools-platform'),
                'all_items' => __('All AI Tools', 'ai-tools-platform'),
            ),
            'menu_icon' => 'dashicons-admin-tools',
            'rewrite' => array('slug' => 'ai-tools'),
            'has_archive' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'can_export' => true,
            'exclude_from_search' => false,
            'capability_type' => 'post',
            'hierarchical' => false,
        );
        
        register_post_type('ai_tools', $args);
    }
    
    public function add_custom_fields() {
        // Add meta boxes for custom fields
        $this->add_basic_meta_boxes();
    }
    
    public function add_basic_meta_boxes() {
        add_meta_box(
            'ai_tool_details',
            __('AI Tool Details', 'ai-tools-platform'),
            array($this, 'meta_box_callback'),
            array('post', 'ai_tools'),
            'normal',
            'high'
        );
    }
    
    public function meta_box_callback($post) {
        wp_nonce_field('ai_tool_meta_box', 'ai_tool_meta_box_nonce');
        
        $tool_category = get_post_meta($post->ID, 'tool_category', true);
        $download_url = get_post_meta($post->ID, 'download_url', true);
        $tool_rating = get_post_meta($post->ID, 'tool_rating', true);
        $tool_features = get_post_meta($post->ID, 'tool_features', true);
        $tool_icon = get_post_meta($post->ID, 'tool_icon', true);
        $tool_pricing = get_post_meta($post->ID, 'tool_pricing', true);
        ?>
        
        <div class="ai-tools-meta-box">
            <style>
                .ai-tools-meta-box {
                    background: #fff;
                    padding: 20px;
                    border-radius: 4px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                .ai-tools-meta-box .form-table th { 
                    width: 150px; 
                    font-weight: 600;
                    color: #1d2327;
                }
                .ai-tools-meta-box .form-table td { 
                    padding: 15px 10px; 
                }
                .ai-tools-meta-box .description { 
                    font-style: italic; 
                    color: #646970; 
                    margin-top: 5px;
                    font-size: 13px;
                }
                .ai-tools-meta-box .required { 
                    color: #d63638; 
                    font-weight: bold; 
                }
                .ai-tools-meta-box input[type="text"],
                .ai-tools-meta-box input[type="url"],
                .ai-tools-meta-box input[type="number"],
                .ai-tools-meta-box select,
                .ai-tools-meta-box textarea {
                    border: 1px solid #8c8f94;
                    border-radius: 3px;
                    padding: 8px 12px;
                    font-size: 14px;
                    transition: border-color 0.15s ease-in-out;
                }
                .ai-tools-meta-box input:focus,
                .ai-tools-meta-box select:focus,
                .ai-tools-meta-box textarea:focus {
                    border-color: #2271b1;
                    box-shadow: 0 0 0 1px #2271b1;
                    outline: none;
                }
                .ai-tools-help {
                    background: #f0f6fc;
                    border: 1px solid #c3c4c7;
                    border-radius: 4px;
                    padding: 15px;
                    margin-top: 20px;
                }
                .ai-tools-help h4 {
                    margin: 0 0 10px 0;
                    color: #1d2327;
                    font-size: 14px;
                }
                .ai-tools-help ol {
                    margin: 0;
                    padding-left: 20px;
                }
                .ai-tools-help li {
                    margin-bottom: 5px;
                    color: #646970;
                    font-size: 13px;
                }
            </style>
            
            <table class="form-table">
                <tr>
                    <th><label for="tool_category"><?php _e('Tool Category', 'ai-tools-platform'); ?> <span class="required">*</span></label></th>
                    <td>
                        <select name="tool_category" id="tool_category" required>
                            <option value=""><?php _e('Select Category', 'ai-tools-platform'); ?></option>
                            <option value="Productivity" <?php selected($tool_category, 'Productivity'); ?>><?php _e('Productivity', 'ai-tools-platform'); ?></option>
                            <option value="Creative" <?php selected($tool_category, 'Creative'); ?>><?php _e('Creative', 'ai-tools-platform'); ?></option>
                            <option value="Writing" <?php selected($tool_category, 'Writing'); ?>><?php _e('Writing', 'ai-tools-platform'); ?></option>
                            <option value="Design" <?php selected($tool_category, 'Design'); ?>><?php _e('Design', 'ai-tools-platform'); ?></option>
                            <option value="Development" <?php selected($tool_category, 'Development'); ?>><?php _e('Development', 'ai-tools-platform'); ?></option>
                            <option value="General" <?php selected($tool_category, 'General'); ?>><?php _e('General', 'ai-tools-platform'); ?></option>
                        </select>
                        <p class="description"><?php _e('Choose the category that best fits this AI tool.', 'ai-tools-platform'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th><label for="download_url"><?php _e('Download URL', 'ai-tools-platform'); ?> <span class="required">*</span></label></th>
                    <td>
                        <input type="url" name="download_url" id="download_url" value="<?php echo esc_attr($download_url); ?>" class="regular-text" required />
                        <p class="description"><?php _e('Direct link to download or access the tool.', 'ai-tools-platform'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th><label for="tool_rating"><?php _e('Tool Rating', 'ai-tools-platform'); ?></label></th>
                    <td>
                        <input type="number" name="tool_rating" id="tool_rating" value="<?php echo esc_attr($tool_rating); ?>" min="1" max="5" step="0.1" />
                        <p class="description"><?php _e('Rating from 1 to 5 (e.g., 4.5)', 'ai-tools-platform'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th><label for="tool_pricing"><?php _e('Pricing Model', 'ai-tools-platform'); ?></label></th>
                    <td>
                        <select name="tool_pricing" id="tool_pricing">
                            <option value=""><?php _e('Select Pricing', 'ai-tools-platform'); ?></option>
                            <option value="Free" <?php selected($tool_pricing, 'Free'); ?>><?php _e('Free', 'ai-tools-platform'); ?></option>
                            <option value="Freemium" <?php selected($tool_pricing, 'Freemium'); ?>><?php _e('Freemium', 'ai-tools-platform'); ?></option>
                            <option value="Paid" <?php selected($tool_pricing, 'Paid'); ?>><?php _e('Paid', 'ai-tools-platform'); ?></option>
                            <option value="Subscription" <?php selected($tool_pricing, 'Subscription'); ?>><?php _e('Subscription', 'ai-tools-platform'); ?></option>
                        </select>
                        <p class="description"><?php _e('The pricing model for this tool.', 'ai-tools-platform'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th><label for="tool_icon"><?php _e('Tool Icon', 'ai-tools-platform'); ?></label></th>
                    <td>
                        <input type="text" name="tool_icon" id="tool_icon" value="<?php echo esc_attr($tool_icon); ?>" class="regular-text" placeholder="🤖" />
                        <p class="description"><?php _e('Emoji or icon for the tool (e.g., 🤖, 💬, 🎨)', 'ai-tools-platform'); ?></p>
                    </td>
                </tr>
                <tr>
                    <th><label for="tool_features"><?php _e('Tool Features', 'ai-tools-platform'); ?></label></th>
                    <td>
                        <textarea name="tool_features" id="tool_features" rows="4" class="large-text" placeholder="<?php _e('Feature 1, Feature 2, Feature 3', 'ai-tools-platform'); ?>"><?php echo esc_textarea($tool_features); ?></textarea>
                        <p class="description"><?php _e('Comma-separated list of key features.', 'ai-tools-platform'); ?></p>
                    </td>
                </tr>
            </table>
            
            <div class="ai-tools-help">
                <h4><?php _e('How to Use This Plugin', 'ai-tools-platform'); ?></h4>
                <ol>
                    <li><?php _e('Fill in the required fields above', 'ai-tools-platform'); ?></li>
                    <li><?php _e('Write a detailed description in the main content area', 'ai-tools-platform'); ?></li>
                    <li><?php _e('Add a featured image (recommended)', 'ai-tools-platform'); ?></li>
                    <li><?php _e('Publish the post', 'ai-tools-platform'); ?></li>
                    <li><?php _e('The tool will automatically appear on your Next.js AI Tools website', 'ai-tools-platform'); ?></li>
                </ol>
            </div>
        </div>
        
        <?php
    }
    
    public function save_meta_fields($post_id) {
        // Check nonce
        if (!isset($_POST['ai_tool_meta_box_nonce']) || !wp_verify_nonce($_POST['ai_tool_meta_box_nonce'], 'ai_tool_meta_box')) {
            return;
        }
        
        // Check permissions
        if (!current_user_can('edit_post', $post_id)) {
            return;
        }
        
        // Save fields
        $fields = array('tool_category', 'download_url', 'tool_rating', 'tool_features', 'tool_icon', 'tool_pricing');
        
        foreach ($fields as $field) {
            if (isset($_POST[$field])) {
                $value = sanitize_text_field($_POST[$field]);
                if ($field === 'tool_features') {
                    $value = sanitize_textarea_field($_POST[$field]);
                }
                update_post_meta($post_id, $field, $value);
            }
        }
    }
    
    public function add_custom_fields_to_rest() {
        // Add custom fields to REST API
        $post_types = array('post', 'ai_tools');
        
        foreach ($post_types as $post_type) {
            register_rest_field($post_type, 'ai_tool_meta', array(
                'get_callback' => array($this, 'get_ai_tool_meta'),
                'update_callback' => null,
                'schema' => array(
                    'description' => __('AI Tool custom fields', 'ai-tools-platform'),
                    'type' => 'object',
                    'context' => array('view', 'edit')
                )
            ));
        }
    }
    
    public function get_ai_tool_meta($object) {
        $post_id = $object['id'];
        
        return array(
            'tool_category' => get_post_meta($post_id, 'tool_category', true),
            'download_url' => get_post_meta($post_id, 'download_url', true),
            'tool_rating' => get_post_meta($post_id, 'tool_rating', true),
            'tool_features' => get_post_meta($post_id, 'tool_features', true),
            'tool_icon' => get_post_meta($post_id, 'tool_icon', true),
            'tool_pricing' => get_post_meta($post_id, 'tool_pricing', true),
        );
    }
    
    public function add_cors_headers() {
        add_filter('rest_pre_serve_request', function($value) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
            header('Access-Control-Allow-Headers: Content-Type, Authorization');
            return $value;
        });
    }
    
    public function admin_scripts($hook) {
        if ($hook === 'post.php' || $hook === 'post-new.php') {
            wp_enqueue_script('ai-tools-admin', AI_TOOLS_PLATFORM_PLUGIN_URL . 'assets/admin.js', array('jquery'), AI_TOOLS_PLATFORM_VERSION, true);
            wp_enqueue_style('ai-tools-admin', AI_TOOLS_PLATFORM_PLUGIN_URL . 'assets/admin.css', array(), AI_TOOLS_PLATFORM_VERSION);
        }
    }
    
    public function add_admin_menu() {
        add_submenu_page(
            'edit.php?post_type=ai_tools',
            __('Settings', 'ai-tools-platform'),
            __('Settings', 'ai-tools-platform'),
            'manage_options',
            'ai-tools-settings',
            array($this, 'settings_page')
        );
    }
    
    public function settings_page() {
        ?>
        <div class="wrap">
            <h1><?php _e('AI Tools Platform Settings', 'ai-tools-platform'); ?></h1>
            
            <div class="card">
                <h2><?php _e('REST API Endpoints', 'ai-tools-platform'); ?></h2>
                <p><?php _e('Use these endpoints to connect your Next.js website:', 'ai-tools-platform'); ?></p>
                
                <table class="form-table">
                    <tr>
                        <th><?php _e('All AI Tools', 'ai-tools-platform'); ?></th>
                        <td><code><?php echo home_url('/wp-json/wp/v2/ai_tools'); ?></code></td>
                    </tr>
                    <tr>
                        <th><?php _e('Custom Endpoint', 'ai-tools-platform'); ?></th>
                        <td><code><?php echo home_url('/wp-json/ai-tools/v1/tools'); ?></code></td>
                    </tr>
                    <tr>
                        <th><?php _e('Categories', 'ai-tools-platform'); ?></th>
                        <td><code><?php echo home_url('/wp-json/wp/v2/categories'); ?></code></td>
                    </tr>
                </table>
            </div>
            
            <div class="card">
                <h2><?php _e('Next.js Configuration', 'ai-tools-platform'); ?></h2>
                <p><?php _e('Add this to your Next.js .env.local file:', 'ai-tools-platform'); ?></p>
                <textarea readonly style="width: 100%; height: 100px; font-family: monospace;">
WORDPRESS_URL=<?php echo home_url(); ?>

# Optional: For private posts
# WORDPRESS_USERNAME=your_username
# WORDPRESS_PASSWORD=your_password
                </textarea>
            </div>
            
            <div class="card">
                <h2><?php _e('Test Connection', 'ai-tools-platform'); ?></h2>
                <p><?php _e('Click the button below to test if your REST API is working:', 'ai-tools-platform'); ?></p>
                <button type="button" class="button button-primary" onclick="testAPI()"><?php _e('Test API', 'ai-tools-platform'); ?></button>
                <div id="api-test-result" style="margin-top: 10px;"></div>
            </div>
        </div>
        
        <script>
        function testAPI() {
            const resultDiv = document.getElementById('api-test-result');
            resultDiv.innerHTML = '<p>Testing...</p>';
            
            fetch('<?php echo home_url('/wp-json/wp/v2/ai_tools'); ?>')
                .then(response => response.json())
                .then(data => {
                    resultDiv.innerHTML = '<p style="color: green;">✅ API is working! Found ' + data.length + ' AI tools.</p>';
                })
                .catch(error => {
                    resultDiv.innerHTML = '<p style="color: red;">❌ API Error: ' + error.message + '</p>';
                });
        }
        </script>
        <?php
    }
    
    public function activate() {
        // Flush rewrite rules
        $this->register_ai_tools_post_type();
        flush_rewrite_rules();
        
        // Create default options
        add_option('ai_tools_platform_version', AI_TOOLS_PLATFORM_VERSION);
    }
    
    public function deactivate() {
        // Flush rewrite rules
        flush_rewrite_rules();
    }
}

// Initialize the plugin
new AIToolsPlatformIntegration();

// Add custom endpoint for AI Tools
add_action('rest_api_init', function() {
    register_rest_route('ai-tools/v1', '/tools', array(
        'methods' => 'GET',
        'callback' => 'get_ai_tools_endpoint',
        'permission_callback' => '__return_true',
        'args' => array(
            'per_page' => array(
                'default' => 10,
                'sanitize_callback' => 'absint',
            ),
            'page' => array(
                'default' => 1,
                'sanitize_callback' => 'absint',
            ),
            'category' => array(
                'sanitize_callback' => 'sanitize_text_field',
            ),
        ),
    ));
});

function get_ai_tools_endpoint($request) {
    $args = array(
        'post_type' => array('post', 'ai_tools'),
        'post_status' => 'publish',
        'posts_per_page' => $request->get_param('per_page'),
        'paged' => $request->get_param('page'),
    );
    
    if ($request->get_param('category')) {
        $args['meta_query'] = array(
            array(
                'key' => 'tool_category',
                'value' => $request->get_param('category'),
                'compare' => '='
            )
        );
    }
    
    $posts = get_posts($args);
    $tools = array();
    
    foreach ($posts as $post) {
        $tools[] = array(
            'id' => $post->post_name,
            'title' => $post->post_title,
            'content' => $post->post_content,
            'excerpt' => $post->post_excerpt,
            'slug' => $post->post_name,
            'date' => $post->post_date,
            'modified' => $post->post_modified,
            'link' => get_permalink($post->ID),
            'featured_media' => get_post_thumbnail_id($post->ID),
            'meta' => array(
                'tool_category' => get_post_meta($post->ID, 'tool_category', true),
                'download_url' => get_post_meta($post->ID, 'download_url', true),
                'tool_rating' => get_post_meta($post->ID, 'tool_rating', true),
                'tool_features' => get_post_meta($post->ID, 'tool_features', true),
                'tool_icon' => get_post_meta($post->ID, 'tool_icon', true),
                'tool_pricing' => get_post_meta($post->ID, 'tool_pricing', true),
            )
        );
    }
    
    return new WP_REST_Response($tools, 200);
}

// Add admin notice for setup instructions
add_action('admin_notices', function() {
    if (get_option('ai_tools_platform_setup_notice_dismissed')) {
        return;
    }
    
    $screen = get_current_screen();
    if ($screen && ($screen->id === 'ai_tools' || $screen->id === 'edit-ai_tools')) {
        ?>
        <div class="notice notice-info is-dismissible" id="ai-tools-setup-notice">
            <p>
                <strong><?php _e('AI Tools Platform Integration', 'ai-tools-platform'); ?></strong><br>
                <?php _e('Welcome! This plugin automatically syncs your WordPress content with your Next.js AI Tools website.', 'ai-tools-platform'); ?>
                <a href="<?php echo admin_url('edit.php?post_type=ai_tools'); ?>" class="button button-primary" style="margin-left: 10px;">
                    <?php _e('Start Creating AI Tools', 'ai-tools-platform'); ?>
                </a>
                <a href="<?php echo admin_url('edit.php?post_type=ai_tools&page=ai-tools-settings'); ?>" class="button" style="margin-left: 5px;">
                    <?php _e('Settings', 'ai-tools-platform'); ?>
                </a>
            </p>
        </div>
        
        <script>
        jQuery(document).ready(function($) {
            $(document).on('click', '#ai-tools-setup-notice .notice-dismiss', function() {
                $.post(ajaxurl, {
                    action: 'dismiss_ai_tools_setup_notice',
                    nonce: '<?php echo wp_create_nonce('ai_tools_setup_notice'); ?>'
                });
            });
        });
        </script>
        <?php
    }
});

// Handle notice dismissal
add_action('wp_ajax_dismiss_ai_tools_setup_notice', function() {
    if (wp_verify_nonce($_POST['nonce'], 'ai_tools_setup_notice')) {
        update_option('ai_tools_platform_setup_notice_dismissed', true);
    }
    wp_die();
});
