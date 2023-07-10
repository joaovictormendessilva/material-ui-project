import { Box, ThemeProvider } from "@mui/material";
import { createContext, useContext, useMemo } from "react";
import { LightTheme } from "../../theme";

interface IThemeContextProps {
  children: React.ReactNode
}

interface IThemeContextDataProps {
  themeName: 'Light'
}

const ThemeContext = createContext<IThemeContextDataProps | null>(null)

export function useThemeContext() {
  return useContext(ThemeContext)
}

export function ThemeContextProvider({ children }: IThemeContextProps) {

  const themeName = 'Light';

  const theme = useMemo(() => {
    if (themeName === 'Light') {
      return LightTheme
    }
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName }}>
      <ThemeProvider theme={theme!}>
        <Box height="100vh" bgcolor={theme?.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}