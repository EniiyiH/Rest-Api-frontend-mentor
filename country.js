// Passing the name from the previous page to this one to use.
const details = new URLSearchParams(window.location.search).get('name')



// Grabbing elements from Html
const container =document.querySelector("#container")
const img = document.querySelector(".country-details img")
const mname = document.querySelector(".country-name h1")
const nativeName = document.querySelector(".nativeName")
const population = document.querySelector(".population")
const region = document.querySelector(".region")
const subRegion = document.querySelector(".subRegion")
const capital = document.querySelector(".capital")
const topLevelDomain = document.querySelector(".topLevelDomain")
const currencies = document.querySelector(".currencies")
const languages = document.querySelector(".languages")
 
    
// function to create country details
function createDetails(country){
    

    img.src = country[0].flags.svg
    img.alt = country[0].flags.alt

    mname.innerText = country[0].name.common

// Create conditions if Native name is present or not
    if (country[0].name.nativeName) {
        nativeName.innerText = Object.values(country[0].name.nativeName)[0].common;
    }
    else {
       nativeName.innerText = country[0].nativeName.common
      }


      population.innerText = country[0].population
      region.innerText = country[0].region
      subRegion.innerText = country[0].subregion
      capital.innerText = country[0].capital
      topLevelDomain.innerText = country[0].tld

// Create conditions if Native name is present or not, or if there are multiple currencies
      if(country[0].currencies){
        // map method creates a new array populated with the results of calling a provided function on every element in the calling array. 
        currencies.innerText = Object.values(country[0].currencies).map((currency) => currency.name).join(', ')
      }
      else{
        currencies.innerText = "Nan"
      }

    
      
    if(country[0].languages){
        languages.innerText = Object.values(country[0].languages).map((language)=>language).join(', ')
    }
    else{
        languages.innerText = "NaN"
    }  
    // console.log(Object.values(country[0].languages))

}




// function to create country borders
function createBorders(info){
        
    const borderCountries = document.querySelector('.border-countries')
// Create conditions if borders are present or not
    if(info[0].borders){
        info[0].borders.forEach(item=>{
            fetch(`https://restcountries.com/v3.1/alpha/${item}`)
            .then(res=>res.json())
            .then(borderData=>{
                const borderName = borderData[0].name.common
                console.log(borderName)

                
                            borderLink= document.createElement('a')
                    
                            borderLink.href = `#`
                            borderLink.innerText = borderName
                            borderCountries.append(borderLink)
            })

          

        })
        


    }
    else{
        borderLink= document.createElement('a')

        borderLink.href = "#"
        borderLink.innerText = "None"

        borderCountries.append(borderLink)
    }

    }


// Calls both functions on load
window.addEventListener("load",()=>{
fetch(`https://restcountries.com/v3.1/name/${details}`)
.then(res=>res.json())
.then(data=>{
    // Call function and pass Data from Rest country Api
    createDetails(data);
    createBorders(data);
})
})

