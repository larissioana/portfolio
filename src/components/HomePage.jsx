import image from '../assets/image.jpg';
import styled from 'styled-components';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

  const HomePage = ({navToggle}) => {
    
      return (
        <>
        {navToggle ?
          <Wrapper>
            <Section id="home">
            <div className="container">
            <div className='profile-picture-container'>
            <img src={image} alt="Larisa's profile portrait"/>
            </div>
            <h1 className='title'>Frontend Developer</h1>
            <h2 className='name'>Larisa Ioana Oltean</h2>
          </div>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
            </Section>
           </Wrapper>

          : 
          <Section id="home">
          <div className="container">
          <div className='profile-picture-container'>
          <img src={image} alt="Larisa's profile portrait"/>
          </div>
          <h1 className='title'>Frontend Developer</h1>
          <h2 className='name'>Larisa Ioana Oltean</h2>
        </div>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
          </Section>
            
  }
            </>
      )
  };

  export default HomePage;

  const Wrapper = styled.div`
  background:var(--bg);
  filter: blur(10px);
  `

  const Section = styled.section`

      padding:10rem 0rem 0rem;
      display: grid;
      place-content: center;
      place-items: center;
      overflow-x: hidden;

    .container{
      padding:0rem 2rem;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    
    }
    .profile-picture-container{
      width:9rem;

  }

    img{
      width:9rem;
      height:9rem;
      object-fit: cover;
      object-position: top;
      border-radius: 50%;
    }

  h1{
      font-size:clamp(1.4rem, 2vw, 2rem);
      margin-top:2rem;
      text-align: center;
      background: -webkit-linear-gradient(right, var(--gradient-clr1) 0%, var(--gradient-clr2) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2{
      font-size:clamp(2.2rem,3vw,3.1rem);
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
    
  `