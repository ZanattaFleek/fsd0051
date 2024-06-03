function contar(oque = 0) {
  return oque + 1;
}

let contador = 0;

contador = contar(contador) + contar(contador); // Wagner - Contador = 2

contador = contar(contador) + contar(contador); // 6

contador = contar(contador) + contar(contador); // 14

console.log(contador);
