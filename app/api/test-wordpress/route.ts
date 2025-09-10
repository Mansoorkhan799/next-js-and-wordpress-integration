import { NextResponse } from 'next/server';
import { fetchWordPressPosts, convertWordPressPostToTool } from '@/lib/wordpress';

export async function GET() {
  try {
    console.log('Testing WordPress connection from API route...');
    console.log('WORDPRESS_URL:', process.env.WORDPRESS_URL);
    console.log('WORDPRESS_USERNAME:', process.env.WORDPRESS_USERNAME ? 'Set' : 'Not set');
    console.log('WORDPRESS_PASSWORD:', process.env.WORDPRESS_PASSWORD ? 'Set' : 'Not set');
    
    const wordpressPosts = await fetchWordPressPosts();
    console.log('WordPress posts fetched:', wordpressPosts.length);
    
    const convertedTools = wordpressPosts.map(convertWordPressPostToTool);
    
    return NextResponse.json({
      success: true,
      environment: {
        WORDPRESS_URL: process.env.WORDPRESS_URL || 'Not set',
        WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'Set' : 'Not set',
        WORDPRESS_PASSWORD: process.env.WORDPRESS_PASSWORD ? 'Set' : 'Not set',
      },
      postsCount: wordpressPosts.length,
      posts: convertedTools,
      rawWordPressPosts: wordpressPosts
    });
  } catch (error) {
    console.error('WordPress test error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      environment: {
        WORDPRESS_URL: process.env.WORDPRESS_URL || 'Not set',
        WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'Set' : 'Not set',
        WORDPRESS_PASSWORD: process.env.WORDPRESS_PASSWORD ? 'Set' : 'Not set',
      }
    }, { status: 500 });
  }
}
