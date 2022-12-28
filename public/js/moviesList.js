const body = document.querySelector('body');
const h1 = document.querySelector('h1');

Swall.fire({
    title:'desea modo Oscuro',
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: 'Ok',
    denyButtonText: `Cancelar`,
}).then((result) => {
    if(result.isConfirmed){
        body.style.backgroundColor = '#7f7f7f';
        body.classList.add('fondoMoviesList')
        Swall.fire('cambio realizado','','success'
        )
    }
})

h1.innerText ="listado de peliculas"

h1.style.backgroundColor = 'teal'
h1.style.color = 'white'
h1.style.padding= '20px'
