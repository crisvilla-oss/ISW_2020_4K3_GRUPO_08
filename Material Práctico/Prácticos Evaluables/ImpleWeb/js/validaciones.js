
function validateForm() {
     direccion =  document.getElementById('address').value;
    if (direccion == "") {
        document.getElementById('status').innerHTML = "Colocar direccion!";
        return false;
    }
   


    var CmbObject=document.getElementById("localidad")
    if (CmbObject.selectedIndex == 0)
    {
        document.getElementById('status').innerHTML = "No has seleccionado tu localidad!";
        return false;
    }
   else{
    document.getElementById('status').innerHTML = "";
   }

   codigoPostal =  document.getElementById('zip').value;
    if (codigoPostal == "") {
        document.getElementById('status').innerHTML = "Colocar Codigo Postal!";
        return false;
    }
    else{
        document.getElementById('status').innerHTML = "";
       }


       if (document.getElementById("btn-credito").clicked == true){
         {
        numeroIngresado=document.getElementById('inputNumero').value;
            if (numeroIngresado == "" | numeroIngresado == undefined | numeroIngresado === 5) 
            {document.getElementById('status').innerHTML = "Colocar Numero de Tarjeta Válido!";
        return false;
    }}

    nombreIngresado=document.getElementById('inputNombre').value;
        if (nombreIngresado == "" | nombreIngresado == undefined) 
            {document.getElementById('status').innerHTML = "Colocar Nombre de Tarjeta!";
        return false;
    }

    mesIngresado=document.getElementById('mes')
        if (mesIngresado.selectedIndex == 0)
            {
                document.getElementById('status').innerHTML = "No has seleccionado tu localidad!";
                return false;
            }
    
    añoIngresado=document.getElementById('año')
        if (añoIngresado.selectedIndex == 0)
            {
                document.getElementById('status').innerHTML = "No has seleccionado tu localidad!";
                return false;
            }
    
    codigoIngresado=document.getElementById('inputCCV').value;
        if (codigoIngresado == "" | codigoIngresado == undefined) 
            {document.getElementById('status').innerHTML = "Colocar Codigo de Seguridad!";
        return false;
    }}
      
  
    
    if (document.getElementById("btn-efectivo").clicked == true){
        montoIngresado=document.getElementById('inputMonto').value;
            if (montoIngresado == "" |  montoIngresado <= 460) 
            {document.getElementById('status').innerHTML = "Colocar Monto correcto!";
        return false;
    }

      }
    
    





/*  count = 0;
    button = document.getElementById("btn-credito");
    buttonEfectivo = document.getElementById("btn-efectivo");
      button.onclick = function(){
        count++;
      }
      buttonEfectivo.onclick = function(){
        countE++;
      }

    if(count && countE === 0){
        document.getElementById('status').innerHTML = "Seleccionar al menos una Forma de Pago!";
      }*/ 
  

   
    
    document.getElementById('status').innerHTML = "Datos confirmados, Enviando tu pedido...";
    document.getElementById('contact-form').submit();
    
    };

  

    