import { CourseModule, AITool, JobOpening, BlogPost } from '../types';

export const COURSE_MODULES: CourseModule[] = [
  {
    id: 'dm-fundamentals',
    name: 'Digital Marketing Fundamentals',
    shortDesc: 'Understand core marketing frameworks, consumer personas, inbound funnels, and brand positioning strategies.',
    iconName: 'LayoutGrid',
    duration: 'Week 1-2',
    topics: [
      'Marketing Fundamentals & Market Research',
      'Target Audience Segmentation & Buyer Persona Creation',
      'Inbound vs Outbound Marketing Dynamics',
      'Customer Journey Mapping & Conversion Funnels',
      'Brand Positioning & Digital Value Proposition'
    ],
    toolsCovered: ['Google Trends', 'AnswerThePublic', 'Miro', 'HubSpot Frameworks'],
    practicalAssignment: 'Create a comprehensive digital marketing strategy & customer persona for a local business in New Delhi.'
  },
  {
    id: 'seo',
    name: 'SEO (Search Engine Optimization)',
    shortDesc: 'Master On-Page, Off-Page, Technical SEO, keyword research, and AI-driven content clustering to rank #1.',
    iconName: 'Search',
    duration: 'Week 3-4',
    topics: [
      'Search Engine Architecture & Crawling/Indexing',
      'Keyword Research, Search Intent & Competitor Gap Analysis',
      'On-Page Optimization: Title, Meta, Headers, Schema markup',
      'Technical SEO: Core Web Vitals, Sitemaps, Robots.txt, Mobile First',
      'Link Building Strategies & Local SEO for Google Business Profile'
    ],
    toolsCovered: ['Google Search Console', 'Ahrefs / Semrush', 'Screaming Frog', 'Yoast SEO', 'RankMath'],
    practicalAssignment: 'Conduct a live Technical & Content SEO audit of a live website and fix top 10 on-page errors.'
  },
  {
    id: 'wordpress',
    name: 'WordPress Website Creation',
    shortDesc: 'Build conversion-optimized, responsive websites and landing pages with zero coding required.',
    iconName: 'Globe',
    duration: 'Week 5',
    topics: [
      'Domain, Hosting Setup & DNS Configuration',
      'WordPress CMS Architecture & Theme Selection',
      'Visual Page Building with Elementor & Gutenberg',
      'Essential Plugins for Security, Speed, and SEO',
      'Lead Generation Forms, CTA Optimization & Tracking Integration'
    ],
    toolsCovered: ['WordPress.org', 'Elementor', 'WP Rocket', 'Contact Form 7', 'Cloudflare'],
    practicalAssignment: 'Build a multi-page business website with responsive mobile layout, lead capture form, and live SSL.'
  },
  {
    id: 'google-ads',
    name: 'Google Ads (PPC Advertising)',
    shortDesc: 'Create high-ROI Search, Display, Video, and Performance Max campaigns with smart bidding.',
    iconName: 'Target',
    duration: 'Week 6-7',
    topics: [
      'Google Ads Auction Model & Quality Score Mastery',
      'Search Campaign Architecture & Match Types Strategy',
      'Display Ads, Discovery & YouTube Video Ads',
      'Performance Max (PMax) Campaigns & Smart Bidding Strategies',
      'Negative Keywords, Ad Extensions & Conversion Tracking Setup'
    ],
    toolsCovered: ['Google Ads Manager', 'Keyword Planner', 'Google Tag Manager', 'Conversion Linker'],
    practicalAssignment: 'Structure a live Google Search & Performance Max campaign with budget allocation and negative keyword lists.'
  },
  {
    id: 'meta-ads',
    name: 'Meta Ads (Facebook & Instagram)',
    shortDesc: 'Run profitable paid campaigns with custom audiences, lookalikes, Meta Pixel, and CAPI tracking.',
    iconName: 'Share2',
    duration: 'Week 8-9',
    topics: [
      'Meta Business Suite & Ads Manager Setup',
      'Campaign Objectives: Awareness, Traffic, Leads & Sales',
      'Audience Targeting: Core, Custom & Lookalike Audiences',
      'Ad Creative Strategy: Reels, Carousels & Video Ads',
      'Meta Pixel Installation, Conversions API (CAPI) & Retargeting'
    ],
    toolsCovered: ['Meta Ads Manager', 'Events Manager', 'Meta Business Suite', 'Canva Pro'],
    practicalAssignment: 'Design and configure a full-funnel Meta Ad campaign with top-of-funnel reach and retargeting ads.'
  },
  {
    id: 'social-media',
    name: 'Social Media Marketing',
    shortDesc: 'Develop organic growth strategies, content calendars, community management, and influencer outreach.',
    iconName: 'Megaphone',
    duration: 'Week 10',
    topics: [
      'Algorithm Secrets of Instagram, LinkedIn, YouTube & X',
      'Content Pillar Strategy & Editorial Calendar Planning',
      'Organic Engagement Tactics & Community Building',
      'Short-Form Video Production (Reels, Shorts)',
      'Influencer Collaboration & Brand Reputation Management'
    ],
    toolsCovered: ['Buffer', 'Hootsuite', 'Meta Creator Studio', 'CapCut'],
    practicalAssignment: 'Develop a 30-day organic multi-platform content calendar with copy, visual briefs, and KPI benchmarks.'
  },
  {
    id: 'canva-design',
    name: 'Canva & Graphic Design',
    shortDesc: 'Design high-converting marketing creatives, social assets, ad banners, and infographics effortlessly.',
    iconName: 'Palette',
    duration: 'Week 11',
    topics: [
      'Visual Hierarchy, Color Psychology & Typography in Ads',
      'Designing High-CTR Social Media Posts & Stories',
      'Google Display Banners & YouTube Thumbnail Design',
      'Brand Kit Creation: Logos, Color Palettes & Font Sets',
      'Canva AI Features: Magic Studio, Background Removal & Resizing'
    ],
    toolsCovered: ['Canva Pro', 'Canva Magic Studio', 'Figma Basics', 'Coolors'],
    practicalAssignment: 'Create a complete brand design kit and 5 high-converting ad creatives across multiple aspect ratios.'
  },
  {
    id: 'analytics',
    name: 'Analytics & Reporting',
    shortDesc: 'Track user behavior, measure ROI, and build interactive dashboards using GA4 and Google Looker Studio.',
    iconName: 'BarChart3',
    duration: 'Week 12',
    topics: [
      'Google Analytics 4 (GA4) Account Structure & Data Streams',
      'Event Tracking, User Properties & Custom Dimensions',
      'E-commerce Purchase Funnels & Cohort Analysis',
      'UTM Parameter Campaign Tagging & Multi-Channel Attribution',
      'Building Interactive Client Dashboards with Looker Studio'
    ],
    toolsCovered: ['Google Analytics 4', 'Google Tag Manager', 'Looker Studio', 'Microsoft Clarity'],
    practicalAssignment: 'Build an automated Looker Studio dashboard tracking traffic, leads, bounce rate, and channel ROI.'
  },
  {
    id: 'ai-tools',
    name: 'AI Tools for Marketers',
    shortDesc: 'Supercharge workflows using ChatGPT, Claude, Midjourney, and prompt engineering for marketing.',
    iconName: 'Bot',
    duration: 'Week 13',
    topics: [
      'Advanced Prompt Engineering for Copywriting & Research',
      'AI for Content Scaling: Articles, Ad Copy, Email Sequences',
      'AI Image Generation for Marketing Creatives (Midjourney/Canva)',
      'Competitor & Market Research with Perplexity AI',
      'Custom GPTs & AI Assistants for Daily Marketing Tasks'
    ],
    toolsCovered: ['ChatGPT Plus', 'Claude 3.5', 'Midjourney', 'Perplexity AI', 'Jasper', 'Copy.ai'],
    practicalAssignment: 'Create an end-to-end AI-assisted marketing campaign: research, copy generation, and visual prompt library.'
  },
  {
    id: 'automation',
    name: 'Marketing Automation',
    shortDesc: 'Connect marketing tools, set up automated email sequences, and streamline lead qualification.',
    iconName: 'Cpu',
    duration: 'Week 14',
    topics: [
      'Lead Nurturing Workflows & Drip Email Sequences',
      'Setting Up Webhooks & Multi-Step Zapier Automations',
      'CRM Integration: Pushing Leads from Ads to Sales Pipeline',
      'Automated WhatsApp & SMS Notifications for Inquiries',
      'Automated Reporting & Client Notification Systems'
    ],
    toolsCovered: ['Zapier', 'Make.com', 'Mailchimp / Brevo', 'HubSpot CRM'],
    practicalAssignment: 'Build a multi-app Zapier automation routing Facebook Lead Ad submissions to a CRM and WhatsApp alert.'
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Marketing',
    shortDesc: 'Scale online stores with Shopify, catalog ads, marketplace strategies, and retention workflows.',
    iconName: 'ShoppingBag',
    duration: 'Week 15',
    topics: [
      'Shopify Store Setup, Product Pages & Checkout Optimization',
      'Google Merchant Center & Google Shopping Ads',
      'Meta Catalog Ads & Dynamic Product Ads (DPA)',
      'Cart Abandonment Recovery via Automated Emails & WhatsApp',
      'Customer Lifetime Value (CLV) & Upsell Strategies'
    ],
    toolsCovered: ['Shopify', 'Google Merchant Center', 'Klaviyo', 'Shiprocket Ecosystem'],
    practicalAssignment: 'Configure a mock Shopify store with synchronized product catalog and automated abandoned cart recovery.'
  },
  {
    id: 'practical-projects',
    name: 'Live Practical Projects & Portfolio',
    shortDesc: 'Execute real-world client briefs, build an industry portfolio, and present end-to-end campaign results.',
    iconName: 'Briefcase',
    duration: 'Week 16',
    topics: [
      'Working on Live Industry Project Briefs',
      'Budget Management & Live Ad Spend Experience',
      'Building a Professional Digital Marketing Portfolio',
      'Client Presentation, Pitch Decks & Freelance Proposal Writing',
      'Resume Review, Mock Interviews & Career Mentorship'
    ],
    toolsCovered: ['Google Slides', 'Notion', 'Loom', 'LinkedIn Professional'],
    practicalAssignment: 'Final capstone presentation: Execute and present a comprehensive 360-degree marketing campaign with verified results.'
  }
];

