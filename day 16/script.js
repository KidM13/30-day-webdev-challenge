let slideindex=0;
let slides=0;
document.querySelectorAll(".slide-fade");
function showslides(){
    if(slides.length===0)return;
    slides.forEach(slide=> slide.style.display="none");
    slideindex++;
    if(slideindex>slides.length){
        slideindex=1;
    }
    slides[slideindex -1].style.display="block";
    setTimeout(showslides,3000);//change image every 3 sec
}
    //manual navigation
    function changeSlide(n){
        slideindex+=n;
        if(slideindex>slides.length)
            slideindex=1;
        if(slideindex<1)
            slideindex=slides.length;
        slides.forEach(slide=>slide.style.display="none");
        slides[slideindex -1].style.display="block";
}
        window.onload=function()  {
            slides=document.querySelectorAll(".slide-fade");
            console.log("slides loaded:",slides.length)
            if(slides.length>0)
            showslides();
        };
//start slideshow on load
console.log(slides.length);
console.log("slides found:",slides.length)
