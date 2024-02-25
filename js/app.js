// se obteinben los elementos del dom que van a ser necesitados 
const botonInicio = document.getElementById('inicio');
const botonReiniciar = document.getElementById('reiniciar');
// se inicializan variables que van a almacenar tiempo, una varibale para almacenar el estado del reloj y otra para el tiempo tanscurrido en segundos 
let [horas, minutos, segundos] = [0, 0, 0];
let intervalo;
let estadoReloj = 'pausado';

// se crea una funcion que va a convertir los segundos en horas y minutos ademas de pinerle un formato en caso de que el numero requiera un 0 antes para que no se vea raro
function actualizarCronometro() {
    segundos++;

    if (segundos / 60 === 1) {
        segundos = 0;
        minutos++;

        if (minutos / 60 === 1) {
            minutos = 0;
            horas++;
        }
    }
    const segundosConFormato = asignarFormato(segundos);
    const minutosConFormato = asignarFormato(minutos);
    const horasConFormato = asignarFormato(horas);

    // Actualizar el contenido del cronometro.
    const cronometro = document.getElementById('reloj');
    cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;

}
// dicha funcion que agrega el 0 en caso de ser necesario para que concuerde con el formato
function asignarFormato(unidadDeTiempo) {
    return unidadDeTiempo < 10 ? '0' + unidadDeTiempo : unidadDeTiempo;
}



// funcion activa mediante clic, mediante el metodo window set interval permite llamar a una funcion cada determinado tiempo en este casp se llama a la funcion de actualizar el reloj cada 1000 milisegundos o cada segundo adicionalmente se ajusta el contenido del div segun si esta activo o no y el estado 
botonInicio.addEventListener('click', () => {
    if (estadoReloj === 'pausado') {
        intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
        botonInicio.style.backgroundColor = 'rgba(144, 238, 178, 0.346)';
        botonInicio.innerHTML = "<i class='bx bx-pause'></i>";
        estadoReloj = 'activo'
    }
    else {
        window.clearInterval(intervaloDeTiempo);
        botonInicio.innerHTML = "<i class='bx bx-play'></i>";
        estadoReloj = 'pausado'
        botonInicio.style.backgroundColor = 'rgba(200, 195, 195, 0.27)';



    }
});


botonReiniciar.addEventListener('click', () => {
    window.clearInterval(intervaloDeTiempo);
    horas = 0;
    minutos = 0;
    segundos = 0;
    reloj.innerText = '00:00:00';
    botonInicio.innerHTML = "<i class='bx bx-play'></i>";
    botonInicio.style.backgroundColor = 'rgba(200, 195, 195, 0.27)';


})