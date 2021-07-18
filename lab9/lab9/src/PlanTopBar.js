import cloneDeep from 'lodash.clonedeep';
import { useContext } from 'react';
import { PlanContext } from './context/PlanContext';

const PlanTopBar = () => {

    const {plan, setPlan} = useContext(PlanContext)

    const handleClick = (e) => {

        let planCopy = cloneDeep(plan);

        planCopy.active = e.target.id;

        setPlan(planCopy);
    }
    
    
    return ( 
        <div className="plan-top-bar-container" style={{
            width: "100%",

        }}>
            {plan["pages"].map((page) => (
                <button onClick={handleClick} id={page.id}>{page["title"]}</button>
            ))}
        </div>
     );
}
 
export default PlanTopBar;