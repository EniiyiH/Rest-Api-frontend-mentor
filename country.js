const details = new URLSearchParams(window.location.search).get('name')
const container =document.querySelector("#container")

console.log(details)
function createCard(data){
    const countryDetails = document.createElement('div');
    countryDetails.classList.add('country-details');
    countryDetails.innerHTML=
    `
    <img src="${data[0].flags.svg}" alt="${data[0].name.common}">
    <div class="country-detail">
        <div class="country-name">
            <h1>${data[0].name.common}</h1>
        </div>
        <div class="country-detail-text">
            <p><b>Native Name: </b>${data[0].name.nativeName.eng?.common}</p>
            <p><b>Population: </b>${data[0].population}</p>
            <p><b>Region: </b>${data[0].region}</p>
            <p><b>Sub-Region: </b>${data[0].subregion}</p>
            <p><b>Capital: </b>${data[0].capital}</p>
            <p><b>Top Level Domain: </b>${data[0].tld}</p>
            <p><b>Currencies: </b>${JSON.stringify(data[0].currencies)}</p>
            <p><b>Languages: </b>${JSON.stringify(data[0].languages)}</p>
        </div>
        <div class="border-countries">
            <p><b>Border Countries:</b></p>
            <a href="#"> <button>France</button></a>
            <a href="#"> <button>Germany</button></a>
            <a href="#"> <button>Netherlands</button></a>
        </div>
    </div>
    `
    container.appendChild(countryDetails)
    console.log(container);
}


window.addEventListener("load",()=>{
fetch(`https://restcountries.com/v3.1/name/${details}`)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    createCard(data);
})
})

