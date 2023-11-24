import { createContext, useState } from "react";

export const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }){
    const [ user, setUser] = useState({})

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}