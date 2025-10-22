/**
 * Main JavaScript file for Burnout Support Website
 * Handles scroll reveal animations, tab switching, and back-to-top functionality
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollReveal();
    initTabSwitching();
    initBackToTop();
    initSmoothScrolling();
    initAccessibility();
});

/**
 * Initialize scroll reveal animations for sections
 */
function initScrollReveal() {
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all content sections
    const sections = document.querySelectorAll('.content-section, .fact-card, .symptom-category, .effect-category');
    sections.forEach(section => {
        observer.observe(section);
    });
}

/**
 * Initialize tab switching functionality for deal.html
 */
function initTabSwitching() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    const strategyContents = document.querySelectorAll('.strategy-content');

    if (categoryTabs.length === 0) return; // Only run on deal.html

    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCategory = this.getAttribute('data-category');
            
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all strategy contents
            strategyContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show target strategy content
            const targetContent = document.getElementById(`${targetCategory}-strategies`);
            if (targetContent) {
                // Small delay for smooth transition
                setTimeout(() => {
                    targetContent.classList.add('active');
                }, 50);
            }
        });

        // Handle keyboard navigation
        tab.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

/**
 * Initialize back to top button functionality
 */
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return; // Only run on learn.html

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Handle keyboard navigation
    backToTopBtn.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
}

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    // Handle internal anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update URL without triggering scroll
                history.pushState(null, null, `#${targetId}`);
            }
        });
    });
}

/**
 * Initialize accessibility enhancements
 */
function initAccessibility() {
    // Add skip link functionality
    createSkipLink();
    
    // Enhance focus management
    enhanceFocusManagement();
    
    // Add ARIA labels where needed
    addAriaLabels();
    
    // Handle reduced motion preference
    handleReducedMotion();
}

/**
 * Create skip link for keyboard navigation
 */
function createSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    document.body.insertBefore(skipLink, document.body.firstChild);
}

/**
 * Enhance focus management for better keyboard navigation
 */
function enhanceFocusManagement() {
    // Add focus trap for modal-like elements (if any)
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    // Improve focus visibility
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
}

/**
 * Add ARIA labels and roles for better screen reader support
 */
function addAriaLabels() {
    // Add ARIA labels to category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach((tab, index) => {
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', tab.classList.contains('active'));
        tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
    });
    
    // Add ARIA labels to strategy contents
    const strategyContents = document.querySelectorAll('.strategy-content');
    strategyContents.forEach((content, index) => {
        content.setAttribute('role', 'tabpanel');
        content.setAttribute('aria-labelledby', `tab-${index}`);
    });
    
    // Add ARIA label to back to top button
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn && !backToTopBtn.getAttribute('aria-label')) {
        backToTopBtn.setAttribute('aria-label', 'Back to top');
    }
}

/**
 * Handle reduced motion preference
 */
function handleReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    function handleMotionChange() {
        if (prefersReducedMotion.matches) {
            // Disable animations
            document.documentElement.style.setProperty('--timing-fast', '0s');
            document.documentElement.style.setProperty('--timing-normal', '0s');
            document.documentElement.style.setProperty('--timing-slow', '0s');
        } else {
            // Re-enable animations
            document.documentElement.style.setProperty('--timing-fast', '0.15s');
            document.documentElement.style.setProperty('--timing-normal', '0.3s');
            document.documentElement.style.setProperty('--timing-slow', '0.5s');
        }
    }
    
    // Apply initial setting
    handleMotionChange();
    
    // Listen for changes
    prefersReducedMotion.addEventListener('change', handleMotionChange);
}

/**
 * Utility function to debounce function calls
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Utility function to throttle function calls
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Initialize error handling for better user experience
 */
function initErrorHandling() {
    // Handle JavaScript errors gracefully
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
        // Could send to analytics or show user-friendly message
    });
    
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
        // Could send to analytics or show user-friendly message
    });
}

// Initialize error handling
initErrorHandling();

/**
 * Performance optimization: Lazy load images when they're added
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        // Observe all images with data-src attribute
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize lazy loading
initLazyLoading();

/**
 * Initialize analytics tracking (placeholder for future implementation)
 */
function initAnalytics() {
    // Placeholder for analytics tracking
    // Could integrate with Google Analytics, etc.
    
    // Track page views
    function trackPageView() {
        // Implementation would go here
        console.log('Page view tracked:', window.location.pathname);
    }
    
    // Track button clicks
    function trackButtonClick(buttonText) {
        // Implementation would go here
        console.log('Button clicked:', buttonText);
    }
    
    // Add click tracking to buttons
    document.querySelectorAll('.btn, .category-tab, .nav-link').forEach(button => {
        button.addEventListener('click', function() {
            trackButtonClick(this.textContent.trim());
        });
    });
    
    // Track initial page view
    trackPageView();
}

// Initialize analytics
initAnalytics();