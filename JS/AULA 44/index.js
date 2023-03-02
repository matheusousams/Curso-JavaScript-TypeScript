function subtracao(a, b) {
    if(typeof(a) !== 'number' ||
       typeof(b) !== 'number') {
        throw new Error('a ou b precisam ser números.');
    }

    return a - b;
}

try {
    console.log(subtracao(5, 3));
    console.log(subtracao('1', 5));
} catch(error) {
    console.log(error);
}