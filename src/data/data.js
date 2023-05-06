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
import image3 from '../assets/Netflix-Clone.png';

export const myProjects = [
    {
        id:1,
        imageUrl:image,
        urlLive:'https://e-commerce-clothing-react.netlify.app/',
        urlGithub:'https://github.com/larissioana/e-commerce-clothing.git',
        title:'E-commerce clothing',
        description:'An E-commerce React App using React functional components and hooks, Firebase authentication, Firestore database, and Stripe Api.'
    },
    {
        id:2,
        imageUrl:image2,
        urlLive:'https://larissioana.github.io/Face-Recognition/',
        urlGithubBackend:'https://github.com/larissioana/face-recognition-backend.git',
        urlGithub:'https://github.com/larissioana/Face-Recognition.git',
        title:'Face recognition app',
        description:'A complete React App using React class components, Node.js servers, Postgresql database, and Clarifai Api for face detection in your pictures.'
    },
    {
        id:3,
        imageUrl:image3,
        urlLive:'https://discover-videos.netlify.app/',
        urlGithub:'https://github.com/larissioana/netflix-clone.git',
        title:'Netflix clone',
        description:'Full stack Next.js App using passwordless authentication with Magic Link, Youtube Api for the content, Hasura Graphql server for user informations.'
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