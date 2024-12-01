
let produces = ["Vestido a crochet", "Calculadora Cientifica", "Gorro de verano", "Posavasos", "Funda de Notebook"]

//Actualizacio de compra 1
console.log("Nuestros productos son: ")
for (produce in produces) {
    console.log(`${produces[produce]}`);
}
produces.pop()

console.log("GRACIAS POR TU COMPRA, aun nos quedan")
for (produce in produces){
    console.log(`${produces[produce]}`);
}


//Actualizacion de compra 2
/*
let response = prompt("Deseas ver nuestros productos? ")
let potencial = prompt("Deseas comprar algo? ")

const compra = (vistazo, listproduc, compras) =>{
    if (vistazo == "si"){
        console.log("Nuestros productos son1: ")
        for (produce in listproduc) {
            console.log(`${listproduc[produce]}`);
        }if (compras == "si"){
            listproduc.pop()
            console.log(listproduc)
            console.log("Que tengas un buen dia2")
        }else if (compras == "no"){
            console.log("Que tengas un buen dia3")
        }
    }else{
        console.log("Que tengas un buen dia4")
    }
}

compra(response, produces, potencial)
*/