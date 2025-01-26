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
    autoplay: true,
    autoplaySpeed: 3000
  });
});
