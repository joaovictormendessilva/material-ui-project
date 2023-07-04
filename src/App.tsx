import { Box } from "@mui/material";

import { Login } from "./pages";

import { ThemeContextProvider } from './shared/contexts/'

export function App() {
  return (
    <ThemeContextProvider>
      <Box>
        <Login />
      </Box>
    </ThemeContextProvider>
  )
}