import dotenv from "dotenv";
import { Anthropic } from "@anthropic-ai/sdk";

dotenv.config();
const API_KEY = process.env.ANTHROPIC_API_KEY;

const PROMPT = `
You are essentially a cooking assistance that is going to recieve a list of ingriedents that
a user has. You will suggest a recipe that the user can make with all or some of the ingredients the
user has depending on what is best. It is not neccessary to use every ingredient. You can also suggest
additional ingredients that the user may want to go get for the recipe to be better but please try to 
not include too many extra ingredients, and none best case scenario. Please format your response in
markdown and in a way that is easy to render on a webpage. A nice
elegent response that looks amazing on a webpage!
`;

const anthropic = new Anthropic({
  apiKey: API_KEY,
});
export default async function getInputAPI(ingredients) {
  const ingredientsFormatted = ingredients.join(", ");
  try {
    const msg = await anthropic.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 1024,
      temperature: 0,
      system: PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `I have ${ingredientsFormatted}. Please give me a recipe you recommend!`,
            },
          ],
        },
      ],
    });
    return msg.content[0].text;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
async function testRecipe() {
    try {
      const recipe = await getInputAPI(["beef", "onion", "garlic", "tomato paste", "crushed tomatoes", "beef broth", "oregano", "basil", "salt", "pepper", "pasta"]);
      console.log(recipe);
    } catch (error) {
      console.error("Error getting recipe:", error);
    }
  }
  
  // Run the test
  testRecipe();