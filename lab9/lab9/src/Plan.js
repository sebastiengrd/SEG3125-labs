import { PlanProvider } from "./context/PlanContext";

import PlanTopBar from "./PlanTopBar";
import PlanMiddleSection from "./PlanMiddleSection";
import PlanBottomSection from "./PlanBottomSection";
const Plan = () => {

    
    return ( 
        <div className="plan-container" style={{
            flexBasis: "auto",
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            
        }}>
            <PlanProvider>
                <div style={{
                    flexBasis: "auto",
                    flexGrow: "0",
                }}>
                    <PlanTopBar />
                </div>
                <div style={{
                    flexBasis: "auto",
                    flexGrow: "1",
                    display: "flex"
                }}>
                    <PlanMiddleSection />
                </div>
                <div>
                    <PlanBottomSection />
                </div>
            </PlanProvider>
        </div>
     );
}
 
export default Plan;