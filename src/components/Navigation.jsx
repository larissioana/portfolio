import { useState, useEffect } from 'react';
import {TbMoonFilled} from 'react-icons/tb';
import {BsSunFill} from 'react-icons/bs';
import {GrMenu} from 'react-icons/gr';
import {IoCloseSharp} from 'react-icons/io5';
import styled from 'styled-components';

  const Navigation = ({toggleThemeHandler, setNavToggle, navToggle}) => {
      const[toggleBtn, setToggleBtn] = useState(true);
    
      const [heightOfNavbar, setHeightOfNavbar] = useState(false);
    
      useEffect(() => {
      
          const changeHeight = () => {
              if(window.scrollY > 0) {
                setHeightOfNavbar(true);
              } else {
                setHeightOfNavbar(false);
              }
              
          };
          window.addEventListener('scroll', changeHeight);
        return () =>  window.removeEventListener('scroll', changeHeight);
      
      },[heightOfNavbar]);
    
      return (
          <Nav className={`${heightOfNavbar ? 'active' : ""}`}>
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
                      <a href="#about">About</a>
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
    height:100px;
    padding:0rem 2rem 0rem 2rem;
    flex-wrap: wrap;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    transition: all .3s ease-in;

    &.active{
    height: 130px;
    backdrop-filter:blur(20px);
    }

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
      padding:1rem;
      clip-path: circle();
      background:var(--toggle-btn);
      color:#17181a;
      font-weight: bolder;
      .menu-icon{
      width:2rem;
      height:2rem;
      padding:.5rem;
      
    
  }
  }

      @media (max-width:1200px){
      .toggle-btn, .toggle-nav{
            z-index:10;
      
          }
      .toggle-nav button{
        display:block;
      }
          .links{
            position: absolute;
            top:0vh;
            right:0;
            display:grid;
            width:50%;
            min-height:100vh;
            background:var(--bg);
            transform: translateX(100%);
            transition:.4s ease-in-out;

          a{
                color: var(--clr-font);
                font-size:1.1rem;
      
                
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
        transform: translateX(0);
        
      }
      }

    `;

