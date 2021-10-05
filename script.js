/*let div = document.getElementById('Pokemones')
  let spinner = document.getElementById('spinner')
  tch('http://localhost:3000/pokemones')
  .then((res) => res.json())
  .then((pokemones) => {
    console.log(pokemones)
    spinner.style.display = 'none'
    pokemones.forEach((p) => {
      div.innerHTML += `
    <div>
      <img src="${p.img}" >
      <p>${p.nombre}</p>
    </div>
  `
    })
  })*/

const axios = require('axios');
const http = require ('http');

http.createServer((req, res ) => {

}).listen(3000,()=> console.log( 'escuchando puerto 3000'))

let pokemonesPromesas = []

async function pokemonesGet() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon') 
  return data.results
}

async function getFullData(name) { const { data } = await
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`) 
  return data
}

pokemonesGet().then((results) => {
  results.forEach((p) => {
let pokemonName = p.name
    pokemonesPromesas.push(getFullData(pokemonName))
  })
  Promise.all(pokemonesPromesas).then((data) => {
    data.forEach((p) => {
      console.log(`${p.name} => Alto: ${p.height} - Peso: ${p.weight}`)
    })
  }) 
})
