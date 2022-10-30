// Задание 3. Написать функцию, которая принимает число как аргумент и возвращает функцию, 
// которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
// Выведите в консоль результат.
function example(func) {
    func();
    return function () {
        y = 2;
        console.log(y + z);
    }
}

function argFunc() {
    z = 3
}

const resultFunc = example(argFunc);
resultFunc();