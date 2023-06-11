const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

export const owners = ['DC','Marvel'];


/* Exportando  el arrat heroes */
export { heroes};


const sumar = function(x, y){    
    return x + y;
}

const multiplicar = (a,b) =>a*b;


function resta (a,b) { 
    return a - b;
 }


/* Exportando funciones */
 export {sumar,multiplicar,resta}