// D:\bittorrent\[FreeTutorials.Us] Udemy - the-complete-javascript-course\05 Advanced JavaScript_ Objects and Functions
// 061 Coding Challenge 4.mp4
// 062 Coding Challenge 4_ Solution_ Part 1.mp4
// 063 Coding Challenge 4_ Solution_ Part 2.mp4 (score part)

/*
    1. Build a function constructor called Question to describe a question.
       A question should include:
          a) question itself
          b) the answer from which the player can choose the correct one 
             (choose an adequade data structure here, array, object, etc.)
          c) correct answer (I would use a number for this)
    
    2. Create a couple of questions using the constructor

    3. Store them all inside an array

    4. Select one random question and log it on the console, together with
       the possible answers (each question should have a number) (Hint: write
       a method for the Question objects for this task)
    
    5. Use the 'prompt' function to ask the user for the correct answer. 
       The user should input the number of the correct answer such as you
       displayed it on Task 4.

    6. Check if the answer is correct and print to the console whether the 
       answer is correct or not (Hint: write another method for this)
    
    7. Suppose this code would be a plugin for other programmers to use in their code.
       So make sure that all your code is private and doesn't interfere with
       the other programmers code. (Hint: we learned a special technique to do
       exactly that).
    
    8. After you display the result, display the next random question, so
       that the game never ends (Hint: write a function for this and call it
       right after displaying the result).
    
    9. Be careful: after Task 8, the game literally never ends. So include the
       option to quit the game if the user writes 'exit' instead of the answer.
       In this case, DON'T call the function from Task 8.
    
    10. Display the score in the console. Use yet another method for this.
    ...
*/

(function () {

    function Question(question, answers, correctAnswer) {
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    };

    Question.prototype.show = function () {
        console.log(' ');
        console.log(this.question);

        for (let index = 0; index < this.answers.length; index++) {
            console.log(index + ':' + this.answers[index]);
        }
    }

    Question.prototype.checkCorrectAnswer = function (userAnswer, callback) {
        let sc = 0;
        if (userAnswer == this.correctAnswer) {
            console.log('Correct answer! CONGRATULATIONS!!!');
            sc = callback(true);
        } else {
            console.log('Hey man! Try again...');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('==============================');
        console.log('Your score: ' + score);
        console.log('==============================');
    }

    function questionsFactory() {
        let questions = [];
        
        questions.push(new Question('Qual o seu nome?', ['Pablo', 'José', 'Maria'], 0));
        questions.push(new Question('Qual o sua idade?', [28, 13, 39], 2));
        questions.push(new Question('Quantos BTC?', [7, 1, 3], 1));

        return questions;
    }

    function pickAQuestion(arrayQuestions) {
        let questions = questionsFactory();
        let questionRandom = Math.floor(Math.random() * questions.length);
        return questions[questionRandom];
    }

    function score() {
        let sc = 0;
        return function incrementScore(isCorrect) {
            if(isCorrect) {
                sc++;
            }
            return sc;
        }
    }

    keepScore = score();

    function nextQuestion() {
        let chooseQuestion = pickAQuestion();

        chooseQuestion.show();
        let userAnswer = prompt(chooseQuestion.question);

        if (userAnswer !== 'exit') {
            chooseQuestion.checkCorrectAnswer(userAnswer, keepScore);
            nextQuestion();
        }
    }

    nextQuestion();

})();
