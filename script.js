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
