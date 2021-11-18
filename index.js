let tableau_post_it = []

let numero_id = -1

document.onload = put_value_into_cookie();

document.body.addEventListener('click', () => {

    numero_id = -1
    
})

document.getElementById("div_blue").addEventListener('mousedown', (event) => {

    tableau_post_it.push(new Post_It(event.clientX, event.clientY, 200, 300, "blue", "Post It Bleu", tableau_post_it.length))
    tableau_post_it[tableau_post_it.length-1].affichage()

    let pointerX = -1;
    let pointerY = -1;

    let affiche = tableau_post_it[tableau_post_it.length-1] 

    document.onmousemove = (event) => {

        pointerX = event.clientX;
        pointerY = event.clientY;

        affiche.deplacement(pointerX - affiche.longeur + 90 , pointerY - affiche.hauteur + 135)
        
        affiche.affichage();

    } 
                
    document.body.addEventListener('mouseup', () => {

        document.onmousemove = () => {}

    })

});

document.getElementById("div_green").addEventListener('mousedown', (event) => {

    tableau_post_it.push(new Post_It(event.clientX, event.clientY, 200, 300, "green", "Post It Vert", tableau_post_it.length))
    tableau_post_it[tableau_post_it.length-1].affichage()

    let pointerX = -1;
    let pointerY = -1;

    let affiche = tableau_post_it[tableau_post_it.length-1] 

    document.onmousemove = (event) => {

        pointerX = event.clientX;
        pointerY = event.clientY;

        affiche.deplacement(pointerX - affiche.longeur + 90 , pointerY - affiche.hauteur + 135)
        
        affiche.affichage();

    } 
                
    document.body.addEventListener('mouseup', () => {

        document.onmousemove = () => {}

    })


});

document.getElementById("div_pink").addEventListener('mousedown', (event) => {

    tableau_post_it.push(new Post_It(event.clientX, event.clientY, 200, 300, "pink", "Post It Rose", tableau_post_it.length))
    tableau_post_it[tableau_post_it.length-1].affichage()

    let pointerX = -1;
    let pointerY = -1;

    let affiche = tableau_post_it[tableau_post_it.length-1] 

    document.onmousemove = (event) => {

        pointerX = event.clientX;
        pointerY = event.clientY;

        affiche.deplacement(pointerX - affiche.longeur + 90 , pointerY - affiche.hauteur + 135)
        
        affiche.affichage();

    } 
                
    document.body.addEventListener('mouseup', () => {

        document.onmousemove = () => {}

    })


});

document.body.addEventListener('keydown', (event) => {

    if ( numero_id > -1 ) {

        let string = tableau_post_it[numero_id].texte

        if ( event.key === 'Backspace') {
            
            // tableau_post_it[numero_id].changer_texte(tableau_post_it[numero_id].texte.substr(0, tableau_post_it[numero_id].texte.length - 1))

            let lastChar = string.slice(0, string.length - 1)

            tableau_post_it[numero_id].changer_texte(lastChar)
            tableau_post_it[numero_id].affichage();
        }
        
        else if ( event.key === 'Enter') {

            let saut_ligne = string + '<br />'

            tableau_post_it[numero_id].changer_texte(saut_ligne)
            tableau_post_it[numero_id].affichage();
            
        }
        
        else if ( event.key === 'Control') {}

        else if ( event.key === 'Shift') {}

        else if ( event.key === 'CapsLock') {}

        else if ( event.key === 'Tab') {}

        else {

            tableau_post_it[numero_id].changer_texte(tableau_post_it[numero_id].texte + event.key)
            tableau_post_it[numero_id].affichage()

        }

    }    

})

/**
 * Fonction permettant de supprimer le Post-It dans l'Array
 * @param {number} num
 */

function supprimer(num) {

    tableau_post_it.splice(num, 1)

}

setInterval( () => {
    
    document.cookie = JSON.stringify(tableau_post_it)

    console.log(document.cookie)

}, 1000)


function put_value_into_cookie() {

    let valeur_back_array = JSON.parse(document.cookie)

    for (i = 0; i < valeur_back_array.length; i++) {

        console.log(valeur_back_array[i])

        tableau_post_it.push(new Post_It(valeur_back_array[i].x, valeur_back_array[i].y, valeur_back_array[i].longeur, 
                                         valeur_back_array[i].hauteur, valeur_back_array[i].couleur, valeur_back_array[i].texte,
                                         valeur_back_array[i].id))

        tableau_post_it[tableau_post_it.length-1].affichage();

    }

}

function reset_table() {
    
    tableau_post_it = []

}