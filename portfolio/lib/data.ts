export const profile = {
  name: "Udoka Dandave",
  alias: "Dandy",
  role: "Software Engineer, Full Stack",
  email: "hello@dandaveudoka.com.ng",
  phone: "+234 810 339 3608",
  phoneHref: "+2348103393608",
  location: "Enugu, Nigeria. Remote worldwide",
  whatsapp:
    "https://api.whatsapp.com/send?phone=2348103393608&text=Hello%20Dandy%2C%20I%20got%20your%20contact%20from%20your%20portfolio%20and%20would%20like%20to%20connect.",
  github: "https://github.com/Davetechinnovation",
  linkedin: "https://linkedin.com/in/udoka-dandave",
  instagram: "https://www.instagram.com/davetech_innovation/",
  twitter: "https://x.com/Davetechinnov",
  cv: "/Udoka_Dandave_CV.pdf",
  photo: "/profile-v2.jpg",
  summary:
    "Full-stack software engineer with four years shipping real products across fintech, streaming, B2B automation and enterprise dashboards. React, Next.js and React Native up front; Node.js and Laravel behind; Docker underneath.",
  longBio: [
    "I'm Udoka Dandave Chibuzor. Most people call me Dandy. The Dandave comes from Daniel David, so if you know me as Daniel Udoka or David Udoka, same person, same engineer.",
    "I specialize in bridging high-performance frontends and robust backend systems: React, Next.js and React Native on one side, Node.js and Laravel on the other, with Docker-based deployments tying it together.",
    "I started coding at 16 and have since shipped real products across fintech, streaming, B2B automation and enterprise dashboards, owning features end to end, from architecture to production, with strong code review, debugging and testing habits.",
  ],
};

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links: ProjectLink[];
  status?: "IN DEVELOPMENT";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "jointearn",
    title: "Jointearn Crypto App",
    description:
      "Cross-platform mobile crypto application for asset management and investments. Secure Laravel REST API handling wallets, transactions and authentication; React Native UI holding a 60 FPS baseline on iOS and Android. 99.9% uptime under concurrent-user load testing.",
    tags: ["React Native", "Laravel", "Fintech"],
    links: [],
    featured: true,
  },
  {
    slug: "solvativ",
    title: "Solvativ",
    description:
      "Multi-platform B2B ecosystem automating omni-channel messaging across WhatsApp, Instagram, Facebook and TikTok. Cut automated customer response times from hours to under 60 seconds. I own the full stack: architecture, API design, database schema, deployment.",
    tags: ["B2B SaaS", "Automation", "Founder"],
    links: [],
    featured: true,
  },
  {
    slug: "danraph-transport",
    title: "DanRaph Transport System",
    description:
      "Commissioned operations platform for a transport & logistics company: booking, sales tracking, driver and fleet monitoring, and reporting consolidated into one interface. Full stack React + REST APIs with MySQL/MongoDB, built for query performance.",
    tags: ["React", "Node.js", "MySQL", "MongoDB"],
    image: "/projects/danraph-transport.png",
    links: [
      { label: "Main app", href: "https://danraph-transport.vercel.app/" },
      {
        label: "Admin dashboard",
        href: "https://danraph-transport-admin.vercel.app/admin/dashboard",
      },
      {
        label: "Driver dashboard",
        href: "https://danraph-services-drivers.vercel.app/drivers/dashboard",
      },
    ],
    featured: true,
  },
  {
    slug: "dandy-prime",
    title: "DandyPrime TV",
    description:
      "Video streaming web application with Next.js and Node.js: playback performance, content cataloging, and responsive UI across devices. Integrates APIs for movies, TV shows and sports.",
    tags: ["Next.js", "Node.js", "Streaming"],
    image: "/projects/dandy-prime.png",
    links: [{ label: "Live demo", href: "https://dandy-prime-tv02.vercel.app/" }],
    status: "IN DEVELOPMENT",
  },
  {
    slug: "danraph-services",
    title: "DanRaph Services",
    description:
      "Company website for DanRaph Integrated Services: clean UI, accessibility and SEO best practices, deployed on Vercel.",
    tags: ["React", "Tailwind", "Vercel"],
    image: "/projects/danraph-services.png",
    links: [{ label: "Live site", href: "https://danraphservices.vercel.app/" }],
  },
  {
    slug: "ecocruise",
    title: "EcoCruise Waitlist",
    description:
      "Launch waitlist page for EcoCruise: fast, focused, conversion-oriented single-purpose build.",
    tags: ["Landing", "Waitlist", "Launch"],
    image: "/projects/ecocruise.png",
    links: [{ label: "Live site", href: "https://join.ecocruise.org/" }],
  },
];

