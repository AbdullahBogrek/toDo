import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(localStorage.getItem("darkTheme") || false)

    useEffect(() => {
        localStorage.setItem("darkTheme", darkTheme)
    }, [darkTheme])

    const values = {
        darkTheme,
        setDarkTheme
    }

    return <ThemeContext.Provider value={values}>{ children }</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)