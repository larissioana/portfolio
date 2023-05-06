import image from '../assets/image.jpg';
import styled from 'styled-components';
import Skills from './Skills';
import Projects from './Projects';

const HomePage = () => {
  
    return (
        <>
        <Wrapper id="home">
        <div className="about-me">
        <img src={image} alt="Larisa Oltean"/>
        <h2 className='title'>FrontEnd Developer.</h2>
        <h3 className='name'>Larisa Ioana Oltean &copy;</h3>
        <p>I'm a <span>FrontEnd Developer</span> passionate about creating good-looking user interfaces. My interest is building interactive, responsive, and accessible websites. 
           My project section containes some websites I have build.
        </p>
       </div>
        <Skills/>
        <Projects/>
        </Wrapper>
        </>
    )
};

export default HomePage;

const Wrapper = styled.div`
    margin:8rem 1rem 0rem;
    display: grid;
    place-content: center;
    place-items: center;

    .about-me{
    padding:0rem 2rem;
    display:flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img{
    width:9rem;
    height:9rem;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
  }

 h2{
    font-size:clamp(1.4rem, 2vw, 2rem);
    margin-top:2rem;
    text-align: center;
    background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h3{
    font-size:clamp(2.2rem,5vw,5rem);
    font-weight: bolder;
    text-align: center;
    text-transform: uppercase;
    text-align: center;
    letter-spacing:  .1rem;
    margin-top:1rem;
    background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p{
    color: var(--clr-font);
    max-width:700px;
    text-align: center;
    font-size:clamp(1.1rem, 2vw, 1.3rem);
    margin-top:3rem;
  

   span{
    background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:1.2rem;
    font-weight: bolder;
  }
}
 
`