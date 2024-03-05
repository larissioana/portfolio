import styled from "styled-components";

const About = () => {
    return (
        <AboutSection id='about'>
        <h1 className="about-me">about.</h1>
        <p>Hey there <span role="img" aria-label="wave">👋</span>, I'm Larisa, a <span>passionate Frontend Developer</span> based in Vienna. My expertise lies in developing interactive, responsive, and accessible websites. I specialize in building dynamic Single-Page Applications using React. I leverage React’s component-based architecture and state management capabilities to create user interfaces that enhance user interaction and experience.
In addition to React, I develop both static and server-side rendered websites in Next js, and also implement secure user authentication functionalities with Node.js/Express.js <br/>
           My project section contains some websites I have built.
        </p>
        </AboutSection>
    )
};

export default About;

const AboutSection = styled.section`
    margin-top:-1rem ;
    padding:0rem 2rem;
    scroll-snap-align: start;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .about-me{
  background: -webkit-linear-gradient(top, var(--gradient-clr1), var(--gradient-clr1));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top:5rem;
  text-align: center;
  font-size:clamp(1.8rem, 3vw, 2rem);
  text-transform: lowercase;
    }
    
    h1{
  background: -webkit-linear-gradient(top, var(--gradient-clr2), var(--gradient-clr2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top:4rem;
  text-align: center;
  font-size:clamp(1.8rem, 3vw, 2.5rem);
  }

    p{
    color: var(--clr-font);
    width: 800px;
    text-align:center;
    font-size:clamp(.9rem, 2vw, 1.2rem);
    margin-top:1.8rem;
    line-height: 1.4;
    padding: 0rem 2rem;

   span{
    background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:clamp(1.1rem, 2vw, 1.3rem);
    font-weight: bolder;
  }
}
@media only screen and (max-width: 600px) {
        p {
            width: 100%; 
        }
    }
`