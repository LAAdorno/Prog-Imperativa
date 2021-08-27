function calculoImc (altura, peso){
    let imc = peso / (altura*altura);
    if (imc<18.5){
        return "Você está abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9){
        return "Seu peso está normal"
    } else if (imc >= 25 && imc <= 29.9){
        return "Você está com sobrepeso"
    } else if (imc >= 30 && imc <= 34.9){
        return "Você está com obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9){
        return "Você está com obesidade grau II"
    } else if (imc >=40){ return "Você está com Obesidade grau III ou mórbida"}
}

console.log(calculoImc(1.79,60));




function podeSubir(altura, acompanhado){
    let acompanhado = "Sim"
    if ((altura >= 1.40 && altura < 2.00) && (acompanhado = "Sim" || "")) {
        return "Pode subir"
    }
    else if ((altura < 1.40) && (acompanhado = "Sim")){
        return "Pode subir"
    }
    else if ((altura < 1.40) && (acompanhado = "")){
        return "Num pode subir :("

    }

    else if ((x<=1.20) && (acompanhado = "Sim" || "")){
         return "Num pode subir :("
    }

}

console.log(podeSubir(1.50, "Não"))
