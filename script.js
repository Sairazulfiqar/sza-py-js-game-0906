function mostrarError (id,txt){
    document.getElementById(id).innerHTML=txt;
}

function validarJugador1 (){
    var jugador1= document.formulario.jugador1.value;
    if (jugador1 === ""){
        mostrarError("errorj1","ERROR:Campo vacio");
    }
    else {
        mostrarError("errorj1","");
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(jugador1) === false){
            mostrarError("errorj1","ERROR: Formato inválido");
        }
        else {
            mostrarError("errorj1","");
            Jugador1Error = false;
            localStorage.setItem("Jugador1form", jugador1);
        }
    }
}

function validarJugador2 (){
    var jugador2= document.formulario.jugador2.value;
    if (jugador2 === ""){
        mostrarError("errorj2","ERROR:Campo vacio");
    }
    else {
        mostrarError("errorj2","");
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(jugador2) === false){
            mostrarError("errorj2","ERROR: Formato inválido");
        }
        else {
            mostrarError("errorj2","");
            NombreError = false;
            localStorage.setItem("Jugador2form", jugador2);
        }
    }
}

function iniciar(){
    document.formulario.jugador1.value= localStorage.getItem('Jugador1form');
    document.formulario.jugador2.value= localStorage.getItem('JUgador2form');
}

function validation(){
    if (!Jugador1Error && !Jugador2Error){
        localStorage.clear();
        return true;
    } 
    else {
        validarJugador1();
        validarJugador2();
        return false;
    }
}

function Btncolor(){
    document.getElementById("btn1").style.backgroundColor='#008000';
}

var combganadora = [  [0,1,2], [3,4,5], [6,7,8],
                    [0,3,6], [1,4,7], [2,5,8],
                    [0,4,8], [2,4,6]
                ];

let turno = 0;
const tablero = [];
const btnPulsado = (e,pos) => {
    turno++;
    const btn = e.target;
}

$("button").each(function(indice,elemento){
    elemento.addEventListener ('click', (e) => btnPulsado(e,indice));
});