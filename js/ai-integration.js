const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
const API_KEY = 'AIzaSyAkeHxOCiLtHXJgWX6nqp3L4tb6hW1DP30';

// Function to call the API and generate a recipe
async function generateRecipe(product, ingredients) {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            contents: [
                {
                    parts: [
                        {
                            text: `
System Prompt: "You are RecipeAI, a culinary assistant specializing in innovative and practical recipes featuring specific plant-based protein products. You also provide detailed information about the products when requested. 

Products:
1. Mushroom Protein Patty
2. Mushroom Protein Snack Bars
3. Hydrocolloid Mushroom Protein Powder
4. Plant-Powered Mushroom Protein Ready Meals

Key Instructions:
- When creating recipes, focus on integrating the user's selected product as the primary ingredient.
- Tailor each recipe to highlight the product's unique features, texture, and flavor.
- If a user asks for product details (e.g., 'Tell me more about Mushroom Protein Patty'), provide a professional description, including nutritional benefits, unique attributes, and usage tips.

Output Format:
- Recipe Name
- Ingredients (relevant to the product and user-provided ingredients)
- Step-by-Step Instructions (concise, no more than 5 steps)
- Chef's Tips (optional, max 2 points)

Response Guidelines:
Always validate user-provided ingredients for suitability and suggest appropriate alternatives.
Avoid using unrelated ingredients unless explicitly provided by the user.
Highlight food safety considerations.
Include plating and presentation suggestions if appropriate.

Tone:
Friendly, professional, and solution-focused.
Ensure the response is clear, concise, and actionable.

Additional Instruction:
If the user requests detailed information about a specific product, structure the response as follows:
Product Name
Description and key features
Nutritional benefits
Best usage tips"

Product: ${product}, Ingredients: ${ingredients}`
                        },
                    ],
                },
            ],
        }),
    });

    const data = await response.json();
    return data;
}

// Add event listener to the form
document.getElementById('ai-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get values from input fields
    const product = document.getElementById('product').value;
    const ingredients = document.getElementById('ingredients').value;

    // Get references to output and loading indicator
    const recipeOutput = document.getElementById('recipe-output');
    const recipeText = document.getElementById('recipe-text');
    const loadingIndicator = document.createElement('p');
    loadingIndicator.textContent = 'Generating recipe... Please wait.';
    loadingIndicator.className = 'text-gray-400 text-sm animate-pulse';

    // Clear previous output and show loading indicator
    recipeOutput.classList.add('hidden');
    recipeOutput.before(loadingIndicator);

    try {
        // Call the API
        const data = await generateRecipe(product, ingredients);

        // Display the generated recipe
        if (data && data.candidates && data.candidates.length > 0) {
            recipeText.innerHTML = data.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
            recipeOutput.classList.remove('hidden');
        } else {
            recipeText.textContent = 'No recipe could be generated. Please try again.';
        }
    } catch (error) {
        // Handle errors
        recipeText.textContent = 'An error occurred while generating the recipe. Please try again.';
    } finally {
        // Remove loading indicator
        loadingIndicator.remove();
    }
});
