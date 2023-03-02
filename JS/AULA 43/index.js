/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e por 5 = FizzBuzz
 * Número NÃO é divisível por 3 e 5 = Retorna o próprio número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */


function fizzBuzz(number) {
    if(typeof(number) !== 'number') {
        return number;
    }
    if(number%3===0 && number%5===0) {
        return 'FizzBuzz';
    }
    if(number%3===0) {
        return 'Fizz';
    }
    if(number%5===0) {
        return 'Buzz';
    }
    return number;
}

console.log('a', fizzBuzz('a'));

for (let key = 0; key <= 100; key++) {
    console.log(key, fizzBuzz(key));
}