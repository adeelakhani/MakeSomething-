export default function IngredientsList(props) {
    return (
        <>
            <h2 className="ingredientsHeader">Ingredients(so far)</h2>
            <ul className="ingredientsList">{props.ingredientsLists}</ul>
            {props.numIngredients > 3 && (
            <div className="readyBox">
                <h1>Ready to submit?</h1>
                <button onClick={props.showRecipe}>See recipe</button>
            </div>)
            }
        </>
        
    )
}