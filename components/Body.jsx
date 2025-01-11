import { useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";
import axios from "axios";

export default function Body() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  const ingredientsLists = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  let numIngredients = ingredients.length;
  function handleSubmitting(formData) {
    const getIngredient = Object.fromEntries(formData);
    setIngredients((prev) => [...prev, getIngredient.ingredient]);
  }
  async function showRecipe(){
    const getRecipe = await axios.post("http://localhost:3000/api/getrecipe", {ingredients});
    setRecipe(getRecipe.data.recipe);
  }
  function reset(e){
    e.preventDefault();
    setIngredients([]);
    setRecipe("");
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
        <button onClick={reset}>Reset</button>
      </form>
      <section>
        <h2 className="ingredientsHeader">Ingredients(so far)</h2>
        {ingredients.length > 0 && <IngredientsList ingredientsLists={ingredientsLists} numIngredients={numIngredients} showRecipe={showRecipe} />}
      </section>
      <section aria-live="polite">
        <Recipe recipe={recipe} />
      </section>
      
      
    </main>
  );
}
