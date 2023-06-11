/* Promesas */

import { owners,heroes } from "./data/heroes.js";

const getHeroById = (id) => { 
    return heroes.find( element => element.id === id);
};

// console.log(getHeroById(1));


const getHeroByIdAsync = (id) => {
    
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero) {
                resolve(hero)
            } else {
                reject('Heroe no existe');
            }
        }, 2000);
    })
};


getHeroByIdAsync(1).then((response) => console.log(response))
.catch( console.log );