import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: "#00788d",
      contrastText: '#ffffff'
    }
  },
  typography: {
    h6: {
      color: "#00788d"
    },
    body1: {
      color: "#00788d"
    },
    body2: {
      color: '#5b5b5b',
    }
  }
})