const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

const mayor = Math.max(numero1, numero2, numero3);
console.log(`El número mayor es: ${mayor}`);

const menor = Math.min(numero1, numero2, numero3);
console.log(`El número menor es: ${menor}`);

if (numero1 % 2 === 0) {
    console.log(`El número ${numero1} es par.`);
} else {
    console.log(`El número ${numero1} es impar.`);
}

if (numero2 % 2 === 0) {
    console.log(`El número ${numero2} es par.`);
} else {    
    console.log(`El número ${numero2} es impar.`);
}

if (numero3 % 2 === 0) {
    console.log(`El número ${numero3} es par.`);
} else {
    console.log(`El número ${numero3} es impar.`);
}

if (numero1 % 5 === 0) {
    console.log(`El número ${numero1} es multiplo de 5.`);
} else {
    console.log(`El número ${numero1} no es multiplo de 5.`);
}

if (numero2 % 5 === 0) {
    console.log(`El número ${numero2} es multiplo de 5.`);
} else {    
    console.log(`El número ${numero2} no es multiplo de 5.`);
}

if (numero3 % 5 === 0) {
    console.log(`El número ${numero3} es multiplo de 5.`);
} else {
    console.log(`El número ${numero3} no es multiplo de 5.`);
}
