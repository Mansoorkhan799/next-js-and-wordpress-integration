import { NextResponse } from 'next/server';
import { WORDPRESS_CONFIG } from '@/lib/wordpress';

export async function GET() {
  try {
    // Check environment variables
    const envCheck = {
      WORDPRESS_URL: process.env.WORDPRESS_URL,
      NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
      WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'Set' : 'Not Set',
      WORDPRESS_PASSWORD: process.env.WORDPRESS_PASSWORD ? 'Set' : 'Not Set',
      NODE_ENV: process.env.NODE_ENV,
    };

    // Test WordPress API connection
    const apiUrl = `${WORDPRESS_CONFIG.baseUrl}/wp-json/wp/v2/ai-tools`;
    console.log('Testing WordPress API:', apiUrl);

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    const isSuccess = response.ok;

    return NextResponse.json({
      success: true,
      environment: envCheck,
      wordpressConfig: {
        baseUrl: WORDPRESS_CONFIG.baseUrl,
        apiUrl: WORDPRESS_CONFIG.apiUrl,
        hasCredentials: !!(WORDPRESS_CONFIG.username && WORDPRESS_CONFIG.password),
      },
      apiTest: {
        url: apiUrl,
        status: response.status,
        success: isSuccess,
        dataLength: Array.isArray(data) ? data.length : 'Not an array',
        error: isSuccess ? null : data,
      },
    });
  } catch (error) {
    console.error('Debug API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error',
        environment: {
          WORDPRESS_URL: process.env.WORDPRESS_URL,
          NEXT_PUBLIC_WORDPRESS_URL: process.env.NEXT_PUBLIC_WORDPRESS_URL,
          WORDPRESS_USERNAME: process.env.WORDPRESS_USERNAME ? 'Set' : 'Not Set',
          WORDPRESS_PASSWORD: process.env.WORDPRESS_PASSWORD ? 'Set' : 'Not Set',
          NODE_ENV: process.env.NODE_ENV,
        }
      },
      { status: 500 }
    );
  }
}
