document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".question");
  
    questions.forEach((question) => {
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
  
        // Toggle visibility
        answer.style.display = answer.style.display === "block" ? "none" : "block";
  
        // Optional: Close others
        questions.forEach((q) => {
          if (q !== question) {
            q.nextElementSibling.style.display = "none";
          }
        });
      });
    });
  });
  