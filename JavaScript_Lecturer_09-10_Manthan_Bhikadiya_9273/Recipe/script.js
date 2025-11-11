const fetchData = document.getElementById('fetchbtn');
const loader = document.getElementById('loader');
const recipes = document.getElementById('recipes');
const img = document.getElementById('img');
const Ingrediants = document.getElementById('Ingrediants');
const Instuctions = document.getElementById('Instuctions');

function getRecipe() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({
                    img: './img/paneer.jpg',
                    Ingrediants: ['1. 2 liters (about 8.5 cups) whole milk', '2. 2-3 tablespoons lemon juice, vinegar, or curd diluted in a little water', '3. Cheesecloth or muslin cloth', '4. A heavy object for pressing'],
                    Instuctions: "Boil the milk: Pour the milk into a heavy-bottomed pot and bring it to a gentle boil, stirring occasionally to prevent it from scorching. Curdle the milk: Once the milk boils, turn off the heat.Gradually add the diluted lemon juice(or other agent) while stirring slowly until the milk solids(curds) separate from the greenish liquid(whey). Strain: Place a colander or strainer over a bowl and line it with the cheesecloth.Pour the curdled milk mixture into the cloth to drain the whey. Rinse and press: Rinse the collected curds with cold water to stop the cooking process and remove any sour taste from the lemon juice.Gently squeeze out the excess water. Set the paneer: Wrap the paneer in the cheesecloth and place a plate or chopping board on top, then place a heavy object(like cans) on the plate to press it.Let it set for at least 30 minutes to an hour to form a firm block. Use or store: Once set, the homemade paneer is ready to be cut into cubes and used in your desired recipe.You can store it in the fridge, submerged in water, for up to a week. "
                });
            } else {
                reject('Error: recipe data not found');
            }
        }, 2000);
    });
}

async function fetchRecipeData() {
    loader.classList.remove('hidden');
    recipes.classList.add('hidden');

    try {
        const recipe = await getRecipe();
        loader.classList.add('hidden');
        img.src = recipe.img;
        Ingrediants.textContent = recipe.Ingrediants.join(', ');
        Instuctions.textContent = recipe.Instuctions;
        recipes.classList.remove('hidden');
    } catch (error) {
        console.log(error);
        loader.textContent = 'Failed to load recipe data.';
        loader.style.color = 'red';
    }
}

fetchData.addEventListener('click', fetchRecipeData);
