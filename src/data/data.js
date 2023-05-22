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
import sql from '../assets/sql.png';
import postgresql from '../assets/postgresql.png';
import firebase from '../assets/firebase.png';
import image from '../assets/E-commerce-clothing.png';
import image2 from '../assets/Face-Recognition.png';
import image3 from '../assets/movies.png';

export const myProjects = [
    {
        id:1,
        imageUrl:image,
        urlLive:'https://e-commerce-clothing-react.netlify.app/',
        urlGithub:'https://github.com/larissioana/e-commerce-clothing.git',
        title:'E-commerce clothing',
        description:'An E-commerce React App using React functional components and hooks, React Router to navigate between pages, Firebase authentication, Firestore database, and Stripe Api to handle payments.'
    },
    {
        id:2,
        imageUrl:image2,
        urlLive:'https://larissioana.github.io/Face-Recognition/',
        urlGithubBackend:'https://github.com/larissioana/face-recognition-backend.git',
        urlGithub:'https://github.com/larissioana/Face-Recognition.git',
        title:'Face recognition app',
        description:'A complete React App using React class components, Node.js servers, Postgresql database, and Clarifai Api for face detection in pictures(JPG, PNG). The Frontend is styled with Styled Components.'
    },
    {
        id:3,
        imageUrl:image3,
        urlLive:'https://movies-larissioana.vercel.app//',
        urlGithub:'https://github.com/larissioana/movies.git',
        title:'Movies',
        description:' Next.js App using the Movie DB API, Firebase authentication for login functionality, and Framer Motion for animations. The Frontend is styled with Css Modules '
    }
]

export const technologyIcons = [
    html5,
    css3,
    sass,
    js,
    react,
    nextjs,
    npm,
    nodejs,
    git,
    github,
    sql,
    postgresql,
    firebase
]