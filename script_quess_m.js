  function playGuess_multi() {
    var attemptCountuser1 = 1;
    var attemptCountuser2 = 1;
    var answer = parseInt(Math.random() * 100); // случайное число от 0 до 1, уможаем его на 100 и округляем до целого - ГЕНЕРАТОР СЛУЧАЙНОГО ЧИСЛА
      
    var user1 = prompt("Введите имя первого игрока");
    var user2 = prompt("Введите имя второго игрока");
    
    // alert(answer); показать загаданное компьютером число
    
    while (true) { // бесконечный цикл, выполяется до break

        var user1Answer = prompt(user1 + ", ведите число от 0 до 100. Для выхода нажмине q");
        var user2Answer = prompt(user2 + ", ведите число от 0 до 100. Для выхода нажмине q");
        if (user1Answer == "q") {
            break; // завершение цикла
        }
        user1Answer= parseInt(user1Answer);
        user2Answer= parseInt(user2Answer);
    
        if (user1Answer > answer) {
            alert(user1 + ", ваш ответ слишком большой");
            attemptCountuser1++;
        }
        else if (user1Answer < answer) {
            alert(user1 + ", ваш ответ слишком маленький");
            attemptCountuser1++;
        }
        else if (user1Answer == answer) {            
            alert(user1 + ", вы угадали! Победа ваша! Число ваших попыток: " + attemptCountuser1);
            break;
        }
        else {
             alert("Необходимо ввести число");
        }      
        
        if (user2Answer > answer) {
            alert(user2 + ", ваш ответ слишком большой");
            attemptCountuser2++;
        }
        else if (user2Answer < answer) {
            alert(user2 + ", ваш ответ слишком маленький");
            attemptCountuser2++;
        }
        else if (user2Answer == answer) {            
            alert(user2 + ", вы угадали! Победа ваша! Число ваших попыток: " + attemptCountuser2);
            break;
        }
        else {
             alert("Необходимо ввести число");
        } 
         
    }
    
     alert("Игра окончена");
    
}
