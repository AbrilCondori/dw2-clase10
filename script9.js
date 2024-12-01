// DESAFIO 9

// Realizo un espaacio para el desafio 9
let espacioD9 = document.getElementById('espacioD9')
// Creo boton
let boton = document.createElement('button')
// Agrego el boton dentro del espacio para el desafio
espacioD9.appendChild(boton)

// Relleno texto e ID del boton
boton.innerHTML = `Agregar al carrito`
boton.id = `btnCarrito`

// Uso el id para agregar el evento click
let btn = document.getElementById("btnCarrito")
btn.onclick = () => {
    // Notifico del evento
    console.log("Hiciste click, se agrega h3")
    // Creo y agrego etq h3
    let etqh3 = document.createElement('h3')
    btn.appendChild(etqh3)
    // cambio texto del boton
    btn.innerHTML = 'Agregado'
}














