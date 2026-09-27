export const initialCompanyInfo = {
  name: "LYLYAS GLOBAL LLC",
  shortName: "LYLYAS GLOBAL",
  tagline: "Global Solutions for Modern Businesses and Individuals",
  description: "Lylyas Global LLC is a US-registered multi-service company creating practical solutions across business consulting, digital services, e-commerce, digital marketing, and professional services.",
  registration: "Registered in Wyoming, United States",
  email: "contact@lylyasglobal.com",
  phone: "+1 (307) 201-9250",
  location: "Wyoming, United States",
  socials: {
    linkedin: "https://linkedin.com/company/lylyasglobal",
    instagram: "https://instagram.com/lylyasglobal",
    facebook: "https://facebook.com/lylyasglobal",
    x: "https://x.com/lylyasglobal"
  }
};

export const initialServices = [
  {
    id: "business-solutions",
    title: "Business Solutions",
    subtitle: "Strategic support, operational clarity, and commercial solutions for growing enterprises.",
    shortDesc: "Business consulting, strategy support, and practical solutions for growth and success.",
    icon: "TrendingUp",
    featured: true,
    items: [
      {
        name: "Business Consulting",
        description: "In-depth operational assessments, revenue models, and practical advisory for founders and growing companies."
      },
      {
        name: "Business Strategy Support",
        description: "Actionable strategic roadmaps tailored to navigate market transitions and competitive environments."
      },
      {
        name: "Entrepreneur Support",
        description: "End-to-end guidance for early-stage founders: entity structuring, market validation, and go-to-market execution."
      },
      {
        name: "Business Development",
        description: "Partnership facilitation, distribution expansion, and commercial deal structuring across global markets."
      },
      {
        name: "Operational Optimization",
        description: "Eliminating inefficiencies through streamlined workflows, standard operating procedures, and automated tooling."
      }
    ]
  },
  {
    id: "digital-services",
    title: "Digital Services",
    subtitle: "Modern online presence, customer acquisition pipelines, and digital architecture.",
    shortDesc: "Digital solutions, online presence, digital marketing, and professional digital support.",
    icon: "Monitor",
    featured: true,
    items: [
      {
        name: "Digital Solutions & Architecture",
        description: "Modern, high-performance web applications and digital infrastructure built for speed, security, and scalability."
      },
      {
        name: "Digital Marketing & Performance",
        description: "Data-driven multi-channel digital campaigns designed to reach targeted B2B and B2C audiences internationally."
      },
      {
        name: "Online Presence & Authority Support",
        description: "Comprehensive digital reputation management, corporate landing pages, and search visibility optimization."
      },
      {
        name: "Digital Content Support",
        description: "Structured brand storytelling, thought-leadership articles, and technical digital collateral for modern buyers."
      },
      {
        name: "Professional Digital Services",
        description: "Dedicated technical advisory, systems integration, and ongoing digital asset management."
      }
    ]
  },
  {
    id: "e-commerce",
    title: "E-commerce",
    subtitle: "Comprehensive solutions for digital commerce, multi-channel selling, and global brand scaling.",
    shortDesc: "E-commerce support, online store solutions, and digital commerce activities.",
    icon: "ShoppingCart",
    featured: true,
    items: [
      {
        name: "E-commerce Support & Infrastructure",
        description: "Complete setup and technical management of high-converting storefronts across Shopify, WooCommerce, and custom headless stacks."
      },
      {
        name: "Online Store Solutions",
        description: "Custom UI/UX storefront design, payment gateway integration, currency localization, and frictionless checkout flows."
      },
      {
        name: "E-commerce Management",
        description: "Full-cycle management including catalog curation, order fulfillment oversight, and customer experience workflows."
      },
      {
        name: "Digital Commerce Strategy",
        description: "Retention mechanics, email automation, average order value optimization, and analytics tracking."
      },
      {
        name: "Product & Online Business Support",
        description: "Product sourcing advisory, supplier alignment, inventory velocity planning, and multichannel listing distribution."
      }
    ]
  },
  {
    id: "professional-services",
    title: "Professional Services",
    subtitle: "High-standard corporate governance, project administration, and international operational facilitation.",
    shortDesc: "Corporate operations advisory, project management, compliance, and international business support.",
    icon: "Briefcase",
    featured: true,
    items: [
      {
        name: "Corporate Operations Advisory",
        description: "Institutional guidance on corporate administration, cross-functional project alignment, and executive decision frameworks."
      },
      {
        name: "Project & Vendor Management",
        description: "Independent oversight of critical company initiatives, vendor contract delivery, and technical milestone verification."
      },
      {
        name: "Compliance & Governance Support",
        description: "Support in maintaining organized records, policy documentation, and adherence to international commercial standards."
      },
      {
        name: "Executive & Administrative Support",
        description: "Discreet, high-touch organizational coordination for founders, executive directors, and overseas board members."
      },
      {
        name: "International Business Facilitation",
        description: "Navigating cross-border commercial relationships, US entity operational liaison, and bilateral business development."
      }
    ]
  }
];

