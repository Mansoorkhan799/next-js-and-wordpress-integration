import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test direct WordPress API access
    const wordpressUrl = 'https://goldenteenpatti.com';
    const apiUrl = `${wordpressUrl}/wp-json/wp/v2/ai-tools`;
    
    console.log('Testing WordPress API:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Next.js App',
      },
    });

    const data = await response.json();
    
    return NextResponse.json({
      success: true,
      test: {
        url: apiUrl,
        status: response.status,
        ok: response.ok,
        dataLength: Array.isArray(data) ? data.length : 'Not an array',
        data: data,
        headers: Object.fromEntries(response.headers.entries()),
      },
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        WORDPRESS_URL: process.env.WORDPRESS_URL,
        NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
      }
    });
  } catch (error) {
    console.error('WordPress API Test Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
