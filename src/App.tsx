import { Dashboard, Login } from "./pages";

import { AuthContextProvider, ThemeContextProvider } from './shared/contexts/'

import { useEffect, useState } from 'react'

export function App() {

  const [isLoading, setIsLoading] = useState(true);

  const loading = () => {
    setInterval(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    loading();
  }, [])

  return (
    <ThemeContextProvider>
      <AuthContextProvider>
        {isLoading
          ? <></>
          :
          <>
            <Login />
            <Dashboard />
          </>
        }
      </AuthContextProvider>
    </ThemeContextProvider>
  )
}