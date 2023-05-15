import React, { useEffect, useState } from 'react';
//@ts-ignore
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useTheme } from "next-themes";

// @ts-ignore
const ThemeSwitch = () => {
    // var userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    // const [darkTheme, setDarkTheme] = useState<boolean>(true);
    const { systemTheme, theme, setTheme } = useTheme();

    /*
    useEffect(() => {
        var htmlElem = document.querySelector('body');
        if(htmlElem == null) { return; }
            htmlElem.classList.add( darkTheme ? 'dark': 'light');
            htmlElem.classList.remove(darkTheme ? 'light': 'dark');
    }, [darkTheme]);

    const [theme, setTheme] = useState<string>('dark');
    const ToggleTheme = () => {
        theme == "dark"? setTheme('light'): setTheme("dark")
    }
    useEffect(()=>{
      let htmlEle = document.querySelector('html');
      if(!htmlEle){
        return;
      }
      if(theme==='dark') {
        htmlEle.setAttribute('native-dark-active', '');
      } else{
        htmlEle.removeAttribute('native-dark-active');
      }
    },[theme]);
    */
    
    useEffect(()=>{
        let htmlEle = document.querySelector('html');
        if(!htmlEle){
          return;
        }
        if(theme==='dark') {
          htmlEle.setAttribute('native-dark-active', '');
        } else{
          htmlEle.removeAttribute('native-dark-active');
        }
      },[theme]);

    const ToggleTheme = () => {
        setTheme(theme == "dark"? 'light': 'dark')
    }

    
    
    return (
        <>
            {theme!=='dark' && <div onClick={ToggleTheme}><MoonIcon className="h-10 w-10 mx-2" /></div>}
            {theme==='dark' && <div onClick={ToggleTheme}><SunIcon className="h-10 w-10 mx-2" /></div>}
        </>
    );
}

export default React.memo(ThemeSwitch);