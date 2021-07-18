import MealCard from './MealCard';
import { MealSelectionContext } from './context/MealSelectionContext';
import { useContext } from 'react';


const Favourite = () => {

    const {meals, setMeals} = useContext(MealSelectionContext);
    
    const shouldShow = (meal) => {
        return meal.favourite;
    }

    return ( 
        <div className="favourite-container">
            {meals["meals"].map((m) => (
                    
                    shouldShow(m) && <MealCard meal={m} />
            ))}
        </div>
     );
}
 
export default Favourite
