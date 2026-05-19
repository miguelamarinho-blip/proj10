let numerosAleatorios = [];

// Preenchendo automaticamente com 7 números entre 1 e 100
for (let i = 0; i < 7; i++) {
    // Math.random() gera o número decimal, Math.floor() arredonda para inteiro
    let numeroGerado = Math.floor(Math.random() * 100) + 1;
    numerosAleatorios.push(numeroGerado);
}

console.log("Valores gerados aleatoriamente pelo computador:");
console.log(numerosAleatorios);