export const AI_TOOLS: AITool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'Content & Strategy',
    description: 'Prompt engineering for market research, ad copy variations, and strategy ideation.',
    iconType: 'sparkles',
    badge: 'Industry Standard'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    category: 'Long-Form Copy',
    description: 'Nuanced brand tone writing, technical marketing documentation, and data analysis.',
    iconType: 'file-text',
    badge: 'Advanced Logic'
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Visual Generation',
    description: 'Photorealistic commercial visual concepts and tailored advertising creative assets.',
    iconType: 'image',
    badge: 'Creative Visuals'
  },
  {
    id: 'canva-ai',
    name: 'Canva Magic Studio',
    category: 'Graphic Design',
    description: 'AI-assisted banner generation, background expansion, and multilingual ad variations.',
    iconType: 'palette',
    badge: 'Design Suite'
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    category: 'Market Research',
    description: 'Real-time source-cited competitive intelligence, search trends, and market discovery.',
    iconType: 'search',
    badge: 'Research'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    category: 'Multimodal AI',
    description: 'Multimodal analysis of video, text, and marketing assets integrated with Google tools.',
    iconType: 'cpu',
    badge: 'Multimodal'
  },
  {
    id: 'jasper',
    name: 'Jasper AI',
    category: 'Marketing Copy',
    description: 'Enterprise marketing copy generation with built-in brand voice and campaign workflows.',
    iconType: 'pen-tool',
    badge: 'Marketing Copy'
  },
  {
    id: 'copyai',
    name: 'Copy.ai',
    category: 'Sales & Social',
    description: 'Automated social media caption generation, email outlines, and product descriptions.',
    iconType: 'message-square',
    badge: 'Workflows'
  },
  {
    id: 'semrush-ai',
    name: 'Semrush AI',
    category: 'SEO Optimization',
    description: 'AI content analysis, search intent clustering, and SERP competitive gap analysis.',
    iconType: 'trending-up',
    badge: 'SEO & Search'
  },
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    category: 'On-Page SEO',
    description: 'AI-driven content optimization based on real-time NLP keywords and SERP correlations.',
    iconType: 'layers',
    badge: 'Content Score'
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    category: 'Automation',
    description: 'Natural language workflow automation linking lead capture to CRM and communication channels.',
    iconType: 'zap',
    badge: 'Automation'
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    category: 'Project Management',
    description: 'Marketing project organization, sprint planning, and content calendar management.',
    iconType: 'check-square',
    badge: 'Productivity'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: 'experienced-trainers',
    title: 'Experienced Trainers',
    description: 'Learn directly from trainers who manage real client campaigns and bring practical industry experience to every classroom session.',
    icon: 'GraduationCap'
  },
  {
    id: 'practical-learning',
    title: 'Practical Learning',
    description: 'Focus on hands-on learning with live tools and daily assignments instead of theoretical lectures.',
    icon: 'Laptop'
  },
  {
    id: 'industry-projects',
    title: 'Industry Projects',
    description: 'Build real-world projects, manage sample ad budgets, and create a solid portfolio you can showcase to employers and clients.',
    icon: 'FolderKanban'
  },
  {
    id: 'placement-support',
    title: 'Placement Support',
    description: 'Receive dedicated guidance, resume reviews, interview preparation, and mentorship for digital marketing career opportunities.',
    icon: 'Users'
  }
];

