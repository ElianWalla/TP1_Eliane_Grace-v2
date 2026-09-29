"use strict";

/**
 * Classe Joueur
 * Représente un joueur avec son nom et son score.
 */
class Joueur {

   #nom;
   #score;

   constructor(nom) {

       this.#nom = nom;
       this.#score = 0;
   }
   get getNom () {

       return this.#nom;
    }

    get getScore () {

       return this.#score;
    }

    ajouterPoint() {

       this.#score++;
    }

    reinitialiser () {

        this.#score = 0;
    }


    /**
     * Compare le score avec un autre joueur.
     * @param {Joueur} autre
     * @returns {number} 1 si supérieur, -1 si inférieur, 0 si égalité
     */
    comparerA(autre) {

        let egalite = 0;

        if (this.getScore > autre.getScore) {

           egalite= 1;

        } else if (this.getScore === autre.getScore) {

          egalite = 0;

        } else if (this.getScore < autre.getScore) {

           egalite = -1;
        }

        return egalite;
    }
}
