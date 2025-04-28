document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      "Believe in yourself.",
      "Stay hungry. Stay foolish.",
      "Dream big and dare to fail.",
      "Success is not final, failure is not fatal.",
      "Work hard in silence, let your success make the noise.",
      "Don't watch the clock; do what it does. Keep going.",
      "Great things never come from comfort zones."
    ];
  
    const quoteEl = document.getElementById('quote');
    const newQuoteBtn = document.getElementById('new-quote');
  
    newQuoteBtn.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteEl.textContent = quotes[randomIndex];
    });
  });
  