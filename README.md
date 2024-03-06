## Função `fibonacci`

Esta função verifica se um número pertence à sequência de Fibonacci.

### Parâmetros:
- `n` (number): O número a ser verificado.

### Exemplo de Uso:
```javascript
fibonacci(89);
```

### Algoritmo:
1. Inicializa as variáveis `penultimo` e `ultimo` com 0 e 1, respectivamente.
2. Inicializa a variável `numero`.
3. Entra em um loop infinito.
4. Verifica se o número atual é igual ao número fornecido. Se for, imprime uma mensagem indicando que o número foi encontrado na sequência de Fibonacci e encerra o loop.
5. Verifica se o número atual excede o número fornecido. Se sim, imprime uma mensagem indicando que o número não foi encontrado na sequência de Fibonacci e encerra o loop.
6. Calcula o próximo número na sequência de Fibonacci somando `penultimo` e `ultimo`.
7. Atualiza os valores de `penultimo` e `ultimo` para os próximos números na sequência.
8. Repete os passos 4 a 7 até que o número seja encontrado ou exceda o número fornecido.
