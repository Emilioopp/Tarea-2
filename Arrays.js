function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}
console.log(sumaArray([1, 2, 3, 4, 5]));

function promedioArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
console.log(promedioArray([1, 2, 3, 4, 5]));

function ArregloMayus(Arreglo) {
    let newArreglo = [];
    for (let i = 0; i < Arreglo.length; i++) {
        newArreglo.push(Arreglo[i].toUpperCase());
    }
    return newArreglo;
}
console.log(ArregloMayus(["hola", "mundo", "como", "estas"]));

function soloPares(Arreglo) {
    let newArreglo = [];
    for (let i = 0; i < Arreglo.length; i++) {
        if (Arreglo[i] % 2 == 0) {
            newArreglo.push(Arreglo[i]);
        }
    }
    return newArreglo;
}
console.log(soloPares([1, 2, 3, 4, 5, 6]));