//Передаем массив, получаем сумму положительных чисел в нем
function calculation_x(x){
    let sum = 0;
    for (const number in x) {
        if (number > 0)
            sum += number;
    }
    return sum;
}

function mathClick(n){
    //Случайные числа от -100 до 100 (формула Math.random() * (max - min) + min )
    let x = Array.from({length: n}, () => Math.floor(Math.random() * (100 + 100) - 100));
    let sum = calculation_x(x);
}