const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

if(numero1 >= numero2) {
    console.log(`El numero ${numero1} es mayor o igual que ${numero2}`);
} else {
    console.log(`El numero ${numero1} no es mayor o igual que ${numero2}`);
}

if(numero1 <= numero2) {
    console.log(`El numero ${numero1} es menor o igual que ${numero2}`);
} else {
    console.log(`El numero ${numero1} no es menor o igual que ${numero2}`);
}

if(numero1 < numero3) {
    console.log(`El numero ${numero1} es menor que ${numero3}`);
} else {
    console.log(`El numero ${numero1} no es menor que ${numero3}`);
}

if(numero3 < numero2) {
    console.log(`El numero ${numero3} es menor que ${numero2}`);
} else {
    console.log(`El numero ${numero3} no es menor que ${numero2}`);
}

if(numero3 !== numero1) {
    console.log(`El numero ${numero3} es estrictamente diferente que ${numero1}`);
} else {
    console.log(`El numero ${numero3} no es estrictamente diferente que ${numero1}`);
}

if(numero1 === numero2) {
    console.log(`El numero ${numero1} es estrictamente igual que ${numero2}`);
} else {
    console.log(`El numero ${numero1} no es estrictamente igual que ${numero2}`);
}