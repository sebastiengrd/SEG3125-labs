import { createContext, useState } from "react";

export const PlanContext = createContext();


export const PlanProvider = (props) => {
    const [plan, setPlan] = useState({
        "pages": [
            {
                "title": "Page 1",
                id: 0,
                completed: false,
            },
            {
                "title": "Page 2",
                id: 1,
                completed: false,
            },
            {
                "title": "Page 3",
                id: 2,
                completed: false,
            },
        ],
        active: 1,
    });
    
    return(
        <PlanContext.Provider value={{plan, setPlan}}>
            {props.children}
        </PlanContext.Provider>
    )
}