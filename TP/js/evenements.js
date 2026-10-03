const conteneur = document.getElementById('app');

export function handleDemarrer(ev, vue) {
    const champJoueur1 = conteneur.querySelector('#player1');
    const champJoueur2 = conteneur.querySelector('#player2');
    const p1 = champJoueur1 ? champJoueur1.value.trim() : '';
    const p2 = champJoueur2 ? champJoueur2.value.trim() : '';

    // vérifier que les noms ont été saisis
    if (!p1 || !p2) {
        const messageErreur = conteneur.querySelector('#errorMsg');
        if (messageErreur) {
            messageErreur.textContent = 'Veuillez saisir les deux noms.';
        }
    } else {
        if (vue && typeof vue.definirNomsJoueurs === 'function') {
            vue.definirNomsJoueurs(p1, p2);
        }

        vue.quiz.demarrer(p1, p2);
    }
}

export function handleChoixDeReponse(ev, quiz) {
// A COMPLÉTER
    const boutonOption = ev.target;
    const index = parseInt(boutonOption.dataset.index, 10);
    // appeler de la methode repondre dans la classe Quiz.js
    quiz.repondre(index);
}

export function handleQuestionSuivante(ev, quiz) {
    const boutonSuivant = ev.target;
    if (!boutonSuivant.disabled) {
        quiz.suivant();
    }
}

export function handleRecommancer(ev, quiz) {
    quiz.reinitialiser();
}


