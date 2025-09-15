import { NextResponse } from 'next/server';
import { WORDPRESS_CONFIG } from '@/lib/wordpress';

export async function GET() {
  try {
    // Test direct WordPress API call
    const url = `${WORDPRESS_CONFIG.apiUrl}/ai-tools?per_page=50&status=publish&_embed=true`;
    console.log('Testing WordPress API:', url);

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({
        success: false,
        error: `WordPress API error: ${response.status}`,
        details: errorText,
        url: url
      }, { status: response.status });
    }

    const posts = await response.json();
    
    return NextResponse.json({
      success: true,
      totalPosts: posts.length,
      posts: posts.map((post: any) => ({
        id: post.id,
        title: post.title.rendered,
        slug: post.slug,
        status: post.status,
        date: post.date,
        modified: post.modified,
        hasContent: !!post.content.rendered,
        contentLength: post.content.rendered?.length || 0
      })),
      url: url
    });
  } catch (error) {
    console.error('WordPress test error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        url: `${WORDPRESS_CONFIG.apiUrl}/ai-tools?per_page=50&status=publish&_embed=true`
      },
      { status: 500 }
    );
  }
}
