// Criando o vetor com 10 números inteiros
let numeros = [5, 12, 8, 21, 30, 14, 7, 3, 22, 11];
let somaPares = 0;

// Percorrendo o vetor para encontrar e somar os pares
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares += numeros[i];
    }
}

console.log("Vetor completo:", numeros);
console.log("Soma apenas dos números pares:", somaPares); 
// Nesse exemplo: 12 + 8 + 30 + 14 + 22 = 86