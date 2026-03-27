import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Rizky Maulana sidik —  & Web Developer",
  author: "Rizky Maulana sidik",
  description:
    "Software Engineer based in San Francisco, USA. I specialize in UI design, web and mobile application development and maintenance.",
  lang: "en",
  siteLogo: "/fatih.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects"},
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/dolkenalfatih?igsh=MWNmNDJrNHo4dXR0" },
    { text: "Github", href: "https://github.com/dolkenr" },
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
      name: "Cafe 190",
      summary: "QR ordering app at the table.",
      linkSource: "https://github.com/dolkenr/cafe190.git",
      image: "/l.png",
    },
  ],
  about: {
    description: `
      I am a Junior Front-End Developer focused on building efficient client-side applications. With a solid foundation in HTML, CSS, and JavaScript, I am committed to turning digital designs into functional and accessible code for everyone.

      Having recently completed [Sebutkan Sertifikasi/Bootcamp], I have gained experience in state management and API integration. I am currently looking for opportunities to contribute to a creative team and accelerate my professional growth in web development.
    `,
    image: "/fatih.jpeg",
  },
};

// #5755ff
