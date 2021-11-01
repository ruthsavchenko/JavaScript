//1 Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert

// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

// let value = (num) => isNaN(num) ? 0 : num;
// alert(arr.reduce((a, b) => +value(a) + +value(b)));


//2 Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow()

// const n = 10;
// const arr = [];

// for (let i = 0; i < n; i++) {
//     const random = Math.round(Math.random() * 10).toFixed(2) ** 5;
//     console.log(random);
//     arr.push(random);
// };

// console.log(arr)


/*3 Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
a. Добавьте в начало массива значение ‘Backbone.js’
b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
c. Добавьте в массив значение ‘CommonJS’ вторым элементом
d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert
со словами “Это здесь лишнее” */

// const arr = ['AngularJS', 'jQuery']

// arr.unshift('Backbone.js');
// arr.push('ReactJS', 'Vue.js')
// arr.splice(1, 0, "CommonJS");
// let index = arr.indexOf('jQuery');

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'jQuery') {
//         alert(arr[i] + ' - Это здесь лишнее');
//         delete arr[i];
//     }
// }

// console.log(arr)


/*4 Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь
однажды сломал головой фонарь’ с помощью любых методов массива (indexOf,
splice ...). Затем объедините элементы массива в строку и выведите в alert
исходный и итоговый варианты. */

// let str = 'Как однажды Жак звонарь сломал фонарь головой'
// let arr = str.split(' ')
// let lastWord = arr.pop();

// arr.splice(5, 0, lastWord)
// str = arr.join(' ')

// console.log(arr)


/*5 Создайте ассоциативный массив person, описывающий персону, с
произвольным количеством произвольных полей. С помощью оператора in или
typeof проверьте наличие в объекте свойства, прочитанного из prompt, и
выведите его на экран. Если свойства нет, то добавляйте его в объект со
значением, которое также запрашивается из prompt.*/

// let person = {
//     name: "Ruth",
//     age: "20",
//     position: "Developer",
// }

// let property = prompt('Введите свойство');

// if (property in person) {
//     alert(person[property]);
// } else {
//     person[property] = prompt('Введите значение вашего свойства');
//     alert(property + ': ' + person[property]);
// };

// console.log(person)


/*6 Сгенерируйте объект, описывающий модель телефона, заполнив все свойства
значениями, прочитанными из prompt (например: brand, model, resolution,
color...), не используя вспомогательные переменные. Добавьте этот гаджет
персоне, созданной ранее. */

// let person = {
//     name: "Ruth",
//     age: "20",
//     position: "Developer",
// }

// const phone = {}

// phone.brand = prompt("Введите бренд телефона")
// phone.model = prompt("Введите модель телефона")
// phone.resolution = prompt("Введите расширение телефона")
// phone.color = prompt("Введите бренд телефона")

// person.phone = phone;

// console.log(person)

/*7 Создайте объект dates для хранения дат. Первая дата – текущая, new Date.
Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в
формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат
объекта dates.*/

// const dates = {};

// const currentDate = new Date();
// let promptValue = new Date(prompt('Введите дату в формате (yyyy-MM-dd)'));

// dates.today = currentDate.toDateString();
// dates.secondDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1)).toDateString();

// if (+new Date(promptValue) <= +new Date(dates.today) && +new Date(promptValue) >= +new Date(dates.secondDate)) {
//     console.log('Ваша дата в диапазоне!');
// } else {
//     console.log('Ваша дата не в диапазоне дат!');
// }


/*8 Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt
для ввода любых символов, полученное значение добавляйте в конец
созданного массива. После выхода из цикла посчитайте сумму всех чисел
массива и выведите в alert полученный результат.*/

// const arr = [];

// for(;;) {
//     let value = prompt('Введите любое число')

//     if(!isNaN(+value) && value) {
//         arr.push(+value)
//     } else if (value) {
//         alert('Вы ввели не числовое значение')
//     } else {
//         break;
//     }
// }

// let sum = arr.reduce((a, b) => a + b, 0)

// alert(sum)


/*9 Используя вложенные циклы, сформируйте двумерный массив, содержащий
таблицу умножения */

// let multiplicationTable = [];

// for(let i = 1; i <= 10; i++) {
//     multiplicationTable[i-1] = [];

//     for (let j = 1; j <= 10; j++) {
//         multiplicationTable[i-1].push(`${i} x ${j} = ${i * j}`)
//     }
// }

// console.log(multiplicationTable) 


/*10 Создайте структуру данных, полностью описывающую html-разметку картинки.*/ 

// const img = {
//     src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png", 
//     alt: '',
//     style: 'border: 1px solid #ccc',
//     width: 200
// };

// console.log(img)


//Functions
/* Напишите функцию max, которая сравнивает два числа и возвращает
большее: console.log( max(0, -1) ); // 0 */

// function max(num1, num2) {
//     if(num1 > num2) {
//         return num1
//     } else if (num1 < num2) {
//         return num2
//     } else {
//         console.log("Your numbers are equal")
//     }
// }


/* Напишите функцию-аналог Math.min(). Функция принимает любое количество
чисел и возвращает меньшее из них: 
console.log( min(0, -1, 100, 500, 100500) ); // -1 */

// function min() {
//     const args = [...arguments];

//     let minNum = args.reduce((a, b) => {
//         if (b < a) {
//             return a = b;
//         } 
//         return a
//     }, args[0])

//     return minNum;
// }


/*3 Изучите перебирающие методы массивов: forEach, filter, map. Создайте
массив объектов users (~10 объектов), каждый объект имеет поля firstname,
lastname, age с разными значениями. Используя встроенные функции массивов: 
a. Отфильтруйте пользователей младше 18 лет
b. Добавьте каждому объекту поле fullName, которое является
конкатенацией имени и фамилии
c. Сформируйте новый массив, который содержит только полное имя
пользователей
*/

// const users = [
//     {firstname: 'Ruth', lastname: 'Savchenko', age: '20'}, 
//     {firstname: 'John', lastname: 'Johnson', age: '66'}, 
//     {firstname: 'Olesia', lastname: 'Jacobson', age: '16'},
//     {firstname: 'Oleg', lastname: 'Ford', age: '76'},
//     {firstname: 'Maria', lastname: 'Kravets', age: '37'}
// ]

// const age = users.filter(user => +user.age < 18)
// console.log(age)

// const addField = users.map(user => {
//     user.fullName = user.firstname + ' ' + user.lastname;
//     return user;
// })
// console.log(addField)

// const fullnameUsers = [];
// addField.forEach(el => fullnameUsers.push(el.fullName))
// console.log(fullnameUsers)


/*4 Напишите функцию аналог метода массива shift. Функция удаляет из
переданного в параметре массива первый элемент */

// function shift(arr) {
//     const newArray = [];
//     for(let i = 1; i < arr.length; i++) {
//         newArray.push(arr[i]);
//     }
//     return newArray
// }

// shift([1, 2, 3, 4, 5, 6])


/*5 Напишите функцию аналог метода массива push. Функция добавляет в конец
переданного в параметре массив произвольное количество элементов.*/

// function push(arr) {
//     const elements = [];
//     for(let i = 1; i < arguments.length; i++) {
//         elements.push(arguments[i]);
//     }
//     return [...arr, ...elements];
// }

// push([1, 2, 3, 4, 5, 6], 4, 6, 3)


/*6 Напишите функцию аналог метода Object.assign(). Первый параметр функции -
целевой объект, поля которого будут изменены или расширены. Остальные
параметры - объекты-источники, полями которых будет расширяться целевой
объект. */

// function ObjectAssign(sourse) {
//     let obj = {}

//     for(let i = 1; i < arguments.length; i++) {
//         obj = {
//             ...obj, 
//             ...arguments[i]
//         }
//     }

//     return {
//         ...sourse, 
//         ...obj
//     }
// }

// var source = {firstname: 'Tom', age: 10}
// var s = ObjectAssign(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}


/*7 Напишите функцию setComment с параметрами: date, message, author. Дата и
текст сообщения - обязательные параметры, если какой-то из них или оба
отсутствуют, то выполнение функции должно обрываться, а пользователю
выдаваться предупреждение (alert) о том, что данные переданы некорректно.
Параметр author - опциональный, но должна происходить проверка: если
параметр не передан, то вместо него подставляется значение ‘Anonymous’.
Функция распечатывает в консоле текст в формате:
<имя_автора>, <дата>
<текст_сообщения> */

// function setComment(date, message, author = 'Anonymous') {
//     if(!date && !message) {
//         alert('Error')
//     }
//     console.log(author + ', ' + date + ', ' + message)
// }

// setComment('2016-11-02', 'Everything is ok', 'John');
// setComment('2016-11-02', 'You could do it better!');


//Замыкания
/*1 Используя замыкание, напишите функцию createTimer, которая использует
метод performance.now() для получения текущей временной метки и служит
для замера времени выполнения другого кода(код менять, видоизменять
нельзя, как написан так и должен остаться): */

// function createTimer() {
//     let t0 = performance.now();

//     return function() {
//         let t1 = performance.now();
//         return `Время выполнения кода ${t1 - t0}`;
//     }
// }

// const timer = createTimer();
// alert('!')
// alert(timer());


/*2 Используя замыкания, создайте функцию createAdder(), которая принимает на
вход любой примитивный параметр и возвращает функцию, которая добавляет
к первому параметру второй. Функция работает по следующему принципу: */

// function createAdder(arg1) {
//     return function(arg2) {
//         return arg1 + arg2
//     }
// }

// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry
// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10