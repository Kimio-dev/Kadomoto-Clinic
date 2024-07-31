
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNavbar');
    const navbarCollapse = document.getElementById('navbarNav');
    const elements = document.querySelectorAll('.animate-on-scroll');

    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    function handleNavbarToggle() {
        if (navbarCollapse.classList.contains('show')) {
            navbar.classList.add('navbar-expanded');
        } else {
            navbar.classList.remove('navbar-expanded');
        }
    }
    
    window.addEventListener('scroll', handleScroll);


    navbarCollapse.addEventListener('shown.bs.collapse', handleNavbarToggle);
    navbarCollapse.addEventListener('hidden.bs.collapse', handleNavbarToggle);
    
    const callback = function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      };
  
      const observer = new IntersectionObserver(callback, {
        threshold: 0.1
      });
  
      elements.forEach(element => {
        observer.observe(element);
      });

    
});

(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

function updateYears() {
  const startYear = 1992; // 18歳で治療の道に入った年
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear + 1; // +1は18歳からカウントするため

  document.getElementById('years').textContent = years;
}
window.onload = updateYears;


 

