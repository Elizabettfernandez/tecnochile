function myFunction() {

    let nombre = prompt('ingresa tu nombre');
    let apellido = prompt('ingresa tu apellido');
    
    console.log(nombre+" "+apellido);
    
    let datos = document.getElementById('clientes');
    
    datos.innerHTML= `${nombre} ${apellido}`; 
    }

    //contador
    
    let numero = 0;
    function sumar(){
        ++numero;
        console.log(numero);
        let contador = document.getElementById('mensaje');
        contador.innerHTML = numero;
       if(numero >= 20){document.getElementById("mensaje").style.color="green";}
       else{document.getElementById("mensaje").style.color="black";}
}

    function restar() {
        --numero;
        console.log(numero);
        let contador = document.getElementById('mensaje');
        contador.innerHTML = numero;
        if(numero < 0){document.getElementById("mensaje").style.color="red";}
        else{document.getElementById("mensaje").style.color="black";}
    }



    



let productos = [
    {
        id: 1,
        nombre: "Reloj",
        precio: 300,
        cantidad: 10,
        url: "https://www.bikeinn.com/l/13700/137007516/polar-reloj-vantage-m.jpg"
    },
    {
        id: 2,
        nombre: "Audifonos Caros",
        precio: 200,
        cantidad: 50,
        url: "https://juntozstgsrvproduction.blob.core.windows.net/default-blob-images/200x200_1_%2089894.jpg?w=200&h=200"
    },
    {
        id: 3,
        nombre: "Audifonos Baratos",
        precio: 100,
        cantidad: 20,
        url: "https://falabella.scene7.com/is/image/Falabella/11360581?qlt=80&wid=200&hei=200"
    },
    {
        id: 4,
        nombre: "Silla",
        precio: 400,
        cantidad: 5,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSJlNNggTYpG7RPejQ-6ewQ_yVCOqhVwT_frSStKin40I5z3HBIeIHuALt_a1r4RHZts&usqp=CAU"
    },
    
]
  

const container = document.getElementById('lista');


function lista() {
    productos.forEach(function(producto, indice) {

        const card = document.createElement('div');
        card.classList = 'card-body';
        const content = `<div class="card" style="width: 18rem;">
        <img src="${producto.url}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"> ${producto.nombre}</h5>
          <p class="card-text">$ ${producto.precio}</p>
          <a href="#" class="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>`;
      container.innerHTML += content;


        // console.log(producto.nombre);
        // document.write(``)

    }

    )
    
};
  

  


//   funct {
  
  
//     document.write for each ( 
//       elemento, posicion
//     )
  
//     document write. " <td> ${elmento[posicion]} - ${precio[posicion]}</td>
//   }