

const MealCard = (props) => {
    const meal = props.meal;

    return ( 
        <div className="meal-card">
            <p>
                {meal["name"]}
            </p>
        </div>
     );
}
 
export default MealCard;