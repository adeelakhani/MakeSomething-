import { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";


export default function Body() {
  const [ingredients, setIngredients] = useState([]);
  const [isShown, setShown] = useState(false);
  const ingredientsLists = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  let numIngredients = ingredients.length;
  function handleSubmitting(formData) {
    const getIngredient = Object.fromEntries(formData);
    setIngredients((prev) => [...prev, getIngredient.ingredient]);
  }
  function showRecipe(){
    setShown(true)
  }
  return (
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
        <IngredientsList ingredientsLists={ingredientsLists} numIngredients={numIngredients} showRecipe={showRecipe} />
      </section>
      <section>
        <Recipe isShown={isShown} />
      </section>
      
      
    </main>
  );
}
