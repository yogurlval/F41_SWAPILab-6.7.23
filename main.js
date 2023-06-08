

const button = document.querySelector('button')
const main = document.querySelector('main')
const resContainer = document.querySelector('#resContainer')

const getResidents = (evt) =>{
    console.log("button clicked!")
   axios.get('https://swapi.dev/api/planets/?search=alderaan')
   .then((response)=>{
    // console.log(response.data.results[0])
let { residents } = response.data.results[0]


residents.forEach((resident) =>{
    // console.log(response)
    axios.get(resident)
    .then((response) =>{
        let { name } = response.data

        let heading = document.createElement('h2')
        heading.textContent = name
        // resContainer.innerHTML = `
        // <h2>${name} </h2>`

       
        resContainer.appendChild(heading)
    })
   
})


   })
   .catch(err => console.log(err))
}


button.addEventListener('click', getResidents)