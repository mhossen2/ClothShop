document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById('mobile-menu')
  const navMenu = document.querySelector('.nav-menu')

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active')
    })
  }

  // Product Category Filter
  const filterBtns = document.querySelectorAll('.filter-btn')
  const productCards = document.querySelectorAll('.product-card')

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove('active'))
      // Add active class to clicked button
      btn.classList.add('active')

      const filterValue = btn.getAttribute('data-filter')

      productCards.forEach((card) => {
        const category = card.getAttribute('data-category')
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex'
        } else {
          card.style.display = 'none'
        }
      })
    })
  })

  // Basic Contact Form Submission Handler
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault()
      alert('Thank you for your message! We will get back to you shortly.')
      contactForm.reset()
    })
  }
})
