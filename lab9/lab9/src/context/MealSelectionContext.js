import { createContext, useState } from "react";

export const MealSelectionContext = createContext();


export const MealProvider = (props) => {
    const [meals, setMeals] = useState({
        "meals": [
            {
                "name": "Brocoli",
                "description": "A really good meal",
                "meal_type": "lunch",
                "meal_preparation_time": "0_5min",
                "meal_time": "3 min",
                id: 0

            },
            {
                "name": "Brocoli3",
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:1
            }
        ]
    });
    
    return(
        <MealSelectionContext.Provider value={{meals, setMeals}}>
            {props.children}
        </MealSelectionContext.Provider>
    )
}