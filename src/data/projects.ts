import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    title: "Drawing Desk VR",
    subtitle: "Feb 2025 - Sept 2025",
    description:
      "Converted the Drawing Desk VR application for PICO VR, implemented new features, and fixed bugs to improve stability and overall user experience.",
    details:
      "This project involved a complete conversion of the popular Drawing Desk application for the PICO VR platform. Key responsibilities included rewriting core interaction systems for VR controllers, optimizing performance for mobile VR hardware, and implementing new 3D painting features. I also worked on bug fixing and stability improvements to ensure a smooth user experience.",
    technologies: "C#, Unity",
    link: "https://store-global.picoxr.com/global/detail/1/7475251220597293062",
    linkText: "Visit Live App",
    images: ["/drawing-desk.jpeg"],
  },
  {
    title: "FIT Future Careers 2025",
    subtitle: "Nov 2024 - Jan 2025",
    description:
      "A comprehensive recruitment platform designed for the Faculty of Information Technology at the University of Moratuwa. It bridges the gap between students and the IT industry by facilitating profile creation, skill-based matching, and sponsorship management for a premier annual career fair. I worked mostly on candidate profile functionalities.",
    details:
      "As a key member of the development team, I focused on the candidate profile module. This involved creating intuitive forms for students to showcase their skills and projects, implementing resume parsing and generation features, and ensuring secure data handling. The platform successfully facilitated the recruitment process for over 500 students and 30+ companies.",
    technologies:
      "Next.js 15, React 19, TypeScript, Prisma ORM, PostgreSQL, NextAuth.js, Tailwind CSS, Framer Motion, TanStack Query, Cloudinary",
    images: [
      "https://placehold.co/600x400/1e1e1e/00ff41?text=FIT+Future+Careers+1",
      "https://placehold.co/600x400/1e1e1e/00ff41?text=FIT+Future+Careers+2",
    ],
  },
  {
    title: "Microservices E-Commerce Platform",
    subtitle: "Aug 2024 - Dec 2024",
    description:
      "Led development of a microservices-based e-commerce platform with customer-facing frontend, admin dashboard, and Spring Boot backend services. Implemented order processing system with real-time inventory tracking and built admin dashboard with analytics, product management, and customer management features.",
    details:
      "This project was a deep dive into microservices architecture. I designed and implemented the core services using Spring Boot, ensuring loose coupling and high scalability. The frontend was built with Next.js for SEO and performance. I also set up the CI/CD pipelines and containerization using Docker and Kubernetes for deployment.",
    technologies:
      "Next.js, TypeScript, React, Spring Boot, Java, MySQL, MongoDB, Kafka, Keycloak, Docker, Spring Cloud Gateway",
    images: ["/microservices.avif"],
  },
  {
    title: "Spreadit Global Main Platform",
    subtitle: "Jun 2024 - Jul 2024",
    description:
      "Frontend development of Spreadit Global's main business website and multi-portal platform. Built comprehensive UI/UX including authentication flows, user dashboards, category selection, account management, and business service interfaces for both affiliate and main platform users.",
    details:
      "I was responsible for the entire frontend development of the platform. This included creating a responsive and accessible UI using React and Tailwind CSS. I implemented complex forms with validation using React Hook Form and Zod, and managed global state effectively. The project required close collaboration with the UI/UX designers to ensure faithful implementation of the designs.",
    technologies:
      "Next.js 14, React, TypeScript, Tailwind CSS, React Hook Form, Zod, Radix UI, Lucide Icons",
    link: "https://spreadit-five.vercel.app/",
    linkText: "Visit Live App",
    images: ["/spreadit.avif"],
  },
  {
    title: "Anothershot",
    subtitle: "Second Year Software Project",
    description:
      "AnotherShot is a platform for discovering, booking, and paying photographers online, featuring interactive portfolios and community engagement. I contributed by integrating a payment gateway, setting up Cloudinary for image management, and converting the app into a PWA to boost accessibility and user engagement.",
    details:
      "AnotherShot simplifies the process of hiring photographers. My contributions focused on the payment infrastructure using Stripe, ensuring secure and reliable transactions. I also optimized image delivery using Cloudinary, which significantly improved the site's load times. Additionally, I implemented PWA features to allow users to install the app on their devices.",
    technologies: "Next.js, Nest.js, TypeScript, MongoDB, Cloudinary, Stripe, PrismaORM",
    link: "https://anothershots.com",
    linkText: "Visit Live Site",
    images: [
      "https://placehold.co/600x400/1e1e1e/00ff41?text=Anothershot+1",
      "https://placehold.co/600x400/1e1e1e/00ff41?text=Anothershot+2",
    ],
  },
  {
    title: "Devlabs Official Website",
    subtitle: "Community Portfolio Platform",
    description:
      "The Devlabs Portfolio Website was built as a user-friendly platform to showcase Devlabs' projects, achievements, and team members, serving as a central hub for visitors to explore and engage with the community.",
    details:
      "The Devlabs website serves as the digital face of the community. I built it using Next.js for static site generation, ensuring blazing fast load times. I integrated Strapi as a Headless CMS to allow non-technical members to update content easily. The design focuses on clean aesthetics and usability.",
    technologies: "Next.js, Strapi, TypeScript",
    link: "https://devlabsbyfit.netlify.app",
    linkText: "Visit Live Site",
    images: ["/devlabs.avif"],
  },
  {
    title: "Internify",
    subtitle: "Internship Tracking System",
    description:
      "Internify is an Internship Tracking System with features such as CV uploading, internship round creation, and application management, aimed at streamlining the internship process for students and coordinators.",
    details:
      "Internify addresses the chaotic process of internship management. I developed the frontend interfaces for students to track their applications and for coordinators to manage rounds. The system provides real-time updates and meaningful insights into the internship progress.",
    technologies: "React.js, Express.js, TypeScript",
    link: "https://www.internifyfit.com/past-contributors",
    linkText: "Visit Live Site",
    images: [
      "https://placehold.co/600x400/1e1e1e/00ff41?text=Internify+1",
      "https://placehold.co/600x400/1e1e1e/00ff41?text=Internify+2",
    ],
  },
  {
    title: "Automated Water Recycling System",
    subtitle: "Jul 2022 - Aug 2023",
    description:
      "As part of a first-year hardware project, we developed an automated water recycling system using the Arduino Uno R3, designed to efficiently recycle and monitor water quality. We created a 3D model and simulation using Blender, custom-designed the PCB using EasyEDA, and used pH/turbidity sensors for real-time monitoring.",
    details:
      "This hardware project was an excellent opportunity to work with physical computing. I programmed the Arduino Uno to read sensor data and control the actuators. The 3D modeling in Blender allowed us to iterate on the physical design before fabrication. The custom PCB design reduced wiring clutter and improved reliability.",
    technologies: "Arduino Uno R3, Blender, EasyEDA, C++",
    images: [
      "https://placehold.co/600x400/1e1e1e/00ff41?text=Water+Recycling+System+1",
      "https://placehold.co/600x400/1e1e1e/00ff41?text=Water+Recycling+System+2",
    ],
  },
];
