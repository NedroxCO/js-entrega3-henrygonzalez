/*SELECCIÓN DE PERSONAJE*/

let bucles = alert("Ingrese un número de bucles (1-5)")

for (let i=0; i< bucles; i++){
    let select = parseInt(alert("Selecciona tu personaje con un número del 1 al "+bucles));
    if (select == 1){
        alert("Su personaje es Batman");
    } else if (select == 2){
        alert("Su personaje es Bob Esponja");
    } else if (select == 3){
        alert("Su personaje es Deadpool");
    } else if (select == 4){
        alert("Su personaje es Link");
    } else{
        alert("Su personaje es Pac-Man");
    }
}

alert("Sus oponentes son:");

for (let i=0;i<bucles;i++){
    alert("Tu personaje peleará contra el presonaje número: "+i);
}