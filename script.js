const img = document.querySelector('#foto');
const nome = document.querySelector('#nome');
const id = document.querySelector('#id');

const pokemon = document.querySelector('#pokemon');
const buscar = document.querySelector('#buscar');

//pede para buscar os dados da API
pokemon.addEventListener('keypress',(e)=>{
 let pokeNome = pokemon.value;
    if(e.key=="Enter"){
        getDados(pokeNome);
    }
})
buscar.addEventListener('click',()=>{
    let pokeNome = pokemon.value;
    getDados(pokeNome);
})


//pega os dados da API e mostra na tela
function getDados(pokeNome){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNome}`).then(
        response =>{
            return response.json();
        }
    )
    .then(
        data=>{
            img.src = data.sprites.other['official-artwork'].front_default;
            nome.innerHTML = data.name;
            id.innerHTML = data.id;
        }
    )
    .catch(
        error=>{
            console.log('ERROR');
            img.src = ``;
            nome.innerHTML = `Pokemon não encontrado :(`;
            id.innerHTML = ``;
        }
    )
}
