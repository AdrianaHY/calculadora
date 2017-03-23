//Para mostrar los números
  function mostrarNumero(num){
    var guardarNumero = document.formulario.resultado.value;
      document.formulario.resultado.value = guardarNumero + num;
  }
//Para las funciones matemáticas
  function operaciones(valor){
    var numeroPresionado = document.getElementById("contenedor");
    numeroPresionado.value = eval(numeroPresionado.value);

  }

//Para validar los signos
