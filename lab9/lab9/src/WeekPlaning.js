import { useContext } from "react";
import { MealSelectionContext } from "./context/MealSelectionContext";
import MealCard from "./MealCard";
import CalendarDay from "./CalendarDay";

const WeekPlaning = () => {

    const {meals, setMeals} = useContext(MealSelectionContext);

    const shouldShow = (meal) => {
        return meal.favourite;
    }

    

    return ( 
        <div className="week-planning-container" style={{
            flexBasis: "auto",
            flexGrow:"1",
            display: "flex",
            flexDirection: "row",
        }}>
            <div style={{
                minWidth: "30vw",
            }}>
                {meals["meals"].map((m) => (
                    
                    shouldShow(m) && <MealCard meal={m} />
                ))}
            </div>
            <div>
                
                <div className="calendar-container" style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div className="calendar-info-section">
                        January 2021
                    </div>
                    <div className="calendar-days-section" style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <CalendarDay day={0} />
                        <CalendarDay day={1} />
                        <CalendarDay day={2} />
                        <CalendarDay day={3} />
                        <CalendarDay day={4} />
                        <CalendarDay day={5} />
                        <CalendarDay day={6} />
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default WeekPlaning;