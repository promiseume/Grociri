import React, { createContext, useState, useEffect } from 'react';


type availableThemes = "light" | "dark";

type ThemeContextType = {
  mode: availableThemes;
  updateTheme: Function;
};
export const ThemeContext = createContext<ThemeContextType>({
  mode: 'dark',
  updateTheme: (theme: availableThemes) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<{mode: availableThemes}>({mode: 'dark'});

  const updateTheme = (newTheme: availableThemes) => {
    if (!newTheme) {
      const mode = theme.mode === 'dark' ? 'light' : 'dark';
      setTheme({ mode });
    } else {
      setTheme({ mode: newTheme });
      localStorage.setItem('theme', JSON.stringify(newTheme));

    }
  };
  const getTheme = () => {
    try{
      const themeData = localStorage.getItem(JSON.parse('theme'));
      if(themeData && themeData == "light" || themeData == "dark"){
       updateTheme(themeData)
      } 
    }
    catch(error){
      console.log(error);
    } finally {
        if (!theme.mode) {
            updateTheme('dark');
        }
    }
  };
  useEffect(() => {
    getTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ mode: theme.mode, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
