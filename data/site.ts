import {
  BadgeCheck,
  Bot,
  Boxes,
  Braces,
  ChartNoAxesCombined,
  Clapperboard,
  CodeXml,
  DraftingCompass,
  GalleryVerticalEnd,
  Globe2,
  Layers3,
  Megaphone,
  MousePointerClick,
  Palette,
  PenTool,
  Rocket,
  SearchCheck,
  Share2,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";

export const siteConfig = {
  name: "DiGi Trend",
  tagline: "Digital. Smart. Trending.",
  description:
    "DiGi Trend is a branding and digital growth agency in Rajkot helping businesses grow through strategy, design, websites, marketing and technology.",
  url: "https://www.digi-trend.com",
  phone: "+919428163116",
  phoneDisplay: "94281 63116",
  whatsapp: "https://wa.me/919428163116",
  email: "hello@digi-trend.com",
  instagram: "https://www.instagram.com/digi_trend_rajkot",
  location: "Rajkot, Gujarat, India",
  address: {
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
};

export const serviceGroups = [
  {
    title: "Brand Foundation",
    items: ["Logo Design", "Brand Identity", "Brand Guidelines", "Business Profile Design", "Packaging Design"],
  },
  {
    title: "Digital Presence",
    items: ["Website Development", "UI/UX Design", "Landing Pages", "E-commerce Website", "Mobile App UI"],
  },
  {
    title: "Growth Marketing",
    items: ["Social Media Management", "Digital Marketing", "Meta Ads", "Google Ads", "Content Strategy"],
  },
  {
    title: "Technology & Automation",
    items: ["ERP Software", "CRM Solutions", "Business Automation", "Custom Software", "Dashboard Development"],
  },
  {
    title: "Creative Media",
    items: ["CGI Videos", "Motion Graphics", "Reel Editing", "Product Videos", "Ad Creatives"],
  },
];

export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Websites",
    icon: CodeXml,
    summary: "Modern, responsive and conversion-focused websites built to make your business look credible and generate inquiries.",
    hero: "Websites that make your business look established — and move visitors to act.",
    problem: "A slow, dated or confusing website quietly costs your business trust, inquiries and sales.",
    keywords: ["website development in Rajkot", "business website design", "Next.js website development"],
    deliverables: ["Strategic sitemap", "Responsive UI design", "Next.js development", "WhatsApp and inquiry journeys", "On-page SEO setup", "Performance optimization"],
    benefits: ["Professional first impression", "More qualified inquiries", "Fast mobile experience", "Search-ready structure"],
  },
  {
    slug: "logo-brand-identity",
    title: "Logo & Brand Identity",
    shortTitle: "Branding",
    icon: PenTool,
    summary: "A distinctive visual identity system that makes your business trustworthy, memorable and consistent everywhere.",
    hero: "Build a brand people remember, trust and recognize instantly.",
    problem: "A random logo without strategy cannot communicate your value or create a consistent professional image.",
    keywords: ["logo design agency Rajkot", "brand identity design", "branding agency in Rajkot"],
    deliverables: ["Brand discovery", "Logo system", "Color and typography system", "Visual language", "Brand guidelines", "Social profile kit"],
    benefits: ["Stronger recognition", "Consistent brand presence", "Premium market positioning", "Clear visual direction"],
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    shortTitle: "Social Media",
    icon: Share2,
    summary: "Strategy, creative posts, reels and monthly planning that keep your brand active, relevant and consistent.",
    hero: "Turn random posting into a consistent social brand people notice.",
    problem: "Inconsistent visuals and unplanned content make good businesses look inactive or unreliable online.",
    keywords: ["social media marketing Rajkot", "Instagram management Rajkot", "social media agency"],
    deliverables: ["Monthly content strategy", "Branded creative posts", "Reel concepts and covers", "Captions and hashtags", "Content calendar", "Monthly performance review"],
    benefits: ["Consistent online presence", "Better audience recall", "Higher engagement quality", "Clear monthly direction"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    icon: Megaphone,
    summary: "Integrated digital campaigns that connect your offer with the right audience and create measurable business growth.",
    hero: "Marketing that connects attention to real business outcomes.",
    problem: "Running disconnected campaigns without positioning, funnels or measurement wastes budget and creates weak leads.",
    keywords: ["digital marketing agency in Rajkot", "online marketing services", "lead generation Rajkot"],
    deliverables: ["Market and audience research", "Campaign strategy", "Landing page direction", "Content funnel", "Tracking plan", "Monthly optimization"],
    benefits: ["Clear growth strategy", "Better lead quality", "Connected customer journey", "Measurable improvements"],
  },
  {
    slug: "erp-software-solutions",
    title: "ERP & Software Solutions",
    shortTitle: "ERP Software",
    icon: Boxes,
    summary: "Custom ERP, CRM and dashboards that simplify operations and give teams clear control over everyday work.",
    hero: "Replace scattered work with one clear digital operating system.",
    problem: "Spreadsheets, repeated data entry and disconnected tools create errors, delays and poor visibility.",
    keywords: ["ERP software development Rajkot", "custom CRM development", "business dashboard development"],
    deliverables: ["Process discovery", "System architecture", "Role-based dashboards", "Workflow modules", "Reporting interface", "User training documentation"],
    benefits: ["Reduced manual work", "Better operational visibility", "Fewer avoidable errors", "Scalable processes"],
  },
  {
    slug: "cgi-videos",
    title: "CGI Videos & Motion Creatives",
    shortTitle: "CGI Videos",
    icon: Clapperboard,
    summary: "High-impact product visuals, CGI scenes and motion content designed to stop attention and explain value quickly.",
    hero: "Show products in ways traditional shoots cannot.",
    problem: "Static or ordinary visuals struggle to stand out in crowded feeds and competitive product categories.",
    keywords: ["CGI video agency India", "3D product animation", "motion graphics agency"],
    deliverables: ["Creative concept", "Storyboard", "3D scene direction", "Animation and motion", "Sound design direction", "Platform-ready exports"],
    benefits: ["Higher visual impact", "Flexible product storytelling", "Premium campaign assets", "Better content recall"],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortTitle: "Paid Growth",
    icon: Target,
    summary: "Meta and Google campaigns built around sharper offers, better creatives, tracking and continuous optimization.",
    hero: "Paid campaigns designed to learn fast and improve continuously.",
    problem: "Boosting posts or running ads without a tested message, landing journey and tracking leads to expensive results.",
    keywords: ["performance marketing Rajkot", "Meta ads agency", "Google ads management"],
    deliverables: ["Offer and funnel review", "Campaign structure", "Ad creative direction", "Audience testing", "Conversion tracking", "Optimization reports"],
    benefits: ["Smarter budget use", "Improved conversion path", "Actionable campaign data", "Scalable acquisition"],
  },
  {
    slug: "creative-design",
    title: "Creative Design",
    shortTitle: "Creative Design",
    icon: Palette,
    summary: "Campaign creatives, brochures, packaging and visual communication designed with both aesthetics and business purpose.",
    hero: "Creative communication that looks distinctive and stays on-brand.",
    problem: "Generic design weakens campaign impact and makes every customer touchpoint feel disconnected.",
    keywords: ["creative design agency Rajkot", "advertising creative design", "brochure and packaging design"],
    deliverables: ["Creative direction", "Campaign key visuals", "Print collateral", "Packaging artwork", "Ad creatives", "Editable brand templates"],
    benefits: ["Stronger campaign presence", "Brand consistency", "Clearer communication", "Flexible asset system"],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    icon: Workflow,
    summary: "Smart workflows that connect repetitive tasks, lead handling and internal processes so your team can focus on growth.",
    hero: "Automate repetitive work without making your business complicated.",
    problem: "Manual follow-ups, duplicate updates and scattered lead information slow teams down and create missed opportunities.",
    keywords: ["business automation Rajkot", "workflow automation services", "lead management automation"],
    deliverables: ["Workflow audit", "Automation map", "Lead routing", "Notification flows", "Dashboard connection", "Process documentation"],
    benefits: ["Faster follow-up", "Lower manual workload", "Consistent processes", "Improved team productivity"],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    icon: DraftingCompass,
    summary: "Clear, modern and user-friendly interfaces for websites, apps, SaaS products and business dashboards.",
    hero: "Design digital products people understand from the first click.",
    problem: "Complex navigation and unclear interfaces create friction, support requests and abandoned journeys.",
    keywords: ["UI UX design Rajkot", "app interface design", "dashboard UI design"],
    deliverables: ["User flow mapping", "Wireframes", "Design system", "Responsive screens", "Interactive prototype", "Developer handoff"],
    benefits: ["Easier product adoption", "Lower user friction", "Consistent interface", "Faster development handoff"],
  },
];

export const processSteps = [
  { title: "Understand", text: "We study your business, audience, market and current digital presence.", icon: SearchCheck },
  { title: "Plan", text: "We create a focused strategy for branding, website, content and growth.", icon: Layers3 },
  { title: "Design", text: "We shape the visual identity, interface and campaign assets.", icon: Palette },
  { title: "Develop", text: "We build the website, software, landing pages and digital systems.", icon: Braces },
  { title: "Launch", text: "We test, publish and optimize every customer touchpoint.", icon: Rocket },
  { title: "Grow", text: "We keep improving through content, campaigns, data and strategy.", icon: ChartNoAxesCombined },
];

export const projects = [
  { slug: "kaneriya-industries", client: "Kaneriya Industries", category: "Branding", industry: "Manufacturing", result: "Built a premium visual system for product marketing and digital communication.", image: "/images/project-kaneriya.svg", services: "Branding + Social Media" },
  { slug: "sky-beverages", client: "Sky Beverages", category: "Website", industry: "Food & Beverage", result: "Created a clean digital launch system for a growing portfolio of beverage brands.", image: "/images/project-sky.svg", services: "Website + Brand Creatives" },
  { slug: "arc-home", client: "Arc Home", category: "UI/UX", industry: "Real Estate", result: "Simplified property discovery with a polished, mobile-first experience.", image: "/images/project-arc.svg", services: "UI/UX + Website" },
  { slug: "nova-ops", client: "Nova Ops", category: "Software", industry: "Business Services", result: "Designed an operations dashboard that turns daily data into clear actions.", image: "/images/project-nova.svg", services: "ERP + Dashboard" },
  { slug: "earthroot", client: "EarthRoot Organics", category: "Social Media", industry: "Retail", result: "Unified social visuals and campaign storytelling across product categories.", image: "/images/project-earthroot.svg", services: "Branding + Social Media" },
  { slug: "orbit-lights", client: "Orbit Lights", category: "CGI", industry: "Consumer Products", result: "Produced dynamic CGI product scenes for premium campaign launches.", image: "/images/project-orbit.svg", services: "CGI + Ad Creatives" },
];

export const caseStudies = [
  {
    slug: "kaneriya-industries",
    client: "Kaneriya Industries",
    title: "From inconsistent product communication to one premium industrial brand system.",
    category: "Branding + Social Media",
    image: "/images/project-kaneriya.svg",
    problem: "The business had strong products but its digital presence lacked a consistent premium visual language.",
    solution: "We created brand-led visual templates, product communication rules, campaign assets and a clear monthly content direction.",
    outcome: "The brand gained a more professional market presence, stronger sales communication and a repeatable design system.",
    metrics: ["1 unified visual system", "30+ launch-ready assets", "Faster campaign execution"],
  },
  {
    slug: "sky-beverages",
    client: "Sky Beverages",
    title: "A clean digital launch experience for a multi-brand beverage portfolio.",
    category: "Website + Creative Direction",
    image: "/images/project-sky.svg",
    problem: "Multiple product lines needed a single digital presence without losing their individual personality.",
    solution: "We designed a modular website direction and flexible brand creative system that could expand with new launches.",
    outcome: "The company received a scalable online foundation with clearer product storytelling and stronger launch consistency.",
    metrics: ["Mobile-first experience", "Reusable launch modules", "Clearer product navigation"],
  },
  {
    slug: "nova-ops",
    client: "Nova Ops",
    title: "Turning fragmented operational data into a focused management dashboard.",
    category: "ERP + UI/UX",
    image: "/images/project-nova.svg",
    problem: "Teams were updating separate sheets, causing slow reporting and poor operational visibility.",
    solution: "We mapped key workflows and designed a role-based dashboard with simplified reporting and action states.",
    outcome: "Managers gained a clearer daily view, teams reduced repeated updates and reporting became more consistent.",
    metrics: ["One operations view", "Reduced duplicate entry", "Faster weekly reporting"],
  },
];

export const pricing = [
  { name: "Starter Branding", eyebrow: "For new businesses", price: "Custom quote", description: "Build a clear, professional identity for a confident launch.", features: ["Logo concept", "Color palette", "Font system", "Basic brand style", "Social profile setup"], cta: "Start My Brand" },
  { name: "Website Starter", eyebrow: "Most popular", price: "₹14,999", description: "A responsive business website designed to build trust and inquiries.", features: ["Responsive website", "Core business pages", "Contact form UI", "WhatsApp integration", "Mobile-first design", "SEO foundations"], cta: "Build My Website", featured: true },
  { name: "Social Growth", eyebrow: "For consistent visibility", price: "Custom quote", description: "Monthly content planning and design that keeps your brand active.", features: ["Monthly content plan", "Creative posts", "Reel covers", "Captions", "Brand consistency"], cta: "Grow My Social" },
  { name: "Custom Growth", eyebrow: "For ambitious brands", price: "Let's plan", description: "A connected branding, website, marketing and automation roadmap.", features: ["Brand strategy", "Website or landing pages", "Campaign creatives", "Growth marketing", "Automation planning"], cta: "Book Consultation" },
];

export const testimonials = [
  { quote: "The team understood that we needed more than attractive posts. They created a clear visual direction that finally made our business look established.", name: "Rakesh Patel", business: "Manufacturing Business", service: "Branding + Social Media" },
  { quote: "Our website now explains our services clearly and feels professional on every screen. The process was organized, fast and easy to follow.", name: "Nidhi Shah", business: "Professional Services", service: "Website Development" },
  { quote: "DiGi Trend connected our design, campaign and lead journey instead of treating them as separate tasks. That strategic approach made the difference.", name: "Harsh Mehta", business: "Growing Consumer Brand", service: "Digital Growth" },
];

export const faqs = [
  { q: "What does DiGi Trend do?", a: "DiGi Trend provides complete digital growth solutions including branding, website development, social media, digital marketing, ERP software, UI/UX and CGI videos." },
  { q: "Do you only design logos?", a: "No. We build complete brand systems that can include identity, website, social media, campaign creative and growth strategy." },
  { q: "What is your website starting price?", a: "Our basic business website package starts from ₹14,999. Final pricing depends on page count, content, integrations and custom functionality." },
  { q: "Can you manage my social media?", a: "Yes. We handle monthly planning, post design, reel concepts and covers, captions and brand consistency." },
  { q: "Do you create custom software or ERP?", a: "Yes. We design custom ERP, CRM, dashboards and workflow solutions around your business process." },
  { q: "How do I start?", a: "Book a free consultation or message us on WhatsApp. We will understand your goals and recommend the right starting point." },
];

export const industries = [
  "Food & Beverage", "Real Estate", "Manufacturing", "Education", "Healthcare", "Fashion", "Agriculture", "Retail", "Startups", "Service Businesses", "Local Shops", "Personal Brands",
];

export const articles = [
  { slug: "branding-before-marketing", title: "Why your business needs branding before marketing", category: "Branding", excerpt: "Marketing can bring attention, but branding decides what people remember and trust when they arrive.", date: "June 18, 2026", read: "6 min read", image: "/images/article-branding.svg" },
  { slug: "logo-is-not-branding", title: "A logo is not branding: what every owner should know", category: "Branding", excerpt: "Your logo is one part of a broader system that shapes perception across every customer touchpoint.", date: "June 10, 2026", read: "5 min read", image: "/images/article-logo.svg" },
  { slug: "professional-website-builds-trust", title: "How a professional website builds business trust", category: "Website Tips", excerpt: "Customers use speed, clarity, design and proof signals to decide whether your business feels credible.", date: "May 29, 2026", read: "7 min read", image: "/images/article-web.svg" },
  { slug: "social-media-mistakes", title: "Five social media mistakes local businesses make", category: "Social Media", excerpt: "Inconsistent design, unclear offers and random posting reduce visibility and weaken brand recall.", date: "May 20, 2026", read: "5 min read", image: "/images/article-social.svg" },
  { slug: "business-automation-future", title: "Why business automation is becoming essential", category: "Business Growth", excerpt: "Simple connected workflows can reduce repeated work and create a more reliable customer experience.", date: "May 8, 2026", read: "8 min read", image: "/images/article-automation.svg" },
  { slug: "cgi-product-standout", title: "How CGI videos can make your product stand out", category: "Design Education", excerpt: "CGI gives brands control over lighting, environments and product storytelling that physical shoots cannot always match.", date: "April 26, 2026", read: "6 min read", image: "/images/article-cgi.svg" },
];

export const stats = [
  { value: "360°", label: "Brand growth thinking" },
  { value: "10+", label: "Connected capabilities" },
  { value: "1", label: "Focused growth partner" },
  { value: "100%", label: "Strategy-led execution" },
];

export const valuePoints = [
  { title: "Complete Brand Growth Team", text: "One coordinated partner for identity, website, content, marketing and technology.", icon: GalleryVerticalEnd },
  { title: "Strategy Before Design", text: "Every creative decision starts with your audience, offer and business goal.", icon: BadgeCheck },
  { title: "Premium Quality, Practical Pricing", text: "International-level thinking shaped for ambitious growing businesses.", icon: Sparkles },
  { title: "Local Understanding, Global Standard", text: "We understand local markets and design with a wider competitive lens.", icon: Globe2 },
  { title: "Fast, Clear Execution", text: "Defined stages, focused communication and less confusion throughout the project.", icon: MousePointerClick },
  { title: "Long-Term Support", text: "We stay involved after launch to improve, expand and strengthen the brand.", icon: Bot },
];
