import MealCard from './MealCard';
import { MealSelectionContext } from './context/MealSelectionContext';
import { useContext } from 'react';


const Favourite = () => {

    const {meals, setMeals} = useContext(MealSelectionContext);
    
    const shouldShow = (meal) => {
        return meal.favourite;
    }

    return ( 
        <div className="favourite-container" style={{
            display: "flex",
            flexBasis: "auto",
            flexGrow: "1",
            backgroundColor: "#f5f5f5",
        }}>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                height: "min-content"
            }}>
                {meals["meals"].map((m) => (
                        
                        shouldShow(m) && <MealCard meal={m} />
                ))}
            </div>
        </div>
     );
}
 
export default Favourite
