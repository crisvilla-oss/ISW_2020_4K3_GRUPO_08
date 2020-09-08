/*let btnConfirmar=document.getElementById('confirmar');

let direccion1=document.getElementById('address');
let direccion2=document.getElementById('address-2');

btnConfirmar.addEventListener('click',validarFormulario);


function validarFormulario(direccion1,direccion2){



    if(direccion1===null || direccion1==='undefined' || direccion1===""){
        alert('alto bobito que no rellena');
    }
    else{
        alert('el perro relleno todo');
    }
}
*/
/*
document.getElementById('btn-enviar').addEventListener('click',function(){
    let contenedor=document.getElementsByClassName('contenedor-efectivo');
    contenedor.classList.add('enable')
});
*/
/*let btnCancelar=document.getElementsById('cancelar');
btnCancelar.addEventListener('click',limpiarFormulario);

function limpiarFormulario(){
    document.getElementById("form").reset();
}*/


document.getElementById("cancelar").addEventListener("click", function(event){
    event.preventDefault()
  });