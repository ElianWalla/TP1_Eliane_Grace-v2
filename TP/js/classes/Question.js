/**
 * Classe Question
 * Représente une question de quiz avec ses options et la bonne réponse.
 */
class Question {
    #enonce;
    #options;
    #indexCorrect;

    /**
     * @param {Object} data - Données de la question
     * @param {string} data.question - L'intitulé de la question
     * @param {string[]} data.options - Tableau des 4 propositions
     * @param {number} data.correct - Index de la bonne réponse (0..3)
     */
    constructor({question, options, correct}) {
        if(question !== null){
            this.#enonce = question;
        }
        if(options !==null){
            this.#options = options;
        }
        if(correct >0){
            this.#indexCorrect = correct;
        }

    }

    get etiquette(){
        return this.#indexCorrect;

    }
    get options(){
        return this.#indexCorrect;
    }


    estCorrect(index){
        if(index===this.#indexCorrect){
            return true;
        }
    }
    /**
     * Retourne la lettre correspondant à un index (A, B, C, D…).
     * @param {number} index
     * @returns {string}
     */
    lettreA(index) {
       const lettres = ["A","B,","C","D","E","F","G,H","I","J","K",
           "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            return lettres[index];

    }
}