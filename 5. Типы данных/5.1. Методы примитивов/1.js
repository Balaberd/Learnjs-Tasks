// Можно ли добавить свойство строке?
// важность: 5
// Взгляните на следующий код:

// let str = "Привет";

// str.test = 5;

// alert(str.test);
// Как вы думаете, это сработает? Что выведется на экран?

// В данном случае будет unedfined, если добавить в прототип String данное поле, тогда вернет значение
str.__proto__.test = "its work";
str.test; //its work
