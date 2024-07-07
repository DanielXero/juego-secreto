
let numeroSecreto = 0;
let intentos = 0;
// Declaramos un arreglo
let listaNumerosSorteado = [];
let numeroMaximo = 10;


console.log(numeroSecreto);



function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;


  return;

}

function verificarIntento() {
  let numeroUsuario =  parseInt(document.getElementById('valorUsuario').value); //Obtenemos el valor
  
  
 
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'} `);
    
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    // EL ususario no acerto
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }

    intentos++;

    limpiarCaja();
    
  }

  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteado);
  //Si ya sorteamos todos los números
  if (listaNumerosSorteado.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
  } else {
        //Si el número generado está incluido en la lista
    if (listaNumerosSorteado.includes(numeroGenerado)) {
      return generarNumeroSecreto(); // Recursividad
    } else {
      listaNumerosSorteado.push(numeroGenerado);
      return numeroGenerado;
    }
  }


}

function limpiarCaja() {
  let valorCaja = document.querySelector('#valorUsuario'); // Accedemos al elemento quiente tenga el id valor Usuario
  valorCaja.value = ''; //Una vez selecionado el elemento vaciamos el mismo

  // O podemos utilizar de la siguiente forma
 // document.querySelector('#valorUsuario').value = '';

}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto!');
  asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1; 
}

function reiniciarJuego() {
  // Limpiar caja
  limpiarCaja();
  // Indicar mensaje de intervalos de números
  // Genenerar el número aleatorio
  // Inicializar el número de intentos
  condicionesIniciales();
  // Deshabilitar el botón de nuevo juego
  // Seleccionamos el boton por medio de su Id
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales(); //Llamamos a la función



/*
El método includes() en JavaScript se utiliza para verificar si un elemento específico se encuentra dentro de un arreglo. Este método es muy útil para simplificar la comprobación de la presencia de elementos en arreglos y devuelve un valor booleano (true o false) en consecuencia.
Sintaxios: array.includes(elemento);
-> array es el arreglo que se va a revisar.
-> elemento es el valor que se busca dentro del arreglo.
*/

/*

El método push() en JavaScript se utiliza para agregar uno o más elementos al final de un arreglo. Este método modifica el arreglo original y devuelve la nueva longitud del arreglo después de la adición.
*/

/*

¡Hola! En esta clase, aprendimos a solucionar un problema común en la recursividad: la falta de una condición de salida. Para evitar que nuestro programa se quede en un bucle infinito, implementamos un validador que verifica si ya hemos sorteado todos los números posibles dentro del rango definido.

Para ello, introdujimos una variable llamada "número máximo" que representa la cantidad de sorteos que podemos hacer. Luego, en nuestra función recursiva, comparamos la longitud de la lista de números sorteados con el "número máximo". Si son iguales, mostramos un mensaje en la pantalla indicando que ya se han sorteado todos los números posibles y el juego termina.

De esta manera, hemos resuelto el problema de la recursividad y evitamos que nuestro programa se cuelgue.



*/

