const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let currentIndex = 0;
const galleryImage = document.getElementById("galleryImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
});