import {LanguageContext} from "./context/LanguageContext"
import { MealSelectionContext } from './context/MealSelectionContext';
import { useContext } from 'react';

const cloneDeep = require('lodash.clonedeep')


const MealCard = (props) => {
    const meal = props.meal;

    const {language, setLanguage} = useContext(LanguageContext);
    const {meals, setMeals} = useContext(MealSelectionContext);


    const handleAddFavourite = () => {
        let mealsCopy = cloneDeep(meals);

        let m = mealsCopy["meals"].find((m) => {return m.id == meal.id});
        m.favourite = !m.favourite;

        setMeals(mealsCopy);
    }

    return ( 
        <div className="meal-card" style={{
            borderWidth: "1px",
            borderStyle: "solid",
            minWidth: "10vw",
            maxWidth: "30vw",
            flexGrow: "1",
        }}>
            <p>
            { language==="En" ? meal["name"]["En"]: meal["name"]["Fr"] }
            </p>
            {<button onClick={handleAddFavourite}>{ language==="En" ? (meal.favourite? "Remove Favourite": "Add Favourite"): (meal.favourite? "Retirer favorit": "Ajouter aux favorits")}</button>}
        </div>
     );
}
 
export default MealCard;