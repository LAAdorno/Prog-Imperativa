const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (a, b){
    let pontosPrimeiroParticipante = 0
    let pontosSegundoParticipante = 0
    for (let i = 0; i <= b.length; i++){
        if(a[i]> b[i]){
            pontosPrimeiroParticipante = pontosPrimeiroParticipante+1
        }
        else if (a[i]< b[i]){
            pontosSegundoParticipante = pontosSegundoParticipante+1
        
        }
         else {   
            pontosPrimeiroParticipante = pontosPrimeiroParticipante
            pontosSegundoParticipante = pontosSegundoParticipante
         }
    }
    if(pontosPrimeiroParticipante > pontosSegundoParticipante){
            
    console.log(`Alicia tem ${pontosPrimeiroParticipante} pontos e é a vencedora!`)
    }else{
        console.log(`Bob tem ${pontosSegundoParticipante} e é o vencedor!)`)
    }
    
}

console.log(encontrarGanhador(alicia, bob))