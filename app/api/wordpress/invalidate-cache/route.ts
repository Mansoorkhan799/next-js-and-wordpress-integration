import { NextRequest, NextResponse } from 'next/server';
import { clearWordPressCache, clearWordPressCacheEntry } from '@/lib/wordpress';

// POST /api/wordpress/invalidate-cache
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, postId, slug } = body;

    if (action === 'clear_all') {
      clearWordPressCache();
      return NextResponse.json({ 
        success: true, 
        message: 'All WordPress cache cleared' 
      });
    }

    if (action === 'clear_post' && (postId || slug)) {
      // Clear specific post cache entries
      if (postId) {
        clearWordPressCacheEntry(`post-${postId}`);
      }
      if (slug) {
        clearWordPressCacheEntry(`post-${slug}`);
      }
      // Clear posts list cache
      clearWordPressCacheEntry('posts-{}');
      
      return NextResponse.json({ 
        success: true, 
        message: `Cache cleared for post: ${postId || slug}` 
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action or missing parameters' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Cache invalidation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to invalidate cache' },
      { status: 500 }
    );
  }
}

// GET /api/wordpress/invalidate-cache - for manual cache clearing
export async function GET() {
  try {
    clearWordPressCache();
    return NextResponse.json({ 
      success: true, 
      message: 'WordPress cache cleared manually' 
    });
  } catch (error) {
    console.error('Cache invalidation error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to clear cache' },
      { status: 500 }
    );
  }
}
