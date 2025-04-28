let currentIndex = 0;
 const images = document.querySelectorAll(".gallery-item"); 
 const modal = document.getElementById("modal"); 
 const modalImg = document.getElementById("modal-image");
 const closeBtn = document.querySelector(".close");
 const prevBtn = document.getElementById("prev"); 
 const nextBtn = document.getElementById("next");
function openModal(index) {
     currentIndex = index;
      modal.style.display = "flex"; 
      modalImg.src = images[currentIndex].src; }
function closeModal() { 
    modal.style.display = "none";
}
function changeImage(n) {
     currentIndex += n;
      if (currentIndex >= images.length) currentIndex = 0;
       if (currentIndex < 0) currentIndex = images.length - 1;
        modalImg.src = images[currentIndex].src; 
    }
images.forEach((img, index) => { img.addEventListener("click", () => openModal(index));

 });
closeBtn.addEventListener("click", closeModal);
 prevBtn.addEventListener("click", () => changeImage(-1));
  nextBtn.addEventListener("click", () => changeImage(1));
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });