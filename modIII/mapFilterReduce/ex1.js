/*
Map
Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro
this de um objeto criado por você, e depois sem ele.

Filter
Filtre e retorne todos os números pares de um array.

Reduce
Some todos os números de um array
Crie uma função que recebe uma lista de preços e um número representando o saldo disponível.
 Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
 */

const apple = {
    value: 2,
}

const orange = {
    value: 3,
}

function mapWithThis(arr, thisArg) {
    return arr.map(function (item) {
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this-> Apple', mapWithThis(nums, apple));

console.log('this-> Orange', mapWithThis(nums, orange));

/*-------------------------------//---------------------------- */

function mapWithoutThis(arr) {
    return arr.map(function (item) {
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapWithoutThis(nums))

/*-------------------------------//----------------------------*/

function filterPairs(arr) {
    return arr.filter(callBack)
}

function callBack(item) {
    return item % 2 === 0;
}

const myArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterPairs(myArray));

/*-------------------------------//----------------------------*/
//Reduce

function sumNumbers(arr) {
    return arr.reduce(function (prev, current) {
        console.log(prev);
        console.log(current);
        return prev + current;
    })
}

const arr = [1, 2];
console.log(sumNumbers(arr));

//----------------------------------
const lista = [{
    name: 'sabao em pó',
    price: 30
},
{
    name: 'cereal',
    price: 12
},
{
    name: 'toalha',
    price: 30,
},
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    lista.reduce(function (prev, current, index) {
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current })
        return prev - current.price;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel,lista));
