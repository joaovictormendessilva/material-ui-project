import { Box } from "@mui/material";

import { Dashboard, Login } from "./pages";

import { ThemeContextProvider } from './shared/contexts/'

export function App() {
  return (
    <ThemeContextProvider>
      {/* <Login /> */}
      <Dashboard />
    </ThemeContextProvider>
  )
}