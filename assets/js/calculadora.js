
//Para mostrar los números con click
  function mostrarNumero(num){
    var guardarNumero = document.formulario.resultado.value;
      document.formulario.resultado.value = guardarNumero + num;
  }
//Para las funciones matemáticas
  function operaciones(valor){
    var numeroPresionado = document.getElementById("contenedor");
    numeroPresionado.value = eval(numeroPresionado.value);

  }

//Para mostrar los números con la tecla presionada
function validarNumero (event){
  var ascci = event.keyCode;
  if (ascci == 13){
    operaciones();
  }
  if(ascci < 42 || ascci > 57){
    return false;
  }
}

//Para eliminar el último número
function eliminarUltimoNumero(){
  var anterior = document.formulario.contenedor.value;
  var nuevoValor = anterior.substring(0,anterior.length-1);
  document.getElementById("contenedor").value = nuevoValor;
}

//Para borrar todo
function borrar(){
  document.formulario.contenedor.value = "";
}
