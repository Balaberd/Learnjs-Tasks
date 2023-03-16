// Скрыть элемент по нажатию кнопки
// важность: 5
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

const btn = document.querySelector("button");

btn.onclick(() => {
  document.getElementById("text").hidden = true;
});
