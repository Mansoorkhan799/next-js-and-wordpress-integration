import { NextRequest, NextResponse } from 'next/server';
import { fetchWordPressPostBySlug } from '@/lib/wordpress';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug') || 'cursor';
    
    const post = await fetchWordPressPostBySlug(slug);
    
    if (!post) {
      return NextResponse.json({
        success: false,
        error: 'Post not found',
        slug: slug
      });
    }

    return NextResponse.json({
      success: true,
      post: {
        id: post.id,
        slug: post.slug,
        title: post.title.rendered,
        content: post.content.rendered,
        contentLength: post.content.rendered.length,
        excerpt: post.excerpt.rendered,
        excerptLength: post.excerpt.rendered.length,
        status: post.status,
        modified: post.modified,
        customFields: {
          ai_tool_about: post.ai_tool_about,
          ai_tool_category: post.ai_tool_category,
          ai_tool_rating: post.ai_tool_rating,
          ai_tool_pricing: post.ai_tool_pricing,
          ai_tool_features: post.ai_tool_features,
          ai_tool_use_cases: post.ai_tool_use_cases,
          ai_tool_download_url: post.ai_tool_download_url,
          ai_tool_website_url: post.ai_tool_website_url,
          ai_tool_downloads: post.ai_tool_downloads,
          ai_tool_last_updated: post.ai_tool_last_updated,
          ai_tool_icon: post.ai_tool_icon
        }
      }
    });
  } catch (error) {
    console.error('Test WordPress Content API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch WordPress content' },
      { status: 500 }
    );
  }
}
