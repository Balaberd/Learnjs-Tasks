// Вывод односвязного списка в обратном порядке
// важность: 5
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.

// Сделайте два решения: с использованием цикла и через рекурсию.

function printList(list) {
  if (list.next) {
    printList(list.next);
  }
  alert(list.value);
}

function printReverseList(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    alert(arr[i]);
  }
}
