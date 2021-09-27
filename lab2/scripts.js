/*

ВАРИАНТ 5

1. При помощи языка программирования JavaScript разработать алгоритм программы,
которая для заданного ряда чисел x1, x2... xn подсчитывает сумму положительных чисел.
Пользователь вводит значение n в текстовое поле формы. Массив значений х генерируется случайным образом.
Для вычисления создать пользовательскую функцию calculation_x, значения n и х передаются в качестве параметра.

2. Проверка расширения файла Архивы (zip, rar, ...)

 */

//Передаем массив, получаем сумму положительных чисел в нем
function calculation_x(x){
    //reduce применяет функцию к каждому элементу массива,
    //       возвращая результирующее значение
    //Мы будем суммировать prev и cur если cur > 0
    //Дополнительный параметр в функции - начальное значение,
    //       чтобы прибавлять к 0, а не к [0] элементу
    return x.reduce(function (a, b) {
        return b > 0 ? a + b : a;
    }, 0);
}

//Проверим является ли переменная интом
function isInt(value) {
    return !isNaN(value) && parseInt(Number(value)) == value && !isNaN(parseInt(value, 10));
}

//Основаня функция, при нажатии на Ок на главной странице
//   под полем для ввода кол-ва цифр массива
function mathClick(){
    //Проверим, чтобы в поле вообще было число
    document.n = document.getElementById("n").value;
    if (!isInt(document.n)){
        alert("You should enter N number!")
        return;
    }
    document.resultElem = document.querySelector(".modal div.output");
    document.resultElem.innerHTML = "<b>Введенный n:</b> " + document.n + "<br><br>";

    //Случайные числа от -100 до 100 (формула Math.random() * (max - min) + min )
    let x = Array.from({length: document.n}, () => Math.floor(Math.random() * (100 + 100) - 100));
    let sum = calculation_x(x);

    let output = "<b>Массив чисел:</b> " + x.join(", ") + "<br><br>";
    output += "<b>Сумма положительных:</b> " + sum + "<br><br>";

    setTimeout(() => {
        document.resultElem.innerHTML += output;
    }, 1000);
}

//Основная функция, которая обрабатывает нажатие Ок на главной странице
//   под полем для ввода названия файла
function regexClick(){
    document.fname = document.getElementById("fname").value;
    if (!document.fname){
        alert("You should enter fname!")
        return;
    }

    document.resultElem = document.querySelector(".modal div.output");

    let output = "";
    if (text_regex(document.fname))
        output = "<br>Название файла <b>сходится</b> с названием архива.<br>"
    else
        output = "<br>Название файла <b>НЕ сходится</b> с названием архива.<br>";

    setTimeout(() => {
        document.resultElem.innerHTML += output;
    }, 1000);
}

//Проверяем введенный путь регуляркой на расширение архивов (все что смог вспомнить)
function text_regex(fname) {
    return (/^.*\.(zip|rar|rar4|7z)$/.test(fname.toLowerCase()));
}