const url = " https://restcountries.com/v3.1/all"
const form = document.getElementById("inp-word")
const card = document.querySelector('.card')


window.addEventListener("load", function getAllCountries(){
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{
        data.forEach((item) =>{
            showCountry(item);
        })
    }).catch(error=>{
        Error,error})
});



function showCountry(country){
    const cardLink = document.createElement('a');
        cardLink.classList.add('country');
        cardLink.href =`/country.html?name=${country.name.common}`
        cardLink.innerHTML =     
        `
        <div class= "cardItem">
            <div class="image-container">
             <img src="${country.flags.svg}" alt="${country.flags.alt}">       
            </div>
            <div class="card-details">
                <h1> ${country.name.common}</h1>
                <p class="population"><strong>Population:</strong> ${country.population}</p>
                <p class="region"><strong>Region: </strong>${country.region}</p>
                <p class="capital"><strong>Capital:</strong>${country.capital}</p>         
            </div>
        </div>
         
        `
        card.appendChild(cardLink)
}


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchValue = document.getElementById("search-val").value
    fetch(`https://restcountries.com/v3.1/name/${searchValue}?fullText=true`)
    .then(response=> response.json())
    .then(data=>{


        console.log(data)
        const cardLink = document.createElement('a');
        cardLink.classList.add('country');
        cardLink.href ="/country.html"
        cardLink.innerHTML =     
        `
        <div class= "cardItem">
            <div class="image-container">
             <img src="${data.flags.svg}" alt="${data.flags.alt}">       
            </div>
            <div class="card-details">
                <h1> ${data.name.official}</h1>
                <p class="population"><strong>Population:</strong> ${data.population}</p>
                <p class="region"><strong>Region: </strong>${data.region}</p>
                <p class="capital"><strong>Capital:</strong>${data.capital}</p>         
            </div>
        </div>
         
        `
        card.appendChild(cardLink)

        console.log(data)
    })
})


// form.addEventListener("click",()=>{
//     document.getElementById("card").classList.toggle("show")


// });