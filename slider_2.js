let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

// Function to show a specific slide
function showSlide(index) {
    // Ensure index is within bounds
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    // Move the slider
    document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Event listeners for navigation buttons
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Optional: Automatic slider
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000); // Change slide every 5 seconds
