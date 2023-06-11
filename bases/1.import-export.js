/* Importaciones y Exportaciones */


/* Importando la clase heroes  */
import { owners,heroes } from "./data/heroes.js"; /*  De esta manera se importa varias exportaciones */
console.log( owners) ;


/* Importando una clase por default */

import personas from "./data/alumnos.js";

console.log(personas);


/* Importando funciones */

import { sumar,resta,multiplicar } from "./data/heroes.js";

const resSuma = sumar(8,4);
const resResta = resta(8,4);
var resMultiplicar = multiplicar(8,4);

console.log(`La suma es :${resSuma}`);
console.log(`La resta es :${resResta}`);
console.log(`La multiplicacion  es :${resMultiplicar}`);



/*  Ejercicio  */

/* Funcion find */

// console.log(heroes);

const getHeroById = (id) =>{
    const resul = heroes.find( element => 
        element.id === id
    )

    console.log(resul);
};

/* Llamando a la funcion para ver los heroes */

getHeroById(3);


const getHeroesByOwner = (dato) => {
    const result2 = heroes.filter(element => element.owner == dato);
    console.log(result2);
}

getHeroesByOwner('DC');