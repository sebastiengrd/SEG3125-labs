import { PlanContext } from './context/PlanContext';
import { useContext } from 'react';
import WeekPlaning from './WeekPlaning';
import Stats from './Stats';

const PlanMiddleSection = () => {

    const {plan, setPlan} = useContext(PlanContext)

    
    return ( 
        <div className="plan-middle-section-container" style={{
            flexBasis: "auto",
            flexGrow: "1",
        }}>
            {plan.active==0 && <WeekPlaning />}
            {plan.active==1 && <Stats />}
            {plan.active==2 && <h2>Active 2</h2>}
        </div>
     );
}
 
export default PlanMiddleSection;