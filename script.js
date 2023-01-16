

// 1.1 Basandote en el array siguiente, crea una lista ul > li 
// dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const lista = document.createElement("ul")
    for (const countrie of countries) {
        const lis = document.createElement("li")
        lis.innerText = countrie
        lista.appendChild(lis)
    }
document.body.appendChild(lista)


// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const eliminar = document.querySelector(".fn-remove-me").remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
// en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const lista1 = document.createElement("ul")
const data = document.querySelector("[data-function='printHere'")

for (const car of cars) {
    const listado = document.createElement("li")
    listado.innerText = car
    lista1.appendChild(listado)
    data.appendChild(lista1)
}

// 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
// h4 para el titulo y otro elemento img para la imagen.

const lugares = [
	{title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const listaPadre = document.createElement("ul")
document.body.appendChild(listaPadre)

for (const sitios of lugares) {
    const lista3 = document.createElement("li")
    lista3.innerHTML = `<div>
    <h4>${sitios.title}</h4>
    <img src="${sitios.imgUrl}" alt="${sitios.title}">
    <button>Delete</button>
    </div>`
// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

    const botonDelete = document.querySelector("button")
    botonDelete.addEventListener("click", () => remove (lista3))
    lista3.appendChild(botonDelete)
    listaPadre.appendChild(lista3)
}   


// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
// // elemento de la lista.
const boton = document.createElement("button")
boton.innerText = "elimina el último"
document.body.appendChild(boton)

boton.addEventListener("click", function () {
const todosLi = document.querySelectorAll("li")
    todosLi[todosLi.length-1].remove()
})


// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
// elementos de las listas que elimine ese mismo elemento del html.

