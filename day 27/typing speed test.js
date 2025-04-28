document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
        "The quick brown fox jumps over the lazy dog.",
        "Typing is a skill that improves with practice.",
        "JavaScript makes the web come alive.",
        "Consistency is the key to progress.",
        "Never stop learning and exploring new things."
    ];

    const quoteEl = document.getElementById("quote");
    const inputEl = document.getElementById("input");
    const wpmEl = document.getElementById("wpm");
    const errorEl = document.getElementById("errors");
    const restartBtn = document.getElementById("restart");
    const calculateBtn = document.getElementById("calculate"); // New button

    let startTime, endTime, timerStarted = false;
    let currentQuote = "";

    function loadQuote() {
        currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteEl.textContent = currentQuote;
        inputEl.value = "";
        wpmEl.textContent = "";
        errorEl.textContent = "";
        timerStarted = false;
    }

    function calculateResults() {
        if (!timerStarted) return; // Prevent calculation if the timer hasn't started

        endTime = new Date();
        const totalTime = (endTime - startTime) / 1000; // in seconds
        const wordsTyped = inputEl.value.trim().split(/\s+/).length;
        const wpm = Math.round((wordsTyped / totalTime) * 60);

        let errors = 0;
        const inputValue = inputEl.value;

        // Calculate errors
        for (let i = 0; i < Math.max(inputValue.length, currentQuote.length); i++) {
            if (inputValue[i] !== currentQuote[i]) errors++;
        }

        // Display results
        wpmEl.textContent = `Your speed: ${wpm} WPM`;
        errorEl.textContent = `Errors: ${errors}`;
    }

    inputEl.addEventListener("input", () => {
        if (!timerStarted) {
            startTime = new Date();
            timerStarted = true;
        }
    });

    calculateBtn.addEventListener("click", calculateResults); // Trigger results on button click
    restartBtn.addEventListener("click", loadQuote);

    // Initial quote load
    loadQuote();
});