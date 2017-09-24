   function playGuess_single() {
        var attemptCount = 1;
        var answer = parseInt(Math.random() * 100); // случайное число от 0 до 1, уможаем его на 100 и округляем до целого - ГЕНЕРАТОР СЛУЧАЙНОГО ЧИСЛА
        // alert(answer); // показать загаданное компьютером число


        while (true) { // бесконечный цикл, выполяется до break

            var userAnswer = prompt("Введите число от 0 до 100. Для выхода нажмите q");
            if (userAnswer == "q") {
                break; // завершение цикла
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
