document.addEventListener("DOMContentLoaded",()=>{
    const questions=document.querySelectorAll(".faq-question");
    questions.forEach(quetsion=>{
quetsion.addEventListener("click",()=>{
const answer=quetsion.nextElementSibling;
if(!answer||!answer.classList.contains("faq-answer"))
    return;
//
//close all answers except the clicked one
document.querySelector(".faq-answer").forEach(ans=>{
    if(ans!==answer){
        ans.style.display="none";
    }
});

//toggle the clicked answer
answer.style.display=answer.style.display==="block"?
"none":"block";
    });
});
});