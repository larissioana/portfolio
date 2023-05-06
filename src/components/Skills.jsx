import styled from "styled-components";
import { technologyIcons } from '../data/data';

const Skills = () => {
    return (
        <Wrapper>
         <h4>My skills:</h4>
         <div className="technology-icons">
        {technologyIcons.map((icon, index) => {
            return  <img src={icon} alt="technology icons" key={index}/>
         })}
        </div>
        </Wrapper>
    )
};

export default Skills;

const Wrapper = styled.div`
  /* display:grid;
  place-content: center; */

  h4{
  background: -webkit-linear-gradient(top, var(--gradient-clr3), var(--gradient-clr4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top:5rem;
  text-align: center;
  font-size:clamp(1.8rem, 3vw, 2.7rem);
  }

  .technology-icons{
  margin-top:4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: nowrap;
  width:100vw;
  animation:animate 25s linear infinite;
  

img{
  margin-left:1.3rem;
  width:5rem;
  height:8rem;
  object-fit: cover;
  padding-bottom:3rem;
  border-radius: 0%;
}
 }

 @keyframes animate {
  0%{
    transform:translateX(100%)
  }
  100%{
    transform: translateX(-100%);
  }
}
   
`;