// Event Listener for Form Submission
document.getElementById('ai-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user inputs (selected product and ingredients)
    const selectedProduct = document.getElementById('product').value;
    const ingredients = document.getElementById('ingredients').value.trim();

    if (selectedProduct && ingredients) {
        const recipeText = generateAdvancedRecipe(selectedProduct, ingredients);
        // Display the generated recipe in the output box
        document.getElementById('recipe-text').innerText = recipeText;
    } else {
        document.getElementById('recipe-text').innerText = "Please select a product and enter ingredients.";
    }
});

// Function to Generate an Advanced Recipe
function generateAdvancedRecipe(product, ingredients) {
    // Split the user-entered ingredients into an array
    const ingredientsArray = ingredients.split(',').map(item => item.trim());
    let recipe = '';

    switch (product) {
        case 'Mushroom Protein Patty':
            recipe = generateMushroomProteinPattyRecipe(ingredientsArray);
            break;
        case 'Mushroom Protein Snack Bars':
            recipe = generateMushroomProteinSnackBarsRecipe(ingredientsArray);
            break;
        case 'HydroColloid Mushroom Protein Powder':
            recipe = generateProteinPowderRecipe(ingredientsArray);
            break;
        case 'Plant-Powered Mushroom Protein Ready Meals':
            recipe = generateReadyMealsRecipe(ingredientsArray);
            break;
        default:
            recipe = 'Product not found. Please try again.';
    }

    return recipe;
}

// Recipe Generator for Mushroom Protein Patty
function generateMushroomProteinPattyRecipe(ingredients) {
    let recipe = `
    Mushroom Protein Patty Recipe:
    
    Ingredients:
    - 1 Mushroom Protein Patty
    - ${ingredients.join(', ')}

    Instructions:
    1. Preheat your skillet or grill to medium heat.
    2. Place the Mushroom Protein Patty on the grill and cook for 3-4 minutes per side until golden brown and crispy on the outside.
    3. Meanwhile, prepare the ingredients you have: chop ${ingredients.join(', ')}.
    4. In a bowl, combine the chopped ingredients with the patty. You can also add some seasoning like garlic, pepper, or your favorite spices.
    5. Optionally, toast your burger buns and spread some vegan mayo or ketchup.
    6. Assemble the patty with your fresh ingredients between the buns and enjoy your high-protein, delicious meal!

    Pro Tips:
    - Add sliced avocado or your favorite cheese for extra flavor.
    - If you want a spicy kick, add some sriracha or hot sauce.`;
    return recipe;
}

// Recipe Generator for Mushroom Protein Snack Bars
function generateMushroomProteinSnackBarsRecipe(ingredients) {
    let recipe = `
    Mushroom Protein Snack Bars Recipe:
    
    Ingredients:
    - 1 Mushroom Protein Snack Bar
    - ${ingredients.join(', ')}

    Instructions:
    1. In a food processor, pulse the snack bar into crumbs, then combine with ${ingredients.join(', ')}.
    2. Add a sweetener of your choice, like honey or agave syrup, and mix well until a sticky dough forms.
    3. Press the mixture into a lined baking tray and refrigerate for 2-3 hours to set.
    4. Once set, cut into squares and serve as a protein-packed snack.
    
    Pro Tips:
    - Add dried fruits or nuts for extra texture and flavor.
    - To make it vegan, substitute honey with maple syrup or agave.`;
    return recipe;
}

// Recipe Generator for HydroColloid Mushroom Protein Powder
function generateProteinPowderRecipe(ingredients) {
    let recipe = `
    HydroColloid Mushroom Protein Powder Recipe:

    Ingredients:
    - 1 scoop HydroColloid Mushroom Protein Powder
    - ${ingredients.join(', ')}

    Instructions:
    1. In a blender, combine the protein powder with your chosen liquids: ${ingredients.join(', ')}.
    2. Blend on high for 30 seconds until smooth and creamy.
    3. Pour into a glass and garnish with additional toppings like granola or chia seeds for crunch.
    
    Pro Tips:
    - For a richer smoothie, add almond butter or peanut butter.
    - Boost the flavor by adding some cocoa powder or cinnamon.`;
    return recipe;
}

// Recipe Generator for Plant-Powered Mushroom Protein Ready Meals
function generateReadyMealsRecipe(ingredients) {
    let recipe = `
    Plant-Powered Mushroom Protein Ready Meals Recipe:

    Ingredients:
    - 1 Plant-Powered Mushroom Protein Ready Meal
    - ${ingredients.join(', ')}

    Instructions:
    1. Heat your ready meal in the microwave or oven as instructed on the package.
    2. While heating, sauté ${ingredients.join(', ')} in a separate pan with olive oil until tender.
    3. Once the meal is heated, plate it and top with your sautéed vegetables and a dash of your favorite seasoning.
    4. Serve hot and enjoy a balanced meal rich in plant-based protein.
    
    Pro Tips:
    - Add a squeeze of lemon juice or soy sauce to enhance the flavor.
    - Top with fresh herbs like cilantro or parsley for an aromatic touch.`;
    return recipe;
}
