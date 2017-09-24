var correctAnswersCount = 0; // переменная подсчета правильных ответов

function askQuestion(textBoxId, answer) {
    
    var userAnswer = document.getElementById(textBoxId).value;
    userAnswer = userAnswer.toLowerCase();

    if (userAnswer == answer) {
        correctAnswersCount++;// подсчет правильных ответов        
    } 
}

function playPuzzle() {  
    correctAnswersCount = 0; // обнуление в начале игры подсчета правильных ответов
    
    askQuestion("userAnswer1", "лысый"); // вызов функции    
    askQuestion("userAnswer2", "мопед");
    askQuestion("userAnswer3", "спит"); 
    askQuestion("userAnswer4", "сухих");
    askQuestion("userAnswer5", "якорь");
       
    document.getElementById("result").innerHTML = // берем элемент result из разметки и внутрь него подставляем результат
        "Правильных ответов: " + correctAnswersCount;
}



