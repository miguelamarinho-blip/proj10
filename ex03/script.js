let vetorNumeros = [4, 7, 2, 4, 9, 4, 1, 8, 7, 3];

// Número que o usuário escolheu para buscar
let numeroProcurado = 4; 
let contador = 0;

// Verificando quantas vezes ele aparece
for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] === numeroProcurado) {
        contador++;
    }
}

console.log("Vetor:", vetorNumeros);
console.log(`O número ${numeroProcurado} aparece ${contador} vezes no vetor.`);