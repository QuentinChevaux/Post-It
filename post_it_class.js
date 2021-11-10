class Post_It {

    x;
    y;
    longeur;
    hauteur;
    couleur;
    texte;
    id;

    constructor(x, y, longeur, hauteur, couleur, texte, id) {

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