export const initialProjects = [
  {
    id: "project-1",
    title: "Global E-Commerce Expansion",
    category: "E-commerce",
    year: "2026",
    summary: "Complete storefront redesign and international multi-currency rollout for a consumer lifestyle brand.",
    services: ["Store Architecture", "Payment Gateways", "International Logistics Advisory"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    clientType: "International Retailer",
    results: "+140% International Sales, 4 new regional markets opened"
  },
  {
    id: "project-2",
    title: "Corporate Digital Transformation",
    category: "Digital Services",
    year: "2025",
    summary: "Built a centralized cloud portal and brand infrastructure for a multi-regional logistics consortium.",
    services: ["Web Architecture", "Systems Integration", "Digital Workflow Automation"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    clientType: "Logistics Group",
    results: "Reduced client onboarding time by 65%"
  },
  {
    id: "project-3",
    title: "US Entity Commercial Setup & Go-To-Market",
    category: "Business Solutions",
    year: "2025",
    summary: "Supported an overseas technology firm in establishing operational readiness and commercial go-to-market in North America.",
    services: ["Business Consulting", "Go-To-Market Strategy", "Commercial Structuring"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    clientType: "Tech Enterprise",
    results: "Successful US market entry within 90 days"
  },
  {
    id: "project-4",
    title: "Cross-Border Vendor & Operational Management",
    category: "Professional Services",
    year: "2026",
    summary: "Executed comprehensive vendor audit and procurement restructuring across EMEA and US commercial partners.",
    services: ["Vendor Management", "Operational Advisory", "Milestone Tracking"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    clientType: "Private Holding Co.",
    results: "22% operational cost savings realized"
  }
];

export const initialInsights = [
  {
    id: "how-to-build-a-global-online-business",
    title: "How to Build a Global Online Business",
    category: "BUSINESS",
    date: "Apr 12, 2026",
    readTime: "6 min read",
    author: "Lylyas Editorial",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Key architectural decisions, legal considerations, and operational strategies required to build a resilient multi-national digital company.",
    content: `
Building an international online business in today's interconnected landscape demands far more than creating a website. It requires a disciplined operational foundation, deliberate legal structuring, and a unified digital presence.

### 1. Robust Corporate Foundations
Operating internationally means choosing a corporate jurisdiction that provides legal clarity, robust banking infrastructure, and global credibility. For many international entrepreneurs, establishing a US entity (such as a Wyoming LLC) offers unprecedented access to global merchant providers, clear commercial law, and high credibility with partners.

### 2. Multi-Region Financial & Payment Rails
Friction at checkout is the number one reason global customers abandon transactions. Successful digital enterprises integrate localized payment systems, multi-currency processing, and automated tax calculation engines to ensure smooth cross-border commerce.

### 3. Asynchronous Operations & Global Talent
A truly global company must operate seamlessly across time zones. Implementing centralized documentation, standard operating procedures (SOPs), and cloud-native project management frameworks ensures business continuity around the clock.

### 4. Continuous Value Delivery
Scale is the byproduct of relentless consistency. By pairing rigorous business strategy with modern digital capabilities, founders can build sustainable organizations that thrive beyond domestic borders.
    `
  },
  {
    id: "digital-strategies-for-small-businesses",
    title: "Digital Strategies for Small Businesses",
    category: "DIGITAL",
    date: "Apr 5, 2026",
    readTime: "5 min read",
    author: "Lylyas Editorial",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Practical, cost-effective digital tactics that allow modern small enterprises to outpace legacy competitors in search and client acquisition.",
    content: `
Small businesses no longer need multi-million dollar budgets to compete with industry giants. The democratization of digital tools enables nimble teams to achieve extraordinary leverage.

### Focusing on High-Intent Touchpoints
Rather than trying to be present on every emerging social network, businesses should concentrate their resources on high-intent channels where their target clients actively search for solutions.

### The Power of Fast, Minimalist Web Experiences
Consumers and enterprise buyers make split-second credibility decisions based on website speed, clean typography, and uncluttered design. A sleek, authoritative digital presence consistently converts at double the rate of cluttered websites.

### Automating Repetitive Inquiries
By utilizing smart inquiry routing and structured intake forms, small teams can provide instant responses to high-value leads while eliminating hours of manual follow-up.
    `
  },
  {
    id: "building-a-strong-online-brand",
    title: "Building a Strong Online Brand",
    category: "E-COMMERCE",
    date: "Mar 28, 2026",
    readTime: "7 min read",
    author: "Lylyas Editorial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    excerpt: "How modern e-commerce leaders cultivate distinct brand authority, repeat customer loyalty, and sustainable product margins.",
    content: `
In an era of commoditized products and algorithmic competition, brand identity is the ultimate moat. Customers don't simply purchase items—they buy into the values, craftsmanship, and trust conveyed by the brand.

### Visual Cohesion and Minimalist Elegance
A cohesive visual language—spanning packaging, digital typography, photography, and customer correspondence—signals quality and attention to detail.

### Customer Experience as Marketing
The post-purchase journey is where brand equity is either cemented or squandered. Proactive shipping updates, elegant unboxing, and responsive support turn one-time shoppers into lifelong brand ambassadors.

### Multi-Channel Resilience
Relying solely on a single marketplace or advertising channel exposes businesses to existential platform risks. True brand resilience comes from owning direct customer relationships through dedicated e-commerce storefronts and private email channels.
    `
  },
  {
    id: "cross-border-operations-and-governance",
    title: "Cross-Border Operations & Modern Governance",
    category: "PROFESSIONAL",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    author: "Lylyas Editorial",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    excerpt: "Essential frameworks for international entrepreneurs managing overseas suppliers, compliance obligations, and commercial agreements.",
    content: `
Navigating international business requires proactive operational management and transparent contractual governance.

### Structured Vendor Oversight
Establishing clear milestone-based agreements, quality benchmarks, and regular audits protects capital and ensures vendor accountability across borders.

### Regulatory and Entity Hygiene
Maintaining annual filings, registered agent compliance, and separate corporate accounting preserves the limited liability protections of corporate entities and guarantees smooth banking relationships.
    `
  }
];

export const initialValues = [
  {
    id: "integrity",
    title: "Integrity",
    description: "We value transparency, responsibility, and professional conduct.",
    icon: "Gem"
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "We remain open to new ideas, technologies, and opportunities.",
    icon: "Lightbulb"
  },
  {
    id: "professionalism",
    title: "Professionalism",
    description: "We aim to maintain high standards in our communication and work.",
    icon: "Handshake"
  },
  {
    id: "global-perspective",
    title: "Global Perspective",
    description: "We think beyond borders and embrace international opportunities.",
    icon: "Globe"
  }
];
