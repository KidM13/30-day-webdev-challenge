document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-img");
    const thumbnails = document.querySelectorAll(".thumbnail"); // Fixed selector

    thumbnails.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src; // Set the lightbox image source
            lightbox.style.display = "flex"; // Show the lightbox
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none"; // Hide the lightbox on click
    });
});