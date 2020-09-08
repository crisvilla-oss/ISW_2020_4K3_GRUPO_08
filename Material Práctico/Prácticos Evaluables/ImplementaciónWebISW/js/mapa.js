//LOCALIDADES 

let mapa = document.getElementById('mapa');

function establecerMapa(){
    
    var x = document.getElementById("state").value;
    mapa.setAttribute('src',x);
}

