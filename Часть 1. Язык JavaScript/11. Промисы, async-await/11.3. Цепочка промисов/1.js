// Промисы: сравните then и catch
// Являются ли фрагменты кода ниже эквивалентными? Другими словами, ведут ли они себя одинаково во всех 
// обстоятельствах, для всех переданных им обработчиков?

// promise.then(f1).catch(f2); 
// Против:
// promise.then(f1, f2);        

// если ошибка произойдёт в f1, то она будет обработана в .catch