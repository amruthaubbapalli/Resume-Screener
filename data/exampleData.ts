import type { Resume } from '../types';

export const exampleJobDescription = `
Senior Frontend Engineer (React) - InnovateTech Solutions

Job Description:
InnovateTech Solutions is seeking an experienced Senior Frontend Engineer to join our dynamic team. You will be responsible for building the 'client-side' of our web applications. You should be able to translate our company and customer needs into functional and appealing interactive applications. We expect you to be a tech-savvy professional, who is curious about new digital technologies and aspires to combine usability with visual design.

Responsibilities:
- Develop new user-facing features using React.js and TypeScript.
- Build reusable components and front-end libraries for future use.
- Translate designs and wireframes into high-quality code.
- Optimize components for maximum performance across a vast array of web-capable devices and browsers.
- Collaborate with product managers and other engineers to define and implement innovative solutions.
- Mentor junior engineers and contribute to our team's culture of excellence.

Required Skills:
- 5+ years of experience in frontend development.
- Strong proficiency in JavaScript, TypeScript, CSS3, and HTML5.
- Thorough understanding of React.js and its core principles (Hooks, Context API).
- Experience with popular React.js state management libraries (such as Redux Toolkit or Zustand).
- Familiarity with RESTful APIs and modern authorization mechanisms.
- Experience with modern front-end build pipelines and tools (e.g., Webpack, Vite, npm).
- A knack for benchmarking and optimization.
- Excellent communication and teamwork skills.
`;

export const exampleResumes: Omit<Resume, 'id'>[] = [
  {
    name: 'Jane Doe',
    content: `
Jane Doe - Senior Frontend Developer

Summary:
A highly skilled and motivated Senior Frontend Developer with over 7 years of experience specializing in creating responsive, high-performance web applications using React and TypeScript. Proven ability to lead projects, mentor junior developers, and collaborate effectively in fast-paced Agile environments.

Experience:
- Lead Frontend Developer, NextGen Web Apps (2019-Present)
  - Led the development of a major e-commerce platform using React, Redux, and TypeScript, resulting in a 30% increase in user engagement.
  - Architected and implemented a reusable component library, reducing development time for new features by 40%.
  - Optimized application performance, achieving a 95+ Lighthouse score.
  - Mentored a team of 4 junior developers.

- Frontend Developer, Creative Solutions (2016-2019)
  - Developed and maintained client-facing websites using React and JavaScript.
  - Collaborated with UX/UI designers to translate wireframes into pixel-perfect interfaces.

Skills:
- Languages: JavaScript, TypeScript, HTML5, CSS3
- Frameworks/Libraries: React.js, Redux Toolkit, Next.js
- Tools: Vite, Webpack, Git, Jira, Figma
- Other: REST APIs, GraphQL, Performance Optimization
`
  },
  {
    name: 'John Smith',
    content: `
John Smith - Web Developer

Objective:
Seeking a challenging role as a web developer to utilize my skills in web design and development. Eager to learn new technologies and contribute to a team.

Experience:
- Web Developer, Small Business Solutions (2020-Present)
  - Built and maintained WordPress websites for local businesses.
  - Used HTML, CSS, and some jQuery to create custom themes.
  - Gained experience with PHP and MySQL.

- Intern, TechStarters (Summer 2019)
  - Assisted senior developers with bug fixes on a web application.
  - Learned the basics of version control with Git.

Education:
- Bachelor of Science in Computer Science, State University (2020)

Skills:
- HTML, CSS, JavaScript (ES5)
- jQuery, Bootstrap
- Basic understanding of React.
- PHP, WordPress
`
  }
];
