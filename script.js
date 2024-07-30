// script.js
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

// Change background color when hovering over menu items
document.querySelectorAll('.navbar a').forEach(item => {
  item.addEventListener('mouseover', () => {
      item.style.backgroundColor = '#555';
  });
  item.addEventListener('mouseout', () => {
      item.style.backgroundColor = '';
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Scroll to section function for the "Learn More" button
function scrollToSection(sectionId) {
  document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
  });
}
