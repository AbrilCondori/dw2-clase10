//Nombre de la tienda
const eCommerce = "ArteSana";
alert(`Welcome to ${eCommerce}`)
//Nombre del producto
let nProduce = "Calculadora Cientifica";
//Precio del producto
let price = 8000;

//Informe de valor por producto
console.log(`La/El precio de ${nProduce} es de ${price}`)
//Cantidad deseada del producto
let cantidadProduce = Number(prompt(`Cuantos/as ${nProduce} deseas: `))

//Calculo y anuncio del precio total a gastar por los productos
const sumarProduces =  (priceUnit, quantitiWant) => {
    let priceTotal = priceUnit * quantitiWant;
    return priceTotal
}
console.log(`El total de ${cantidadProduce} ${nProduce} es: `+sumarProduces(price, cantidadProduce))

