import styled from "styled-components";
import { technologyData } from '../data/data';

const Skills = () => {

    return (
      <>
        <Wrapper>
         <h4>My skills:</h4>
         <div className="technology-icons">
        {technologyData.map((data) => {
          const {id, imgUrl} = data
            return <div className="flex-container" key={id}>
            <div className="technology-container" >
             <img src={imgUrl} alt="technology icons"/>
            </div>
            </div>
            })}
         </div>
        </Wrapper>
    
        </>
    )
};

export default Skills;

const Wrapper = styled.div`

  h4{
  background: -webkit-linear-gradient(top, var(--gradient-clr3), var(--gradient-clr4));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top:5rem;
  text-align: center;
  font-size:clamp(1.8rem, 3vw, 2.5rem);
  }

  .technology-icons{
  margin-top:4rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: nowrap;
  width:100vw;
  animation:animate 35s linear infinite;
  
  
  .technology-container{
    position:relative;
    padding:.7rem;
    display:flex;
    flex-direction: column;

 
 
  }

  .flex-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
  
  }

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

