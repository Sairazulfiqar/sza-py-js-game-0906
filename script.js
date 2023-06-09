function validarJugador1 (){
    var juegador1= document.formulario.jugador1.value;
    if (jugador1 === ""){
        mostrarError("errorjugador1","ERROR:Campo vacio");
    }
    else {
        mostrarError("errorjugador1","");
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(jugador1) === false){
            mostrarError("errorjugador1","ERROR: Formato inválido");
        }
        else {
            mostrarError("errorjugador1","");
            NombreError = false;
            localStorage.setItem("Jugador1form", jugador1);
        }
    }
}

function validation(){
    if (!Jugador1Error){
        localStorage.clear();
        return true;
    } 
    else {
        validarJugador1();
        return false;
    }
}