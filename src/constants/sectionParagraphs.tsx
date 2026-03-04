import {
  aeris,
  atlasbuilding,
  detour,
  hangman,
  pades,
  searchsift,
  tictactoe,
  v4,
} from "../assets/projects";

export const aboutSection = {
  summaryTitle:
    "Passionate Web Developer who treats code like a well-balanced game build.",
  summaryParagraph: [
    "Known online as Gekk (or sometimes Eris), a gamer at heart and a developer by craft — combining both passions through a love for optimization, structure, and continuous improvement. Whether refining code architecture, improving workflows, or enhancing performance, each project is another chance to chase the next upgrade.",
    "With experience building applications using React, Next.js, and Electron, and a focus on feature-based architecture, Zustand, and Shadcn/UI, the goal is always to create systems that are efficient, scalable, and enjoyable to work with — just like a perfectly balanced game build.",
  ],
  aboutSkills: [
    {
      title: "Core System - Frontend Development",
      description:
        "Building intuitive and performant interfaces using React and Next.js. Focused on clean, efficient, and maintainable codebases.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-primary"
        >
          <path d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"></path>
        </svg>
      ),
    },
    {
      title: "Mission Log - Ongoing Development Journey",
      description:
        "A continuous journey of growth - from refining fundamentals to learning advanced frontend concepts. Every mission adds new experience points to the overall build.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="text-primary"
          viewBox="0 0 256 256"
        >
          <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path>
        </svg>
      ),
    },
    {
      title: "Crew Sync - Collaboration & Communication",
      description:
        "Working effectively within cross-functional teams, translating ideas into clear technical solutions, and maintaining open communication throughout the development lifecycle.",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="text-primary"
        >
          <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>
        </svg>
      ),
    },
  ],
};

export const skillsSection = {
  skillsParagraph: [
    "A frontend developer focused on building clean, efficient, and maintainable web applications using React, Next.js, and Electron. Familiar with feature-based architecture, Zustand for state management, and Shadcn/UI for building consistent and reusable interfaces. Experienced working in Agile (Scrum) teams and collaborating with different disciplines to develop reliable and user-friendly frontends.",
    "Enjoys improving code structure, exploring frontend architecture, and finding ways to make development workflows more efficient. Constantly learning and refining skills to build applications that balance performance, scalability, and maintainability.",
  ],
  slugs: [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "vercel",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "figma",
  ],
};

export const projectsSection = {
  projects: [
    {
      id: 1,
      tags: ["Next.js", "Tailwind", "Hero UI", "CMS Payload", "Framer Motion"],
      title: "Atlas Building",
      description:
        "Atlas Building is a modern website built with Next.js and Tailwind CSS. It features a responsive design, interactive UI components, and a clean layout that showcases the company's services and products effectively.",
      code: "https://github.com/Andrei-Cervantes/atlas-building-fe",
      demoUrl: "https://atlas-building-fe.vercel.app/",
      image: atlasbuilding,
    },
    {
      id: 2,
      tags: [
        "React",
        "Tailwind",
        "Zustand",
        "Eleven Labs",
        "Framer Motion",
        "AssemblyAI",
        "Shadcn/UI",
      ],
      title: "Detour",
      description:
        "Detour is a React-based application that enables users to easily create and configure a custom chatbot for their website, using their own pages as a dynamic knowledge base to improve navigation and user support. Built with Tailwind CSS and shadcn/ui for a polished interface, Zustand for state management, Framer Motion for smooth interactions, and powered by ElevenLabs and AssemblyAI for voice and transcription capabilities, it delivers a modern, intelligent, and seamless chatbot experience.",
      code: "",
      demoUrl: "https://app.detour.run/",
      image: detour,
    },
    {
      id: 3,
      tags: ["React", "Tailwind"],
      title: "Hangman",
      description:
        "Hangman is a classic word-guessing game built with React, featuring a clean and responsive interface styled with Tailwind CSS. It uses component-based architecture and state management to handle game logic, turns, and win conditions efficiently. This project highlights interactive UI development and dynamic rendering in a simple yet engaging application.",
      code: "https://github.com/Andrei-Cervantes/Hangman",
      demoUrl: "https://hangman-iota-seven.vercel.app/",
      image: hangman,
    },
    {
      id: 4,
      tags: ["React", "Bootstrap"],
      title: "Pades",
      description:
        "Pades is a printing company website built with React and Bootstrap. It features a responsive design, interactive UI components, and a clean layout that showcases the company's services and products effectively.",
      code: "https://github.com/Andrei-Cervantes/pades-printing",
      demoUrl: "https://pades-printing-black.vercel.app/",
      image: pades,
    },
    {
      id: 5,
      tags: ["Next.js", "Tailwind", "Zustand", "Shadcn/UI"],
      title: "SearchSift",
      description:
        "SearchSift is a monitoring dashboard built with Next.js that tracks the status of scraped articles, allowing users to see whether content is processing, completed, or has encountered errors. Styled with Tailwind CSS and shadcn/ui, and powered by Zustand for streamlined state management, it provides a clean and efficient interface for overseeing content workflows in real time.",
      code: "",
      demoUrl: "https://search-sift.media-meter.in/",
      image: searchsift,
    },
    {
      id: 6,
      tags: ["React", "Tailwind"],
      title: "Tic Tac Toe",
      description:
        "Tic Tac Toe is a classic two-player game built with React, featuring a clean and responsive interface styled with Tailwind CSS. It uses component-based architecture and state management to handle game logic, turns, and win conditions efficiently. This project highlights interactive UI development and dynamic rendering in a simple yet engaging application.",
      code: "https://github.com/Andrei-Cervantes/tictactoe_react",
      demoUrl: "https://tictactoe-react-weld.vercel.app/",
      image: tictactoe,
    },
    {
      id: 7,
      tags: ["React", "Tailwind", "Ant Design"],
      title: "V4",
      description:
        "V4 is an internal media monitoring platform built with React that analyzes aggregated content based on client-defined configurations such as keywords and targeted criteria. Styled with Tailwind CSS and Ant Design, it provides a structured interface for tracking coverage across social media, radio, newspapers, and TV news, helping clients evaluate public perception, campaign performance, and overall media presence.",
      code: "",
      demoUrl: "https://app.media-meter.com/",
      image: v4,
    },
    {
      id: 8,
      tags: ["React", "Tailwind", "OpenWeather API", "Rapid API", "Shadcn/UI"],
      title: "Aeris",
      description:
        "Aeris is a weather application built with React that provides real-time forecast data through a clean and responsive interface. It uses semantic HTML and Tailwind CSS for structure and styling, focusing on clarity and maintainability. Weather data is fetched from the OpenWeather API and Rapid API, demonstrating practical API integration and dynamic state management.",
      code: "https://github.com/Andrei-Cervantes/weather-app",
      demoUrl: "https://weather-app-mu-seven-19.vercel.app/",
      image: aeris,
    },
  ],
};
