const details = new URLSearchParams(window.location.search).get('name')




const container =document.querySelector("#container")
const img = document.querySelector(".country-details img")
const name = document.querySelector(".country-name h1")
const nativeName = document.querySelector(".nativeName")
const population = document.querySelector(".population")
const region = document.querySelector(".region")
const subRegion = document.querySelector(".subRegion")
const capital = document.querySelector(".capital")
const topLevelDomain = document.querySelector(".topLevelDomain")
const currencies = document.querySelector(".currencies")
const languages = document.querySelector(".languages")
 
    

function createDetails(country){
    

    img.src = country[0].flags.svg
    img.alt = country[0].flags.alt

    name.innerText = country[0].name.common


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


      if(country[0].currencies){
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





function createBorders(info){
        
    const borderCountries = document.querySelector('.border-countries')

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



window.addEventListener("load",()=>{
fetch(`https://restcountries.com/v3.1/name/${details}`)
.then(res=>res.json())
.then(data=>{
    createDetails(data);
    createBorders(data);
})
})

