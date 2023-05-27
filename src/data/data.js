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
import imageLg from '../assets/E-commerce-lg.png';
import image2 from '../assets/Face-Recognition.png';
import imageLg2 from '../assets/face-recognition-lg.png'
import image3 from '../assets/movies.png';
import imageLg3 from '../assets/movies-lg.png'
import {BsLinkedin, BsGithub} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';

export const myProjects = [
    {
        id:1,
        imageUrl:image3,
        secondImg:imageLg3,
        urlLive:'https://movies-larissioana.vercel.app//',
        urlGithub:'https://github.com/larissioana/movies.git',
        title:'Movies',
        description:' Next.js App using the Movie DB API, Firebase authentication for login functionality, and Framer Motion for animations. The rendering methods I have used are Server-Side and Client-Side.',
        technologies: ['Next.js', 'API', 'Firebase', 'Css Modules', 'Framer Motion']
    },

    {
        id:2,
        imageUrl:image2,
        secondImg:imageLg2,
        urlLive:'https://larissioana.github.io/Face-Recognition/',
        urlGithubBackend:'https://github.com/larissioana/face-recognition-backend.git',
        urlGithub:'https://github.com/larissioana/Face-Recognition.git',
        title:'Face recognition app',
        description:'A complete React App using React class components, Clarifai Ai model API for detecting the location of human face in images (JPG, PNG). It is connected to Postgresql database which stores users details for future logins.',
        technologies:['React', 'Styled-Components', 'API', 'Node.js', 'Postgresql', 'Heroku' ]
    },
    {
        id:3,
        imageUrl:image,
        secondImg:imageLg,
        urlLive:'https://e-commerce-clothing-react.netlify.app/',
        urlGithub:'https://github.com/larissioana/e-commerce-clothing.git',
        title:'E-commerce clothing',
        description:'An E-commerce React App using React functional components and hooks, React Router to navigate between pages, Firebase authentication, Firestore database, and Stripe Api to handle payments.',
        technologies:['React', 'Styled-Components', 'Firebase', 'Firestore', 'Stripe API']
    },
   ]

export const technologyData= [
    {
        id:1,
        imgUrl:html5
      
    },
    {
        id:2,
        imgUrl:css3
        
    },
    {
        id:3,
        imgUrl:sass
       
    },
    {
        id:4,
        imgUrl:js
        
    },
    {
        id:5,
        imgUrl:react
       
    },
    {
        id:6,
        imgUrl:nextjs
    },
    {
        id:7,
        imgUrl:npm
        
    },
    {
        id:8,
        imgUrl:nodejs
    },
    {
        id:9,
        imgUrl:git
    },
    {
        id:10,
        imgUrl:github
     
    },
    {
        id:11,
        imgUrl:postgresql
        
    },
    {
        id:12,
        imgUrl:firebase 
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