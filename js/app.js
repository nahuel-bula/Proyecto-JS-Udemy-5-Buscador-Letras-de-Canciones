import * as UI from './interfaz.js';
import API from './api.js';
//Buscar la cancion al hacer click en el boton Buscar
UI.formularioBuscar.addEventListener('submit', buscarCancion);

function buscarCancion(e){
    e.preventDefault();
    //obtener datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;
    //No puedo pasar strings vacios
    if(artista === '' || cancion === ''){
        UI.divMensajes.textContent = 'Error... Todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');

        setTimeout(()=>{
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        },3000)
        return;
    }
    //Consulto la api si pasé la validacion
    const api = new API(artista,cancion);
    api.consultarApi();

}

