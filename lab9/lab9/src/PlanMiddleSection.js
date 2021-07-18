import { PlanContext } from './context/PlanContext';
import { useContext } from 'react';
import WeekPlaning from './WeekPlaning';
import Stats from './Stats';
import ContactInfos from './ContactInfos';


const PlanMiddleSection = () => {

    const {plan, setPlan} = useContext(PlanContext)

    
    return ( 
        <div className="plan-middle-section-container" style={{
            flexBasis: "auto",
            flexGrow: "1",
            
        }}>
            {plan.active==0 && <WeekPlaning />}
            {plan.active==1 && <Stats />}
            {plan.active==2 && <ContactInfos />}
        </div>
     );
}
 
export default PlanMiddleSection;