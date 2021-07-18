import { createContext, useState } from "react";

export const PlanContext = createContext();


export const PlanProvider = (props) => {
    const [plan, setPlan] = useState({
        "pages": [
            {
                "title": "Plan Your Week",
                id: 0,
                completed: false,
            },
            {
                "title": "Analysis of your Diet",
                id: 1,
                completed: false,
            },
            {
                "title": "Order",
                id: 2,
                completed: false,
            },
        ],
        active: 0,
    });
    
    return(
        <PlanContext.Provider value={{plan, setPlan}}>
            {props.children}
        </PlanContext.Provider>
    )
}