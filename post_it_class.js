class Post_It {

    x;
    y;
    longeur;
    hauteur;
    couleur;
    texte;
    id;

    constructor(x, y, longeur, hauteur, couleur, texte, id, GrillePostit) {

        this.x = x
        this.y = y
        this.longeur = longeur
        this.hauteur = hauteur
        this.couleur = couleur
        this.texte = texte
        this.id = id

    }

    affichage() {

        let nouveau_post_it = document.getElementById("post_it" + this.id)

        if ( nouveau_post_it == null ) {

            nouveau_post_it = document.createElement("div")       
            document.body.appendChild(nouveau_post_it);

        
        }        

        nouveau_post_it.id = "post_it" + this.id;

        nouveau_post_it.style.position = "fixed";

        nouveau_post_it.style.left = this.x + "px";
        nouveau_post_it.style.top = this.y + "px";

        nouveau_post_it.style.width = this.longeur + "px";
        nouveau_post_it.style.height = this.hauteur + "px";

        nouveau_post_it.style.backgroundColor = this.couleur;

        nouveau_post_it.innerHTML = this.texte;
        
        nouveau_post_it.style.color = "white"

        // MENU DES BOUTONS

        let menu_post_it = document.createElement("div")
        nouveau_post_it.appendChild(menu_post_it);

        menu_post_it.className = "menu_post_it"

            // BOUTON MOUVEMENT

            let bouton_mouvement = document.createElement("div")
            menu_post_it.appendChild(bouton_mouvement);

            bouton_mouvement.className = "fas fa-arrows-alt"

            // BOUTON REDIMENSION

            let bouton_redimension = document.createElement("div")
            menu_post_it.appendChild(bouton_redimension);

            bouton_redimension.className = "fas fa-compress-alt"

            // BOUTON CHANGER TEXTE

            let bouton_changer_texte = document.createElement("div")
            menu_post_it.appendChild(bouton_changer_texte);

            bouton_changer_texte.className = "far fa-keyboard"

            // BOUTON CHANGER COULEUR

            let bouton_changer_couleur = document.createElement("div")
            menu_post_it.appendChild(bouton_changer_couleur);

            bouton_changer_couleur.className = "fas fa-fill-drip"

            // BOUTON FRONT

            let bouton_passer_premier_plan = document.createElement("div")
            menu_post_it.appendChild(bouton_passer_premier_plan);

            bouton_passer_premier_plan.className = "fas fa-arrow-up"
            
            // BOUTON BACK

            let bouton_passer_second_plan = document.createElement("div")
            menu_post_it.appendChild(bouton_passer_second_plan);

            bouton_passer_second_plan.className = "fas fa-arrow-down"

            // BOUTON SUPPRIMER

            let bouton_supprimer = document.createElement("div")
            menu_post_it.appendChild(bouton_supprimer);

            bouton_supprimer.className = "fas fa-trash-alt" 


    }

    deplacement(x, y) {

        this.x = x
        this.y = y

    }

    redimension(longeur, hauteur) {

        this.longeur = longeur
        this.hauteur = hauteur

    }

    changer_texte(texte) {

        this.texte = texte

    }

    changer_couleur(couleur) {

        this.couleur = couleur

    }

}