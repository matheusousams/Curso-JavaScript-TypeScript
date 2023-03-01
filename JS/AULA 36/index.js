// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Fulano',
    sobrenome: "da Silva",
    idade: 56
};

for (const key in pessoa) {
    console.log(key, pessoa[key]);
}