import { useContext } from "react";
import {LanguageContext} from "./context/LanguageContext"
import { Link } from "react-router-dom";

const Navbar = () => {
    const {language, setLanguage} = useContext(LanguageContext);
    
    const handleChangeLanguage = () => {
        setLanguage(language==="En"? "FR" : "En");
    }
    return ( 
        <div className="navbar">
            <Link to="/">
                <h1>{language=="En"? "Groceries Made Easy": "Épicerie Facile"}</h1>
            </Link>
            <div className="links">
                <button onClick={handleChangeLanguage}>{language=="En"? "Francais": "English"}</button>
                <Link to="/">{language==="En"? "Home": "Page Principale"}</Link>
                <Link to="/search">{language==="En"? "Search Recipes": "Chercher"}</Link>
                <Link to="/favourite">{language==="En"? "My Favourites": "Favorits"}</Link>
                <Link to="/plan">{language==="En"? "Plan Meals": "Planifier"}</Link>
            </div>

        </div>
     );
}
 
export default Navbar;
