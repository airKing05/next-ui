import {ThemeProvider} from "styled-components";
import { lightTheme, darkTheme } from "./Theme";
import { GlobalStyles } from './GlobalStyle';
import React, {useState} from 'react';


export default function ThemeButton() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
  }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <button className="btn btn-outline-danger" onClick={themeToggler}>Switch theme</button>   
      </ThemeProvider>
    )
}
