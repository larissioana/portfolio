import styled from "styled-components";

const About = () => {
    return (
        <AboutSection id='about'>
        <h2 className="about-me">about.</h2>
        <p>I'm a <span>Frontend Developer</span> based in Vienna. I'm passionate about creating good-looking user interfaces and great user experiences. My interest is building interactive, responsive, and accessible websites. I have built Single-Page-Apps using React, static and server-side websites with Next.js, as well as user authentication server with Node.js/Express.js. <br/>
           My project section contains some websites I have built.
        </p>
        </AboutSection>
    )
};

export default About;

const AboutSection = styled.section`
    margin-top:-1rem;
    padding:0rem 2rem;

    .about-me{
  background: -webkit-linear-gradient(top, var(--gradient-clr1), var(--gradient-clr2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top:5rem;
  text-align: center;
  font-size:clamp(1.8rem, 3vw, 2.5rem);
  text-transform: lowercase;
    }
    
    h1{
  background: -webkit-linear-gradient(top, var(--gradient-clr3), var(--gradient-clr4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top:4rem;
  text-align: center;
  font-size:clamp(1.8rem, 3vw, 2.5rem);
  }

    p{
    color: var(--clr-font);
    max-width:700px;
    text-align:center;
    font-size:clamp(1.1rem, 2vw, 1.2rem);
    margin-top:1.8rem;
    line-height: 1.4;
  

   span{
    background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr2) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:1.3rem;
    font-weight: bolder;
  }
}
`