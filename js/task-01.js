const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
const categoryCount = categoryItems.length;
console.log('Number of categories:', categoryCount);

categoryItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElements = categoryItem.querySelectorAll('li');
  const elementCount = categoryElements.length;
  console.log('Category:', categoryName);
  console.log('Elements:', elementCount);
});