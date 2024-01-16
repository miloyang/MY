import React from "react";

// Reusable ListItem component
const ListItem = ({ icon, text }) => (
  <li className="flex items-center space-x-3 rtl:space-x-reverse mt-3">
    <svg
      className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 12"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 5.917 5.724 10.5 15 1.5"
      />
    </svg>
    <span>{text}</span>
  </li>
);

function Resume() {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        {/* Resume download link */}
        <a href="MY-Resume.pdf" download>
          <h2 className="text-[25px] cursor-pointer hover:underline font-medium mt-7">
            Click here to download my Resume
          </h2>
        </a>
        {/* List of Front-end Proficiencies */}
        <h2 className="top-title mt-5 mb-3 text-[40px] font-bold text-black tracking-widest">
          Front-end Proficiencies
        </h2>
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
          {/* Reusing ListItem component */}
          <ListItem text="HTML" />
          <ListItem text="CSS" />
          <ListItem text="JavaScript" />
          <ListItem text="jQuery" />
          <ListItem text="Responsive Design" />
          <ListItem text="React" />
          <ListItem text="Bootstrap" />
          <ListItem text="Tailwind" />
        </ul>
        {/* Back-end Proficiencies */}
        <h2 className="top-title mt-5 mb-3 text-[40px] font-bold text-black tracking-widest">
          Back-end Proficiencies
        </h2>
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
          {/* Reusing ListItem component */}
          <ListItem text="APIs" />
          <ListItem text="Node" />
          <ListItem text="Express" />
          <ListItem text="MySQL, Sequelize" />
          <ListItem text="MongoDB, Mongoose" />
          <ListItem text="Rest" />
          <ListItem text="GraphQL" />
          <ListItem text="MERN" />
        </ul>
        {/* Technical Skills */}
        <h2 className="top-title mt-5 mb-3 text-[40px] font-bold text-black tracking-widest">
          Technical Skills
        </h2>
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
          {/* Reusing ListItem component */}
          <ListItem text="GitHub" />
          <ListItem text="VS Code" />
          <ListItem text="Insomnia" />
          <ListItem text="Adobe Packages" />
          <ListItem text="Microsoft Office Packages" />
        </ul>
        {/* Soft Skills */}
        <h2 className="top-title mt-5 mb-3 text-[40px] font-bold text-black tracking-widest">
          Soft Skills
        </h2>
        <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
          {/* Reusing ListItem component */}
          <ListItem text="Client Servicing" />
          <ListItem text="Team Management" />
          <ListItem text="Interpersonal Communication" />
          <ListItem text="Problem Solving" />
          <ListItem text="Time Management" />
          <ListItem text="Organization Skills" />
          <ListItem text="Customer Support" />
          <ListItem text="Team Work" />
        </ul>
      </div>
    </div>
  );
}

export default Resume;
