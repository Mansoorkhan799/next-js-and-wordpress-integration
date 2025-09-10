# AI Tools Platform WordPress Plugin

A comprehensive WordPress plugin that seamlessly integrates with your Next.js AI Tools Platform website.

## 🚀 Features

- **Custom Post Type**: Dedicated "AI Tools" post type for better organization
- **Custom Fields**: Easy-to-use meta boxes for tool details
- **REST API Integration**: Automatic sync with Next.js website
- **CORS Support**: Proper cross-origin headers for API access
- **User-Friendly Interface**: Intuitive admin interface with helpful tooltips
- **Settings Page**: Built-in settings and API testing
- **Export/Import**: Bulk operations for AI tools
- **SEO Ready**: Optimized for search engines

## 📋 Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher
- Next.js AI Tools Platform website

## 🔧 Installation

1. **Download** the plugin zip file
2. **Upload** to your WordPress site via Plugins → Add New → Upload Plugin
3. **Activate** the plugin
4. **Configure** your Next.js site to connect to WordPress

## 📝 Usage

### Creating AI Tools

1. Go to **AI Tools** → **Add New** in your WordPress admin
2. Fill in the required fields:
   - **Title**: Name of the AI tool
   - **Content**: Detailed description
   - **Category**: Productivity, Creative, Writing, Design, Development
   - **Download URL**: Direct link to the tool
   - **Rating**: 1-5 star rating
   - **Features**: Comma-separated list of features
   - **Icon**: Emoji or icon for the tool
   - **Pricing**: Free, Freemium, Paid, Subscription

3. **Publish** the post
4. The tool automatically appears on your Next.js website!

### Custom Fields

The plugin adds these custom fields to your posts:

- `tool_category` - Category classification
- `download_url` - Direct download link
- `tool_rating` - User rating (1-5)
- `tool_features` - Key features list
- `tool_icon` - Tool icon/emoji
- `tool_pricing` - Pricing model

### REST API Endpoints

- `GET /wp-json/wp/v2/ai_tools` - Get all AI tools
- `GET /wp-json/wp/v2/ai_tools/{id}` - Get specific AI tool
- `GET /wp-json/ai-tools/v1/tools` - Custom endpoint with enhanced data

## 🔗 Next.js Integration

Configure your Next.js site to connect to WordPress:

```bash
# Create .env.local file
WORDPRESS_URL=https://your-wordpress-site.com
```

The Next.js site will automatically:
- Fetch WordPress posts
- Display them alongside static tools
- Show "From WordPress" badge
- Maintain SEO optimization

## 🎨 Customization

### Styling

The plugin includes custom CSS for the admin interface. You can override styles by adding custom CSS to your theme.

### Hooks and Filters

```php
// Modify AI tool data before sending to REST API
add_filter('ai_tools_rest_data', function($data, $post) {
    // Custom modifications
    return $data;
}, 10, 2);

// Add custom fields
add_action('ai_tools_meta_boxes', function($post) {
    // Add custom meta boxes
});
```

## 📊 Bulk Operations

### Export AI Tools

1. Select multiple AI tools in the admin list
2. Choose "Export AI Tools" from bulk actions
3. Download the JSON file

### Import AI Tools

1. Go to **AI Tools** → **Import**
2. Upload a valid AI tools export file
3. Confirm the import

## 🔧 Troubleshooting

### Common Issues

1. **CORS Errors**: The plugin automatically adds CORS headers
2. **REST API Not Working**: Check if WordPress REST API is enabled
3. **Custom Fields Not Showing**: Ensure the plugin is activated

### Debug Mode

Enable WordPress debug mode to see detailed error messages:

```php
// In wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

## 📈 Performance

- **Caching**: Built-in caching for REST API responses
- **Optimized Queries**: Efficient database queries
- **Minimal Overhead**: Lightweight plugin design

## 🔒 Security

- **Nonce Verification**: All forms protected with nonces
- **Capability Checks**: Proper permission validation
- **Input Sanitization**: All user input sanitized
- **Output Escaping**: All output properly escaped

## 📞 Support

For support and questions:

- **Documentation**: Check the plugin documentation
- **GitHub Issues**: Report bugs and feature requests
- **Community**: Join the AI Tools Platform community

## 📄 License

This plugin is licensed under the GPL v2 or later.

## 🆕 Changelog

### Version 1.0.0
- Initial release
- Custom post type for AI Tools
- REST API integration
- Custom fields and meta boxes
- Export/import functionality
- CORS support
- Admin interface enhancements
- Settings page with API testing

---

**Made with ❤️ for the AI Tools Platform community**
