const questions = [
           
{
        question: "Name a movie where Shahrukh Khan was the villain.",
        answers: [
            {text: "Fan", correct: false},
            {text: "Ra.one", correct: false},
            {text: "Darr", correct: true},
            {text: "Zero", correct: false},
        ]
    },
    {
        question: "Who plays the female lead in the movie 'Fashion'?",
        answers: [
            {text: "Kangana Ranaut", correct: false},
            {text: "Priyanka Chopra", correct: true},
            {text: "Manini Mishra", correct: false},
            {text: "Kareena Kapoor", correct: false},
        ]
    },
    {
        question: "'Don(2006)'' had one of the leading stars of Hindi cinema in a double role. What was his name?",
        answers: [
            {text: "Nawazuddin Siddiqui", correct: false},
            {text: "Aamir Khan",correct: false},
            {text: "Akshay Khanna", correct: false},
            {text: "Shah rukh Khan", correct: true},
        ]
    },
    {
        question: "In 'Sholay', what was the name of Basanti's horse? ",
        answers: [
            {text: "Dhanno", correct: true},
            {text: "Rani", correct: false},
            {text: "Chetan", correct: false},
            {text: "Badal", correct : false},
        ]
    },
    {
        question: "What is Hritik Roshan's debut film?",
        answers: [
            {text: "Kaho naa... Pyaar Hai", correct: true},
            {text: "Koi Mil Gya", correct: false},
            {text: "Krish", correct: false},
            {text: "Fiza", correct: false},
        ]
    }
 ];
     const questionElement = document.getElementById("question");
     const answerButtons = document.getElementById("answer-buttons");
     const nextButton = document.getElementById("next-btn");
     
     let currentQuestionIndex=0;
     let score = 0;
     
     function startQuiz()
     {
         currentQuestionIndex=0;
         score = 0;
         nextButton.innerHTML = "Next";
         showQuestion();
     }
 
     function showQuestion()
     {
         resetState();
         let currentQuestion = questions[currentQuestionIndex];
         let questionNo = currentQuestionIndex + 1;
         questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
 
         currentQuestion.answers.forEach(answer => {
             const button = document.createElement("button");
             button.innerHTML = answer.text;
             button.classList.add("btn");
             answerButtons.appendChild(button);
             if(answer.correct){
                 button.dataset.correct = answer.correct;
             }
             button.addEventListener("click",selectAnswer);
         });
     }
 
     function resetState()
     {
         nextButton.style.display = "none";
         while (answerButtons.firstChild){
         answerButtons.removeChild (answerButtons.firstChild);
     }
 }
 
 function selectAnswer(e){
     const selectedBtn = e.target;
     const isCorrect = selectedBtn.dataset.correct === "true";
     if (isCorrect){ 
         selectedBtn.classList.add("correct");
         score++;
     }else{
     selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
          if(button.dataset.correct === "true"){ 
             button.classList.add("correct"); 
         }
         button.disabled = true;
     });
     nextButton.style.display="block";
 }
     function showScore(){
     resetState();
     questionElement.innerHTML= `You scored ${score} out of of ${questions.length}!`;
     nextButton.innerHTML = "Play Again"; 
     nextButton.style.display="block";
 }
 function handleNextButton(){ 
     currentQuestionIndex++;
     if(currentQuestionIndex < questions.length) {
         showQuestion();
     }else{
     showScore();
     }
 }
     nextButton.addEventListener("click", ()=>{
     if (currentQuestionIndex < questions.length) { 
         handleNextButton();
     }else{
     startQuiz();
     }
 })
     startQuiz();
 
     const texts = ["Kareena wore 130 different outfits for\n the movie Heroine", "'LOC: Kargil' is 4 hours and 25\n minutes Longest film in the world", "First bollywood movie was released in\n 1899 where first hollywood movie\n in 1907, Bollywood is older than\n hollywood.", "Mughal-e-Azam is the most\n expensive Bollywood film", "The pregnancy scene from 3 Idiots\n was initially planned for Munna\n Bhai M.B.B.S.","Once Tom Cruice was consider\n for the role of Raj Malhotra\n in Dilwale Dhulania Le Jayenge"," Kaho Naa.. Pyar Hai’ was \nadded to the Guinness Book of World\n Records 2002 edition for winning the\n most number of awards for a movie.\nThe movie won a total of 92 awards!"];
     let currentIndex = 0;
     
     function changeText() {
       const textElement = document.getElementById("text");
       textElement.classList.remove("fade-in");
       
       setTimeout(function() {
         textElement.textContent = texts[currentIndex];
         textElement.classList.add("fade-in");
         currentIndex = (currentIndex + 1) % texts.length;
       }, 3000);
     }
     
     setInterval(changeText, 6000);