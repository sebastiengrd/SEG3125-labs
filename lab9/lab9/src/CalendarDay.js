import { LanguageContext } from "./context/LanguageContext";
import { useContext, useState } from "react";
import MealCard from "./MealCard";
import { MealSelectionContext } from "./context/MealSelectionContext";

const CalendarDay = (opt) => {

    const {language, setLanguage} = useContext(LanguageContext);
    const {meals, setMeals} = useContext(MealSelectionContext);

    const day = opt.day;
    
    const activeDay = opt.currentActiveDay;
    const setActiveDay = opt.setCurrentActiveDay;
    const parentClickEvent = opt.clickEvent

    const day_style = {
        borderStyle: "solid",
        borderWidth: "1px",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",

    }


    const handleClickOnDay = (e) => {
        if(activeDay != day) {
            setActiveDay(day);
            parentClickEvent();
        } else {
            setActiveDay(-1)
        }
        
    }

    const shouldShow = (m) => {
        return m.days.includes(day)
    }
    
    return ( 
        <div className="calendarDay" style={{
            margin:"1rem",
            borderColor: activeDay==day? "red" : "black",
            borderWidth: "1px",
            borderStyle: "solid",
        }}>
            <div className="dayName" value={day} onClick={handleClickOnDay} style={{padding: "0rem 1rem"}}>
                <h4 style={{textAlign: "center"}}>
                    {day==0 && <div>{language=="En"? "Sunday" : "Dimanche"}</div>}
                    {day==1 && <div>{language=="En"? "Monday" : "Lundi"}</div>}
                    {day==2 && <div>{language=="En"? "Tuesday" : "Mardi"}</div>}
                    {day==3 && <div>{language=="En"? "Wednesday" : "Mercredi"}</div>}
                    {day==4 && <div>{language=="En"? "Thursday" : "Jeudi"}</div>}
                    {day==5 && <div>{language=="En"? "Friday" : "Vendredi"}</div>}
                    {day==6 && <div>{language=="En"? "Saturday" : "Samedi"}</div>}
                </h4>
            </div>
            <div className="dayContent">
                {meals["meals"].map((m) => (
                    shouldShow(m) && <MealCard meal={m} />
                ))}
            </div>
        </div>
     );
}
 
export default CalendarDay;