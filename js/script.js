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
    renderCountryList();
    renderFavorites();
    renderSummary();

    handleCountryButtons();

}

//CRIANDO UM HTML PARA MOSTRAR NA TELA //
function renderCountryList(){
    let countriesHTML = "<div>";

    allCountries.forEach(country =>{
        const{ name, flag, id, population}= country;

        const countryHTML = `
            <div class='country'>
                <div>
                    fsdsa
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        
        `;

        countriesHTML += countryHTML;   //COLOCANDO NO COUNTRIESHTML AS DIVS//
    });

    tabCountries.innerHTML = countriesHTML;  // VAI RECEBER O HTML//
}
function renderFavorites(){

}
function renderSummary(){

}
function handleCountryButtons(){

}