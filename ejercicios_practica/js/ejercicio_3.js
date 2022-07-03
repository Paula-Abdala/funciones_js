"use strict";

/* Inove Coding School
 * Ejercicios con funciones
 */

// Ejercicios con funciones

// function generarInvitados()

/*
Alumno: Crear la función "generarInvitados"
Esta función no recibe ningún paraḿetro de entrada

Dentro de esa función el sistema deberá solicitar
al usuario por prompt que ingrese tres nombres de 
tres invitados.

IMPORTANTE: Utilizar un "prompt" por cada invitado
que se solicite ingresar

Los tres nombres ingresados se deberán imprimir en consola
*/

// Definir y crear la función antes de esta llamada

function generarInvitados(){
    let invitado1 = prompt("Nombre del primer invitado: ");
    let invitado2 = prompt("Nombre del segundo invitado: ");
    let invitado3 = prompt("Nombre del tercer invitado: ");
    console.log(`El primer invitado es: ${invitado1} El segundo invitado es: ${invitado2} y el tercer invitado es: ${invitado3}`);
}


generarInvitados();