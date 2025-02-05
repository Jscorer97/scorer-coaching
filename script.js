// JavaScript for toggling the service descriptions
document.querySelectorAll('.toggle-description').forEach(button => {
  button.addEventListener('click', function() {
    const description = this.previousElementSibling;
    if (description.style.display === 'block') {
      description.style.display = 'none';
      this.textContent = 'Read More';
    } else {
      description.style.display = 'block';
      this.textContent = 'Read Less';
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  
  // FAQ toggle functionality
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling; // Get the next sibling element, which is the answer
      answer.classList.toggle('active'); // Toggle the 'active' class to show/hide the answer
    });
  });

  // Initialize Slick Carousel for testimonials
  $('.testimonials-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000
  });
});
let currentIndex = 0;
const carouselItems = document.querySelectorAll('.testimonial');
const carouselWrapper = document.querySelector('.testimonials-carousel');
const totalItems = carouselItems.length;

// Function to move the carousel
function moveCarousel() {
  carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first slide after the last one
  moveCarousel();
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last slide
  moveCarousel();
}

// Automatically move the carousel every 5 seconds
setInterval(nextSlide, 5000);

// Event listeners for the navigation buttons
document.querySelector('.carousel-next').addEventListener('click', nextSlide);
document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
