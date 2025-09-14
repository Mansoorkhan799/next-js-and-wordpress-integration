// WordPress API configuration
export const WORDPRESS_CONFIG = {
  // Replace with your WordPress site URL
  baseUrl: process.env.WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL || '',
  // WordPress REST API endpoints
  apiUrl: (process.env.WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL) ? 
    `${process.env.WORDPRESS_URL || process.env.NEXT_PUBLIC_WORDPRESS_URL}/wp-json/wp/v2` : '',
  // Optional: Basic auth for private posts (if needed)
  username: process.env.WORDPRESS_USERNAME,
  password: process.env.WORDPRESS_PASSWORD,
};

// WordPress post interface
export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  modified: string;
  status: string;
  link: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  ai_tool_category?: string;
  ai_tool_download_url?: string;
  ai_tool_rating?: string;
  ai_tool_pricing?: string;
  ai_tool_icon?: string;
  ai_tool_features?: string[];
  ai_tool_about?: string;
  ai_tool_use_cases?: string[];
  ai_tool_downloads?: string;
  ai_tool_last_updated?: string;
  ai_tool_website_url?: string;
}

// WordPress category interface
export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

// WordPress media interface
export interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
  caption: {
    rendered: string;
  };
}

// Cache configuration
const CACHE_DURATION = 15 * 60 * 1000; // 15 minutes - longer cache for better performance
const cache = new Map<string, { data: any; timestamp: number }>();

// Helper function to check cache
function getCachedData(key: string) {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }
  return null;
}

// Helper function to set cache
function setCachedData(key: string, data: any) {
  cache.set(key, { data, timestamp: Date.now() });
}

// Fetch WordPress posts
export async function fetchWordPressPosts(params: {
  per_page?: number;
  page?: number;
  categories?: string;
  search?: string;
  slug?: string;
} = {}): Promise<WordPressPost[]> {
  // Return empty array if WordPress is not configured
  if (!WORDPRESS_CONFIG.apiUrl) {
    console.log('WordPress not configured, returning empty array');
    return [];
  }

  const cacheKey = `posts-${JSON.stringify(params)}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const searchParams = new URLSearchParams();
    
    if (params.per_page) searchParams.append('per_page', params.per_page.toString());
    if (params.page) searchParams.append('page', params.page.toString());
    if (params.categories) searchParams.append('categories', params.categories);
    if (params.search) searchParams.append('search', params.search);
    if (params.slug) searchParams.append('slug', params.slug);

    const url = `${WORDPRESS_CONFIG.apiUrl}/ai-tools?${searchParams.toString()}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const posts: WordPressPost[] = await response.json();
    setCachedData(cacheKey, posts);
    return posts;
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    return [];
  }
}

// Fetch single WordPress post by slug
export async function fetchWordPressPostBySlug(slug: string): Promise<WordPressPost | null> {
  // Return null if WordPress is not configured
  if (!WORDPRESS_CONFIG.apiUrl) {
    return null;
  }

  const cacheKey = `post-${slug}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const posts = await fetchWordPressPosts({ slug, per_page: 1 });
    const post = posts.length > 0 ? posts[0] : null;
    setCachedData(cacheKey, post);
    return post;
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    return null;
  }
}

// Fetch WordPress categories
export async function fetchWordPressCategories(): Promise<WordPressCategory[]> {
  // Return empty array if WordPress is not configured
  if (!WORDPRESS_CONFIG.apiUrl) {
    return [];
  }

  const cacheKey = 'categories';
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${WORDPRESS_CONFIG.apiUrl}/categories`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const categories: WordPressCategory[] = await response.json();
    setCachedData(cacheKey, categories);
    return categories;
  } catch (error) {
    console.error('Error fetching WordPress categories:', error);
    return [];
  }
}

// Fetch WordPress media
export async function fetchWordPressMedia(mediaId: number): Promise<WordPressMedia | null> {
  const cacheKey = `media-${mediaId}`;
  const cached = getCachedData(cacheKey);
  if (cached) return cached;

  try {
    const response = await fetch(`${WORDPRESS_CONFIG.apiUrl}/media/${mediaId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const media: WordPressMedia = await response.json();
    setCachedData(cacheKey, media);
    return media;
  } catch (error) {
    console.error('Error fetching WordPress media:', error);
    return null;
  }
}

// Convert WordPress post to AI Tool format
export function convertWordPressPostToTool(post: WordPressPost): any {
  return {
    id: post.slug,
    name: post.title.rendered.replace(/<[^>]*>/g, ''), // Strip HTML tags
    description: post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 150) + '...',
    category: post.ai_tool_category || 'General',
    icon: post.ai_tool_icon || '🤖',
    featuredImage: post.featured_image_src_large ? post.featured_image_src_large[0] : null,
    downloadUrl: post.ai_tool_download_url || post.link,
    features: post.ai_tool_features || [],
    longDescription: post.ai_tool_about || post.content.rendered,
    useCases: post.ai_tool_use_cases || [],
    pricing: post.ai_tool_pricing || 'Check Website',
    rating: parseFloat(post.ai_tool_rating || '4.0'), // Convert to number
    downloads: parseInt(post.ai_tool_downloads || '0'),
    lastUpdated: post.ai_tool_last_updated || post.modified,
    websiteUrl: post.ai_tool_website_url || post.link,
    wordpressPost: post, // Keep reference to original post
  };
}

// Search WordPress posts
export async function searchWordPressPosts(query: string): Promise<WordPressPost[]> {
  return fetchWordPressPosts({ search: query, per_page: 20 });
}

// Get posts by category
export async function getWordPressPostsByCategory(categorySlug: string): Promise<WordPressPost[]> {
  const categories = await fetchWordPressCategories();
  const category = categories.find(cat => cat.slug === categorySlug);
  
  if (!category) return [];
  
  return fetchWordPressPosts({ categories: category.id.toString(), per_page: 20 });
}
