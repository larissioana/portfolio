import { myProjects } from "../data/data";
import styled from "styled-components";
import {BsGithub} from 'react-icons/bs';

const Projects = () => {
   
    return (
        <Wrapper id="projects">
        <h2>Projects</h2>
        <div className="projects-container">
            {myProjects.map((project) => {
                const {id, imageUrl, title, description, urlGithub, urlLive, urlGithubBackend} = project;
               
               return <div className="project" key={id}>
                <div className="flex-container">
                <a href={urlLive} target="_blank" rel="noreferrer">
               <img src={imageUrl} alt='projects'/>
               </a>
               </div>
                    <div className='project-details'>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="project-code-and-live">
                        {project.urlGithubBackend ? (
                        <div className="source-code">
                         <a href={urlGithubBackend} target="_blank" rel="noreferrer">Backend <BsGithub/></a>
                         <a href={urlGithub} target="_blank" rel="noreferrer">Source <BsGithub/></a>
                         </div>
                        ) : (
                        <a href={urlGithub} target="_blank" rel="noreferrer">Source <BsGithub/></a>
                    )}
                        <a href={urlLive} target="_blank" rel="noreferrer">See Live</a>
                        </div>
                        </div>
            
                    </div>
                    
                })}
        </div>
          
        </Wrapper>
    )
};

export default Projects;

const Wrapper = styled.div`
    margin:4rem 0rem;
    width:100vw;
    overflow-x: hidden;
    h2{
        font-size:clamp(2rem, 3vw, 2.9rem);
        text-align: center;
    }

    .projects-container{
        margin-top: 4rem;

    
     img{
        width:20rem;
        height:auto;
        border-radius: 0%;
        transition:all .2s ease-in;

        &:hover{
            transform:scale(1.1);
            opacity:.9;
        }
        
     }
    }
    .project{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width:100%;
        padding:4rem 2rem;
       
        
    }

    .project-details{
        display:grid;
        place-items: center;
        border-top:1px solid var(--gradient-clr1);
        border-right:2px solid var(--gradient--clr4);
        box-shadow: 2px 0px 5px var(--gradient-clr3);
        background: rgba(15, 13, 14, .9);
        border-radius: .4rem;
        width:30rem;
        padding:1rem 0rem;
     

        h3{
            font-size:clamp(1rem, 2vw, 1.4rem);
        }
        p{
            font-size:clamp(.8rem, 2vw, 1rem);
            color: #f7f7f7;
            line-height: 1.4;
            max-width:25rem;
        }

        .project-code-and-live{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
           
        }

        .source-code{
            display:flex;
            align-items: center;
            justify-content: center;
        }

        a{
            color: #f7f7f7;
            border-radius: .1rem;
            text-decoration: none;
            border-top:2px solid var(--toggle-btn);
            border-right:2px solid var(--gradient-clr2);
            width:8rem;
            height:2rem;
            text-align: center;
            padding:.3rem 0rem;
            cursor:pointer;
            margin-top:2rem;
            margin-left:.7rem;
         
           
        }
    }

`