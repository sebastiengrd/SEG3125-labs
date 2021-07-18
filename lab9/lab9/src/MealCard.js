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
            maxWidth: "20rem",
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "1rem",
            margin: "2rem",
            backgroundColor: "white",
            borderRadius: "1rem",
        }}>
            <h3>
            { language==="En" ? meal["name"]["En"]: meal["name"]["Fr"] }
            </h3>
            <img src={meal["image"]} alt={ language==="En" ? meal["name"]["En"]: meal["name"]["Fr"] } style={{
                width: "15rem",
                textAlign: "center",
                padding: "1rem"
            }} />
            <br /><br />
            {<button onClick={handleAddFavourite}>{ language==="En" ? (meal.favourite? "Remove Favourite": "Add Favourite"): (meal.favourite? "Retirer favorit": "Ajouter aux favorits")}</button>}
        </div>
     );
}
 
export default MealCard;