export interface Testimonial {
  name: string;
  role: string;
  date: string;
  quote: string;
  photo: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Chioma N.",
    role: "Startup Founder",
    date: "15 October 2024",
    quote:
      "Working with Dandy was a game changer. He took our outdated website and transformed it into a sleek, modern platform. His eye for design and attention to performance made all the difference. Highly recommended!",
    photo: "/testimonials/dandy-chioma.jpg",
  },
  {
    name: "James A.",
    role: "Digital Consultant",
    date: "18 November 2024",
    quote:
      "Dandy was incredibly responsive and professional throughout the entire project. He delivered a beautiful, functional site ahead of schedule. It's rare to find someone so young yet so skilled.",
    photo: "/testimonials/dandy-james.jpg",
  },
  {
    name: "Tolu E.",
    role: "Creative Agency Lead",
    date: "4 January 2025",
    quote:
      "From the first meeting to final launch, Dandy understood our goals and exceeded expectations. The frontend is clean, fast, and responsive. Just what we needed. His backend integration was equally impressive.",
    photo: "/testimonials/Tdandy-tol.jpg",
  },
  {
    name: "Angela M.",
    role: "Small Business Owner",
    date: "5 February 2025",
    quote:
      "I needed a developer who could bring my vision to life, and Dandy did exactly that. His ability to combine creativity with technical skill is top-notch. I'll definitely work with him again.",
    photo: "/testimonials/dandy-angela.jpg",
  },
  {
    name: "Samuel D.",
    role: "Product Manager",
    date: "12 March 2025",
    quote:
      "Dandy's work ethic and talent are unmatched. He communicated clearly, met every milestone, and delivered a product we're proud of. He's not just a developer. He's a partner in your success.",
    photo: "/testimonials/dandy-samuel.jpg",
  },
  {
    name: "Amanda Blake",
    role: "Product Manager, TechNova Solutions",
    date: "31 March 2025",
    quote:
      "Dandy turned our scattered ideas into a sleek, responsive app with precision and creativity. His design sense, clear communication, and technical skill are rare. A standout developer I'd work with again in a heartbeat.",
    photo: "/testimonials/dandy-amada.jpg",
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    role: "Software Developer (Contract)",
    company: "Jointearn",
    period: "Jan 2026 - present",
    location: "Nigeria (Remote)",
    current: true,
    points: [
      "Developing a cross-platform mobile crypto application for asset management and investments, integrating secure cryptographic protocols; sustained 99.9% uptime in concurrent-user load testing.",
      "Built a secure Laravel REST API handling wallet management, transaction history and authentication; reduced database query response times to under 150ms through optimized indexing and caching.",
      "Designed the full mobile UI in React Native, applying native thread optimization and lazy loading to hold a 60 FPS baseline on both iOS and Android.",
      "Review and debug code across the stack; write unit tests and maintain API documentation for the backend services.",
    ],
  },
  {
    role: "Founder & Software Engineer",
    company: "Solvativ",
    period: "Jun 2026 - present",
    location: "Nigeria (Remote)",
    current: true,
    points: [
      "Designed and engineered a multi-platform B2B ecosystem automating omni-channel messaging across WhatsApp, Instagram, Facebook and TikTok.",
      "Cut automated customer response times from hours to under 60 seconds for businesses on the platform.",
      "Own the full stack: system architecture, API design, database schema, deployment, and iteration on early customer feedback.",
    ],
  },
  {
    role: "Admin/ICT Manager (Part-time)",
    company: "DanRaph Integrated Services",
    period: "Sep 2025 - present",
    location: "Nigeria",
    current: true,
    points: [
      "Implemented ICT solutions that reduced technology costs by 20% annually.",
      "Streamlined office operations, boosting operational efficiency by 30%.",
      "Coordinated software upgrades, improving system performance by 25%; delivered projects on time and under budget.",
    ],
  },
  {
    role: "Freelance Software Developer",
    company: "Transport & Logistics Company",
    period: "2024 - 2025",
    location: "Nigeria (Remote)",
    points: [
      "Delivered a commissioned operations dashboard consolidating sales tracking, driver and fleet monitoring, and reporting into a single interface.",
      "Gathered requirements directly from the client and translated day-to-day business operations into working software, iterating on feedback until handover.",
      "Built the full stack with React, REST APIs, and MySQL/MongoDB, with a focus on query performance and maintainable component architecture.",
    ],
  },
];

export interface Education {
  title: string;
  institution: string;
  period: string;
  detail: string;
}

export const education: Education[] = [
  {
    title: "Full Stack Web Development Certificate",
    institution: "Tech Academy",
    period: "2022 - 2024",
    detail:
      "Structured full-stack programme covering React, Node.js, databases, APIs and deployment practices. Anambra, Nigeria.",
  },
  {
    title: "WASSCE, West African Senior School Certificate",
    institution: "PineCrest College",
    period: "2024",
    detail: "Nigeria.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React Native",
      "Expo",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "PHP", "Laravel", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git/GitHub",
      "Docker",
      "Unit Testing",
      "Code Review",
      "Technical Writing",
      "Agile",
    ],
  },
];
