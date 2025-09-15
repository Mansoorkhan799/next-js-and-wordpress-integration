import { NextRequest, NextResponse } from 'next/server';
import { 
  fetchWordPressPosts, 
  fetchWordPressPostBySlug, 
  fetchWordPressCategories,
  convertWordPressPostToTool 
} from '@/lib/wordpress';

// GET /api/wordpress/posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page') || '1';
    const per_page = searchParams.get('per_page') || '50';
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    const posts = await fetchWordPressPosts({
      page: parseInt(page),
      per_page: parseInt(per_page),
      categories: category || undefined,
      search: search || undefined,
    });

    // Convert WordPress posts to tool format
    const tools = posts.map(convertWordPressPostToTool);

    return NextResponse.json({
      success: true,
      data: tools,
      pagination: {
        page: parseInt(page),
        per_page: parseInt(per_page),
        total: posts.length,
      }
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
