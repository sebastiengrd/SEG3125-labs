import { PlanContext } from './context/PlanContext';
import { useContext } from 'react';
import cloneDeep from 'lodash.clonedeep';

const PlanBottomSection = () => {

    const {plan, setPlan} = useContext(PlanContext)

    const handleNextClick = () => {
        let planCopy = cloneDeep(plan);

        planCopy.active += 1;

        setPlan(planCopy);
    }

    const handlePreviousClick = () => {
        let planCopy = cloneDeep(plan);

        planCopy.active -= 1;

        setPlan(planCopy);
    }
    
    return ( 
        <div className="plan-bottom-section-container" style={{
            width: "100%",
            display: "flex",
            flexFlow:"row",
            justifyContent:"space-between"
        }}>
            <div>

                {plan.active > 0 && <button onClick={handlePreviousClick}>Previous</button>}
            </div>

            <div>

                { plan.active < 2 && <button onClick={handleNextClick}>Next</button>}
            </div>
        </div>
     );
}
 
export default PlanBottomSection;