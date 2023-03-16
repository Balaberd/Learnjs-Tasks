// Название JavaScript
// важность: 2
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let response = prompt("Какое «официальное» название JavaScript?");

if (response.toLocaleLowerCase() === "ECMAScript".toLocaleLowerCase()) {
  alert("Верно!");
} else {
  alert("Не знаете? ECMAScript!");
}
