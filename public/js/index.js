const main = document.querySelector("main");
const h2 = document.querySelector(".subtitulo");
const a = document.querySelector("a");
const parrafos = document.querySelectorAll("p");

const nombre = prompt("ingrese su nombre");

if(nombre) {
    h2.innerHTML+= nombre;

}else{
    h2.innerHTML+= "INVITADO";

}

h2.style.textTransform = "uppercase";

a.style.color = "#E51B3E";

Swal.fire({
    title:"desea cambiar el fondo?",
    showDenyButton:false,
    showCancelButton: true,
    confirmButtonText: "Ok",
    denyButtonText: `Cancelar`,
}).then((result)=> {
    if(result.isConfirmed){
        document.querySelector("body").classList.add("fondo");
        Swal.fire("cambio realizado","","success");
    }
});

parrafos.forEach((parrafo, index)=>{
if((index + 1 ) % 2 === 0){
    parrafo.classList.add("destacadoPar");
} else {
    parrafo.classList.add("destacadoImpar");
}

});

main.style.display = "block";