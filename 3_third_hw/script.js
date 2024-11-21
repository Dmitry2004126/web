const submitButton = document.getElementById("submitButton");
const messageElement = document.getElementById("message");
const guessInput = document.getElementById("guess");

let numberToGuess = Math.floor(Math.random() * 100) + 1;

function isValidGuess(guess) {
    return !isNaN(parseInt(guess)) && parseInt(guess) >= 1 && parseInt(guess) <= 100;
}

function checkGuess() {
    if (isValidGuess(guessInput.value)) {
        if (parseInt(guessInput.value) === numberToGuess) {
            alert("Вы угадали!");
            guessInput.value = "";
        } else {
            messageElement.innerText = `Ваш ответ слишком высокий/низкий. Попробуйте еще раз.${(numberToGuess)}`;
        }
    } else {
        messageElement.innerText = "Неверный формат числа. Пожалуйста, попробуйте снова.";
    }
}

submitButton.addEventListener("click", checkGuess);