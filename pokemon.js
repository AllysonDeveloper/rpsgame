var pegaPokemon = (a=10) => {
    var main = document.querySelector('main');
    main.innerHTML = "";
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+a)
    .then(response => response.json())
    .then(allPokemon => {
        var pokemons = [];
        var pokemon;
        allPokemon.results.map((val)=>{
            pokemon = {
                nome : val.name,
                url : val.url
            }
            pokemons.push(pokemon)
        })
        
        pokemons.map((val)=>{
            fetch(val.url)
            .then(response => response.json())
            .then(propertyes => {
                val.prop = propertyes;
                main.innerHTML += `
                <div class="card">
                    <img class="imagem" src="`+val.prop.sprites.front_default+`">
                    <span class="nome">`+val.nome+`</span>
                </div>
                `;
            })
        })
    });
}

pegaPokemon();
var qtd = document.getElementById('quantidade');
qtd.addEventListener("keyup",()=>{
    pegaPokemon(qtd.value);
})