import { createContext, useState } from "react";
import {LanguageContext} from "../context/LanguageContext"
import { useContext } from "react";


export const MealSelectionContext = createContext();


export const MealProvider = (props) => {
    
    const {language, setLanguage} = useContext(LanguageContext);

    const [meals, setMeals] = useState({
        "meals": [
            {
                "name": {"En": "Brocoli", "Fr": "Brocolie"},
                "description": "A really good meal",
                "meal_type": "lunch",
                "meal_preparation_time": "0_5min",
                "meal_time": "3 min",
                id: 0,
                favourite: false,
                days: [],

            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:1,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:2,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:3,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:4,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:5,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:6,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:7,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Brocoli2", "Fr": "Brocolie3"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                id:8,
                favourite: false,
                days: [],
            }
        ]
    });
    
    return(
        <MealSelectionContext.Provider value={{meals, setMeals}}>
            {props.children}
        </MealSelectionContext.Provider>
    )
}