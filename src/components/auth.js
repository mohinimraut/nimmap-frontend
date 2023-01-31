import {useState,createContext,useContext} from "react";
 
const AuthContext=createContext(null)

export const AuthProvider=({childrean})=>{
const [user,setUser]=useState(null)

const login=user=>{
    setUser(user)
}

const logout=()=>{
    setUser(null)
}

return(
    <AuthContext.Provider value={{user,login,logout}}>
    {childrean}
    </AuthContext.Provider>  
) 
}

export const useAuth=()=>{
    return useContext(AuthContext)
}