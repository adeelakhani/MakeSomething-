export default function IngredientsList(props) {
    return (
        <>
            <ul className="ingredientsList">{props.ingredientsLists}</ul>
            {props.numIngredients > 0 && (
            <div className="readyBox">
                <h1>Ready to submit?</h1>
                <button onClick={props.showRecipe}>See recipe</button>
            </div>)
            }
            
        </>
        
    )
}