document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById('mobile-menu')
  const navMenu = document.querySelector('.nav-menu')

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })
  }

  // Basic Contact Form Handler
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      alert(
        'Thank you for reaching out! We will respond to your query shortly.',
      )
      contactForm.reset()
    })
  }
})
