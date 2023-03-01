// For clássico - Geralmente com interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (interáveis, arrays ou strings)

var linguagens = ['Java', 'JavaScript', 'SQL'];

for (var key = 0; key < linguagens.length; key++) {
    console.log(linguagens[key]);
}

console.log('-----------------');

for (var key in linguagens) {
    console.log(linguagens[key], key);
}

console.log('-----------------');

for (var key of linguagens) {
    console.log(key);
}

console.log('-----------------');

linguagens.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
});