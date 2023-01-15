function conta(numero) {
    if(numero < 0){
        document.write("seu numero é menor que zero")
    }
    else if(numero >= 10){
        document.write("Seu número é maior que o permitido")
    }
    
    while(numero <= 10){

        document.write(numero)
        numero ++
    }

}

const numeroDefinido = prompt("Digite um numero ")

conta(numeroDefinido)