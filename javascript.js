function myFunction() {

    let nombre = prompt('ingresa tu nombre');
    let apellido = prompt('ingresa tu apellido');
    
    console.log(nombre+" "+apellido);
    
    let datos = document.getElementById('clientes');
    
    datos.innerHTML= `${nombre} ${apellido}`; 
    }

    //contador
    
    let numero = 0;
function contador() {
    
    }
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
