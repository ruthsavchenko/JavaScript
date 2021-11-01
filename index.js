//Переменные и выражения
//1
let a = 5;
let b;
let c;

b = a * 3;
c = a + b;

console.log(a)
console.log(b)
console.log(c)

//2
let firstName = prompt("What is your first name?", "")
let lastName = prompt("What is your last name?", "")

alert(`What's up ${firstName} ${lastName}?`)

//3
let x = prompt("What's your first value?", 22)
let y = prompt("What's your second value?", 30)

alert(x * y)
alert(x - y)
alert(x / y)
alert(x + y)

//4
let hourRate = prompt("What's your hour rate?", "")
let workingHours = prompt("What's count of your working hours?", "")
let workingDays = prompt("How many days a week do you work?", "")

let monthSalary = alert(hourRate * workingHours * workingDays * 4)

//5
let value = prompt("Enter your number", "")
alert(value % 2 == 0 ? "Even" : "Odd");

//6
let value = prompt("Enter your number", "")

if (isNaN(value)) {
    alert("Your value isn't a number")
} else {
    alert(`Your number is ${value}`)
}

//7
let a = Math.round(Math.random() * 100);
let b = prompt("Enter your number", "")

if (a < b) {
    alert('Second number is larger then the first.');
} else if (a > b) {
    alert('First number is larger than the second.');
} else {
    alert('Numbers are equal.');
}

//8
let a = "Мне нравится изучать"
let str = prompt("", "Мне нравится изучать Front-end")
let str2 = prompt("What do you like to learn?", "")

if (str.search(str2) > -1) {
    alert("Your word is Front-end")
} else {
    alert("You don't like to learn Front-end")
}

let result = alert(`Мне нравится изучать ${str2}`)

//Условные и логические операторы
//1
let x = prompt("Enter your number", "")
alert(x % 2 == 0 ? "Even" : "Odd");

//2
let myMoney = prompt("How much money do you have?", "")
let friendMoney = prompt("How much money has your friend?", "")

let totalSum = +myMoney + +friendMoney

if (totalSum <= 50) {
    alert("You can't go to Mayorka, go drink beer")
} else {
    alert("You can go to Mayorka")
}

//3
let age = 50;

alert((20 <= age && age < 27) ? "Выслать повестку" : "Не высылать повестку")

//4
let value = prompt("Number of your bus", "")

alert((value == 7 || value == 225 || value == 255) ? "Вы едете домой" : "Вы ожидаете следующую маршрутку")

//5
let day = "monday"

alert((day != "Saturday" || day != "Sunday") ? "You must go to the work" : "You can rest")

//6
let x = +prompt("Введите значение от -20 до 20")
let y = +prompt("Введите значение от -20 до 20")

alert((x <= 1 && y >= 3 || y < 0) ? (x + y) : "Неверно!")

//7
let x = +prompt("Введите число", "")
let y = +prompt("Введите число", "")

alert((x > 2 && x < 11 || y >= 6 && y < 14) ? x + 2 : x + 5)

//8
let username = prompt("Введите имя пользователя", "")
alert((username === null || username === undefined) ? "Вы ввели неверное значение" : `Привет ${username}`)

//9
let greeting = "";
let lang = prompt("Введите язык", "'ru', 'en', 'de'");

if (lang == 'ru') {
    greeting = "Привет!";
}
if (lang == 'en') {
    greeting = "Hello!";
}
if (lang == 'de') {
    greeting = "Hallo!";
}
alert(greeting);

//or

let greeting = "";
let lang = prompt("Введите язык", "'ru', 'en', 'de'");

switch (lang) {
    case 'ru':
        greeting = "Привет!";
        break;
    case 'en':
        greeting = "Hello!";
        break;
    case 'de':
        greeting = "Hallo!";
        break;
}
alert(greeting);

//10
let month = new Date();
let season = alert(month.getMonth());

if (month.getMonth() == 12 || month.getMonth() == 1 || month.getMonth() == 2) {
    alert("Winter")
} else if (month.getMonth() == 3 || month.getMonth() == 4 || month.getMonth() == 5) {
    alert("Spring");
} else if (month.getMonth() == 6 || month.getMonth() == 7 || month.getMonth() == 8) {
    alert("Summer");
} else if (month.getMonth() == 9 || month.getMonth() == 10 || month.getMonth() == 11) {
    alert("Autumn");
} else {
    alert("Unknown time of the year")
}

//11
let lang = prompt("Введите язык", "'ru', 'en'");
let ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
let en = ['M', 'Tu', 'Wed', 'Td', 'Fri', 'Sat', 'San']

switch (lang) {
    case 'ru':
        alert(ru[date.getDay()])
        break;
    case 'en':
        alert(en[date.getDay()])
        break;
}

//12
let name = prompt("What's your name?", "")
let age = +prompt("What's your age?", "")

switch (name, age) {
    case 'Kate', 15:
        alert(`Привет ${name} ${age}`)
        break;
    case 'John', 29:
        alert(`Привет ${name} ${age}`)
        break;
    default:
        alert('Пока');
}

//Циклы
//1
let str = '';

for (let i = 0; i < 5; i++) {
    str = str + '.#';
}

console.log(str);

//2
let str = '';

for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) {
        str[i] = i * i
    }
}

console.log(str);

//3
let userName = 'Ruth';
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        document.write(`Happy birthday, dear ${userName} <br>`)
    } else {
        document.write('Happy birthday to you <br>')
    }
}


//4
do {
    var answer = confirm("test");
} while (answer === true);

//5 

function sumOfOddNums() {
    let value = +prompt("Введите число", "")
    var sum = 0;
    for (var i = 1; i <= value; i++) {
        if (i % 2 == 1)
            sum += i;
    }
    alert(sum)
}

//6
let i = 0;

while (true) {
    let value = Math.random();
    i++;

    if (value > 0.9) {
        alert(`value: ${value}`);
        break;
    }
}


//7 Используя вложенные циклы, распечатайте в консоли значения таблицы
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j = j + 1) {
        let num = i * j;
        document.write(` ${num} `);
    }
    document.write('<hr>');
}


//8
function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

//9
var amount = 0;
for (var i = 0; ; i++) {
    var user = +prompt("Введите число");
    if (user) {
        var amount = +amount + user;
        continue;
    } else {
        break;
    }
}
var average = amount / i;
console.log(i);
console.log(amount);
console.log(average);


//10
for (var i = 0; ; i++) {
    var password = prompt("Введите пароль");
    if (password == "admin") {
        alert("Вы успешно авторизованы!")
        break;
    } else if (password == '' || password == null) {
        let cancel = confirm("Вы уверены, что хотите отменить авторизацию?");
        if (!cancel) {
            password = prompt("Введите пароль");
        } else {
            alert("Вы отменили авторизацию")
            break;
        }
    }
}



//11
const fizzBuzz = num => {
    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i);
        }
    }
}
