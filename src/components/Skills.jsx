import styled from "styled-components";
import { technologyData } from '../data/data';

const Skills = () =>
{
    return (
      <>
        <Wrapper>
          <h1 className="skills-title">skills.</h1>
          <div className="technology-icons">
          { 
            technologyData.map((data) => {
            const {id, imgUrl, name} = data
              return <div className="flex-container" key={id}>
              <div className="technology-container" >
                  <img src={imgUrl} alt="technology icons"/>
                  <p>{name}</p>
              </div>
              </div>
             })
          }
          </div>
        </Wrapper>
    
        </>
    )
};

export default Skills;

const Wrapper = styled.section`
margin: -1rem 2rem -2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;

.skills-title
{
  background: -webkit-linear-gradient(top, var(--gradient-clr1), var(--gradient-clr4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 5rem;
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2rem);
  text-transform: lowercase;
}

.technology-icons
{
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  overflow-y: auto;
  padding: 2rem;
  border-radius: .1rem;
  animation: animate 40s infinite linear;

.technology-container:hover 
{
  animation-play-state: paused;
}
  
.technology-container
{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .5rem 0rem;
    width: 100%;
    transition: all .3s ease-in;
    border-radius: .2rem;
    cursor: pointer;

    &:hover
    {
      transform: scale(1.1);
    }

    p
    {
      position: absolute;
      top: 6.5rem;
      font-size: .9rem;
      color: var(--clr-font);
    }
}

.flex-container
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img
{
  margin-left: 1.3rem;
  width: 5rem;
  height: 8rem;
  object-fit: cover;
  padding-bottom: 3rem;
  border-radius: 0%;
}
}

@keyframes animate
{
  0%{
    transform:translateX(100%)
  }
  100%{
    transform: translateX(-100%);
  }
}
`;

