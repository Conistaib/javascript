alert("Ingresar datos a continuacion");
let nombre = prompt("nombre");
let apellido = prompt("apellido");
let año = parseInt(prompt("año de nacimiento"));

while(isNaN(año)){
    alert("Ingrese un valor numerico, ingrese de nuevo");
    año = parseInt(prompt("Ingrese de nuevo"));
}

alert("Se registra" + nombre + apellido + "de" + año);