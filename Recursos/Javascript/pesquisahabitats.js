/**
       * @type {HTMLInputElement}
       */
const search = document.querySelector("#txtBusca")
const list = document.querySelector("#habitats-list")
const animais =[
       {
              name: ["Amazonia", "Amazonica", "Floresta Amazonica"],
              element: document.querySelector("#Amazonica")
            },
            {
              name: ["Recife de corais", "corais", "Recifes"],
              element: document.querySelector("#recife")
            },
            {
              name:["Mangue", "Manguezais", "Mangroove", ],
              element: document.querySelector("#mangue")
            },
            {
              name: ["Savana", "Africa", "Bioma Savanico", "Selva"],
              element: document.querySelector("#Savana")
            },
            {
              name:["Atlântica", "Mata atlantica", "Mata"],
              element: document.querySelector("#Atlantica")
            }
]
search.addEventListener("input", () => {
       console.log(search.value)
       console.log(list)
       const all = animais.map(animal => animal.element)
       console.log(all)
       console.log(typeof search.value)
       list.innerHTML=""
       console.log(search.value != "")

       if (search.value != "") list.append(...animais.filter(animal => animal.name instanceof Array ? animal.name.some(name =>name.toUpperCase().includes(search.value.toUpperCase())) : animal.name.toUpperCase().includes(search.value.toUpperCase())).map(animal => animal.element))
       else list.append(...all)
     })