import { useContext } from "react";
import {LanguageContext} from "./context/LanguageContext"

const Home = () => {

    const {language, setLanguage} = useContext(LanguageContext);
    return ( 
        <div className="home-div" style={{
            top: "calc(40vh)",
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            width: "100%"
            
        }}>
            <div className="content">
                <h1>{language==="En"? "With Groceries Made Easy - It's Easy.": "Avec Épicerie Facile, c'est vraiment facile."}</h1>
                <ol>
                    <li>Do this</li>
                    <li>And this</li>
                </ol>
            </div>
        </div>
     );
}
 
export default Home;