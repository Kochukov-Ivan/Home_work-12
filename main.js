// document.querySelector(".one").onclick = function (event) {
//   console.log(event);
//   console.log("блок - 1");
// };
// document.querySelector(".two").onclick = function () {
//   console.log("Блок-2");
// };
// document.querySelector("#one").onmousemove = function () {
//   console.log("Блок-3");
//   document.querySelector(".there").onmouseenter = function () {
//     document.querySelector(".there").style.background = "pink";
//   };
//   document.querySelector(".there").onmouseleave = function () {
//     document.querySelector(".there").style.background = "black";
//   };
//   document.querySelector(".there").onmousedown = function () {
//     document.querySelector(".there").style.background = "red";
//   };
//   document.querySelector(".there").onmouseup = function () {
//     document.querySelector(".there").style.background = "green";
//   };
// };
// document.querySelector(".inp").oninput = function (event) { // 'on'- Это слушатель событий
//   console.log(event);
// };
// document.querySelector(".inp").onkeypress = function (event) {
//   console.log(event);
// };
// document.querySelector(".inp").onkeydown = function (event) {
//   console.log(event);
// };
// document.querySelector(".inp").onkeyup = function (event) {
//   console.log(event);
// };
// 1.Добавить и стилизовать див с событием клик, при клике увеличиваем его ширину и высоту на 15px
// 2.Добавить див с событием двойного клика. Написать функцию, которая будет запускаться при двойном клике и выводить в консоль данные, что есть внутри этого дива (написать произвольные данные внутри div)
// 3.Добавить картинку и при клике по ней заменять картинку на 2
//4. Написать функцию, которая выводит в поле на странице код символа и возвращает его
//5. Написать функцию, которая выведет false, если введена цифра

let width = 15; //создаем переменную равную 15 с помощью неё будем изменять ширину и высоту нашего div
document.querySelector(".one").onclick = function () {
  document.querySelector(".one").style.width = width + "px";
  width++;
  document.querySelector(".one").style.height = width + "px";
  width++;
  console.log("Задание 1");
};
let two = document.querySelector(".two");
document.querySelector(".two").ondblclick = function () {
  console.log(two.getAttribute("data")); //  выводит произвольные данные внутри div
};
document.querySelector(".img").onclick = function () {
  document.querySelector(".img").innerHTML = "2"; //при  клике по картинке выводит цифру 2
};

let input = document.querySelector(".input"); // Создаю переменную которая равна class input
let div = document.querySelector(".out"); // создаю вторую переменную для выводы charCode
let div2 = document.querySelector(".bool");
input.onkeypress = function (event) {
  let e = input.value; // e = значению введенному в инпут
  div.innerHTML = e.charCodeAt(0); // выводит в поле на странице код символа ( НО ПЕРВОЕ ЗНАЧЕНИЕ ПОЧЕМУ ТО 'NAN' )
  console.log(event.charCode);
  div2.innerHTML = isNaN(e); //работает но так же как и chatCode т.е. со второго введенного значения
};
