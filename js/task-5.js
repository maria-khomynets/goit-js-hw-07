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
buttonClick.addEventListener('click', handlClick);
spanEl.addEventListener('click', handlClick);
function handlClick(event) {
  event.target.style.backgroundColor = getRandomHexColor();
}
