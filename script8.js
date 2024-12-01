//DESAFIO 8

// div para los divsh2 de los productos
let divTocards = document.getElementById("divTocards")

// limpio el div para los divsh2
console.log(divTocards)
divTocards.innerText = " "
console.log(divTocards)

let products = [
    {prdName: "notebook", prdPrice: 230000, prdStock: 5, prdImg: 'https://i.pinimg.com/736x/43/dd/80/43dd80997d7ae2e56cee8626a0e68eee.jpg'},
    {prdName: "vainillas", prdPrice: 5000, prdStock: 7, prdImg: 'https://i.pinimg.com/736x/36/d0/65/36d0659f7da6d767273b975ebde5a76e.jpg'},
    {prdName: "diccionario", prdPrice: 6000, prdStock: 2, prdImg: 'https://i.pinimg.com/736x/52/f9/20/52f9205507fb7d466602039f1403a2b4.jpg'},
    {prdName: "mochila", prdPrice: 30000, prdStock: 9, prdImg: 'https://i.pinimg.com/736x/9d/e1/5b/9de15bf3147b0b29524f99e3e1ee24b9.jpg'}
]

// a;ado estilos al div de los divsh2
divTocards.style = `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap
`

// Recorro y renderizo el array
for (i in products) {
    // facilito iteracion del array
    let cadaProducto = products[i]
    // creo cards para el divTocards
    let card = document.createElement('div')
    // a;ado cards al div
    divTocards.appendChild(card)
    
    // RELLENO CADA CARD
    // a;ado id a cada card 
    card.id = `product ${cadaProducto.prdName}`
    // a;ado estilo a cada card
    card.style = `
        border: 1px solid black;
        margin: 10px;
        padding: 10px;
        font-family: arial, helvetice, sans-serif;
        border-radius: 10px;
        text-align: center;
        background-color: beige;
    `
    // a;ado contenido a cada card
    card.innerHTML += `
        <h2>${cadaProducto.prdName}</h2>
        <img src="${cadaProducto.prdImg}" width="125px" height="120px" alt="foto de ${cadaProducto.namePd}">
        <p>$${cadaProducto.prdPrice}</p>
    `
}









