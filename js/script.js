/**estado da aplicação (state) */


//CRIANDO VARIAVEIS DE ESTADO DA APLICAÇÃO//
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = 0;
let countFavorites = 0;

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let numberFormat = null;

//BUSCANDO OS DADOS COM DOM, IMPLEMENTANDO A FUNC START//
window.addEventListener('load', () =>{
    tabCountries = document.querySelector('#tabCountries')
    tabFavorites = document.querySelector('#tabCountries')
    countCountries = document.querySelector('#countCountries')
    countFavorites = document.querySelector('#countCountries')

    totalPopulationList = document.querySelector('#totalPopulationList')
    totalPopulationFavorites = document.querySelector('#totalPopulationFavorites')
    
    numberFormat = Intl.NumberFormat('pt-BR');

    fetchCountries();
    
})


//FUNÇÃO COM ASYNC/AWAIT E TRANSFORMANDO PARA PEGAR ID, NAME, POPULATION E FLAG//
async function fetchCountries(){
    const res = await fetch('https://restcountries.eu/rest/v2/all');
    const json = await res.json();
    allCountries = json.map(country =>{
        const {numericCode,translations, population, flag} =  country;




        return {
            id: numericCode,
            name: translations.pt,
            population,
            flag
        };
    });
        render(); 
}


//CRIANDO A FUNÇÃO RENDER//
function render(){

}