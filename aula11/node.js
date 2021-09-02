let peliculas = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]
let animacoes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

for (let i = 0; i < peliculas.lenght; i++){
    console.log(peliculas[i].toUpperCase())
}

let contador = animacoes.length

for (let i = 0; i < contador; i++){
    peliculas.push(animacoes.shift())
}

console.log(peliculas)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

for (let i = 0; i < asiaScores.length; i++) {
    console.log(asiaScores[i] === euroScores[i] ? `A ${i + 1}ª nota é igual` : `A ${i + 1}ª nota não é igual`)
}