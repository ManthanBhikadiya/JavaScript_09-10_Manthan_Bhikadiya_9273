const RE_KEY = "recipes";

// Load recipes
function loadRecipes() {
    return JSON.parse(localStorage.getItem(RE_KEY) || "[]");
}

// Save recipes
function saveRecipes(list) {
    localStorage.setItem(RE_KEY, JSON.stringify(list));
}

// Generate unique ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 8);
}

let recipes = loadRecipes();

// ingredients
function normaIngredients(str) {
    return str.split(",").map(x => x.trim().toLowerCase()).filter(Boolean);
}

// Display recipes
function displayRecipes(list) {
    const box = document.getElementById("recipes");
    const empty = document.getElementById("empty");

    box.innerHTML = "";
    const arr = list || recipes;

    if (arr.length === 0) {
        empty.classList.remove("hidden");
        return;
    }

    empty.classList.add("hidden");

    arr.forEach(r => {
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow p-4";

        card.innerHTML = `
        <div class="flex justify-between items-center">
            <h2 class="font-semibold text-lg">${r.title}</h2>
            <span class="px-2 py-1 bg-orange-100 text-orange-600 rounded text-xs">${r.cuisine}</span>
        </div>

        <p class="text-sm text-gray-600 mt-1">Ingredients: ${r.rawIngredients}</p>
        <p class="text-sm mt-2 whitespace-pre-wrap">${r.instructions}</p>

        <div class="flex gap-2 mt-3">
            <button data-id="${r.id}" data-action="edit" class="px-3 py-1 bg-blue-600 text-white text-xs rounded">
                Edit
            </button>

            <button data-id="${r.id}" data-action="delete" class="px-3 py-1 border text-xs rounded">
                Delete
            </button>
        </div>
        `;

        box.appendChild(card);
    });
}

displayRecipes();

// Form 
const form = document.getElementById("form");
const addBtn = document.getElementById("addBtn");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const rawIngredients = document.getElementById("ingredients").value.trim();
    const instructions = document.getElementById("instructions").value.trim();
    const cuisine = document.getElementById("cuisine").value;
    const editingId = document.getElementById("editId").value;

    if (!title || !rawIngredients) {
        alert("Title and Ingredients are required!");
        return;
    }

    const recipeData = {
        id: editingId || generateId(),
        title,
        rawIngredients,
        ingredients: normaIngredients(rawIngredients),
        instructions,
        cuisine: cuisine || "Other"
    };

    if (editingId) {
        recipes = recipes.map(r => r.id === editingId ? recipeData : r);
        addBtn.textContent = "Add Recipe";
    } else {
        recipes.push(recipeData);
    }

    saveRecipes(recipes);
    displayRecipes();
    form.reset();
    document.getElementById("editId").value = "";
});

// Edit / Delete
document.getElementById("recipes").addEventListener("click", function (e) {
    const action = e.target.dataset.action;
    const id = e.target.dataset.id;

    if (action === "edit") {
        const r = recipes.find(x => x.id === id);

        document.getElementById("title").value = r.title;
        document.getElementById("ingredients").value = r.rawIngredients;
        document.getElementById("instructions").value = r.instructions;
        document.getElementById("cuisine").value = r.cuisine;
        document.getElementById("editId").value = r.id;

        addBtn.textContent = "Update Recipe";
    }

    if (action === "delete") {
        if (confirm("Delete this recipe?")) {
            recipes = recipes.filter(r => r.id !== id);
            saveRecipes(recipes);
            displayRecipes();
        }
    }
});

// SEARCH
document.getElementById("search").addEventListener("input", function () {
    const text = this.value.trim().toLowerCase();

    if (!text) {
        displayRecipes(recipes);
        return;
    }

    const filtered = recipes.filter(r =>
        r.title.toLowerCase().includes(text) ||
        r.rawIngredients.toLowerCase().includes(text) ||
        r.cuisine.toLowerCase().includes(text)
    );

    displayRecipes(filtered);
});