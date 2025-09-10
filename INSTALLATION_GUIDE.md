# WordPress Plugin Installation Guide

## 🚀 Quick Installation Steps

### 1. Download the Plugin
- File: `ai-tools-wordpress-plugin.zip` (11.5 KB)
- Location: Your project folder

### 2. Upload to WordPress
1. **Login** to your WordPress admin dashboard
2. **Go to:** Plugins → Add New
3. **Click:** "Upload Plugin" button
4. **Choose File:** Select `ai-tools-wordpress-plugin.zip`
5. **Click:** "Install Now"
6. **Click:** "Activate Plugin"

### 3. Verify Installation
- You should see **"AI Tools"** in your WordPress admin menu
- Go to: **AI Tools** → **All AI Tools**
- You should see the plugin interface

### 4. Configure Next.js
Create `.env.local` file in your Next.js project:
```bash
WORDPRESS_URL=https://your-wordpress-site.com
NEXT_PUBLIC_SITE_URL=http://localhost:3002
```

### 5. Test the Connection
1. **Create a test AI tool** in WordPress
2. **Visit:** `http://localhost:3002/tools`
3. **Check:** Does the WordPress tool appear?

## 🔧 Plugin Features

### Custom Fields:
- ✅ Tool Category (required)
- ✅ Download URL (required)
- ✅ Tool Rating (1-5)
- ✅ Pricing Model
- ✅ Tool Icon (emoji)
- ✅ Tool Features (comma-separated)

### REST API Endpoints:
- ✅ `/wp-json/wp/v2/ai_tools` - Standard WordPress API
- ✅ `/wp-json/ai-tools/v1/tools` - Enhanced custom endpoint
- ✅ `/wp-json/wp/v2/categories` - Categories

### Admin Features:
- ✅ User-friendly interface
- ✅ Form validation
- ✅ Auto-save functionality
- ✅ Settings page with API testing
- ✅ Export/import capabilities

## 🎯 Quick Test

### Test WordPress API:
Visit: `https://your-wordpress-site.com/wp-json/wp/v2/ai_tools`

### Test Next.js Connection:
Visit: `http://localhost:3002/tools`

## 🚨 Troubleshooting

### Common Issues:
1. **Plugin not activating** → Check WordPress version (5.0+)
2. **API not working** → Enable REST API in WordPress
3. **CORS errors** → Plugin automatically adds CORS headers
4. **Custom fields missing** → Ensure plugin is activated

### Debug Steps:
1. Check WordPress error logs
2. Test API endpoints directly
3. Verify .env.local configuration
4. Restart Next.js development server

## 📞 Support

If you encounter issues:
1. Check the plugin README.md
2. Verify WordPress requirements
3. Test API endpoints manually
4. Check browser console for errors

---

**Plugin Size:** 11.5 KB  
**Compatibility:** WordPress 5.0+, PHP 7.4+  
**Status:** Ready for production use
