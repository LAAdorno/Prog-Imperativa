/*
Mesa 08
Anderson A. Souza (Andy)
Gustavo Stefano
Marcos Luiz Pereira
Luiz Augusto Adorno
*/

function SuperMicroondas (menu, tempo){
    let resultado = ""
    switch(menu){
        case 
            menu = "Pipoca":
            if (tempo < 10){
                resultado = "tempo insuficiente"
            } else if (tempo === 10 || tempo < 19){
                resultado = "Prato pronto, bom apetite!"
            } else if (tempo > 20 && tempo < 29){
                resultado = "Comida queimou!"
            }
            else {
                resultado = "Kabuuuuuuum!!!!"
            }
            break;
        case 
            menu = "Macarrão":
            if (tempo < 8){
            resultado = "tempo insuficiente"
            } else if (tempo === 8 || tempo < 16){
            resultado = "Prato pronto, bom apetite!"
            } else if (tempo > 16 && tempo < 24){
            resultado = "Comida queimou!"
            }
            else {
            resultado = "Kabuuuuuuum!!!!"
        }
        break;
        case
            menu = "Carne":
            if (tempo < 15){
            resultado = "tempo insuficiente"
            } else if (tempo === 15 || tempo < 30){
            resultado = "Prato pronto, bom apetite!"
            } else if (tempo > 30 && tempo < 45){
            resultado = "Comida queimou!"
            }
            else {
            resultado = "Kabuuuuuuum!!!!"
        }
        break
        case
            menu = "Feijão":
            if (tempo < 12){
            resultado = "tempo insuficiente"
            } else if (tempo === 12 || tempo < 24){
            resultado = "Prato pronto, bom apetite!"
            } else if (tempo > 24 && tempo < 36){
            resultado = "Comida queimou!"
            }
            else {
            resultado = "Kabuuuuuuum!!!!"
        }
        break
        case
            menu = "Brigadeiro":
            if (tempo < 8){
            resultado = "tempo insuficiente"
            } else if (tempo === 8 || tempo < 16){
            resultado = "Prato pronto, bom apetite!"
            } else if (tempo > 16 && tempo < 24){
            resultado = "Comida queimou!"
            }
            else {
            resultado = "Kabuuuuuuum!!!!"
        }
        break;
        default:
            tempo = 0;
            menu = "Prato inexistente"
            if (menu === "Prato inexistente"){
                return menu + " = " + tempo
            }
    }
    return menu + " = " + resultado
}
console.log(SuperMicroondas ("",""));