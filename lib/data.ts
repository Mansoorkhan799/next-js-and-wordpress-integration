export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  featuredImage?: string;
  downloadUrl: string;
  features: string[];
  longDescription: string;
  useCases: string[];
  pricing: string;
  rating: number;
  downloads: number;
  lastUpdated: string;
  websiteUrl?: string;
}

export const aiTools: AITool[] = [
  {
    id: 'chatgpt-desktop',
    name: 'ChatGPT Desktop',
    description: 'Advanced AI chatbot for conversations, coding, and creative tasks',
    category: 'Productivity',
    icon: '💬',
    downloadUrl: 'https://chat.openai.com',
    features: [
      'Natural language conversations',
      'Code generation and debugging',
      'Creative writing assistance',
      'Multi-language support',
      'Context-aware responses'
    ],
    longDescription: 'ChatGPT Desktop is a powerful AI assistant that can help you with a wide range of tasks including writing, coding, analysis, and creative projects. Built on OpenAI\'s advanced language model, it provides intelligent and contextually relevant responses to your queries.',
    useCases: [
      'Content creation and editing',
      'Programming and debugging',
      'Research and analysis',
      'Language learning',
      'Creative brainstorming'
    ],
    pricing: 'Freemium',
    rating: 4.8,
    downloads: 50000000,
    lastUpdated: '2024-01-15'
  },
  {
    id: 'midjourney-art',
    name: 'Midjourney Art Generator',
    description: 'AI-powered image generation tool for creating stunning artwork',
    category: 'Creative',
    icon: '🎨',
    downloadUrl: 'https://midjourney.com',
    features: [
      'Text-to-image generation',
      'High-resolution outputs',
      'Multiple art styles',
      'Batch processing',
      'Commercial usage rights'
    ],
    longDescription: 'Midjourney is a cutting-edge AI art generator that transforms text descriptions into beautiful, high-quality images. Whether you need illustrations, concept art, or creative visuals, Midjourney delivers professional-grade results.',
    useCases: [
      'Digital art creation',
      'Marketing visuals',
      'Concept art',
      'Social media content',
      'Book illustrations'
    ],
    pricing: 'Subscription',
    rating: 4.7,
    downloads: 15000000,
    lastUpdated: '2024-01-10'
  },
  {
    id: 'grammarly-ai',
    name: 'Grammarly AI',
    description: 'AI-powered writing assistant for grammar, style, and clarity',
    category: 'Writing',
    icon: '✍️',
    downloadUrl: 'https://grammarly.com',
    features: [
      'Grammar and spelling check',
      'Style suggestions',
      'Tone detection',
      'Plagiarism detection',
      'Multi-platform integration'
    ],
    longDescription: 'Grammarly AI is an intelligent writing assistant that helps you communicate more effectively. It goes beyond basic grammar checking to provide style suggestions, tone analysis, and clarity improvements.',
    useCases: [
      'Academic writing',
      'Business communications',
      'Creative writing',
      'Email composition',
      'Social media posts'
    ],
    pricing: 'Freemium',
    rating: 4.6,
    downloads: 30000000,
    lastUpdated: '2024-01-12'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI-powered workspace for notes, docs, and project management',
    category: 'Productivity',
    icon: '📝',
    downloadUrl: 'https://notion.so',
    features: [
      'AI writing assistance',
      'Task management',
      'Database organization',
      'Team collaboration',
      'Template library'
    ],
    longDescription: 'Notion AI combines powerful workspace tools with intelligent assistance. Create, organize, and collaborate on projects with AI-powered writing help, smart templates, and seamless team coordination.',
    useCases: [
      'Project management',
      'Knowledge base creation',
      'Team collaboration',
      'Personal organization',
      'Content planning'
    ],
    pricing: 'Freemium',
    rating: 4.5,
    downloads: 20000000,
    lastUpdated: '2024-01-08'
  },
  {
    id: 'canva-magic',
    name: 'Canva Magic Design',
    description: 'AI-powered design tool for creating professional graphics',
    category: 'Design',
    icon: '🎭',
    downloadUrl: 'https://canva.com',
    features: [
      'AI design suggestions',
      'Template library',
      'Brand kit integration',
      'Collaborative editing',
      'Print and digital formats'
    ],
    longDescription: 'Canva Magic Design uses AI to help you create stunning visuals effortlessly. From social media posts to presentations, the AI suggests layouts, colors, and elements that match your content.',
    useCases: [
      'Social media graphics',
      'Presentation design',
      'Marketing materials',
      'Print designs',
      'Brand assets'
    ],
    pricing: 'Freemium',
    rating: 4.4,
    downloads: 100000000,
    lastUpdated: '2024-01-14'
  },
  {
    id: 'hugging-face',
    name: 'Hugging Face Hub',
    description: 'Open-source AI model repository and deployment platform',
    category: 'Development',
    icon: '🤗',
    downloadUrl: 'https://huggingface.co',
    features: [
      'Model repository',
      'Inference API',
      'Model training',
      'Community sharing',
      'Enterprise solutions'
    ],
    longDescription: 'Hugging Face Hub is the leading platform for AI models, datasets, and applications. Access thousands of pre-trained models, deploy them easily, and contribute to the open-source AI community.',
    useCases: [
      'Model deployment',
      'AI research',
      'Prototype development',
      'Enterprise AI solutions',
      'Learning and experimentation'
    ],
    pricing: 'Freemium',
    rating: 4.7,
    downloads: 5000000,
    lastUpdated: '2024-01-11'
  }
];

export const categories = [
  'All',
  'Productivity',
  'Creative',
  'Writing',
  'Design',
  'Development',
  'General'
];