export const JOB_LISTINGS: JobOpening[] = [
  {
    id: 'job-1',
    title: 'Digital Marketing Executive',
    roleType: 'Full-Time',
    location: 'New Delhi / NCR',
    experienceLevel: 'Fresher to 1 Year',
    keySkills: ['SEO', 'Google Ads', 'Meta Ads', 'Social Media', 'Canva'],
    isPlaceholder: false
  },
  {
    id: 'job-2',
    title: 'Performance Marketing Associate',
    roleType: 'Full-Time',
    location: 'New Delhi / Hybrid',
    experienceLevel: '0 - 2 Years',
    keySkills: ['Meta Ads Manager', 'Google Search Ads', 'GA4', 'A/B Testing'],
    isPlaceholder: false
  },
  {
    id: 'job-3',
    title: 'SEO & Content Specialist',
    roleType: 'Full-Time / Remote',
    location: 'New Delhi / Remote',
    experienceLevel: 'Fresher to 2 Years',
    keySkills: ['Keyword Research', 'On-Page SEO', 'Technical Audits', 'ChatGPT Prompting'],
    isPlaceholder: false
  },
  {
    id: 'job-4',
    title: 'Social Media & Brand Coordinator',
    roleType: 'Full-Time',
    location: 'New Delhi',
    experienceLevel: 'Fresher / Entry-Level',
    keySkills: ['Content Calendar', 'Reels Production', 'Canva', 'Community Management'],
    isPlaceholder: false
  },
  {
    id: 'job-placeholder-1',
    title: 'Job opportunity will be added here.',
    roleType: 'Upcoming Opportunity',
    location: 'New Delhi / Partner Network',
    experienceLevel: 'Career Network',
    keySkills: ['Digital Marketing', 'AI Tools', 'Campaign Execution'],
    isPlaceholder: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How Generative AI is Reshaping Search Engine Optimization (SEO)',
    slug: 'ai-reshaping-seo',
    category: 'SEO & AI',
    readTime: '5 min read',
    date: 'August 2025',
    summary: 'Discover how Google’s AI Overviews and NLP search models are shifting the focus from simple keyword stuffing to topical authority and user intent.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    content: [
      'Search Engine Optimization is experiencing its most significant transformation in a decade. With the widespread adoption of AI Overviews, search engines now synthesize answers from multiple authoritative web pages in real-time.',
      'To succeed in modern SEO, marketers must transition from repetitive keyword repetition to comprehensive topical coverage and first-hand experience (E-E-A-T). Search engines prioritize content that directly answers search intent while demonstrating genuine subject matter expertise.',
      'At CBM Academy, our curriculum focuses on modern On-Page structure, schema markup, Core Web Vitals, and leveraging AI tools to accelerate keyword clustering without compromising content quality or originality.'
    ],
    keyTakeaways: [
      'Focus on topical authority and user intent over legacy keyword density.',
      'Optimize technical foundations: page speed, mobile responsiveness, and schema markup.',
      'Use AI tools to augment research and structure, keeping insights authentic.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Framework for Running High-ROAS Paid Ads on Meta and Google',
    slug: 'high-roas-paid-ads-framework',
    category: 'Performance Marketing',
    readTime: '6 min read',
    date: 'August 2025',
    summary: 'A step-by-step breakdown of how modern digital marketers structure full-funnel ad campaigns to generate qualified leads and measurable sales.',
    imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    content: [
      'Running profitable digital advertising campaigns requires more than just boosting posts. A successful ad strategy integrates accurate conversion tracking, compelling creative messaging, and continuous split testing.',
      'Step 1 begins with foundational tracking setup: implementing the Meta Conversions API (CAPI) and Google Tag Manager to ensure complete attribution across devices.',
      'Step 2 involves creating a multi-format creative pipeline. Video reels, benefit carousels, and high-contrast single images allow the algorithm to match the right format with user browsing behavior.',
      'Step 3 focuses on smart bidding and budget management. Understanding when to use Target CPA vs Maximize Conversions ensures ad spend is deployed effectively.'
    ],
    keyTakeaways: [
      'Never run ads without verified server-side and client-side conversion tracking.',
      'Ad creative is the primary targeting lever on modern social ad platforms.',
      'Structure campaigns into clear awareness, consideration, and retargeting tiers.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Essential AI Workflows Every Digital Marketer Must Master',
    slug: 'essential-ai-marketing-workflows',
    category: 'AI Marketing',
    readTime: '4 min read',
    date: 'July 2025',
    summary: 'Practical workflows using ChatGPT, Claude, and automation tools to cut marketing task time in half while improving campaign quality.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    content: [
      'AI in digital marketing is not about replacing human creativity; it is about eliminating repetitive operational friction so marketers can focus on high-impact strategic decisions.',
      'A practical AI workflow starts with audience research: using tools like Perplexity to summarize competitor ad angles and customer pain points in minutes.',
      'Next, AI assists in drafting multiple variations of ad copy, email subject lines, and social captions, allowing rapid A/B testing of messaging hooks.',
      'Finally, connecting AI with automation platforms like Zapier enables automated lead triage, routing prospects directly into CRM pipelines with personalized follow-ups.'
    ],
    keyTakeaways: [
      'Use AI for high-velocity iteration and brainstorming ad angles.',
      'Maintain strict human editorial review for brand voice consistency.',
      'Integrate AI prompt workflows directly with daily task management tools.'
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Who is the Pro Digital Marketing Course designed for?',
    answer: 'The course is tailored for students, freshers, freelancers, business owners, and working professionals looking to build practical, job-ready skills in digital marketing and modern AI tools.'
  },
  {
    question: 'Is prior technical or coding experience required?',
    answer: 'No prior coding knowledge is required. The curriculum covers website building using WordPress and no-code builders, user-friendly marketing platforms, and practical AI tools step-by-step.'
  },
  {
    question: 'How are AI tools integrated into the curriculum?',
    answer: 'Rather than treating AI as a standalone theory, we integrate tools like ChatGPT, Midjourney, Claude, Canva Magic Studio, and Semrush AI into real marketing tasks like SEO research, ad copywriting, design, and automation.'
  },
  {
    question: 'What kind of practical projects will I build?',
    answer: 'You will build live projects including setting up a WordPress website, running mock and live ad campaigns on Meta and Google, conducting full SEO audits, and building automated Looker Studio analytics dashboards.'
  },
  {
    question: 'Where is CBM Academy located?',
    answer: 'CBM Academy is based in New Delhi, offering focused training with dedicated classroom interaction, hands-on guidance, and career mentorship.'
  }
];
