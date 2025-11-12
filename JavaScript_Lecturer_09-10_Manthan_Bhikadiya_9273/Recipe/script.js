const loader = document.getElementById('loader');
const recipes = document.getElementById('recipes');
const recipeName = document.getElementById('recipeName');
const img = document.getElementById('img');
const Ingrediants = document.getElementById('Ingrediants');
const Instuctions = document.getElementById('Instuctions');

const btn1 = document.getElementById('fetchbtn1');
const btn2 = document.getElementById('fetchbtn2');
const btn3 = document.getElementById('fetchbtn3');

let allRecipes = [];

async function fetchRecipeData() {
    loader.classList.remove('hidden');
    recipes.classList.add('hidden');

    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();

        loader.classList.add('hidden');
        allRecipes = data.recipes;
        console.log(allRecipes);
    } catch (error) {
        console.error(error);
        loader.textContent = 'Failed to load recipe data.';
        loader.style.color = 'red';
    }
}

function displayRecipe(recipe) {
    if (!recipe) {
        loader.textContent = 'No recipe data available.';
        loader.classList.remove('hidden');
        return;
    }

    loader.classList.add('hidden');
    recipes.classList.remove('hidden');

    recipeName.textContent = recipe.name;
    img.src = recipe.image;
    Ingrediants.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
    Instuctions.textContent = recipe.instructions;
}

async function setBtn() {
    await fetchRecipeData();

    btn1.addEventListener("click", () => displayRecipe(allRecipes[5]));
    btn2.addEventListener("click", () => displayRecipe(allRecipes[6]));
    btn3.addEventListener("click", () => displayRecipe(allRecipes[9]));
}

setBtn();
