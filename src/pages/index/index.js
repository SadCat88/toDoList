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
// слушает событие - клик по кнопке

/**
 * Обрабатывает ввод задачи
 *
 * @deprecated <pre>
 * Создает объект с новой задачей:
 * todo: 		  'текст новой задачи',
 * checked: 	0/1 выполнено,
 * important: 0/1 важное
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

    let checked = '';
    if (arr[i].checked == true) {
      checked = 'checked';
    }

    //=== добавить новому элементу содержание
    $task.innerHTML = `
      <input class="todo-list__item-input" type="checkbox" data-id="${i}" id="task_${i}" ${checked}>
      <label class="todo-list__item-label" for="task_${i}">${arr[i].todo}</label>
    `;

    $toDoList.append($task);
    // добавить новый элемент последним дочерним элементом в список
  }
}

document.onclick = whereClick;
// событие клика по документу

/**
 * Определяет где был клик
 * @deprecated <pre>
 * Логика:
 * - Был ли клик на чекбоксе;
 * - Была снята или поставлена галочка;
 * - Если галочка поставлена, записать в массив с задачами в нужный объект 
 * свойство checked = true;
 * </pre>
 * @param {object} event - событие
 */
function whereClick(event) {
  let target = event.target;
  // цель события
  if (target.classList.contains('todo-list__item-input')) {
    // если цель события - input  с нужным классом
    let id = target.dataset.id;
    // считаем атрибут data-id
    if (target.checked) {
      // если чекбокс в состоянии отмечен
      taskList[id].checked = true;
      // изменить в массиве задач для нужной задачи свойство checked = true
    } else {
      // иначе
      taskList[id].checked = false;
      // изменить в массиве задач для нужной задачи свойство checked = false
    }
  }
}
