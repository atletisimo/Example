const startButton=document.getElementById('start-btn');
const  nextButton=document.getElementById('next-btn')
const questionContainer=document.getElementById('question-container');
const questionElement=document.getElementById('question');
const answerButtonsElement=document.getElementById('answer-buttons')
const questions=[
    {
        question:'What is 2+2',
        answers:[
            {text:'4',correct:true},
            {text:'22',correct: false}
        ]
    }
]
let shuffledQuestions;
let currentQuestionIndex;
startButton.addEventListener('click',startGame)

function startGame(){
startButton.classList.add('hide');
questionContainer.classList.remove('hide')
shuffledQuestions=questions.sort(()=>Math.random()- .5)
    currentQuestionIndex=0;
    setNextQuestion();
}
function setNextQuestion(){
    resetState();
showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question){
questionElement.innerText=question.question
    question.answers.forEach(answer=>{
        const button=document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer)
    answerButtonsElement.appendChild(button);
    })
}
function resetState(){
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function  selectAnswer(e){
const selectedButton=e.target;
const correct=selectedButton.dataset.correct;
setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct);
    })
    nextButton.classList.remove('hide')
}
function  setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong');
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong')
}