
let mapa = document.getElementById('mapa');

function establecerMapa(){
    var x = document.getElementById("localidad").value;
    
    mapa.setAttribute('src',x);
}