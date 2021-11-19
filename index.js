let tableau_post_it = []

let numero_id = -1

document.body.addEventListener('click', () => {

    numero_id = -1
    
})

function drag_start(event) {
	var style = window.getComputedStyle(event.target, null);
	event.dataTransfer.setData("text/plain", (parseInt(style.getPropertyValue("left"), 10) - event.clientX) + ',' + 
                                             (parseInt(style.getPropertyValue("top"), 10) - event.clientY) + ',' + event.target.id);
}

function drag_over(event) {

	event.preventDefault();
	return false;

}

function drop(event) {

	var offset = event.dataTransfer.getData("text/plain").split(',');

	var all_post_it = document.getElementById([offset[2]]);

	all_post_it.style.left = (event.clientX + parseInt(offset[0], 10)) + 'px';
	all_post_it.style.top = (event.clientY + parseInt(offset[1], 10)) + 'px';
	event.preventDefault();
	return false;

}

document.body.addEventListener('dragover', drag_over, false);
document.body.addEventListener('drop', drop, false);


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

    delete tableau_post_it[num]

}

document.onload = value_back_from_localStorage();

setInterval( () => {

    localStorage.setItem("table_value", JSON.stringify(tableau_post_it))

}, 1000)

/**
 * Recupère la valeur dans le Local Storage donc recupère les Post-it de la session précédente
 */

function value_back_from_localStorage() {

    let parse_localStorage = localStorage.getItem("table_value")
    
    let valeur_back_array = JSON.parse(parse_localStorage)

    for (i = 0; i < valeur_back_array.length; i++) {

        console.log(valeur_back_array[i])

        if ( valeur_back_array[i] !== null ){

            tableau_post_it.push(new Post_It(valeur_back_array[i].x, valeur_back_array[i].y, valeur_back_array[i].longeur, 
                                         valeur_back_array[i].hauteur, valeur_back_array[i].couleur, valeur_back_array[i].texte,tableau_post_it.length))

            tableau_post_it[tableau_post_it.length-1].affichage();

        }

    }

}