let url = "https://pokeapi.co/api/v2/pokemon/chimchar";

fetch(url)
.then((response) => response.json())
// the => takes the parameter response and returns it's result
.then(function(data) {
    console.log(data);
})
.catch(function(error){});
