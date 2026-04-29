export type CommandResult = string | null;

export const HELP_TEXT = `Available commands:
  help          - Show this help message
  clear         - Clear the terminal
  load          - Load an image file for ASCII conversion
  mode [type]   - Set ASCII mode (dots/full)
  width [num]   - Set output width (default: 80)
  about         - Who is Kavindu?
  skills        - Technical skills & stack
  experience    - Work history
  education     - Academic background
  projects      - Featured projects
  contact       - Get in touch
  kavindu       - Display ASCII portrait
  exit          - Return to main portfolio`;

const ABOUT = `Kavindu Wijegunasekara - Software Engineer
---------------------------------------
I specialize in developing innovative VR/AR applications, dynamic web solutions,
and intuitive mobile applications, delivering impactful and user-friendly digital
experiences across platforms.

I'm a passionate full-stack developer with a love for creating beautiful,
functional, and user-centered digital experiences. I enjoy turning complex
problems into simple, beautiful, and intuitive solutions.`;

const SKILLS = `Technical Skills:
-----------------
• Languages:  C#, Java, Python, TypeScript, JavaScript, Kotlin, Dart, C
• Frameworks: Next.js, NestJS, React, Flutter, Express, Unity
• Database:   Prisma, MongoDB, MySQL, Firebase
• Tools:      Git, Docker, Figma, Postman, Linux, Blender`;

const EXPERIENCE = `Work Experience:
----------------
1. Associate Software Engineer (Part-time) @ 4Axis
   Oct 2025 - Present
   - iOS Swift application development
   - Implementation and maintenance of DrawKids iOS app

2. Software Engineer Intern @ 4Axis
   Feb 2025 - Sep 2025
   - VR application development using Unity & C#
   - Immersive experience development`;

const EDUCATION = `Education:
----------
1. University of Moratuwa (2022 - 2026)
   - B.Sc. (Hons) in Information Technology
   - CGPA: 3.6

2. Rahula College (2017 - 2020)
   - Physical Science Stream
   - Results: Combined Maths (A), Chemistry (A), Physics (B)`;

const PROJECTS = `Featured Projects:
------------------
1. Drawing Desk VR
   - PICO VR application — 3D painting & interaction
   - Stack: C#, Unity

2. Anothershot
   - Platform for discovering & booking photographers
   - Stack: Next.js, Nest.js, TypeScript, MongoDB, Stripe

3. Devlabs Official Website
   - Community Portfolio Platform
   - Stack: Next.js, Strapi, TypeScript

4. Internify
   - Internship Tracking System
   - Stack: React.js, Express.js, TypeScript`;

const CONTACT = `Contact Information:
--------------------
• Email:    kavinduvijegunasekara@gmail.com
• GitHub:   github.com/Kavinduprabasara
• LinkedIn: linkedin.com/in/kavindu-wijegunasekara-49729a219`;

const DOTS = " .·:∴•●";
const ASCII_FULL = " .:-=+*#%@";

export function imageToASCII(
  image: HTMLImageElement,
  width: number,
  mode: "dots" | "full"
): string {
  const chars = mode === "dots" ? DOTS : ASCII_FULL;
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const height = Math.floor(width * (image.height / image.width) * 0.55);
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  const { data } = ctx.getImageData(0, 0, width, height);
  let ascii = "";
  for (let i = 0; i < data.length; i += 4) {
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    ascii += chars[Math.floor((gray / 255) * (chars.length - 1))];
    if ((i / 4 + 1) % width === 0) ascii += "\n";
  }
  return ascii;
}

export function buildCommands(opts: {
  mode: "dots" | "full";
  width: number;
  setMode: (m: "dots" | "full") => void;
  setWidth: (w: number) => void;
  triggerLoad: () => void;
  triggerKavindu: () => void;
  exit: () => void;
  clear: () => void;
}): Record<string, (args: string[]) => CommandResult> {
  return {
    help: () => HELP_TEXT,
    clear: () => {
      opts.clear();
      return null;
    },
    load: () => {
      opts.triggerLoad();
      return "Select an image file...";
    },
    mode: (args) => {
      if (!args[0]) return `Current mode: ${opts.mode}\nAvailable modes: dots, full`;
      if (args[0] === "dots" || args[0] === "full") {
        opts.setMode(args[0]);
        return `Mode set to: ${args[0]}`;
      }
      return "Invalid mode. Use 'dots' or 'full'";
    },
    width: (args) => {
      if (!args[0]) return `Current width: ${opts.width}`;
      const w = parseInt(args[0]);
      if (w > 10 && w < 200) {
        opts.setWidth(w);
        return `Width set to: ${w}`;
      }
      return "Width must be between 10 and 200";
    },
    about: () => ABOUT,
    skills: () => SKILLS,
    experience: () => EXPERIENCE,
    education: () => EDUCATION,
    projects: () => PROJECTS,
    contact: () => CONTACT,
    kavindu: () => {
      opts.triggerKavindu();
      return "Loading portrait...";
    },
    exit: () => {
      opts.exit();
      return "Redirecting...";
    },
  };
}
