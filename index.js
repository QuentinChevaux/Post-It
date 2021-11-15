let tableau_post_it = []

let numero_id = -1

function supprimer(num) {

    tableau_post_it.splice(num, 1)

}

document.getElementById("div_blue").addEventListener('click', () => {    
        
    tableau_post_it.push(new Post_It(800, 300, 200, 300, "blue", "Post It Bleu", tableau_post_it.length))

    tableau_post_it[tableau_post_it.length-1].affichage()

});

document.getElementById("div_green").addEventListener('click', () => {
    
    tableau_post_it.push(new Post_It(1000, 100, 200, 300, "green", "Post It Vert", tableau_post_it.length))

    tableau_post_it[tableau_post_it.length-1].affichage()

});

document.getElementById("div_pink").addEventListener('click', () => {

    tableau_post_it.push(new Post_It(400, 600, 200, 300, "pink", "Post It Rose", tableau_post_it.length))

    tableau_post_it[tableau_post_it.length-1].affichage()
    

});

document.body.addEventListener('keyup', (event) => {

    console.log(numero_id,event)

    if (numero_id > -1 ) {

        if ( event.key === 'Backspace') {

            return false;

            
            
        }

        tableau_post_it[numero_id].changer_texte(tableau_post_it[numero_id].texte + event.key)
        tableau_post_it[numero_id].affichage()

    }    

})