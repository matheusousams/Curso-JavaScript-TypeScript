const nome = 'Luiz'; // string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string

const num1 = 0; //number
const num2 = 10.52; //number
let nomeAluno; //undefined -> não aponta para nenhum local na memória
const sobrenomeAluno = null; // nulo -> não aponta para nenhum local na memória
const aprovado = false; // boolean = true, false (lógico)

let a = 2;
const b = a;
console.log(a,b); // 2, 2

a = 3;
console.log(a, b); // 3, 2