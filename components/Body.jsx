import React, {useState} from "react";

export default function Body()
{
    //const ingredients = ["cheese", "bread", "ice cream", "tomato", "lettuce"]; 
    const [ingredients, setIngredients] = useState([]);
    const ingredientsLists = ingredients.map((ingredient) =>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    // function handleSubmitting(e) 
    // {
    //     e.preventDefault();
    //     const formEl = e.currentTarget;
    //     const formData = new FormData(formEl);
    //     const newIngredient = formData.get("ingredient");
    //     setIngredients(prev => [...prev, newIngredient]);
    //     formEl.reset();
    // };
    //<form onSubmit={handleSubmitting} className="body">
    function handleSubmitting(formData) 
    {
        const ingredient = formData.get("ingredient");
        setIngredients(prev => [...prev, ingredient]);

    }
    return(
        <main>
            <form action={handleSubmitting} className="body">
                <input 
                type="input" 
                name="ingredient"
                aria-label="add an ingredient" 
                placeholder="e.g. cheese"
                />
                <button>+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientsLists}
            </ul>

        </main>
)
}