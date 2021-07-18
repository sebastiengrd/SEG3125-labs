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
            display: "flex",
            justifyContent: "center",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            flexWrap: "wrap"

        }}>
            {plan["pages"].map((page) => (
                <div>
                    <button onClick={handleClick} id={page.id} style={{
                        borderColor: plan.active == page.id? "#05af70" : "black",
                    }}>{page.id+1 + " - " + page["title"]}</button>
                </div>
            ))}
        </div>
     );
}
 
export default PlanTopBar;