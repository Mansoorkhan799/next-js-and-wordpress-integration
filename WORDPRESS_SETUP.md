# WordPress Integration Setup Guide

This guide will help you connect your Next.js AI Tools Platform with WordPress for dynamic content management.

## 🚀 Quick Setup

### 1. WordPress Site Requirements

Your WordPress site needs:
- **WordPress 5.0+** with REST API enabled
- **Custom Fields** plugin (like Advanced Custom Fields)
- **Custom Post Type** for AI Tools (optional but recommended)

### 2. WordPress Configuration

#### Install Required Plugins:
1. **Advanced Custom Fields (ACF)** - For custom fields
2. **Custom Post Type UI** - For creating AI Tools post type (optional)

#### Create Custom Fields:
Add these custom fields to your posts:
- `tool_category` (Text) - Category like "Productivity", "Creative"
- `download_url` (URL) - Direct download link
- `tool_rating` (Number) - Rating from 1-5
- `tool_features` (Textarea) - Comma-separated features

#### Create AI Tools Post Type (Optional):
1. Go to **CPT UI** → **Add/Edit Post Types**
2. Create post type: `ai_tools`
3. Set slug: `ai-tools`
4. Enable REST API support

### 3. Next.js Configuration

#### Environment Variables:
Create `.env.local` file:
```bash
WORDPRESS_URL=https://your-wordpress-site.com
WORDPRESS_USERNAME=your_username  # Optional
WORDPRESS_PASSWORD=your_password  # Optional
```

#### Update WordPress URL:
Edit `lib/wordpress.ts`:
```typescript
export const WORDPRESS_CONFIG = {
  baseUrl: 'https://your-actual-wordpress-site.com',
  apiUrl: 'https://your-actual-wordpress-site.com/wp-json/wp/v2',
  // ... rest of config
};
```

## 📝 Content Management Workflow

### Publishing AI Tools:

1. **Create Post in WordPress:**
   - Title: Tool name (e.g., "ChatGPT Desktop")
   - Slug: URL-friendly version (e.g., "chatgpt-desktop")
   - Content: Detailed article about the tool
   - Featured Image: Tool icon/screenshot

2. **Add Custom Fields:**
   - `tool_category`: "Productivity"
   - `download_url`: "https://chat.openai.com"
   - `tool_rating`: "4.8"
   - `tool_features`: "Natural language conversations, Code generation, Creative writing"

3. **Publish:** The tool automatically appears on your Next.js site!

### WordPress Post Structure:

```html
<!-- WordPress Post Content Example -->
<h2>What is ChatGPT Desktop?</h2>
<p>ChatGPT Desktop is a powerful AI assistant...</p>

<h3>Key Features</h3>
<ul>
  <li>Natural language conversations</li>
  <li>Code generation and debugging</li>
  <li>Creative writing assistance</li>
</ul>

<h3>How to Use</h3>
<p>Step-by-step instructions...</p>
```

## 🔧 Advanced Configuration

### Custom Post Type Setup:

If you want dedicated AI Tools post type:

1. **Create Post Type:**
   ```php
   // In WordPress functions.php or plugin
   function create_ai_tools_post_type() {
       register_post_type('ai_tools', array(
           'public' => true,
           'show_in_rest' => true,
           'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
           'labels' => array(
               'name' => 'AI Tools',
               'singular_name' => 'AI Tool'
           )
       ));
   }
   add_action('init', 'create_ai_tools_post_type');
   ```

2. **Update API Endpoint:**
   ```typescript
   // In lib/wordpress.ts
   apiUrl: 'https://your-site.com/wp-json/wp/v2/ai_tools',
   ```

### Caching Configuration:

The system includes automatic caching (5 minutes). To modify:

```typescript
// In lib/wordpress.ts
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes
```

### SEO Optimization:

WordPress posts automatically get:
- ✅ Meta titles and descriptions
- ✅ Open Graph tags
- ✅ Structured data
- ✅ Sitemap inclusion

## 🎯 Usage Examples

### Fetching WordPress Posts:

```typescript
// Get all AI tools from WordPress
const posts = await fetchWordPressPosts({ per_page: 20 });

// Get tools by category
const productivityTools = await getWordPressPostsByCategory('productivity');

// Search tools
const searchResults = await searchWordPressPosts('chatgpt');
```

### API Endpoints:

- `GET /api/wordpress/posts` - Get all posts
- `GET /api/wordpress/posts/[slug]` - Get specific post
- `GET /api/wordpress/categories` - Get categories

## 🚨 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Add CORS headers to WordPress
   - Use WordPress plugin: "CORS Headers"

2. **Authentication Issues:**
   - Check WordPress credentials
   - Ensure REST API is enabled

3. **Content Not Updating:**
   - Clear Next.js cache
   - Check WordPress post status (published)

4. **Images Not Loading:**
   - Update `next.config.js` with WordPress domain
   - Use WordPress media API

### Debug Mode:

Enable debug logging:
```typescript
// In lib/wordpress.ts
const DEBUG = process.env.NODE_ENV === 'development';
if (DEBUG) console.log('WordPress API call:', url);
```

## 📈 Performance Tips

1. **Enable WordPress Caching:**
   - Install WP Rocket or W3 Total Cache
   - Enable object caching

2. **Optimize Images:**
   - Use WebP format
   - Implement lazy loading

3. **Database Optimization:**
   - Regular database cleanup
   - Optimize WordPress tables

## 🔄 Deployment

### Production Setup:

1. **Environment Variables:**
   ```bash
   WORDPRESS_URL=https://your-production-wordpress.com
   ```

2. **Build Process:**
   ```bash
   npm run build
   npm start
   ```

3. **Static Generation:**
   - WordPress posts are pre-rendered at build time
   - Updates require rebuild or ISR (Incremental Static Regeneration)

### Automatic Updates:

For real-time updates, implement webhooks:
1. WordPress webhook → Next.js API route
2. Trigger rebuild or update cache
3. Notify users of new content

## 📞 Support

Need help? Check:
- [WordPress REST API Documentation](https://developer.wordpress.org/rest-api/)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Advanced Custom Fields](https://www.advancedcustomfields.com/)

---

**Ready to connect WordPress?** Update your `.env.local` file and start publishing AI tools! 🚀
