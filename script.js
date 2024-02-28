const url = " https://restcountries.com/v3.1/all"
const form = document.getElementById("inp-word")
const card = document.querySelector('.card')
const select = document.querySelector("#filter")



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
        if(data.status!=404){
            clearCard(card);
        
            const cardLink = document.createElement('a');
            cardLink.classList.add('country');
            cardLink.href = `/country.html?name=${data[0].name.common}`
            cardLink.innerHTML =     
            `
            <div class= "cardItem">
                <div class="image-container">
                 <img src="${data[0].flags.png}" alt="${data[0].flags.alt}">       
                </div>
                <div class="card-details">
                    <h1 class="h1"> ${data[0].name.common}</h1>
                    <p class="population"><strong>Population:</strong> ${data[0].population}</p>
                    <p class="region"><strong>Region: </strong>${data[0].region}</p>
                    <p class="capital"><strong>Capital:</strong>${data[0].capital}</p>         
                </div>
            </div>
             
            `
            card.appendChild(cardLink)

        }
        else{
            clearCard(card);
        
            const cardLink = document.createElement('div');
            cardLink.classList.add('error');
            cardLink.innerHTML =     
            `
            <div class= "error-item">
                <div class="error-image">
                <img src="/5203299.jpg" alt="Not found">  
                </div>
                <div class="error-details">
                    <h1>Not found</h1>       
                </div>
            </div>
             
            `
            card.appendChild(cardLink)
            // console.log(data)
        }
    }).catch(error=>{
        Error,error})
})



function filter() {
    var selectedValue = select.value;
    clearCard(card);

    if(selectedValue != "All"){
        fetch(`https://restcountries.com/v3.1/region/${selectedValue}`)
        .then(response=>response.json())
        .then(data=>{
            data.forEach((item) =>{
                showCountry(item);
            })
            
            
        }).catch(error=>{
            Error,error})
    }
    else{
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            data.forEach((item) =>{
                showCountry(item);
                
            })
        }).catch(error=>{
            Error,error})
    }
  
}


function clearCard(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

