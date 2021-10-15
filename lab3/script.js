//Функция для поиска заданного с помощью выпадающих списков урока
function findLesson() {
  //Достали из списков день и номер урока
  let thisDay = document.getElementById('selectedDay').value;
  let thisLesson = document.getElementById('selectedLesson').value;
  //Нашли урок
  let thisCell = document.querySelector(`#timetable tr:nth-child(${+thisDay + 2}) td:nth-child(${+thisLesson + 2})`);
  unsellectAll(); //Сняли выделения со всех других уроков
  //Выделили найденный
  thisCell.classList.add('selected');
  //Вернем информацию о том, пуста ли клетка
  return thisCell.textContent !== "";
}

//Случайная генерация заполненной клетки при первом открытии
function generateLesson() {
  //Случайно получим день и номер урока
  let thisDay = Math.floor(Math.random() * 5);
  let thisLesson = Math.floor(Math.random() * 4);

  //Зададим спискам сгенерированные данные
  document.getElementById('selectedDay').value = thisDay;
  document.getElementById('selectedLesson').value = thisLesson;

  //Выделим клетку
  //Если она пуста, тогда поищем новую клетку
  if (!findLesson())
    generateLesson();
}

//Функция для снятия выделения во всех клеток
function unsellectAll() {
  //Получим все клетки
  let cells = document.querySelectorAll(`#timetable tr td`);
  //Снимем с них всех selected
  for (cell of cells) {
    cell.classList.remove('selected');
  }
}

//Выделение клетки (для ивента по наведению)
function hover(event) {
  event.currentTarget.classList.add('active');
}
//Снятие выделения
function unhover(event) {
  event.currentTarget.classList.remove('active');
}
//Снятие select`а
function unsellect(event) {
  event.currentTarget.classList.remove('selected');
}