export const TEMPLATE_BIENVENUE = `
    <div class="welcome-screen">
        <h1>🧠 Quiz à deux</h1>
        <p class="subtitle">Entrez les noms des deux joueurs</p>

        <div class="player-input-group">
            <div class="player-input-box">
                <label for="player1">Joueur 1</label>
                <input type="text" id="player1" placeholder="Nom du joueur 1">
            </div>
            <div class="player-input-box">
                <label for="player2">Joueur 2</label>
                <input type="text" id="player2" placeholder="Nom du joueur 2">
            </div>
        </div>
        <div class="error-msg" id="errorMsg"></div>
        <button class="btn btn-start" id="startBtn">Démarrer</button>
    </div>
`;


export const TEMPLATE_OPTION = (classes, index, lettre, option) => `
    <div class="${classes}" data-index="${index}">
        <span class="letter">${lettre}</span>
        ${option}
    </div>
`;

// Compléter TEMPLATE_BADGE_JOUEUR
export const TEMPLATE_BADGE_JOUEUR = (joueur1,joueur2,indicateur) => `
 <div class="players-status" >
 
 <div class="player-badge" >
     <div class="name" id="player2">${joueur1.getNom}</div> 
       <div class="score" id="score1">${joueur1.getScore}</div> 

</div>
         
     <div class="player-badge">
      <div class="name" id="player2">${joueur2.getNom}</div> 
       <div class="score" id="score2">${joueur2.getScore}</div>

       </div>
       
</div>
  
   

`;



export const TEMPLATE_QUIZ =(joueur1,joueur2,question,reponse) =>  `
 
     <div class="">
  <h1>🧠 Quiz</h1>

    <p class="subtitle">Tour par Tour</p>
      
     <div id="corps">
     <div class="question-text" id="questionTexte">${question}</div>
     <div class="options-grid" id="option">${reponse}</div>
     </div>
     
          <div class="error-msg" id="errorMsg"></div>
             <button class="btn btn-next nav-button" id="nextBtn"> suivant &#8594;</button>
            </div>

</div>

` ;


export const TEMPLATE_JOUEUR_RESULTAT = (nom, score, estGagnant, htmlIcones = '') => `
    <div class="result-player ${estGagnant ? 'winner' : ''}">
        <div class="name">${nom}</div>
        <div class="score">${score}</div>
    </div>
`;

export const TEMPLATE_RESULTAT = (htmlJoueurs, messageGagnant ) => `
    <h1>🧠 Quiz</h1>
    <p class="subtitle">Résultat final</p>

    <div class="result-container">
        <div class="result-message">${messageGagnant}</div>
        <div class="result-score">
            ${htmlJoueurs}
        </div>
        <button class="btn btn-restart" id="restartBtn">🔄 Nouvelle partie </button>
    </div>
`;

// Compléter TEMPLATE_QUIZ
// export const TEMPLATE_QUIZ = (joueur1,joueur2,question,reponse ) => `
//
//              <div class="welcome-screen" xmlns="http://www.w3.org/1999/html">
//         <h1>🧠 Quiz </h1>
//         <p class="subtitle">Tour par tour</p>
//
//         <div class="player-input-group">
//             <div class="player-input-box">
//                 <label for="player1">${joueur1}
//
// </label>
//           </div>
//             <div class="player-input-box">
//                 <label for="player2">${joueur2}</label>
//
//             </div>
//         </div>
//
//         <div class="question">${question}</div>
//     <div class="reponse">${reponse}</div>
//
//      <div class="error-msg" id="errorMsg"></div>
//             <div>
//             <button class="btn btn-next nav-button " id="nextBtn"> suivant &#8594;</button>
//             </div>
//
// `;