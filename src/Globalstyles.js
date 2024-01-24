import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*
{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Courier New', Courier, monospace;
}
  
.light-theme
{
  --nav-bg: rgba(241, 237, 232, .6);
  --bg: #f1ede8;
  --clr-font: #181818;
  --toggle-btn: #977aE1;
  --gradient-clr1: #977aE1;
  --gradient-clr2: #d57ebf
  --gradient-clr3:#af9cdf;
  --gradient-clr4:#c40494;
}
  
.dark-theme
{
  --nav-bg: rgba(15, 13, 14, .6);
  --bg: #0F0D0E;
  --clr-font: #f7f7f7;
  --toggle-btn: #F7ADA5;
  --gradient-clr1: #c38160;
  --gradient-clr2: #F9B961;
  --gradient-clr3:#F7ADA5;
  --gradient-clr4:#ffd900;
}

html
{
  scroll-snap-type: y proximity;
}

body
{
  background: var(--bg);
  overflow-x: hidden;
  scroll-behavior: smooth;
}

li
{
  list-style: none;
  padding-left: 2rem;
  color:var(--clr-font);
}
`;