import oranges from './../images/oranges.jpg'; // Tell webpack this JS file uses this image
import pancakes from './../images/pancakes.jpg'; // Tell webpack this JS file uses this image
import straweberries from './../images/strawberries.jpg'; // Tell webpack this JS file uses this image
import burger from './../images/burger.jpg'; // Tell webpack this JS file uses this image
import pizza from './../images/pizza.png'; // Tell webpack this JS file uses this image
import salad from './../images/salad.jpg'; // Tell webpack this JS file uses this image
import tacos from './../images/tacos.jpg'; // Tell webpack this JS file uses this image
import chicken_wings from './../images/chicken_wings.jpg'; // Tell webpack this JS file uses this image
import cereal from './../images/cereal.jpg'; // Tell webpack this JS file uses this image
import { createContext, useState } from "react";
import {LanguageContext} from "../context/LanguageContext"
import { useContext } from "react";



export const MealSelectionContext = createContext();


export const MealProvider = (props) => {
    
    const {language, setLanguage} = useContext(LanguageContext);

    const [meals, setMeals] = useState({
        "meals": [
            {
                "name": {"En": "Orange - 4.99$", "Fr": "Orange - 4.99$"},
                "description": "A really good meal",
                "meal_type": "lunch",
                "meal_preparation_time": "0_5min",
                "meal_time": "3 min",
                "image": oranges,
                id: 0,
                favourite: false,
                days: [],

            },
            {
                "name": {"En": "Pancakes Mix - 1.99$", "Fr": "Crêpes - 1.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": pancakes,
                id:1,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Strawberries - 4.99$", "Fr": "Fraises - 4.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": straweberries,
                id:2,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Burger - 11.99$", "Fr": "Burger - 11.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": burger,
                id:3,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Pizza - 15.99$", "Fr": "Pizza - 15.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": pizza,
                id:4,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Salad - 6.99$", "Fr": "Salade - 6.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": salad,
                id:5,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Tacos - 9.99$", "Fr": "tacos - 9.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": tacos,
                id:6,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Chicken Wings - 9.99$", "Fr": "Ailes de poulet - 9.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": chicken_wings,
                id:7,
                favourite: false,
                days: [],
            },
            {
                "name": {"En": "Cereal - 4.99$", "Fr": "Cereal - 4.99$"},
                "description": "Another really good meal",
                "meal_type": "dinner",
                "meal_preparation_time": "15_30min",
                "meal_time": "16 min",
                "image": cereal,
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