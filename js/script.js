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
    tabFavorites = document.querySelector('#tabFavorites')
    countCountries = document.querySelector('#countCountries')
    countFavorites = document.querySelector('#countFavorites')

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
                    <a id="${id}" class="waves-effect waves-light btn"> +</a>
                </div>
                <div>
                    <img src="${flag}" alt="${name}">
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${population}</li>
                    </ul>
                </div>
            </div>
        `;

        countriesHTML += countryHTML;   //COLOCANDO NO COUNTRIESHTML AS DIVS//
    });

    countriesHTML += '</div>';

    tabCountries.innerHTML = countriesHTML;  // VAI RECEBER O HTML//
}

//MOSTRANDO OS ITENS TAMBEM COM TEMPLATES LITERALS//    
function renderFavorites(){
    let favoritesHTML = '<div>';

    favoritesCountries.forEach(country =>{
        const{ name, flag, id, population}= country;

        const favoriteCountryHTML = `
            <div class='country'>
                <div>
                    <a id="${id}" class="waves-effect waves-light btn red darken-4"> -</a>
                </div>
                <div>
                    <img src="${flag}" alt="${name}">
                </div>
                <div>
                    <ul>
                        <li>${name}</li>
                        <li>${population}</li>
                    </ul>
                </div>
            </div>
        `;

        favoritesHTML += favoriteCountryHTML;

    });


    favoritesHTML += '</div>';
    tabFavorites.innerHTML = favoritesHTML;
}
function renderSummary(){
    countCountries.textContent =  allCountries.length;
    countFavorites.textContent =  favoritesCountries.length;

    const totalPopulation = allCountries.reduce((acc,curr)=>{
        return acc + curr.population;
    }, 0);

    const totalFavorites = favoritesCountries.reduce((acc,curr)=>{
        return acc + curr.population;
    }, 0);

    totalPopulationList.textContent = totalPopulation;
    totalPopulationFavorites.textContent = totalFavorites;

}
function handleCountryButtons(){
    const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
    const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));
    
    countryButtons.forEach(button =>{
        button.addEventListener('click', () => addToFavorites(button.id));
    });
    favoriteButtons.forEach(button =>{
        button.addEventListener('click', () => removeFromFavorites(button.id));
    });
    
}

function addToFavorites(id){


}

function removeFromFavorites(id){
    
}