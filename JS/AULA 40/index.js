let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0;
while (i < numeros.length) {
    
    let key = numeros[i];

    if (key === 2) {
        i++;
        continue;
    }

    console.log(key);

    if (key === 7) {
        i++
        break;
    }

    i++;
}