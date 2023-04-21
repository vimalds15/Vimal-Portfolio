import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  sym,
  ecom,
  twit
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "ML Engineer",
    icon: backend,
  },
  {
    title: "YouTuber",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Tappit (Startup)",
    icon: null,
    iconBg: "#383E56",
    date: "April 2021 - June 2021",
    points: [
      "Led the design and development of digitalisation of the cafeteria in the IT sector, by using the latest technologies of ReactJs",
      "Designed and implemented the scalable Admin dashboard of the system which displays metrics such as order count, sales etc.,",
      "Connected the APIs using Axios, fixed bugs",
      "Implemented the state management of the app using Redux",
      "Implemented Chart.js to display the metrics graphically"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sympto Tracker",
    description:
      "Web-based platform that allows users to predict whether the user is diagnosed with the given disease which is trained by ML Models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sym,
    source_code_link: "https://github.com/vimalds15/sympto-tracker",
    live_link:"https://sympto-tracker.vercel.app/"
  },
  {
    name: "Av Pets",
    description:
      "A platform where users can buy and sell pets and also users can login, logout and register accounts. It has admindashboard functionality where the admin has approval, mark as delivered, view list of products, edit etc., It has the CRUD functionality.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "BootStrap",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: ecom,
    source_code_link: "https://github.com/vimalds15/av-pet-mern",
    live_link:"https://av-pets-mern.vercel.app/"
  },
  {
    name: "Twitter Clone",
    description:
      "A UI Clone of the popular social media app Twitter. Built using React Native.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo",
        color: "green-text-gradient",
      },
    ],
    image: twit,
    source_code_link: "https://github.com/vimalds15/twitter-full-clone",
    live_link:"https://youtube.com/playlist?list=PLWZAZPy59lXgTx2BO7pY0Zcn9BsWn5yAK"
  },
];

export { services, technologies, experiences, testimonials, projects };
