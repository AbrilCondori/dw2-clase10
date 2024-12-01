// DESAFIO 10

// Traemos espacio div para los productos
const espacioPdDestc = document.getElementById('espacioPdDestcados') 
// Variable global de carrito  
let cartItems = [];
// Referencias a elementos del DOM para carrito:
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountElement = document.getElementById('cartCount');
const cartTotalElement = document.getElementById('cartTotal');

// ABRIR Y CERRAR MODAL DE CARRITO
  // 3. Event listener para abrir el modal del carrito:
  cartButton.addEventListener('click', () => {
    updateCartDisplay(); 
    cartModal.style.display = 'block';
  });

  // 4. Función para cerrar el modal con "x":
  document.querySelector('.close').addEventListener('click', () => {
      cartModal.style.display = 'none';
  });

  // 5. Función para cerrar el modal con click fuera del modal:
  window.addEventListener('click', event => {
    if(event.target == cartModal) {
        cartModal.style.display = 'none';
    }
  })


// Limpiar y dar estilo al espacio para productos
espacioPdDestc.innerHTML = ' '
espacioPdDestc.style = `
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

// Array productos
let catalogoDestc = [
    {destcId: 1, destcStock: 8, destcNombre: 'Collar', destcPrec: 4500, destcImg: 'https://i.pinimg.com/736x/a8/ed/00/a8ed00af9de9347d8394c25275221056.jpg'},
    {destcId: 2, destcStock: 16, destcNombre: 'Camara', destcPrec: 23000, destcImg: 'https://i.pinimg.com/736x/73/56/66/735666f53a52d4d68fde3aae874d08f6.jpg'},
    {destcId: 3, destcStock: 3, destcNombre: 'Crema', destcPrec: 8000, destcImg: 'https://i.pinimg.com/736x/ae/c5/cf/aec5cf6a05faf4217b8246832ce4e897.jpg'},
    {destcId: 4, destcStock: 21, destcNombre: 'Reloj', destcPrec: 9000, destcImg: 'https://i.pinimg.com/736x/af/1b/1b/af1b1b99d262de461394912a9930fd3b.jpg'}
]

// Renderizar productos
for (pdDestc in catalogoDestc){
    let cadaProducto = catalogoDestc[pdDestc]

    let cardDestc = document.createElement('div')
    espacioPdDestc.appendChild(cardDestc)
    cardDestc.className = "product"
    cardDestc.style = `         
        background-color: #FFEFEF;
        border: 1px solid black;
        margin: 10px;
        padding: 20px;
        font-family: arial, helvetice, sans-serif;
        border-radius: 10px;
        text-align: center;
    `
    cardDestc.innerHTML += `
        <h3>${cadaProducto.destcNombre}</h3>
        <img width="100px" src="${cadaProducto.destcImg}" alt="${cadaProducto.destcNombre}">
        <p>$${cadaProducto.destcPrec}</p>
        <button class="add-to-cart" data-title="${cadaProducto.destcNombre}" data-price="${cadaProducto.destcPrec}">Agregar al Carrito</button>
    `
}

// ABRIR Y CERRAR MODAL DE CARRITO
  // 3. Event listener para abrir el modal del carrito:
  cartButton.addEventListener('click', () => {
    updateCartDisplay(); 
    cartModal.style.display = 'block';
  });

  // 4. Función para cerrar el modal con "x":
  document.querySelector('.close').addEventListener('click', () => {
      cartModal.style.display = 'none';
  });

  // 5. Función para cerrar el modal con click fuera del modal:
  window.addEventListener('click', event => {
    if(event.target == cartModal) {
        cartModal.style.display = 'none';
    }
  })


// Carrito funcionalidades
// 6. Función para agregar productos al carrito:
const addToCart = (title, price) => {
    const existingItem = cartItems.find(item => item.title === title);
    
    existingItem ? 
      existingItem.quantity++ 
    :     
      cartItems.push({ title, price, quantity: 1 });

    updateCartDisplay(); 
    updateCartCount(); 
}
// 7. Función para actualizar el contador rojo en el carrito:
const updateCartCount = () => {  
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalCount;
}
// 8. Función para actualizar la visualización del carrito:
const updateCartDisplay = () => {
    cartItemsContainer.innerHTML = ''; 
    let total = 0;               
    cartItems.forEach(item => { 
      const itemTotal = item.price * item.quantity;
      total += itemTotal; 
      const cartItemElement = document.createElement('div'); 
      
      //RELLENO de logica y contenido;
        cartItemElement.classList.add('cart-item'); 
        cartItemElement.innerHTML = `
          <p>${item.title} --> $${item.price} = $${itemTotal}</p>
          <div class="quanty-controls">
              <button class="quantity-btn" onclick="decrementQuantity('${item.title}', '-')">-</button>
              <span class="quantity">${item.quantity}</span>
              <button class="quantity-btn" onclick="incrementQuantity('${item.title}', '+')">+</button>
          </div>
          <button class="remove" onclick="removeFromCart('${item.title}')">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);

      });
      cartTotalElement.textContent = `$${total.toFixed(2)}`;
}
// Funciones del display en el carrito
  // 9. Funtion para remover un producto del carrito:
  const removeFromCart = (title) => {  
    cartItems = cartItems.filter(item => item.title !== title);
    updateCartDisplay();
    updateCartCount();
  }

  // 10. Funcion para incrementar, dentro del carrito, cantidad de productos; boton+
  function incrementQuantity(title) {
    const item = cartItems.find(item => item.title === title); 
    if (item) {
      item.quantity++           
      updateCartDisplay()       
      updateCartCount()         
    }
  }

  // 11. Funcion para decrementar, dentro del carrito, cantidad de productos; boton-
  function decrementQuantity(title) {
    const item = cartItems.find(item => item.title === title); 
    if (item && item.quantity > 1) { 
        item.quantity--              
        updateCartDisplay()          
        updateCartCount()            
    }
  }
//12. Funcion para agregar productos al carrito desde boton de productos
document.querySelectorAll('.add-to-cart').forEach(button => { 
    button.addEventListener('click', () => {   
      const title = button.getAttribute('data-title');  
      const price = parseFloat(button.getAttribute('data-price')); 
      addToCart(title, price);  
    });
  });


// Promesa, ventana de anuncio sobre algun sorteo si inicias sesion, aparece a los 5s de etrar al sitio
let anuncioSorteo = new Promise((res, rej) => {
    setTimeout(() => {
        // Aviso del sorteo
        alert("SE ESTA REALIZANDO UN SORTE, PARTICIPAS AUTOMATCAMENTE SI ESTAS REGISTRADO")
        // Promp para poder participar del sorteo
        let answRegistrado = prompt('Estas registrado? ')
        //STRING A BOOLEANO
        if (answRegistrado === "si"){
            answRegistrado = true
        }else if (answRegistrado === "no"){
            answRegistrado = false
        }else{
            answRegistrado = undefined
        }

        // Guardo en res o rej, segun corresponda
        answRegistrado ?
            res("esta registrado")
        :
            rej("no esta registrado")
    }, 5000);
})

anuncioSorteo
.then((res) => alert(`Suerte, participa automaticamente, ${res}`))
.catch((err) => alert(`Para participar debe regisrarse, ${err}`))









