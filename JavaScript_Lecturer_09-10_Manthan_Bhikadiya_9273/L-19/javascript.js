const hiddenNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

document.getElementById("check-btn").addEventListener("click", handleGuess);

function handleGuess() {
    const input = document.getElementById("user-input");
    const guess = Number(input.value);
    const message = document.getElementById("feedback");
    const attempts = document.getElementById("try-count");

    if (!guess || guess < 1 || guess > 100) {
        message.textContent = "Please enter a valid number (1-100)";
        return;
    }

    tries++;

    if (guess === hiddenNumber) {
        message.textContent = "You guessed it! Well done!";
        attempts.textContent = `Attempts taken: ${tries}`;
        input.disabled = true;
        document.getElementById("check-btn").disabled = true;
    } else if (guess < hiddenNumber) {
        message.textContent = "Try a higher number.";
    } else {
        message.textContent = "Try a lower number.";
    }

    input.value = "";
    input.focus();
}
