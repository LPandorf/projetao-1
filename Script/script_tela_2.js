const question = document.getElementById('question'); 
const choices = Array.from(document.getElementsByClassName('perguntas_quizz'));
console.log(choices);

let currentQuestion = {};
let acceptingAnswer = true;
let score = 0;
let questionCounter = 0;
let avaibleQuestions = {};

let questions = [
    {
    question:"Qual queijo é o brasileiro?",
    choice1:"Queijo Cheddar",
    choice2:"Queijo Canastra",
    choice3:"Queijo Brie",
    choice4:"Queijo Gorgonzola",
    answer: 2
    },
    {
    question:"Qual país produz queijo que tem larvas?",
    choice1:"Itália",
    choice2:"China",
    choice3:"Austrália",
    choice4:"Chile",
    answer: 1
    },{
    question:"Qual estado brasileiro inventou o pão e queijo?",
    choice1:"Minas Gerais",
    choice2:"São Paulo",
    choice3:"Santa Catarina",
    choice4:"Pernambuco",
    answer: 1
    }
]

