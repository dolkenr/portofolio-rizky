import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Rizky Maulana sidik —  & Web Developer",
  author: "Rizky Maulana sidik",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/small.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Twitter", href: "https://github.com/immois/astro-zen" },
    { text: "LinkedIn", href: "https://github.com/immois/astro-zen" },
    { text: "Github", href: "https://github.com/immois/astro-zen" },
    { text: "Youtube", href: "https://github.com/immois/astro-zen" },
    { text: "Dribbble", href: "https://github.com/immois/astro-zen" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Rizky Maulana sidik",
    specialty: "Web Developer",
    summary:
      "Web Developer based in Indonesia. I specialize in building modern, responsive user interfaces and developing high-performance web applications using the latest technologies.",
    email: "rizkymaulanasidik2@email.com",
  },
  experience: [
    {
      company: "Rc Komputer",
      position: "PC Maintenance & Repair Specialist",
      startDate: "May 2018",
      endDate: "May 2019",
      summary: [
        "Performing assembly, maintenance, and repair of computer components such as CPUs, RAM, and motherboards to ensure optimal hardware performance.",
        "Executing installation, updates, and configuration of operating systems (Windows/Linux) and application software, including malware removal and system optimization.",
        "Configuring network connectivity (LAN/Wi-Fi) and integrating external devices such as printers, scanners, and projectors for seamless office operations.",
      ],
    },
    {
      company: "Cafe 190",
      position: "Kitchen Crew",
      startDate: "Feb 2022",
      endDate: "May 2023",
      summary: [
        "Preparing high-quality ingredients, including washing, cutting, and seasoning, to ensure all materials are ready for efficient cooking operations.",
        "Operating various kitchen equipment to cook dishes according to standardized recipes while ensuring consistent taste, temperature, and visual presentation.",
        "Maintaining a clean and organized workstation by following strict food safety (HACCP) standards, sanitizing equipment, and managing proper ingredient storage.",
      ],
    },
  ],
  projects: [
    {
      name: "Spotifu Musi",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/spotifu.png",
    },
    {
      name: "Shopp App",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/shopify-clon.png",
    },
    {
      name: "ClonTagram",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/clone-ig.png",
    },
  ],
  about: {
    description: `
      I am a Junior Front-End Developer focused on building efficient client-side applications. With a solid foundation in HTML, CSS, and JavaScript, I am committed to turning digital designs into functional and accessible code for everyone.

      Having recently completed [Sebutkan Sertifikasi/Bootcamp], I have gained experience in state management and API integration. I am currently looking for opportunities to contribute to a creative team and accelerate my professional growth in web development.
    `,
    image: "/small.jpeg",
  },
};

// #5755ff
