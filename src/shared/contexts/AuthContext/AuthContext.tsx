import { createContext, useCallback, useContext, useState, useEffect } from "react";

interface IAuthContextProps {
  isLogged: boolean
  setLocalStorageWithExpiration: (key: string, value: Object, expirationInMinutes: number) => void
}

interface IAuthContextProviderProps {
  children: React.ReactNode
}


export const AuthContext = createContext({} as IAuthContextProps);

export const useAuthContext = () => {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const setLocalStorageWithExpiration = useCallback((key: string, value: Object, expirationInMinutes: number) => {
    const expirationMs = expirationInMinutes * 60 * 1000; // Converter minutos para milissegundos
    const expirationTime = new Date().getTime() + expirationMs;
    const data = {
      value: value,
      expirationTime: expirationTime,
    };
    localStorage.setItem(key, JSON.stringify(data));
    setIsLogged(true);
  }, [])

  function getLocalStorageWithExpiration(key: string) {
    const data = localStorage.getItem(key);
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData.expirationTime > new Date().getTime()) {
        return setIsLogged(true);
      } else {
        localStorage.removeItem(key);
        setIsLogged(false);
      }
    }
    return null;
  }

  useEffect(() => {
    getLocalStorageWithExpiration("session");
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, setLocalStorageWithExpiration }}>
      {children}
    </AuthContext.Provider>
  )

}