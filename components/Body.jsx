import {useState} from "react";

export default function Body()
{
    const [ingredients, setIngredients] = useState([]);
    const ingredientsLists = ingredients.map((ingredient) =>(
        <li key = {ingredient}>{ingredient}</li>
    ))
    let numIngredients = ingredients.length;
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
        const getIngredient = Object.fromEntries(formData);
        //  const newIngredient = formData.get("ingredient");
        setIngredients(prev => [...prev, getIngredient.ingredient]);

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
            <section>
            <h2 className = "ingredientsHeader">Ingredients(so far)</h2>
            <ul className="ingredientsList">
                {ingredientsLists}
            </ul>
            {numIngredients > 3 && 
            <div className="readyBox">
                <h1>Ready to submit?</h1>
                <button>See recipe</button>
            </div>}
            
            </section>
            

        </main>
)
}