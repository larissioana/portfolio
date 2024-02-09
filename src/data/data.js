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
import image2 from '../assets/Face-Recognition.png';
import imageLg2 from '../assets/face-recognition-lg.png'
import image3 from '../assets/movies.png';
import imageLg3 from '../assets/movies-lg.png';
import figma from '../assets/figma.png';
import ts from '../assets/ts.png';
import gitlab from '../assets/gitlab.png';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

export const myProjects = [
    {
        id:1,
        imageUrl:image3,
        secondImg:imageLg3,
        urlLive:'https://tmdb-woad-beta.vercel.app/',
        urlGithub:'https://github.com/larissioana/TMDB.git',
        title:'Movies',
        description:' Next.js App with functionalities such as search capabilities, pagination, movie details, embedded Youtube trailers, actor profiles, information on various movie genres, and a modern responsive design. ',
        technologies: ['Next.js', 'TMDB API', 'Firebase', 'Css Modules', 'Framer Motion', 'MUI', 'ReactPlayer', 'React Modal', 'Axios', 'Github', 'Vercel']
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
        technologies:['React', 'Styled-Components', 'API', 'Node.js', 'Postgresql', 'Heroku', 'Github' ]
    },
   ]

export const technologyData =
[
    {
        id:1,
        imgUrl:html5,
        name:'Html5'
      
    },
    {
        id:2,
        imgUrl:css3,
        name:'Css3'
        
    },
    {
        id:3,
        imgUrl:sass,
        name:'Sass'
       
    },
    {
        id:4,
        imgUrl:js,
        name:'JavaScript'
        
    },
    {
        id:5,
        imgUrl:react,
        name:'React'
       
    },
    {
        id:6,
        imgUrl:nextjs,
        name:'Next.js'
    },
    {
        id:15,
        imgUrl:ts,
        name:'TypeScript'
     
    },
    {
        id:7,
        imgUrl:npm,
        name:'Npm'
        
    },
    {
        id:8,
        imgUrl:nodejs,
        name:'Node.js'
    },
    {
        id:9,
        imgUrl:git,
        name:'Git'
    },
    {
        id:10,
        imgUrl:github,
        name:'Github'
     
    },
    {
        id:13,
        imgUrl:gitlab,
        name:'Gitlab'
     
    },
    {
        id:11,
        imgUrl:postgresql,
        name:'Postgresql'
        
    },
    {
        id:12,
        imgUrl:firebase,
        name:'Firebase'
    },
    {
        id:14,
        imgUrl:figma,
        name:'Figma'
    },
    
];

export const contactData =
[
    {
        id:1,
        icon: <BsGithub/>,
        url:'https://github.com/larissioana'
    },
    {
        id:2,
        icon: <BsLinkedin/>,
        url:'https://www.linkedin.com/in/larisaoltean'
    },
    {
        id:3,
        icon:<AiOutlineMail/>,
        url:'mailto:larissoltean@gmail.com'
    }
]