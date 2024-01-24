import { myProjects } from "../data/data";
import styled from "styled-components";
import {BsGithub} from 'react-icons/bs';

const Projects = () =>
{
   
    return (
        <Wrapper id="projects">
        <h1 className="projects-title">projects.</h1>
        <div className="projects-container">
            {myProjects.map((project) => {
                const {id, imageUrl, secondImg, title, description, urlGithub, urlLive, urlGithubBackend} = project;
               
               return <div className="project" key={id}>
                <div className="flex-container">
               <img className="firstImg" src={imageUrl} alt='projects'/>
               <img className="secondImg" src={secondImg} alt='projects'/>
               </div>
                    <div className='project-details'>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="technologies">
                        {project.technologies.map((data, index) => {
                            return <div key={index}>
                             <p className="name">{data}</p>
                                </div>
                        })}
                        </div>
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

const Wrapper = styled.section`
    margin:4rem 0rem;
    width:70vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    scroll-snap-align: start;
  
   .projects-title{
        font-size:clamp(1.8rem, 3vw, 2rem);
        text-align: center;
        text-transform: lowercase;
    }

    .flex-container, .project-details{
        flex:1;
    }

    .flex-container{
        position:relative;
    }

    h3{
            font-size:clamp(1rem, 2vw, 1.4rem);
            color:var(--toggle-btn);
            padding-bottom: 1rem;
        }

     .firstImg{
        width:22%;
        min-width:22%;
        height:auto;
        border-radius: 0%;
        position:absolute;
        bottom:2rem;
     }

     .secondImg{
        min-width: 100%;
        height:auto;
     }

     .technologies{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top:2rem;
        color:var(--clr-font);
        
       .name{
            background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr4) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            line-height: 1.7rem;
            margin-top:-.6rem;
            padding:.5rem;
            -webkit-text-stroke: 1px var(--gradient-clr1);
            font-size:.9rem;
            margin-left:.5rem;
            border-radius: 0px 0px 5px 5px;
        }
     }
    
    .project{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding:4rem 0rem;
        width:100%;
     }

    .project-details{
        display:grid;
        place-items: center;
        border-top:1px solid var(--gradient-clr1);
        border-right:2px solid var(--gradient--clr4);
        box-shadow: 2px 0px 5px var(--gradient-clr3);
        background: rgba(15, 13, 14, .9);
        border-radius: .4rem;
        padding:1rem 0rem;
        max-width:28rem;
        min-width:19rem;
    
      
        p{
            font-size:clamp(.8rem, 2vw, 1rem);
            color: #f7f7f7;
            line-height: 1.4;
            max-width:25rem;
            padding:0rem .5rem;
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
            margin-top:2rem;
            margin-left:.7rem;
         }
    }

`