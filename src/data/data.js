import css3 from '../assets/css3.png';
import sass from '../assets/sass.png';
import html5 from '../assets/html5.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import nextjs from '../assets/nextjs.webp';
import npm from '../assets/npm.png';
import nodejs from '../assets/nodejs.png';
import git from '../assets/git.png'
import github from '../assets/github.png';
import postgresql from '../assets/postgresql.png';
import firebase from '../assets/firebase.png';
import image from '../assets/E-commerce-clothing.png';
import image2 from '../assets/Face-Recognition.png';
import image3 from '../assets/movies.png';
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

export const myProjects = [
    {
        id:1,
        imageUrl:image3,
        urlLive:'https://movies-larissioana.vercel.app//',
        urlGithub:'https://github.com/larissioana/movies.git',
        title:'Movies',
        description:' Next.js App using the Movie DB API, Firebase authentication for login functionality, and Framer Motion for animations. The rendering methods I have used are Server-Side and Client-Side. The Frontend is styled with Css Modules '
    },

    {
        id:2,
        imageUrl:image2,
        urlLive:'https://larissioana.github.io/Face-Recognition/',
        urlGithubBackend:'https://github.com/larissioana/face-recognition-backend.git',
        urlGithub:'https://github.com/larissioana/Face-Recognition.git',
        title:'Face recognition app',
        description:'A complete React App using React class components, Clarifai Ai model API for detecting the location of human face in images (JPG, PNG). It is connected to Postgresql database which stores users details for future logins. The Frontend is styled with Styled Components.'
    },
    {
        id:3,
        imageUrl:image,
        urlLive:'https://e-commerce-clothing-react.netlify.app/',
        urlGithub:'https://github.com/larissioana/e-commerce-clothing.git',
        title:'E-commerce clothing',
        description:'An E-commerce React App using React functional components and hooks, React Router to navigate between pages, Firebase authentication, Firestore database, and Stripe Api to handle payments.'
    },
   ]

export const technologyData= [
    {
        id:1,
        imgUrl:html5,
        title:'HTML5'
    },
    {
        id:2,
        imgUrl:css3,
        title:'CSS3'
    },
    {
        id:3,
        imgUrl:sass,
        title:'SASS'
    },
    {
        id:4,
        imgUrl:js,
        title:'JavaScript'
    },
    {
        id:5,
        imgUrl:react,
        title:'React'
    },
    {
        id:6,
        imgUrl:nextjs,
        title:'Next.js'
    },
    {
        id:7,
        imgUrl:npm,
        title:'NPM'
    },
    {
        id:8,
        imgUrl:nodejs,
        title:'NODE'
    },
    {
        id:9,
        imgUrl:git,
        title:'Git'
    },
    {
        id:10,
        imgUrl:github,
        title:'Github'
    },
    {
        id:11,
        imgUrl:postgresql,
        title:'Postgresql'
    },
    {
        id:12,
        imgUrl:firebase,
        title:'Firebase'
    },
    
];

export const contactData = [
    {
        id:1,
        icon: <BsGithub/>,
        url:'https://github.com/larissioana'
    },
    {
        id:2,
        icon: <BsLinkedin/>,
        url:'https://www.linkedin.com/in/larisa-ioana-oltean-1a874320b/'
    },
    {
        id:3,
        icon:<AiOutlineMail/>,
        url:'mailto:larissoltean@gmail.com'
    }
]