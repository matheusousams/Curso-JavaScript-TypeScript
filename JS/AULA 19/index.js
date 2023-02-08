const a = {
    nome: 'Matheus',
    sobrenome: 'Márcio'
};

const b = a;

b.nome = 'Ana';
console.log(a);
console.log(b);