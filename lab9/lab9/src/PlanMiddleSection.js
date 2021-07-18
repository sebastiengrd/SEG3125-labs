import { PlanContext } from './context/PlanContext';
import { useContext } from 'react';

const PlanMiddleSection = () => {

    const {plan, setPlan} = useContext(PlanContext)

    
    return ( 
        <div className="plan-middle-section-container" style={{
            flexBasis: "auto",
            flexGrow: "1",
        }}>
            {plan.active==0 && <h2>Active 0</h2>}
            {plan.active==1 && <h2>Active 1</h2>}
            {plan.active==2 && <h2>Active 2</h2>}
        </div>
     );
}
 
export default PlanMiddleSection;