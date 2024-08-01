/**
       * @type {HTMLInputElement}
       */
 const search = document.querySelector("#txtBusca")
 const list = document.querySelector("#animal-list")
 const animais = [
   {
     name: ["panda", "Pand", "Pnda"],
     element: document.querySelector("#panda")
   },
   {
     name: "girafa",
     element: document.querySelector("#girafa")
   },
   {
     name: ["arara azul", "araras azuis"],
     element: document.querySelector("#araraazul")
   },
   {
    name: [ "rinoceronte branco", "Rinocerontes Brancos", "Mãe do Kaique"],
    element: document.querySelector("#rinocerontesbrancos")
  },
  {
    name: ["Onças Pintadas", "onça pintada", "Onca Pintada", "Oncas Pintadas",],
    element: document.querySelector("#onçaspintadas")
  },
  
  {
    name: ["Pinguins Africanos" , "Pinguim Africano"],
    element: document.querySelector("#pinguinsafricanos")
  },

 ]
   console.log(animais)
   search.addEventListener("input", () => {
     console.log(search.value)
     const all = animais.map(animal => animal.element)
     console.log(all)
     console.log(typeof search.value)
     list.innerHTML=""
     console.log(search.value != "")
     if (search.value != "") list.append(...animais.filter(animal => animal.name instanceof Array ? animal.name.some(name =>name.toUpperCase().includes(search.value.toUpperCase())) : animal.name.toUpperCase().includes(search.value.toUpperCase())).map(animal => animal.element))
     else list.append(...all)
   })