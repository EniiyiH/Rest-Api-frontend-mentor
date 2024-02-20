const url = "data.json"



function getImages(){
    fetch(url)
    .then(response=>response.json())
    .then((data)=>{

        console.log(data)

        output=""
        for(let item of data){

            output += `
            <div class="card-item">
                    <div class="image-container">
                        <img src="${item.flag}" alt="">       
                    </div>
                    <div class="card-details">
                    <h1> ${item.name}</h1>
                    <p class="population"><span>Population:</span> ${item.population}</p>
                    <p class="region"><span>Region: </span>${item.region}</p>
                    <p class="capital"><span>Capital: </span>${item.capital}</p>         
                  </div>
            </div>
            `
        }
        
        document.querySelector(".card").innerHTML= output
    })
}

getImages();