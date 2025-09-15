import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { aiTools } from '@/lib/data';
import { fetchWordPressPostBySlug, convertWordPressPostToTool, fetchWordPressPosts } from '@/lib/wordpress';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ToolDetail from '@/components/ToolDetail';

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // First try to get from WordPress
  const wordpressPost = await fetchWordPressPostBySlug(params.id);
  
  if (wordpressPost) {
    const tool = convertWordPressPostToTool(wordpressPost);
    return {
      title: `${tool.name} - AI Tool | AI Tools Platform`,
      description: tool.description,
      keywords: `${tool.name}, ${tool.category}, AI tool, ${tool.features.join(', ')}`,
      openGraph: {
        title: `${tool.name} - AI Tool`,
        description: tool.description,
        images: [`/tools/${tool.id}/og-image.jpg`],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${tool.name} - AI Tool`,
        description: tool.description,
        images: [`/tools/${tool.id}/og-image.jpg`],
      },
    };
  }

  // Fallback to static data
  const tool = aiTools.find(t => t.id === params.id);
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
    };
  }

  return {
    title: `${tool.name} - AI Tool | AI Tools Platform`,
    description: tool.longDescription,
    keywords: `${tool.name}, ${tool.category}, AI tool, ${tool.features.join(', ')}`,
    openGraph: {
      title: `${tool.name} - AI Tool`,
      description: tool.longDescription,
      images: [`/tools/${tool.id}/og-image.jpg`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} - AI Tool`,
      description: tool.longDescription,
      images: [`/tools/${tool.id}/og-image.jpg`],
    },
  };
}

export async function generateStaticParams() {
  // Generate static params for both WordPress posts and static tools
  const wordpressPosts = await fetchWordPressPosts({ per_page: 100 });
  const wordpressSlugs = wordpressPosts.map(post => ({ id: post.slug }));
  const staticSlugs = aiTools.map((tool) => ({ id: tool.id }));
  
  return [...wordpressSlugs, ...staticSlugs];
}

export default async function ToolPage({ params }: PageProps) {
  // First try to get from WordPress
  const wordpressPost = await fetchWordPressPostBySlug(params.id);
  
  if (wordpressPost) {
    const tool = convertWordPressPostToTool(wordpressPost);
    // Add the original WordPress post data to the tool object
    const toolWithWordPressData = { ...tool, wordpressPost };
    return (
      <div className="min-h-screen bg-github-dark">
        <Header />
        <main>
          <ToolDetail tool={toolWithWordPressData} isWordPress={true} />
        </main>
        <Footer />
      </div>
    );
  }

  // Fallback to static data
  const tool = aiTools.find(t => t.id === params.id);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-github-dark">
      <Header />
      <main>
        <ToolDetail tool={tool} isWordPress={false} />
      </main>
      <Footer />
    </div>
  );
}
