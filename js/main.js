// Примеры с урока:

console.log("КЛАССНАЯ РАБОТА:")

if (3 < 4)
{
    console.log("Let's ")
}
else
{
    console.log("Oops!")
}



console.log('start!');

let world = 'lorem';

if (world == 'ipsun')
    {
        console.log("output")
    }
    else if(world == 'lorem')
    {
        console.log("Correct!")
    }

    else
    {
        console.log('Error')
    }

    console.log('end')



let name = 'Ali';
let password = '12345';

let loginUser = prompt('Name or email:')
let passwordUser = prompt('Password:')



if(name == loginUser)
{
    if(password == passwordUser)
    {
        console.log("Welcome!")
    }
    else
    {
        console.log('Password is not correct!')
    }
}

else
{
    console.log("Get off, liar!")
}

if (1 && 1)
{
    console.log(true)
}
else
{
    console.log(false)
}

if (1 || 0)
{
    console.log(true)
}



// Крч, значения true/false тесно сплетены с условными операторами



let CoDe = 'html';

switch(CoDe)// Здесь то, что мы хотим сравнить с приведёнными ниже значениями case. Switch означает переключатель.
{   
    case "Roberto":// Выведется case1
    case 'html':
    console.log('case1');
    break;// Если не поставить этот брейк, то выведутся все case, начиная с того, который true. Вывод вообще начинается с того значения, которое true 

    case 'css':
    console.log('case2');
    break;

    case 'js':
    console.log('case3');
    break;

    default: // Вывод по дефолту, когда предыдущие case - false
        console.log('default');
}



// Тернарный оператор:



5 == 5 ? console.log('Success') : console.log('Error') // "5 == 5 ?" если 5 равно 5, двоеточие значит "иначе"



// Обычно такой опертаор записывается в переменную:



let a = 5 == 5 ? console.log('Success') : console.log('Error')

5 === '5' ? console.log('Success') : console.log('Error')// Без трёх равно вторая пятёрка будет восприниматься как number

5 !== 4 ? console.log('Success') : console.log('Error')// Старое доброе "НЕ" в лице "!"



// Д О М А Ш К А:



console.log("ДОМАШНЯЯ РАБОТА:");

const count = prompt("Введите константу:");

if (count < 10)

{console.log("Константа меньше 10");}

else

{console.log("Константа не меньше 10");}



let x = 10;
let y = 7;

x > y ? console.log('x больше, чем y') : console.log('x не больше, чем y');



let num = prompt("Введите число:")

if (num % 2 == 0)
{
    console.log(`Число ${num} чётное.`)
}

else
{
    console.log(`Число ${num} нечётное.`)
}



let eql_num1 = prompt("Введите первое число для сравнения:");
let eql_num2 = prompt("Введите второе число для сравнения:");
let eql_num3 = prompt("Введите третье число для сравнения:");
let max = eql_num1;

if (eql_num2 > max)
{
    max = eql_num2;
}

if (eql_num3 > max)
{
    max = eql_num3;
}

console.log(`Введённые для сравнения числа: ${eql_num1}, ${eql_num2}, ${eql_num3}`);
console.log("Наибольшее число: ", max);