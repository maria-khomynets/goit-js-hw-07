// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента(тегу < h2 >)
//і кількість елементів у категорії(усіх < li >, вкладених у нього).

const categoryItems = document.querySelectorAll('.item');

const categories = categoryItems.length;
console.log(`Number of categories: ${categories}`);

for (let i = 0; i < categoryItems.length; i++) {
  const title = categoryItems[i].querySelector('h2').textContent;
  const count = categoryItems[i].querySelectorAll('li').length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${count}`);
}
