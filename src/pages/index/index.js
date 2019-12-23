// подключение стилей
import '../../assets/scss/base.scss';
import '../../assets/scss/main.scss';

import './index.scss';

// БЭМ
import '../../components/center-p/center-p.scss';

// JS modules
import { getAfterContent } from '../../assets/js/getAfterContent.js';

// временные стили
// import "../../assets/scss/temporality.scss";

// ==================================================================== index.js
// =============================================================================
('use strict');

let $toDoInput = document.querySelector('.todo-task__input');
let $toDoButton = document.querySelector('.todo-task__button');
let $toDoList = document.querySelector('.todo-list');

let taskList = [];

$toDoButton.addEventListener('click', addToDo);

/**
 * Обрабатывает ввод задачи
 *
 * * @deprecated <pre>
 * Создает объект с новой задачей:
 * todo: 		  'текст новой задачи',
 * checked: 	0/1 выполнено,
 * important: 0/1 важное
 *
 * </pre>
 * @param {object} event - событие
 */
function addToDo(event) {
  event.preventDefault();
  // отмена действия по умолчанию

  // === новое задание
  let newToDo = {
    todo: $toDoInput.value,
    checked: false,
    important: false
  };

  taskList.push(newToDo);
  // добавить новое задание в массив заданий
  displayNewToDoIntoList(taskList);
  // вывести новое задание на экран
}

/**
 * Выводит на экран содержимое массива
 *
 * @param {arrange} arr - массив содержащий объекты с заданиями и их состоянием
 */
function displayNewToDoIntoList(arr) {
  $toDoList.innerHTML = '';
  //очистка списка

  // === перебор всех заданий из массива
  for (let i = 0; i < arr.length; i++) {
    let $task = document.createElement('li');
    // создать новый элемент
    $task.className = 'todo-list__item';
    // установить для нового элемента класс
    $task.setAttribute('id', `task_${i}`);
    // установить для нового элемента атрибут id
    $task.innerHTML = arr[i].todo;
    // добавить новому элементу содержание
    $toDoList.append($task);
    // добавить новый элемент последним дочерним элементом в список
  }
}
