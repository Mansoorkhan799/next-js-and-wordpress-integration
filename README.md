# AI Tools Platform

A modern, SEO-optimized Next.js website for discovering and downloading AI tools. Built with a GitHub-inspired design and comprehensive SEO features.

## Features

- 🚀 **Next.js 14** with App Router for optimal performance
- 🎨 **GitHub-inspired Design** with dark theme and modern UI
- 🔍 **SEO Optimized** with metadata, sitemap, and structured data
- 📱 **Responsive Design** that works on all devices
- ⚡ **Fast Performance** with optimized images and code splitting
- 🛠️ **TypeScript** for type safety and better development experience
- 🎯 **Dynamic Routing** for individual tool pages
- 📊 **Search & Filter** functionality for easy tool discovery

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ai-tools-platform
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap generation
│   ├── about/             # About page
│   ├── categories/        # Categories page
│   └── tools/             # Tools pages
│       ├── page.tsx       # All tools page
│       └── [id]/          # Dynamic tool pages
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── ToolGrid.tsx       # Tools grid component
│   ├── ToolDetail.tsx     # Individual tool page
│   ├── AllToolsGrid.tsx   # All tools grid
│   ├── CategoryGrid.tsx   # Categories grid
│   └── Footer.tsx         # Footer component
├── lib/                   # Utilities and data
│   └── data.ts           # AI tools data
└── public/               # Static assets
```

## SEO Features

- **Metadata Optimization**: Comprehensive meta tags for all pages
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Structured Data**: JSON-LD schema markup
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Semantic HTML**: Proper heading hierarchy and semantic elements

## Customization

### Adding New Tools

1. Edit `lib/data.ts` to add new tools to the `aiTools` array
2. Each tool should have all required properties (id, name, description, etc.)
3. The tool will automatically appear on the website

### Styling

- Uses Tailwind CSS for styling
- Custom GitHub-inspired color scheme in `tailwind.config.js`
- Component-specific styles in `app/globals.css`

### SEO Configuration

- Update metadata in `app/layout.tsx` for global SEO settings
- Individual page metadata in respective page files
- Update `app/sitemap.ts` for sitemap configuration

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for better performance
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please open an issue on GitHub.
