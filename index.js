let tableau_post_it = []

let numero_id = -1

document.body.addEventListener('click', () => {

    numero_id =- 1
    
})

function supprimer(num) {

    tableau_post_it.splice(num, 1)

}

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