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

let $toDoInput = document.querySelector('.todo-add-task__input');
let $toDoButton = document.querySelector('.todo-add-task__button');
let $toDoList = document.querySelector('.todo-list');

let taskList = [];
let important = false;

$toDoButton.addEventListener('click', addToDo);
// слушает событие - клик по кнопке

/**
 * Обрабатывает ввод новой задачи
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

  let $inputText = $toDoInput.value;
  // введенное пользователем значение
  let $inputLabel = document.querySelector('.todo-add-task__label');
  // подсказка для ввода
  let taskExist = isExist(taskList, $inputText);
  // такая задача уже существует?

  if (taskExist == true) {
    // === вывод подсказки
    $inputLabel.style.color = '#991050';
    $inputLabel.innerHTML = 'Такое задание уже существует';
  }

  if ($inputText == '') {
    // === вывод подсказки
    $inputLabel.style.color = '#991050';
    $inputLabel.innerHTML = 'Вы ввели пустое значение';
  }

  // === добавляем только не пустое задание
  if ($inputText != '' && taskExist != true) {
    // === новое задание
    let newToDo = {
      todo: $toDoInput.value,
      checked: false,
      important: important
    };

    // === добавление кнопки очистки
    if (taskList.length === 0) {
      let $btnClearTaskList = document.createElement('button');
      $btnClearTaskList.className = 'button todo-list__clear-button';
      $btnClearTaskList.innerHTML = 'Очистить список';
      document.querySelector('.todo-panel').append($btnClearTaskList);
    }

    //=== вывод подсказки
    $inputLabel.style.color = '#001e4a';
    $inputLabel.innerHTML = 'Введите еще одну задачу:';

    taskList.push(newToDo);
    // добавить новое задание в массив заданий
    displayNewToDoIntoList(taskList);
    // вывести новое задание на экран}
  }
  console.log(taskList);
}

/**
 * Проверяет имеется ли такой же объект в массиве
 *
 * @deprecated <pre>
 * Перебирает массив объектов и проверяет, существует ли уже объект с таким же
 * значением в одном из свойств.
 * </pre>
 * @param {arrange} arr - массив с объектами
 * @param {string} str - строка для проверки
 * @returns {boolean}
 */
const isExist = (arr, str) => {
  let exist = false;
  // === перебор всего массива
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].todo == str) {
      // проверка - имеется ли в одном из объектов свойство с таким же значением
      exist = true;
    }
  }
  return exist;
};

/**
 * Выводит на экран содержимое массива
 *
 * @param {arrange} arr - массив содержащий объекты с заданиями и их состоянием
 */
function displayNewToDoIntoList(arr) {
  $toDoList.innerHTML = '';
  //очистка списка на экране

  // === перебор всех заданий из массива
  for (let i = 0; i < arr.length; i++) {
    let $task = document.createElement('li');
    // создать новый элемент
    $task.className = 'todo-list__item';
    // установить для нового элемента класс

    let checked = '';
    if (arr[i].checked == true) {
      // если в массиве состояние checked: true, то в DOM нарисовать галочку
      checked = 'checked';
    }

    let importantClass = '';
    if (arr[i].important == true) {
      importantClass = ' todo-list__item-label_red';
    }

    //=== добавить новому элементу содержание
    $task.innerHTML = `
    <input class="todo-list__item-input-completed" type="checkbox" data-id="${i}" id="task_${i}" ${checked}>
    <label class="todo-list__item-label${importantClass}" for="task_${i}">${arr[i].todo}</label>
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
 * нужное свойство checked или important;
 * </pre>
 * @param {object} event - событие
 */
function whereClick(event) {
  let $target = event.target;
  // цель события

  // === если цель события - checkbox - флаг выполнения задачи
  if ($target.classList.contains('todo-list__item-input-completed')) {
    let id = $target.dataset.id;
    // считаем атрибут data-id
    if ($target.checked) {
      // если чекбокс в состоянии отмечен
      taskList[id].checked = true;
      // изменить в массиве задач для нужной задачи свойство checked = true
    } else {
      // иначе
      taskList[id].checked = false;
      // изменить в массиве задач для нужной задачи свойство checked = false
    }
  }

  // === если цель события - checkbox - флаг важности задачи
  if ($target.classList.contains('important__checkbox')) {
    if ($target.checked) {
      // если чекбокс в состоянии отмечен
      important = true;
      // выставляем флаг - важное задание
    } else {
      important = false;
    }
  }
}
