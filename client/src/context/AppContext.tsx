import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import type { NavigateFunction } from "react-router-dom";

export const AppContext = createContext({
    navigate: {} as NavigateFunction,
    user: null,
    isSeller: false,
    setUser: (user: null) => {},
    setIsSeller: (isSeller: boolean) => {}
});
export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isSeller, setIsSeller] = useState(false);
    const value = {  navigate, user, isSeller, setUser, setIsSeller };
 return <AppContext.Provider value={value}>
    {children}
 </AppContext.Provider>
}
export const useApppContext =()=>{
    return useContext(AppContext)
}