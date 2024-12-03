const edibleIngredients = [
    // Vegetables
    "tomato", "potato", "carrot", "onion", "garlic", "bell pepper", "broccoli", "cauliflower",
    "spinach", "kale", "lettuce", "zucchini", "cucumber", "celery", "mushroom", "pumpkin",
    "eggplant", "sweet potato", "radish", "beet", "cabbage", "peas", "corn", "chili pepper",
    "asparagus", "leek", "ginger", "parsley", "dill", "basil",

    // Fruits
    "apple", "banana", "orange", "lemon", "lime", "grape", "watermelon", "strawberry",
    "blueberry", "raspberry", "mango", "pineapple", "peach", "plum", "pear", "kiwi",
    "pomegranate", "avocado", "cherry", "grapefruit", "coconut", "papaya", "apricot",
    "fig", "passion fruit", "dragon fruit", "guava", "melon", "blackberry", "cranberry",

    // Grains and Legumes
    "rice", "wheat", "quinoa", "oats", "barley", "millet", "buckwheat", "cornmeal",
    "lentils", "chickpeas", "kidney beans", "black beans", "pinto beans", "peas",
    "soybeans", "tofu", "tempeh",

    // Dairy and Alternatives
    "milk", "cheese", "yogurt", "butter", "cream", "ghee", "almond milk", "soy milk",
    "oat milk", "coconut milk",

    // Meat and Seafood
    "chicken", "beef", "pork", "lamb", "duck", "turkey", "fish", "salmon", "tuna",
    "shrimp", "crab", "lobster", "mussels", "clams", "scallops",

    // Nuts and Seeds
    "almond", "walnut", "cashew", "pecan", "pistachio", "hazelnut", "peanut",
    "chia seeds", "flaxseeds", "sunflower seeds", "pumpkin seeds", "sesame seeds",

    // Sweeteners
    "sugar", "honey", "maple syrup", "agave syrup", "molasses", "stevia",

    // Oils and Fats
    "olive oil", "coconut oil", "vegetable oil", "sunflower oil", "sesame oil",
    "canola oil", "peanut oil", "avocado oil", "butter", "margarine",

    // Herbs and Spices
    "salt", "pepper", "paprika", "turmeric", "cinnamon", "nutmeg", "cumin", 
    "coriander", "oregano", "thyme", "rosemary", "sage", "chili powder", 
    "cayenne", "clove", "cardamom", "vanilla",

    // Other
    "flour", "baking powder", "baking soda", "vinegar", "soy sauce", "sriracha",
    "mustard", "ketchup", "mayonnaise", "chocolate", "cocoa powder", "coffee",
    "tea", "noodles", "pasta", "bread", "crackers", "jam", "jelly", "peanut butter"
];


// Event Listener for Form Submission
document.getElementById('ai-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user inputs (selected product and ingredients)
    const selectedProduct = document.getElementById('product').value;
    const ingredients = document.getElementById('ingredients').value.trim();

    if (!selectedProduct || !ingredients) {
        document.getElementById('recipe-text').innerHTML = "Please select a product and enter ingredients.";
        return;
    }

    // Validate Ingredients
    const ingredientsArray = ingredients.split(',').map(item => item.trim().toLowerCase());
    const invalidIngredients = ingredientsArray.filter(item => !edibleIngredients.includes(item));

    if (invalidIngredients.length > 0) {
        document.getElementById('recipe-text').innerHTML = `
            <p class="text-red-500">Error: The following ingredients are not recognized as edible: 
            ${invalidIngredients.join(', ')}</p>`;
        return;
    }

    // Generate Recipe
    const recipeText = generateAdvancedRecipe(selectedProduct, ingredientsArray);
    document.getElementById('recipe-text').innerHTML = '';  // Clear previous content
    typeWriter(recipeText, 0);  // Type the new recipe
});

// Function to Generate an Advanced Recipe
function generateAdvancedRecipe(product, ingredients) {
    switch (product) {
        case 'Mushroom Protein Patty':
            return generateMushroomProteinPattyRecipe(ingredients);
        case 'Mushroom Protein Snack Bars':
            return generateMushroomProteinSnackBarsRecipe(ingredients);
        case 'HydroColloid Mushroom Protein Powder':
            return generateProteinPowderRecipe(ingredients);
        case 'Plant-Powered Mushroom Protein Ready Meals':
            return generateReadyMealsRecipe(ingredients);
        default:
            return 'Product not found. Please try again.';
    }
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
