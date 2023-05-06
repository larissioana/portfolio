import { useState } from 'react';
import {TbMoonFilled} from 'react-icons/tb';
import {BsSunFill} from 'react-icons/bs';
import styled from 'styled-components';

const Navigation = ({toggleThemeHandler}) => {
    const[toggleBtn, setToggleBtn] = useState(true);
    return (
        <Nav>
            <div className="toggle-btn" onClick={toggleThemeHandler}>
                <button onClick={() => setToggleBtn(!toggleBtn)}>
                    {toggleBtn? <BsSunFill/> : <TbMoonFilled/>}
                </button>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
            </ul>

        </Nav>
    )
    }

export default Navigation;

const Nav = styled.nav`
  background:var(--nav-bg);
  display:flex;
  align-items: center;
  width:100vw;
  height:5rem;
  padding:0rem 1rem;
  flex-wrap: wrap;
  position:fixed;
  top:0;
  left:0;
  backdrop-filter: blur(8px);
  z-index:9;

  .toggle-btn, .nav-links{
    flex:1;
  }

  .toggle-btn button{
    cursor:pointer;
    color:var(--toggle-btn);
    background:none;
    border:none;
    font-size:3rem;
  }

  .nav-links{
    display:flex;
    justify-content: center;
    align-items: center;

    a{
    text-decoration: none;
    font-size:clamp(1rem, 2vw, 1.3rem);
    color: var(--clr-font);
    font-weight: 500;
    letter-spacing: .2rem;
    text-transform: uppercase;
  }
  }

`

