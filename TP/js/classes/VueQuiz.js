// =============================================================================
// Templates HTML (Constantes)
// =============================================================================
"use strict";
import {
    TEMPLATE_OPTION,
    TEMPLATE_RESULTAT,
    TEMPLATE_BIENVENUE,
    TEMPLATE_BADGE_JOUEUR,
    TEMPLATE_QUIZ,
    TEMPLATE_JOUEUR_RESULTAT,
} from "../VuesDynamiques.js";
import {Quiz} from  "./Quiz.js"
import {Joueur} from  "./Joueur.js"
import {handleDemarrer, handleQuestionSuivante, handleRecommancer, handleChoixDeReponse} from "../evenements.js";

/**
 * Classe VueQuiz
 * Responsable de l'affichage dans le DOM.
 * Ne contient aucune logique de jeu.
 */

export class VueQuiz {
    #conteneur;
    #quiz;
    #nomsJoueurs = ['', ''];

    /**
     * @param {HTMLElement} conteneur - Élément racine qui accueille la vue
     * @param {Quiz} quiz - Le modèle Quiz
     */
    constructor(quiz) {
        this.#conteneur = document.getElementById('app');
        this.#quiz = quiz;
        quiz.surChangement = () => {
            this.affiche()
        };

    }

    // ---------- Getters & Setters ----------
    get nomsJoueurs() {
        return [...this.#nomsJoueurs];
    }

    get quiz() {
        return this.#quiz;
    }

    definirNomsJoueurs(p1, p2) {
        this.#nomsJoueurs = [p1, p2];
    }

    // ---------- Point d'entrée du rendu ----------
    affiche() {
        if (!this.#quiz.estDemarre) {
            this.#afficheBienvenue();
        } else if (this.#quiz.estTermine) {
            this.#afficheResultat();
        } else {
            this.#afficheQuiz();
        }
    }

    // ---------- Écran d'accueil ----------
    #afficheBienvenue() {
        this.#conteneur.innerHTML = TEMPLATE_BIENVENUE;
        document.getElementById('startBtn').addEventListener('click', (ev) => {
        handleDemarrer(ev, this)

        });

        const champJoueur1 = this.#conteneur.querySelector('#player1');
        const champJoueur2 = this.#conteneur.querySelector('#player2');

        if (champJoueur1 && this.#nomsJoueurs[0]) {
            champJoueur1.value = this.#nomsJoueurs[0];
        }
        if (champJoueur2 && this.#nomsJoueurs[1]) {
            champJoueur2.value = this.#nomsJoueurs[1];
        }

    }

    // ---------- Écran de quiz ----------
    #afficheQuiz() {
        // Construction des choix de reponse
        let quiz = this.#quiz;
        let q = quiz.questionActuelle;
        let estRepondu = quiz.estRepondu;
        let reponseChoisie = quiz.reponseChoisie;

        let htmlOptions = '';
        for (let i = 0; i < q.options.length; i++) {
            const option = q.options[i];
            const classes = this.#determinerClasseAppropriee(i, q, estRepondu, reponseChoisie);
            htmlOptions += '' + TEMPLATE_OPTION(classes, i, q.lettreA(i), option);
        }

        // Construction des Badges joueurs
        let sousTitre = ``;

       let  activePlayer = (quiz.indexJoueurActuel === quiz.joueurs[0]);
        if (activePlayer === true) {
            sousTitre = `<p class="subtitle">🎯 À vous !</p>`;
        }

        const firstPlayer = TEMPLATE_BADGE_JOUEUR(
            activePlayer,
            quiz.joueurActuel.getNom,
            quiz.joueurActuel.getScore,
            sousTitre
        );

      let activePlayer2 = (quiz.indexJoueurActuel === quiz.joueurs[1]);
      if (activePlayer2 === true) {
          sousTitre = `<p class="subtitle">🎯 À vous !</p>`;
      }

        const secondPlayer = TEMPLATE_BADGE_JOUEUR(
            activePlayer2,
            quiz.autreJoueur.getNom,
            quiz.autreJoueur.getScore,
            sousTitre
        );

        // Construction du Quiz avec htmlOptions et les Badges des joueurs
        this.#conteneur.innerHTML = TEMPLATE_QUIZ(
            firstPlayer,
            secondPlayer,
            '( ' + quiz.numeroQuestion + ' ) - ' + q.etiquette,
            htmlOptions
        );


        //TODO La correction des reponses et l'affichage de la question suivante

        document.getElementById('nextBtn').addEventListener('click', (ev) => {
                handleQuestionSuivante(ev, this.#quiz)
            }
        );
    }


    // ---------- Écran de résultat ----------
    #afficheResultat() {
        const quiz = this.#quiz;

        const joueur1 = quiz.joueurActuel;
        const joueur2 = quiz.autreJoueur;

        let scoreJoueur1 = quiz.joueurActuel.getScore;
        let scoreJoueur2 = quiz.autreJoueur.getScore;

        let nom = "";
        let score = 0;
        let winner = false;
        let icone = '';

        if (scoreJoueur1 === scoreJoueur2 + 2) {

            nom = joueur1.getNom();
            score = scoreJoueur1;
            winner = true;
            icone = '&#127942;';

        } else if (scoreJoueur2 === scoreJoueur1 + 2) {

            nom = joueur2.getNom();
            score = scoreJoueur2;
            winner = true;
            icone = '&#127942;';
       }

        this.#conteneur.innerHTML = TEMPLATE_JOUEUR_RESULTAT(nom, score, winner, icone);

        document.getElementById('restartBtn').addEventListener('click', (ev) => {
                handleRecommancer(ev, quiz)
            }
        );
    }


    // ---------- Utilitaires ----------
    /**
     * Détermine les classes CSS d'une option en fonction de l'état de la question.
     */
    #determinerClasseAppropriee(index, question, estRepondu, reponseChoisie) {
        const classes = ['option-btn'];
        let retClasses = "";

        if (!estRepondu) {
            retClasses = classes.join(' '); // pour retirer le tableau
        } else {
            classes.push('disabled');
            if (index === question.indexCorrect) {
                classes.push('correct');
            } else if (index === reponseChoisie) {
                classes.push('incorrect');
            }
            if (index === reponseChoisie) {
                classes.push('selected');
            }
            retClasses = classes.join(' '); // pour retirer le tableau et joindre les classes sélectionnées
        }

        return retClasses;

    }
}
