//desafio 7

//1- llamar
let producePrice = document.getElementById("producePrice")
let produceName = document.getElementById("produceName")

//2- modicar contenido
producePrice.innerHTML = "Precio: $450"
producePrice.style = `
color : green;
`
produceName.style = `
font-weight : bold
`
//noticar del cambio de  precio
textProduce = produceName.innerText
alert(`Se ha cambiado el precio del ${textProduce}`)