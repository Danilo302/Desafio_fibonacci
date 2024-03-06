function fibonacci(n){
    let penultimo = 0 
    let ultimo = 1
    let numero 
    while (true){
        if(n === numero){
            console.log(`Numero ${n} encontrado na sequencia fibonacci!`)
            break
        }else if(numero > n){
            
            console.log("Numero não encontrado na sequencia fibonacci!")
            break

        }
        
        numero = penultimo + ultimo
        penultimo = ultimo
        ultimo = numero
        
    }
}
fibonacci(89)