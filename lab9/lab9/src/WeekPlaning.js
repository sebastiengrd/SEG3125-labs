import { useContext } from "react";
import { MealSelectionContext } from "./context/MealSelectionContext";
import MealCard from "./MealCard";
import CalendarDay from "./CalendarDay";
import { useState } from "react";
import cloneDeep from "lodash.clonedeep";
import Popover from "react-bootstrap/Popover";
import  "react-bootstrap/Popover/";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const WeekPlaning = () => {

    const {meals, setMeals} = useContext(MealSelectionContext);

    const [activeDay, setActiveDay] = useState(-1);


    const shouldShow = (meal) => {
        return meal.favourite;
    }

    const handleClickeventOnDay = () => {
        console.log("es")
    }

    const handleClickOnMealsFavourite = (meal) => {
        if(activeDay > -1) {
            let mealsCopy = cloneDeep(meals);

            mealsCopy["meals"].map((m) => {
                if(m.id === meal.id) {m.days.push(activeDay)}
            })

            setMeals(mealsCopy);
        }
    }

    const Help = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <i className="fi-rr-info"></i>
        </OverlayTrigger>
      );
    
    const popover = (
        <Popover id="popover-basic" style={{
            padding: "1rem"
        }}>
            At the right, there are all the selections of your family. If you want to add a meal to the calendar, click on a day and it should appear red. Then, click on a meal. The meal should be added to the day.
        </Popover>
    );

    

    return ( 
        <div className="week-planning-container" style={{
            flexBasis: "auto",
            flexGrow:"1",
            display: "flex",
            flexDirection: "row",
        }}>
            <div>
                <h2 style={{textAlign: "center"}}>Family Selection <Help /></h2>
                {meals["meals"].map((m) => (
                    
                    shouldShow(m) && <MealCard meal={m} parentHandleClick={handleClickOnMealsFavourite} />
                ))}
            </div>
            <div>
                <h2 style={{textAlign: "center"}}>Calendar</h2>
                
                <div className="calendar-container" style={{
                    borderWidth: "1px",
                    borderStyle: "solid",
                    display: "flex",
                    flexDirection: "column",
                }}>

                    <div className="calendar-info-section">
                        <h3 style={{textAlign: "center"}}>January 2021</h3>
                    </div>
                    <div className="calendar-days-section" style={{
                        display: "flex",
                        flexDirection: "row",
                    }}>
                        <CalendarDay day={0} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                        <CalendarDay day={1} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                        <CalendarDay day={2} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                        <CalendarDay day={3} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                        <CalendarDay day={4} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                        <CalendarDay day={5} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                        <CalendarDay day={6} currentActiveDay={activeDay} setCurrentActiveDay={setActiveDay} clickEvent={handleClickeventOnDay} />
                    </div>

                </div>

            </div>
        </div>
     );
}
 
export default WeekPlaning;