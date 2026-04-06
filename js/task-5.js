function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Напиши скрипт, який змінює колір фону елемента < body >
//   через інлайн - стиль по кліку на button.change - color і
// задає це значення кольору текстовим вмістом для span.color.
const buttonClick = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
buttonClick.addEventListener('click', handlClick);

function handlClick(event) {
  if (event.target === buttonClick) {
    const color = getRandomHexColor();
    bodyEl.style.backgroundColor = color;
    spanEl.textContent = color;
  }
  console;
}
