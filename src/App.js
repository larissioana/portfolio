import { GlobalStyles } from "./Globalstyles";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage';


const getStorageTheme = () => {
 let theme = 'dark-theme';

 if(localStorage.getItem('theme')) {
  theme = localStorage.getItem('theme')
 }
 return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme())
  
  const toggleTheme = () => {
   if(theme === 'light-theme') {
    setTheme('dark-theme')
   } else {
    setTheme('light-theme')
   }
  };

  useEffect(() => {
   document.documentElement.className = theme;
   localStorage.setItem('theme', theme);
  },[theme]);

  return (
    <div className="App">
    <GlobalStyles/>
    <Navigation toggleThemeHandler={toggleTheme}/>
    <HomePage/>
    </div>
  );
}

export default App;
