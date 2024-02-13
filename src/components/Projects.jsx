import React from "react";

// ProjectCard component
function ProjectCard({
  imgSrc,
  altText,
  title,
  description,
  tags,
  projectLink,
  githubLink,
}) {
  return (
    <div className="mt-5 max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg" src={imgSrc} alt={altText} />
      </a>
      <div className="p-5">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        {tags.map((tag, index) => (
          <p
            key={index}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg mr-1"
          >
            {tag}
          </p>
        ))}
        <div className="flex justify-end">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 mt-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// Projects component
function Projects() {
  const projectsData = [
    {
      imgSrc: "Queue-Smart.png",
      altText: "Queue Smart Project",
      title: "Queue Smart",
      description:
        "Transform the dining experience for busy restaurants and cafes with our QR-based queue management system, enabling customers to join a digital queue seamlessly and enhance overall efficiency.",
      tags: ["JavaScript", "React", "Express.js", "Node.js", "GraphQL"],
      projectLink: "https://queue-smart.onrender.com",
      githubLink: "https://github.com/miloyang/Queue-Smart",
    },
    {
      imgSrc: "DIY-Buddy.png",
      altText: "DIY Buddy Project",
      title: "DIY Buddy",
      description:
        "A DIY Project Planner that allows you to login and plan your DIY projects, along with keeping track of your budget estimation and materials needs.",
      tags: ["JavaScript", "MySQL", "Express.js", "Node.js", "Sequelize"],
      projectLink: "https://diy-buddy-app-final-3c3eca16d427.herokuapp.com/",
      githubLink: "https://github.com/miloyang/DIY-Buddy",
    },
    {
      imgSrc: "Park-With-Access.png",
      altText: "Park With Access Project",
      title: "Park With Access",
      description:
        "Park with Access App is a dedicated solution, committed to enhancing urban mobility by providing personalized parking options for everyone.",
      tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
      projectLink: "https://honguyen00.github.io/map-parking/",
      githubLink: "https://github.com/honguyen00/map-parking",
    },
    {
      imgSrc: "SQL-Employee-Tracker.png",
      altText: "SQL Employee Tracker",
      title: "SQL Employee Tracker",
      description:
        "This is a command-line application that dynamically generates a company's employee database, using Node.js, Inquirer, and MySQL.",
      tags: ["JavaScript", "MySQL", "Node.js", "Inquirer"],
      projectLink: "https://github.com/miloyang/SQL-Employee-Tracker",
      githubLink: "https://github.com/miloyang/SQL-Employee-Tracker",
    },
    {
      imgSrc: "Share-Your-Thought.png",
      altText: "Share Your Thought",
      title: "Share Your Thought",
      description:
        "This project aimed to develop an API for a social network web application. The API facilitates users in sharing their thoughts, reacting to the thoughts of their friends, and managing their friend lists.",
      tags: ["JavaScript", "MongoDB", "Node.js", "Insomnia"],
      projectLink: "https://github.com/miloyang/Share-Your-Thoughts",
      githubLink: "https://github.com/miloyang/Share-Your-Thoughts",
    },
    {
      imgSrc: "Offline-Text-Editor.png",
      altText: "Offline Text Editor",
      title: "Offline Text Editor",
      description:
        "This application enhances an existing text editor by incorporating PWA capabilities, enabling it to operate seamlessly offline.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "PWA"],
      projectLink: "https://offline-text-editor.onrender.com",
      githubLink: "https://github.com/miloyang/Offline-Text-Editor",
    },
    {
      imgSrc: "Weather-App.png",
      altText: "Weather App",
      title: "Weather App",
      description:
        "Experience real-time weather insights for Australian cities with this browser-based dashboard, seamlessly integrating Open Weather API data to provide current conditions and a 5-day forecast, boasting a clean, polished, and responsive user interface dynamically powered by JavaScript.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      projectLink: "https://miloyang.github.io/weather-app",
      githubLink: "https://github.com/miloyang/weather-app",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-between">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
