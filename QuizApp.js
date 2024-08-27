const questions = [{question: "question 1", option1: "option 1", option2: "option 2", option3: "option 3", option4 : "option 4", answer: "option 3"},
                   {question: "question 2", option1: "option 1", option2: "option 2", option3: "option 3", option4 : "option 4", answer: "option 1"},
                   {question: "question 3", option1: "option 1", option2: "option 2", option3: "option 3", option4 : "option 4", answer: "option 2"},
                   {question: "question 4", option1: "option 1", option2: "option 2", option3: "option 3", option4 : "option 4", answer: "option 4"}] //list of all th quiz questions and the respective options & correct answers

var score = 0;
const pointsForCorrectAnswer = 5;
var index = 0;

const question = document.getElementById('question');

const radio1 = document.getElementById('option1');
const option1 = document.getElementById('option1-text');

const radio2 = document.getElementById('option2');
const option2 = document.getElementById('option2-text');

const radio3 = document.getElementById('option3');
const option3 = document.getElementById('option3-text');

const radio4 = document.getElementById('option4');
const option4 = document.getElementById('option4-text');

const scoreDisp = document.getElementById('score');

const button = document.getElementById('next-submit'); //button used either as next or submit
button.addEventListener('click', () => buttonClicked());

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {index = 0; displayQuiz(index);});

function displayQuiz(index) {
    //initial conditions
    button.disabled = false;
    scoreDisp.style.display = 'none';
    reset.style.display = 'none';

    //use the button either as next or submit depending on the question number index
    if (index + 1 < questions.length)
        button.textContent = "Next question";
    else if (index + 1 === questions.length)
        button.innerHTML = "Submit";
    else
        return

    //set the question and options' text
    question.innerHTML = questions[index].question;
    option1.innerHTML = questions[index].option1;
    option2.innerHTML = questions[index].option2;
    option3.innerHTML = questions[index].option3;
    option4.innerHTML = questions[index].option4;
}

function buttonClicked() {
    scoreCalculator();

    if (button.textContent === "Next question") {
        ++index;
        displayQuiz(index);
    }
    else if (button.textContent === "Submit") {
        button.disabled = true;
        scoreDisp.innerHTML = "<b>Score<b>: " + score;
        scoreDisp.style.display = '';
        reset.style.display = '';
    }
}

function scoreCalculator() {
    var selected = "";

    if (radio1.checked)
        selected = option1.innerText;
    else if (radio2.checked)
        selected = option2.innerText;
    else if (radio3.checked)
        selected = option3.innerText;
    else if (radio4.checked)
        selected = option4.innerText;
    
    if (selected !== "" && index < questions.length)
        if (selected === questions[index].answer)
            score += pointsForCorrectAnswer;
}

displayQuiz(index);