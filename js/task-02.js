const ulIngredients = document.getElementById("ingredients");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  
  li.textContent = ingredient;
  
  li.classList.add("item");
  
  ulIngredients.appendChild(li);
});

