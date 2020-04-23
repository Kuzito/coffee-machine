"use strict"
//window.document.documentElement.body находит ветв body документа в нашем окне(DOM-дереве)
//document.body; //сокращенная версия, если не требуется 
//Поиск элементов
//----------------------Устаревшие методы-------------------------------------------------------
/*let coffeeMachine = document.getElementById("coffee"); //Поиск по Id(ищет элемент с заданным id)
console.log(coffeeMachine);
let images = document.getElementsByTagName("img"); //Поиск элементов по тэгу(возвращает коллекцию)
console.log(images);
let coffeeItems = document.getElementsByClassName("coffee-item"); //Поиск по классу
console.log(coffeeItems);
let firstImage = coffeeItems[0].getElementsByTagName("img"); //ищет картинку в первом элементе
console.log(firstImage[0]); //выводим первую найденную картинку*/
//----------------------------------------------------------------------------------------------
//----------------------Современные методы------------------------------------------------------
/*let coffeeMachine = document.querySelector("#coffee");
console.log(coffeeMachine);
let image = document.querySelector("img"); //Находит первый элемент, результат - элемент(не коллекция)
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item"); //Находит все элементы с классом coffee-item
console.log(coffeeItems);
let itemImages = document.querySelectorAll(".coffee-item img"); //Находит все картинки(элементы img) в классе coffee-item
console.log(itemImages);
let cupImages = document.querySelectorAll(".coffee-item img, .coffee-cup img"); // + к предыдущему находит img в классе coffee-cup 
console.log(cupImages);*/
//---------------------------------------------------------------------------------------------
//--------------------------Работа с элементами------------------------------------------------
//Изменение CSS свойств
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid darkblue"; //меняем границу нашей кофе-машины
coffeeMachine.style.borderRadius = "25px"; //если имя свойства состоит из двух слов через "-"", в команде "-" убирается и заменяется на "верблюжью" нотацию 
coffeeMachine.style.position = "absolute"; //меняем положение в окне
coffeeMachine.style.top = "15px";
coffeeMachine.style.left ="150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) ); //с помощью parseInt получаем число(без него получаем "15px")*/
//Изменение аттрибутов
/*let balance = document.querySelector("input[type='text']"); //получаем первый элемент с тегом input у которого свойство type равно text
let balanceType = balance.getAttribute("type"); //получаем тип атрибута тега input с типом text
console.log(balanceType);
balance.setAttribute("type", "date"); //поменяли тип с "текст" на "дата"

console.log( balance.hasAttribute("placeholder") ); //проверяем, есть ли такой аттрибут(true/false) 
balance.removeAttribute("aria-label"); //удаляем аттрибут
balance.value = 500; // == balance.setAttribute('value', 500) таким образом мы можем обращяться только к уже существующим в HTML аттрибутам(не созданным нами) 
console.log(balance.value); // == balance.getAttribute('value') таким образом мы можем обращяться только к уже существующим в HTML аттрибутам(не созданным нами) */

//Измение классов
/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList); //получаем список классов кнопки с классом btn
changeButton.classList.remove("btn-primary"); //удаляем класс btn-primary
changeButton.classList.add("btn-success");*/
//changeButton.classList.toggle("класс") // Вкл. / Выкл. если есть такой класс - убирает, если нет - добавляет

//Измение содержимого элемента
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML ); //получаем внутреннее содержимое наших тегов
console.log( displayText.innerText ); //получаем внутреннее содержимое наших тегов
displayText.innerHTML = "<b>Готовим кофе</b>"; // заменяет на тег
//displayText.innerText ="<b>Готовим кофе</b>"; //заменяет на текст*/

//События и слушатели событий
 //Мышь - click mouserover mouseup mousedown mousemove
 //для input - focus change
 
 //this возвращает объект к которому обращено свойство или метод

//<div class="coffee-item" onclick="buyCoffee('Американо', 50, this)">

/*То же самое что
  let elem = document.querySelectorAll(".coffee-item");
  elem[0].onclick = function() {
    buyCoffe('Американо', 50, this);
  }
*/

//--------------------------------Планирование----------------------------------------
//таймаут

/*let timeout = setTimeout(paintBody, 5000, 'aqua');   //выполнит функцию paintBody через 5000 мс(через 5 секунд)

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearTimeout(timeout);    //сбрасывает таймаут(если время еще не вышло - отменяет выполнение функции)
}

setTimeout(function() {              //то же самое, что setTimeout(paintBody, 5000, 'aqua'), но с использованием функции-обёртки
  paintBody('aqua');
}, 5000);

function paintBody(color) {
  document.body.style.background = color;
}
*/

/*let coffeeMachine = document.querySelector('.coffee-machine');
coffeeMachine.style.position = "absolute";*/
/*
let interval = setInterval(trashConsole, 1000);  //повторяет выполнение функции через интервал (у нас каждую 1сек)

let changeButton = document.querySelector(".btn");
changeButton.onclick = function () {
  clearInterval(interval);         //очищает интервал (останавливает повтор выполнения функции)
}

function trashConsole() {
  console.log(Math.random());
}
*/

  //changeBox.append(coin);  //добавляет монетку в конец внутри элемента
  //changeBox.prepend(coin); //добавляет монетку в начало внутри элемента
  //changeBox.before(coin);  //перед элементом
  //changeBox.after(coin);  //после элемента
  //changeBox.replaceWith(coin);  //заменяет элемент

