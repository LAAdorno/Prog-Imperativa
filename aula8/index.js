function podeSubir(altura, acompanhado){
    if ((altura >= 1.40) && (acompanhado = "Sim" || "Não")) {
        return "Pode subir"
    }
    else if ((altura < 1.40) && (acompanhado = "Sim")){
        return "Pode subir"
    }
    else if ((altura < 1.40) && (acompanhado = "Não")){
        return "Num pode subir :("

    }

    else if ((x<=1.20) && (acompanhado = "Sim" || "Não")){
         return "Num pode subir :("
    }

}

console.log(podeSubir(1.2, "Não"))
