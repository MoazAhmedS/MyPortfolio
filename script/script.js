 // Set current year
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Theme toggle
    function toggleDarkMode() {
      const isDark = document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
      
      // Toggle icon visibility
      document.getElementById('sun-icon').classList.toggle('hidden', isDark);
      document.getElementById('moon-icon').classList.toggle('hidden', !isDark);
      document.getElementById('mobile-sun-icon').classList.toggle('hidden', isDark);
      document.getElementById('mobile-moon-icon').classList.toggle('hidden', !isDark);
    }
    
    // Check for saved theme preference or use device preference
    function setInitialTheme() {
      const savedTheme = localStorage.getItem('darkMode');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        document.getElementById('sun-icon').classList.add('hidden');
        document.getElementById('moon-icon').classList.remove('hidden');
        document.getElementById('mobile-sun-icon').classList.add('hidden');
        document.getElementById('mobile-moon-icon').classList.remove('hidden');
      } else {
        document.getElementById('moon-icon').classList.add('hidden');
        document.getElementById('mobile-moon-icon').classList.add('hidden');
      }
    }
    
    // Set initial theme
    setInitialTheme();
    
    // Theme toggle event listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    document.getElementById('mobile-theme-toggle').addEventListener('click', toggleDarkMode);
    
    // Mobile menu functionality
    const mobileMenu = document.getElementById('mobile-menu');
    const menuContent = document.getElementById('menu-content');
    const menuBackdrop = document.getElementById('menu-backdrop');
    
    function openMobileMenu() {
      mobileMenu.style.visibility = 'visible';
      menuBackdrop.style.opacity = '1';
      menuContent.style.transform = 'translateY(0)';
      menuContent.style.opacity = '1';
      document.body.style.overflow = 'hidden';
    }
    
    function closeMobileMenu() {
      menuBackdrop.style.opacity = '0';
      menuContent.style.transform = 'translateY(-1rem)';
      menuContent.style.opacity = '0';
      
      // Delay the invisibility to allow for animation
      setTimeout(() => {
        mobileMenu.style.visibility = 'hidden';
        document.body.style.overflow = 'auto';
      }, 300);
    }
    
    document.getElementById('menu-open').addEventListener('click', openMobileMenu);
    document.getElementById('menu-close').addEventListener('click', closeMobileMenu);
    menuBackdrop.addEventListener('click', closeMobileMenu);
    
    // Close menu on link clicks
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });


// Handle click event for nav items
const navLinks = document.querySelectorAll('.nav-item');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    // Remove 'active' class from all links
    navLinks.forEach(link => link.classList.remove('active'));
    // Add 'active' class to the clicked link
    e.target.classList.add('active');
  });
});

// Handle scroll event to make active based on scroll position
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 100; // 100px offset for trigger point
    const sectionBottom = section.offsetTop + section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

