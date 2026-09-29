import {questionsData} from './donnees.js';
import {Quiz} from './classes/Quiz.js';
import {VueQuiz} from './classes/VueQuiz.js';
import {Question} from 'classes/Question.js';

// --------------------------------------------------------------
// 1. Instanciation des objets Question
// --------------------------------------------------------------
const questions = questionsData.map(data => new Question(data));

// --------------------------------------------------------------
// 2. Création du Quiz et de la Vue
// --------------------------------------------------------------
const quiz = new Quiz(questions);
const vue = new VueQuiz(quiz);

// --------------------------------------------------------------
// 3. Premier rendu
// --------------------------------------------------------------
vue.affiche();