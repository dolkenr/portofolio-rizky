import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Rizky Maulana Sidik — Full-Stack Developer",
  author: "Rizky Maulana Sidik",
  description:
    "Full-Stack Developer based in Indonesia. I specialize in building secure web applications, real-time dashboards, and high-performance systems.",
  lang: "id", // Ganti ke 'id' jika ingin bahasa Indonesia dominan
  siteLogo: "/fatih.jpeg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects"},
    { text: "Skills", href: "#skills" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "Instagram", href: "https://www.instagram.com/dolkenalfatih?igsh=MWNmNDJrNHo4dXR0" },
    { text: "Github", href: "https://github.com/dolkenr" },
  ],
  socialImage: "/fatih.jpeg",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Rizky Maulana sidik",
    specialty: "Web Developer",
    summary:
      "Full-Stack Developer based in Indonesia. I specialize in building secure web applications and real-time management systems.",
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
        "Developing internal automation scripts for system diagnostics and hardware stress-testing.",
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
      name: "Resto Cloud - SaaS POS & Inventory",
      summary: "Aplikasi POS real-time dengan sistem monitoring stok otomatis, visualisasi omzet, dan proteksi keamanan distribusi (Domain Locking & Code Obfuscation), Implementing Advanced Security (Code Obfuscation & Domain Whitelisting), Integrated Supabase Real-time for instant inventory updates.",
      linkSource: "https://github.com/dolkenr/resto-cloud", // Pastikan repo private kamu ada di sini
      linkDemo: "https://resto-cloud.vercel.app", // Link Vercel kamu
      image: "/resto.png", // Ganti dengan screenshot dashboard cyberpunk kamu (156/157)
    },
    {
      name: "Cafe 190 Web App",
      summary: "Sistem pemesanan menu berbasis QR-Code untuk efisiensi layanan meja restoran.",
      linkSource: "https://github.com/dolkenr/cafe190.git",
      linkDemo: "https://onrender.com",
      image: "/l.png",
    },
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Vite", "Tailwind CSS", "Astro", "Chart.js"],
    },
    {
      category: "Backend & DB",
      items: ["Supabase", "PostgreSQL", "Real-time Subscription", "RLS Security"],
    },
    {
      category: "DevOps & Security",
      items: ["Vercel", "Git/GitHub", "JS Obfuscation", "Domain Locking"],
    },
    {
      category: "Tools",
      items: ["VS Code", "XAMPP", "Postman", "Figma"],
    },
  ],
  about: {
    description: `
      Saya adalah seorang Full-Stack Developer yang berfokus pada pembangunan aplikasi web yang efisien dan aman. Saya memiliki pengalaman dalam mengintegrasikan frontend React dengan sistem backend real-time seperti Supabase.

      Baru-baru ini saya berhasil mengembangkan sistem monitoring restoran yang mengimplementasikan keamanan tingkat lanjut seperti 'Domain Locking' dan 'JavaScript Obfuscation' untuk melindungi hak cipta aplikasi. Saya sangat tertarik pada pengembangan solusi digital yang praktis, aman, dan memiliki performa tinggi.

      Saya senang memecahkan masalah keamanan pada aplikasi web, seperti yang saya terapkan pada sistem proteksi lisensi di proyek terbaru saya. Saya selalu bersemangat untuk mempelajari teknologi baru dan menerapkannya dalam solusi dunia nyata.
    `,
    image: "/fatih.jpeg",
  },
};

// #5755ff
