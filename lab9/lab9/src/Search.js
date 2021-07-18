import $ from 'jquery';
import { useState } from 'react';
import MealCard from './MealCard';
import {LanguageContext} from "./context/LanguageContext"
import { MealSelectionContext } from './context/MealSelectionContext';
import { useContext } from 'react';


const cloneDeep = require('lodash.clonedeep')

const Search = () => {

    const {language, setLanguage} = useContext(LanguageContext);

    const {meals, setMeals} = useContext(MealSelectionContext);

    const [searchOpt, setSearchOpt] = useState({
        "meal_type": ["breakfast", "lunch", "dinner"],
        "meal_preparation_time": ["0_5min", "5_10min", "10_15min", "15_30min", "30_60min"],
    })

    
    const handleSubmit = (e) => {
        let searchOptCopy = cloneDeep(searchOpt);

        let isThere = searchOptCopy[e.target.name].find( (elem) => {return elem == e.target.value})
        
        if(isThere && !e.target.checked) {
            searchOptCopy[e.target.name] = searchOptCopy[e.target.name].filter((elem) => {return elem !== e.target.value});
        } else if (!isThere && e.target.checked) {
            searchOptCopy[e.target.name].push(e.target.value);
        }

        setSearchOpt(searchOptCopy);

    }

    const shouldShow = (meal) => {
        let mealType = meal["meal_type"];
        let mealTime = meal["meal_preparation_time"]
        let sameMealType = false;
        let sameMealTime = false;

        searchOpt["meal_type"].map((type) => {
            if(type === mealType) {sameMealType = true;}
        })

        searchOpt["meal_preparation_time"].map((time) => {
            if(time == mealTime) {sameMealTime = true}
        })

        return (sameMealType && sameMealTime);
    }
    
    return ( 
        <div className="search" style={{
            display: "flex",
            flexBasis: "auto",
            flexGrow: "1",
        }}>
            <div className="options" style={{
                minWidth: "20vh",
                borderRightWidth: "1px",
                borderRightColor: "black",
                borderRightStyle: "solid",

            }}>
                <form onChange={handleSubmit} className="options-form">
                    <h3>Type</h3>
                    <input type="checkbox" id="breakfast" name="meal_type" value="breakfast" defaultChecked />
                    <label htmlFor="breakfast">Breakfast</label><br />
                    <input type="checkbox" id="lunch" name="meal_type" value="lunch" defaultChecked />
                    <label htmlFor="lunch">Lunch</label><br />
                    <input type="checkbox" id="dinner" name="meal_type" value="dinner" defaultChecked />
                    <label htmlFor="dinner">Dinner</label>
                    <hr />
                    <h3>Time</h3>
                    <input type="checkbox" id="0_5min" name="meal_preparation_time" value="0_5min" defaultChecked />
                    <label htmlFor="0_5min">0-5 min</label><br />
                    <input type="checkbox" id="5_10min" name="meal_preparation_time" value="5_10min" defaultChecked />
                    <label htmlFor="5_10min">5-10 min</label><br />
                    <input type="checkbox" id="10_15min" name="meal_preparation_time" value="10_15min" defaultChecked />
                    <label htmlFor="10_15min">10-15 min</label><br />
                    <input type="checkbox" id="15_30min" name="meal_preparation_time" value="15_30min" defaultChecked />
                    <label htmlFor="15_30min">15-30 min</label><br />
                    <input type="checkbox" id="30_60min" name="meal_preparation_time" value="30_60min" defaultChecked />
                    <label htmlFor="30_60min">30-60 min</label>
                    <hr />

                </form>
            </div>
            <div className="results" style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
                backgroundColor: "#f5f5f5",
            }}>
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-evenly",
                    height: "min-content",
                }}>

                    {meals["meals"].map((m) => (
                        
                            shouldShow(m) && <MealCard meal={m} />
                    ))}
                </div>
                

                
            </div>
        </div>
     );
}
 
export default Search;