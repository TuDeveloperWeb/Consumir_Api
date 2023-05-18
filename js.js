const getNombre = (idPost)=>{

/* Funcion fetch */

fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then(res => res.json())
    .then(post =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(res => res.json())
        .then(user => {
            console.log(user.name);
        })
    })
}

getNombre(53);


/* Fubction Async */
const getNombreAsync = async(idPost)=>{
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        const post = await resPost.json();

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        const user = await resUser.json();
        console.log(user.name);

    } catch (error) {
        console.log(error);
    }
}

getNombreAsync(53);


/* Metodo Axios */

const getNombreAxios = async(idPost)=>{
    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`);
        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`);
        console.log(resUser.data.name);

    } catch (error) {
        console.log(error);
    }
}

getNombreAxios(53);