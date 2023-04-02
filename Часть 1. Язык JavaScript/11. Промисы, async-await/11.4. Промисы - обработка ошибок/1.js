// Ошибка в setTimeout
// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.           //нет, промис не может обрабоать ошибку

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

