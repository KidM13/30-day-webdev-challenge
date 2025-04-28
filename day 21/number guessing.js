document.addEventListener("DOMContentLoaded", () => {
    const guessInput = document.getElementById("guessInput");
    const checkBtn = document.getElementById("checkBtn");
    const resetBtn = document.getElementById("resetBtn");
    const message = document.getElementById("message");

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    checkBtn.addEventListener("click", () => {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess)) {
            message.textContent = "Please enter a number!";
        } else if (guess < 1 || guess > 100) {
            message.textContent = "Please enter a number between 1 and 100!";
        } else if (guess === randomNumber) {
            message.textContent = "Congratulations! You guessed the number!";
            message.style.color = "green";
        } else if (guess < randomNumber) {
            message.textContent = "Too low! Try again.";
            message.style.color = "red";
        } else if (guess > randomNumber) {
            message.textContent = "Too high! Try again.";
            message.style.color = "red";
        }
    });

    resetBtn.addEventListener("click", () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        message.textContent = "";
        guessInput.value = "";
        message.style.color = "black";
    });
});