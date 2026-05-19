// Vetor original informado pelo usuário com valores repetidos
let vetorOriginal = [10, 5, 10, 3, 5, 8, 2, 3, 1, 5];
let vetorSemDuplicatas = [];

// Filtrando para mover os dados sem repetir
for (let i = 0; i < vetorOriginal.length; i++) {
    // Se o número AINDA NÃO existe no vetor novo, ele entra
    if (!vetorSemDuplicatas.includes(vetorOriginal[i])) {
        vetorSemDuplicatas.push(vetorOriginal[i]);
    }
}

console.log("Vetor Original (com duplicados):", vetorOriginal);
console.log("Vetor Final (sem duplicados):", vetorSemDuplicatas);