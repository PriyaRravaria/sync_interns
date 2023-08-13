const quizData = [
    {
        question: "Which is the biggest continent in the world?",
        a: "North America",
        b: "Asia",
        c: "Africa",
        d: "Australia",
        correct: "b",
      },
      {
        question: "Which is the largest ocean in the world?",
        a: "Indian Ocean",
        b: "Pacific Ocean",
        c: "Arctic Ocean",
        d: "Atlantic Ocean",
        correct: "b",
      },
    
      {
        question: "Which bank is called bankers Bank of India?",
        a: "Reserve Bank of India",
        b: "Punjab National Bank",
        c: "State Bank of India",
        d: "ICICI Bank",
        correct: "a",
      },
    
      {
        question: "Which state has the longest coastal line in India?",
        a: "Gujarat",
        b: "Kerala",
        c: "Karnataka",
        d: "West Bengal",
        correct: "a",
      },
      {
        question: "How many letters are there in the English alphabet?",
        a: "20",
        b: "25",
        c: "26",
        d: "27",
        correct: "c",
      },
      {
        question: "Who was India’s first President?",
        a: "Sarvepalli Radhakrishnan",
        b: "Varahagiri Venkata Giri",
        c: "Dr. Rajendra Prasad",
        d: "Varahagiri Venkata Giri",
        correct: "c",
      },
      {
        question: "How many meters are in 1 Kilometer?",
        a: "700",
        b: "2000",
        c: "1500",
        d: "1000",
        correct: "d",
      },
      {
        question: "In which year did India achieve its independence?",
        a: "1948",
        b: "1999",
        c: "1946",
        d: "1947",
        correct: "d",
      },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})