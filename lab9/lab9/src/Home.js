import { useContext } from "react";
import {LanguageContext} from "./context/LanguageContext"
import { Link } from "react-router-dom";

const Home = () => {

    const {language, setLanguage} = useContext(LanguageContext);
    return ( 
        <div className="home-div-container" style={{
            flexBasis: "auto",
            flexGrow: "1",
            width: "100%",
            display: "flex"
        }}>
            <div className="home-div-background-image"></div>
            <div className="home-div" style={{
                top: "calc(40vh)",
                display: "flex",
                justifyContent: "center",
                position: "absolute",
                width: "100%"
                
            }}>
                <div className="home-content">
                    <h1>{language==="En"? "With Groceries Made Easy - It's Easy.": "Avec Épicerie Facile, c'est vraiment facile."}</h1>
                    <p style={{textAlign: "center"}}>{language==="En"? "App to plan the meals and groceries for the family. It is simple. Follow thses steps": "Application pour permettre à la famille de prévoir ses repas. C'est très simple, il faut juste suivre les étapes suivantes."}</p>
                    <ol>
                        <Link to="/search"><li>{language==="En"? "Search the meals and add your favourites": "Chercher des repas et ajoutez-les à vos favorits"}</li></Link>
                        <Link to="/favourite"><li>{language==="En"? "Take a look at what you choosed in your favourite": "Consultez vos favorits"}</li></Link>
                        <Link to="/plan"><li>{language==="En"? "Plan your week with what your family love. Analyze the results and order!": "Planifiez votre semaine avec les repas choisis par votre famille. Analyzez les résultats et commandez!"}</li></Link>
                    </ol>
                </div>
            </div>
        </div>
     );
}
 
export default Home;