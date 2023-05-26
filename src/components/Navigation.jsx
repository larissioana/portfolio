import { useState } from 'react';
import {TbMoonFilled} from 'react-icons/tb';
import {BsSunFill} from 'react-icons/bs';
import {GrMenu} from 'react-icons/gr';
import {IoCloseSharp} from 'react-icons/io5';
import styled from 'styled-components';

const Navigation = ({toggleThemeHandler}) => {
    const[toggleBtn, setToggleBtn] = useState(true);
    const [navToggle, setNavToggle] = useState(false);

    return (
        <Nav>
            <div className="toggle-btn" onClick={toggleThemeHandler}>
                <button onClick={() => setToggleBtn(!toggleBtn)}>
                    {toggleBtn? <BsSunFill/> 
                    : <TbMoonFilled/>}
                </button>
            </div>
            <div className="toggle-nav">
                <button className='menu' onClick={() => setNavToggle(!navToggle)}>
                   {navToggle?  <IoCloseSharp/> : <GrMenu/> }
                   
                </button>
            </div>
            <div className={`${navToggle ? 'links show-links' : 'links'}`}>
            <ul className="nav-links">
               
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
               
            </ul>
            </div>

        </Nav>
    )
    }

export default Navigation;

const Nav = styled.nav`
  background:var(--nav-bg);;
  display:flex;
  align-items: center;
  width:100vw;
  height:5rem;
  padding:0rem 2rem 0rem 2rem;
  flex-wrap: wrap;
  position:fixed;
  top:0;
  left:0;
  backdrop-filter: blur(8px);
  z-index:10;

  .toggle-btn, .nav-links{
    flex:1;
  }

  .toggle-btn button{
    cursor:pointer;
    color:var(--toggle-btn);
    background:none;
    border:none;
    font-size:3rem;
    z-index:10;
    
  }

  .nav-links{
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;

    a{
    text-decoration: none;
    font-size:clamp(.9rem, 2vw, 1.3rem);
    color: var(--clr-font);
    font-weight: 500;
    letter-spacing: .1rem;
    text-transform: uppercase;
  }
  }

  .toggle-nav button{
    width:4rem;
    border:none;
    font-size:1.4rem;
    cursor:pointer;
    display: none;
    height:3rem;
    clip-path: circle();
    background:var(--toggle-btn);
  
    .menu-icon{
    width:2rem;
    height:2rem;
    padding:.5rem;
   
}
 }

  

  @media (max-width:768px){
    
  .toggle-nav button{
    display:block;

  }
       .links{
        position: absolute;
        top:12vh;
        right:0;
        display:grid;
        width:100%;
        min-height:100vh;
        background: -webkit-linear-gradient(bottom, var(--gradient-clr2) 0%, var(--gradient-clr1) 100%);;
        transform: scale(0);
        transition:.4s ease-in-out;

       a{
            color: white;
            font-size:1.2rem;
            
        }
        ul{
            display:flex;
            flex-direction: column;
        }
        li{
            margin-bottom:3rem;
          
        }    
    }
    .show-links{
    transform: scale(1);
    
  }
  }
`

