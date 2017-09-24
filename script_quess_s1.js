   function playGuess_single() {
        var attemptCount = 1;
        var answer = parseInt(Math.random() * 100); 
       

        while (true) { 

            var userAnswer = prompt("Введите число от 0 до 100. Для выхода нажмите q");
            if (userAnswer == "q") {
                break; 
            }
            userAnswer= parseInt(userAnswer);

            if (userAnswer > answer) {
                alert("Ваш ответ слишком большой");
                attemptCount++;
            }
            else if (userAnswer < answer) {
                alert("Ваш ответ слишком маленький");
                attemptCount++;
            }
            else if (userAnswer == answer) {            
                alert("Вы угадали! Число ваших попыток: " + attemptCount);
                break;
            }
            else {
                 alert("Необходимо ввести число");
            }        

        }

         alert("Игра окончена.");    
        }
