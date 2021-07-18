
const Stats = () => {
    return ( 
        <div className="stats-container" style={{
            position: "absolute",
            top: "40vh",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
        }}>
            <div>
                <h2>Analysis</h2>
                <table>
                    <tr>
                        <td>Fruits and Vegetables</td>
                        <td>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                        </td>
                        <td>3/5 good</td>
                    </tr>
                    <tr>
                        <td>Grain Products</td>
                        <td>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                        </td>
                        <td>2/5 poor</td>
                    </tr>
                    <tr>
                        <td>Milk Products</td>
                        <td>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                        </td>
                        <td>5/5 Excelent!</td>
                    </tr>
                    <tr>
                        <td>Meat and Alternative</td>
                        <td>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                            <i className="fi-rr-star"></i>
                        </td>
                        <td>3/5 good</td>
                    </tr>
                    
                </table>
            </div>
            <div>
                <h2>Recommendations</h2>
                <p>Our suggestion to improve the health of your family</p>

                <ul>
                    <li>
                        Try to eat more fruits and vegetables. Here are few ideas 
                        <ul>
                            <li>Plan more meals with fruits and vegetable</li>
                            <li>Plan some fruits for your breakfasts</li>
                        </ul>

                    </li>
                    <li>
                        Try reduce your cumsumption of suggar
                        <ul>
                            <li>Eat less cereal for breakfast</li>
                            <li>Try to replace your suggar cumsumption with "good suggars" such as those in fruits</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Stats;