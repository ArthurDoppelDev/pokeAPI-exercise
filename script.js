const img = document.querySelector('#foto');
const nome = document.querySelector('#nome');
const id = document.querySelector('#id');

const pokemon = document.querySelector('#pokemon');
const buscar = document.querySelector('#buscar');

//ajeitar dps
/* buscar.addEventListener('keypress',(e)=>{
     let pokeNome = pokemon.value;
        if(e.key=="Enter"){
            

            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNome}`).then(
                response =>{
                    return response.json();
                }
            )
            .then(
                data=>{
                    console.log(data.name);//rastrear nome
                    console.log(data.id);//rastrear id
                    console.log(data.sprites.other['official-artwork'].front_default);//rastrear foto 
                    img.src = data.sprites.other['official-artwork'].front_default;
                    nome.innerHTML = data.name;
                    id.innerHTML = data.id;
                }
            )
            .catch(
                error=>{
                    console.log('ERROR')
                }
            )
        }
    }) */

buscar.addEventListener('click',()=>{
    let pokeNome = pokemon.value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeNome}`).then(
        response =>{
            return response.json();
        }
    )
    .then(
        data=>{
            /* console.log(data.name);//rastrear nome
            console.log(data.id);//rastrear id
            console.log(data.sprites.other['official-artwork'].front_default);//rastrear foto */
            img.src = data.sprites.other['official-artwork'].front_default;
            nome.innerHTML = data.name;
            id.innerHTML = data.id;
        }
    )
    .catch(
        error=>{
            console.log('ERROR')
        }
    )
})

