/**
 * Classe Générale du Post-It avec tous les paramètres
 */

class Post_It {

    x;
    y;
    longeur;
    hauteur;
    couleur;
    texte;
    id;

    /**
     * Constructeur du Post-It avec tous les Paramètres ci-dessous
     * @param x Lui donne la Valeur sur l'axe Horizontal
     * @param y Lui donne la Valeur sur l'axe Verticale
     * @param longeur Lui donne la Longeur du Post-It
     * @param hauteur Lui donne la Hauteur du Post-It
     * @param couleur Lui donne la Couleur du fond du Post-It
     * @param texte Lui donne la Chaine de Charactère dans le Post-It
     * @param id Lui donne son id unique
     */

    constructor(x, y, longeur, hauteur, couleur, texte, id) {

        this.x = x
        this.y = y
        this.longeur = longeur
        this.hauteur = hauteur
        this.couleur = couleur
        this.texte = texte
        this.id = id

    }

    /**
     * Fonction Affichage qui affiche le Post It avec tous les Parametres
     * @param nouveau_post_it Créer un Nouveau Post-It et lui assigne les parametre du Constructeur
     * @param menu_post_it Ajoute un Menu en bas à droite du Post-It qui contient des boutons de Personnalisation
     */

    affichage() {

        let nouveau_post_it = document.getElementById("post_it" + this.id)

        if ( nouveau_post_it == null ) {

            nouveau_post_it = document.createElement("div")       
            document.body.appendChild(nouveau_post_it);

            nouveau_post_it.addEventListener('dragstart', drag_start, false);
        
        }

        nouveau_post_it.draggable = true

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

        menu_post_it.className = "menu_post_it"

            // BOUTON MOUVEMENT INUTILE CAR DRAG AND DROP               

            // BOUTON REDIMENSION

            let bouton_redimension = document.createElement("div")
            menu_post_it.appendChild(bouton_redimension);

            bouton_redimension.className = "fas fa-compress-alt"

            bouton_redimension.addEventListener('mousedown', () => {

                let pointerX = 0
                let pointerY = 0

                let rect = nouveau_post_it.getBoundingClientRect();

                document.onmousemove = (event) => {
                    
                    pointerX = event.pageX - rect.left;
                    pointerY = event.pageY - rect.top;
                    
                    this.redimension(pointerX + 125, pointerY)
                    
                    this.affichage();
 
                } 
                
                document.body.addEventListener('mouseup', () => {

                    document.onmousemove = () => {}

                })
             
            })

            // BOUTON CHANGER TEXTE

            let bouton_changer_texte = document.createElement("div")
            menu_post_it.appendChild(bouton_changer_texte);

            bouton_changer_texte.className = "far fa-keyboard"

            bouton_changer_texte.addEventListener('click', (event) => {             

                numero_id = this.id

                this.changer_texte(" ")

                event.stopPropagation();
 
            })

            // BOUTON CHANGER COULEUR

            let bouton_changer_couleur = document.createElement("div")
            menu_post_it.appendChild(bouton_changer_couleur);

            bouton_changer_couleur.className = "fas fa-fill-drip"

            let randomColor = '#' + Math.floor ( Math.random() * 16777215 ).toString(16);

            bouton_changer_couleur.addEventListener('click', () => {

                this.couleur = randomColor

                this.changer_couleur(this.couleur);

                this.changer_texte("Post It de couleur : " + randomColor)

                // console.log(randomColor)

                this.affichage()
 
            })

            // BOUTON FRONT

            let bouton_passer_premier_plan = document.createElement("div")
            menu_post_it.appendChild(bouton_passer_premier_plan);

            bouton_passer_premier_plan.className = "fas fa-arrow-up"

            let position_z = 1

            bouton_passer_premier_plan.addEventListener('click', () => {

                nouveau_post_it.style.zIndex = position_z++

                // console.log(position_z)

            })
            
            // BOUTON BACK

            let bouton_passer_second_plan = document.createElement("div")
            menu_post_it.appendChild(bouton_passer_second_plan);

            bouton_passer_second_plan.className = "fas fa-arrow-down"        
            
            bouton_passer_second_plan.addEventListener('click', () => {
                
                if (position_z > 0 ) {
                 
                    nouveau_post_it.style.zIndex = position_z--
                
                    // console.log(position_z)

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

        nouveau_post_it.appendChild(menu_post_it);    

    }

    /**
     * Change les Valeurs X et Y du Post-It sur la Page
     * @param {number} x valeur Horizontale sur la Page
     * @param {number} y valeur Verticale sur la Page
     */

    deplacement(x, y) {

        this.x = x
        this.y = y

    }

    /**
     * Change les Valeurs de Longeur et Hauteur du Post-It pour le redimensionner
     * @param {number} longeur valeur de Longeur du Post-It
     * @param {number} hauteur valeur de Hauteur du Post-It
     */

    redimension(longeur, hauteur) {

        this.longeur = longeur
        this.hauteur = hauteur

    }

    /**
     * Change le Texte à l'interieur du Post-It
     * @param {string} texte valeur du Texte
     */

    changer_texte(texte) {

        this.texte = texte

    }

    /**
     * Change la Couleur de Background du Post-It
     * @param {string} couleur valeur de la Couleur de fond du Post-It 
     */

    changer_couleur(couleur) {

        this.couleur = couleur

    }

}