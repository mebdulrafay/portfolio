// ===================================
// Wait for DOM to be fully loaded
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // Navigation Functionality
    // ===================================
    
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
    
    // ===================================
    // Typing Animation Effect
    // ===================================
    
    const typedTextSpan = document.querySelector('.typed-text');
    const textArray = [
        'Web Developer',
        'Frontend Engineer',
        'UI/UX Designer',
        'Problem Solver',
        'Creative Thinker'
    ];
    const typingDelay = 100;
    const erasingDelay = 50;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) {
                textArrayIndex = 0;
            }
            setTimeout(type, typingDelay + 500);
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(type, newTextDelay + 250);
    
    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Scroll Reveal Animations
    // ===================================
    
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-fade, .reveal-scale');
        
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    }
    
    // Initial check on page load
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    // ===================================
    // Back to Top Button
    // ===================================
    
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===================================
    // Contact Form Handling
    // ===================================
    
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (name && email && subject && message) {
            // Here you would typically send the data to a server
            // For demo purposes, we'll just show an alert
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
    
    // ===================================
    // Navbar Background Change on Scroll
    // ===================================
    
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // ===================================
    // Project Card Hover Effect Enhancement
    // ===================================
    
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // ===================================
    // Skills Box Animation Enhancement
    // ===================================
    
    const skillBoxes = document.querySelectorAll('.skill-box');
    
    skillBoxes.forEach((box, index) => {
        // Add staggered animation delay
        box.style.animationDelay = `${index * 0.1}s`;
        
        // Add click effect
        box.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ===================================
    // Project Links Click Prevention (Demo)
    // ===================================
    
    // Allow project links to operate normally (removed demo prevention)
    
    // ===================================
    // Social Icons Animation
    // ===================================
    
    const socialIcons = document.querySelectorAll('.social-icon, .footer-icon');
    
    socialIcons.forEach(icon => {
        // Only add a subtle stagger to animations; allow real links to work
        const randomDelay = Math.random() * 2;
        icon.style.animationDelay = `${randomDelay}s`;
    });
    
    // ===================================
    // Parallax Effect for Featured Section
    // ===================================
    
    const featuredSection = document.querySelector('.featured-section');
    let parallaxEnabled = window.innerWidth > 992;

    function updateParallaxState() {
        parallaxEnabled = window.innerWidth > 992;
        if (!parallaxEnabled && featuredSection) {
            featuredSection.style.transform = '';
            featuredSection.style.opacity = '';
        }
    }

    updateParallaxState();
    window.addEventListener('resize', updateParallaxState);
    
    window.addEventListener('scroll', function() {
        if (!parallaxEnabled || !featuredSection) return;
        const scrolled = window.scrollY;
        
        if (scrolled < window.innerHeight) {
            featuredSection.style.transform = `translateY(${scrolled * 0.5}px)`;
            featuredSection.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
    
    // ===================================
    // Form Input Animation
    // ===================================
    
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'translateY(-2px)';
            this.style.borderColor = '#FFD301';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'translateY(0)';
            if (!this.value) {
                this.style.borderColor = '#F2F3F4';
            }
        });
    });
    
    // ===================================
    // Dynamic Year in Footer
    // ===================================
    
    const footerText = document.querySelector('.footer-text p');
    const currentYear = new Date().getFullYear();
    footerText.textContent = `© ${currentYear} Hafiz Abdul Rafay. All rights reserved.`;
    
    // ===================================
    // Loading Animation
    // ===================================
    
    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });
    
    // ===================================
    // Mouse Cursor Effect (Optional Enhancement)
    // ===================================
    
    // Create cursor followers for interactive buttons
    const interactiveElements = document.querySelectorAll('.btn, .project-card, .skill-box');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            document.body.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', function() {
            document.body.style.cursor = 'default';
        });
    });
    
    // ===================================
    // Viewport Height Fix for Mobile
    // ===================================
    
    function setVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setVH();
    window.addEventListener('resize', setVH);
    
    // ===================================
    // Intersection Observer for Better Performance
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all reveal elements
    document.querySelectorAll('.reveal-left, .reveal-right, .reveal-fade, .reveal-scale').forEach(element => {
        observer.observe(element);
    });
    
    // ===================================
    // Console Message
    // ===================================
    
    console.log('%c👋 Welcome to Hafiz Abdul Rafay\'s Portfolio!', 'color: #FFD301; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #174687; font-size: 14px;');
    console.log('%cFeel free to reach out! 🚀', 'color: #333; font-size: 14px;');
    
});

// ===================================
// Additional Utility Functions
// ===================================

// Debounce function for scroll performance
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Get scroll percentage
function getScrollPercentage() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const trackLength = documentHeight - windowHeight;
    return Math.floor((scrollTop / trackLength) * 100);
}

// ===================================
// Performance Optimization
// ===================================

// Preload critical images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
});

// ===================================
// Accessibility Enhancements
// ===================================

// Add keyboard navigation for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const link = this.querySelector('.project-link');
            if (link) link.click();
        }
    });
});

// Add aria-labels for better screen reader support
document.querySelectorAll('.social-icon, .footer-icon').forEach(icon => {
    const platform = icon.querySelector('i').className.split('fa-')[1];
    icon.setAttribute('aria-label', `Visit ${platform} profile`);
});

// ===================================
// End of Main JavaScript
// ===================================
