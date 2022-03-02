import * as UI from './interfaz.js';

class API{
    constructor(artista,cancion){
        this.artista = artista;
        this.cancion = cancion;
    }
    consultarApi(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => {
                //Si existe la cancion la muestro
                if(resultado.lyrics){
                    const { lyrics } = resultado;
                    UI.divResultado.textContent = lyrics;
                    UI.headingResultado.textContent = `Letra de la cancion: ${this.cancion} de ${this.artista}`
                }else{
                    //Si no existe muestro el error
                    UI.divMensajes.textContent = 'La cancion no existe, intentalo nuevamente'
                    UI.divMensajes.classList.add('error');
                    UI.headingResultado.textContent = '';
                    UI.divResultado.textContent = '';
                    setTimeout(()=>{
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    },3000)
                }
                
            })
    }
}

export default API;