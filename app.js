var latitude;
var longitude;

function starttaa(){
    var nappula = document.createElement("button");
    nappula.innerHTML = "näytä sijaintisi";
    document.body.appendChild(nappula);
    nappula.addEventListener("click",naytasijaintisi)
    if(navigator.geolocation){

        navigator.geolocation.getCurrentPosition(
            function(position){
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
        
            }
        )
    }
else{
    alert("geolocation ei tuettu")
}
}
function naytasijaintisi(){
    alert("kordinaattisi ovat" + latitude + "leveysastetta ja" + longitude + "pituusastetta");
    window.location.href = "https://maps.google.com/?q=" +latitude+","+longitude;
}
window.addEventListener("load", starttaa);