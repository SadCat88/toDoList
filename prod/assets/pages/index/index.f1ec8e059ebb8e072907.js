!function(t){function e(e){for(var o,a,l=e[0],i=e[1],s=e[2],d=0,p=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);for(u&&u(e);p.length;)p.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,l=1;l<n.length;l++){var i=n[l];0!==r[i]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={0:0},c=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="./";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=i;c.push([9,1]),n()}([,function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(0)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(0)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(0)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){var o=n(8);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};n(0)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(1),n(3),n(5),n(7);var o=document.querySelector(".todo-add-task__input"),r=document.querySelector(".todo-add-task__button"),c=document.querySelector(".todo-list"),a=[],l=!1;r.addEventListener("click",(function(t){t.preventDefault();var e=o.value,n=document.querySelector(".todo-add-task__label"),r=i(a,e);1==r&&(n.style.color="#991050",n.innerHTML="Такое задание уже существует");""==e&&(n.style.color="#991050",n.innerHTML="Вы ввели пустое значение");if(""!=e&&1!=r){var s={todo:o.value,checked:!1,important:l};if(0===a.length){var u=document.createElement("button");u.className="button todo-list__clear-button",u.innerHTML="Очистить список",document.querySelector(".todo-panel").append(u)}n.style.color="#001e4a",n.innerHTML="Введите еще одну задачу:",a.push(s),function(t){c.innerHTML="";for(var e=0;e<t.length;e++){var n=document.createElement("li");n.className="todo-list__item";var o="";1==t[e].checked&&(o="checked");var r="";1==t[e].important&&(r=" todo-list__item-label_red"),n.innerHTML='\n    <input class="todo-list__item-input-completed" type="checkbox" data-id="'.concat(e,'" id="task_').concat(e,'" ').concat(o,'>\n    <label class="todo-list__item-label').concat(r,'" for="task_').concat(e,'">').concat(t[e].todo,"</label>\n    "),c.append(n)}}(a)}console.log(a)}));var i=function(t,e){for(var n=!1,o=0;o<t.length;o++)t[o].todo==e&&(n=!0);return n};document.onclick=function(t){var e=t.target;if(e.classList.contains("todo-list__item-input-completed")){var n=e.dataset.id;e.checked?a[n].checked=!0:a[n].checked=!1}e.classList.contains("important__checkbox")&&(l=!!e.checked)}}]);