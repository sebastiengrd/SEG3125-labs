import { createContext, useState } from "react";

export const LanguageContext = createContext();


export const UserProvider = (props) => {
    const [language, setLanguage] = useState("En");
    
    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}