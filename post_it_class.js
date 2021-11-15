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

                        // Track mouse movement

            bouton_mouvement.addEventListener('mousedown', () => {

                let pointerX = -1;
                let pointerY = -1;

                document.onmousemove = (event) => {                          
                
	                pointerX = event.pageX;
	                pointerY = event.pageY;

                    this.deplacement(pointerX - this.longeur + 168, pointerY - this.hauteur + 15)
                    
                    this.affichage();

                    // console.log('Cursor at: '+pointerX + ', ' +pointerY);
                } 
                
                document.body.addEventListener('mouseup', () => {

                    document.onmousemove = () => {}

                })
             
            })                 

            // BOUTON REDIMENSION

            let bouton_redimension = document.createElement("div")
            menu_post_it.appendChild(bouton_redimension);

            bouton_redimension.className = "fas fa-compress-alt"

            bouton_redimension.addEventListener('mousedown', () => {

                let pointerX = 0
                let pointerY = 0

                let rect = nouveau_post_it.getBoundingClientRect();

                document.onmousemove = (event) => {
                    
                    pointerX = event.clientX - rect.left;
                    pointerY = event.clientY - rect.top;
                    
                    this.redimension(pointerX + 143, pointerY + 15)
                    
                    this.affichage();

                    // console.log(pointerX, pointerY);
                } 
                
                document.body.addEventListener('mouseup', () => {

                    document.onmousemove = () => {}

                })
             
            })

            // BOUTON CHANGER TEXTE

            let bouton_changer_texte = document.createElement("div")
            menu_post_it.appendChild(bouton_changer_texte);

            bouton_changer_texte.className = "far fa-keyboard"

            bouton_changer_texte.addEventListener('click', () => {              

                numero_id = this.id

                console.log(numero_id)
 
            })


            // BOUTON CHANGER COULEUR

            let bouton_changer_couleur = document.createElement("div")
            menu_post_it.appendChild(bouton_changer_couleur);

            bouton_changer_couleur.className = "fas fa-fill-drip"

            let randomColor = '#'+ Math.floor ( Math.random() *16777215 ).toString(16);

            bouton_changer_couleur.addEventListener('click', () => {

                this.couleur = randomColor

                this.changer_couleur(this.couleur);

                this.affichage()
 
            })

            // BOUTON FRONT

            let bouton_passer_premier_plan = document.createElement("div")
            menu_post_it.appendChild(bouton_passer_premier_plan);

            bouton_passer_premier_plan.className = "fas fa-arrow-up"

            let position_z = 1

            bouton_passer_premier_plan.addEventListener('click', () => {

                nouveau_post_it.style.zIndex = position_z++

                console.log(position_z)

            })
            
            // BOUTON BACK

            let bouton_passer_second_plan = document.createElement("div")
            menu_post_it.appendChild(bouton_passer_second_plan);

            bouton_passer_second_plan.className = "fas fa-arrow-down"        
            
            bouton_passer_second_plan.addEventListener('click', () => {
                
                if (position_z > 0 ) {
                 
                    nouveau_post_it.style.zIndex = position_z--
                
                    console.log(position_z)

                }               

            })

            // BOUTON SUPPRIMER

            let bouton_supprimer = document.createElement("div")
            menu_post_it.appendChild(bouton_supprimer);

            bouton_supprimer.className = "fas fa-trash-alt"

            bouton_supprimer.addEventListener('click', () => {

               document.body.removeChild(nouveau_post_it);

               supprimer(this.id);

            })

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