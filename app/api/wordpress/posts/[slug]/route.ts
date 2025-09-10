import { NextRequest, NextResponse } from 'next/server';
import { fetchWordPressPostBySlug, convertWordPressPostToTool } from '@/lib/wordpress';

// GET /api/wordpress/posts/[slug]
export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: 'Slug is required' },
        { status: 400 }
      );
    }

    const post = await fetchWordPressPostBySlug(slug);

    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Post not found' },
        { status: 404 }
      );
    }

    // Convert WordPress post to tool format
    const tool = convertWordPressPostToTool(post);

    return NextResponse.json({
      success: true,
      data: tool
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch post' },
      { status: 500 }
    );
  }
}
