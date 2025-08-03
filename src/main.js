// ============================================================================
// ADS Landing Page JavaScript
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initProductTabs();
  initSmoothScrolling();
  initMobileNavigation();
  
  console.log('ADS Landing Page initialized');
});

// ============================================================================
// PRODUCT TABS FUNCTIONALITY
// ============================================================================

function initProductTabs() {
  const tabs = document.querySelectorAll('.tab');
  const products = document.querySelectorAll('.product');
  
  if (!tabs.length || !products.length) return;
  
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetProduct = this.dataset.tab;
      
      // Remove active class from all tabs and products
      tabs.forEach(t => t.classList.remove('tab--active'));
      products.forEach(p => p.classList.remove('product--active'));
      
      // Add active class to clicked tab
      this.classList.add('tab--active');
      
      // Show corresponding product
      const targetProductElement = document.querySelector(`[data-product="${targetProduct}"]`);
      if (targetProductElement) {
        targetProductElement.classList.add('product--active');
      }
      
      // Update ARIA attributes for accessibility
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      this.setAttribute('aria-selected', 'true');
    });
  });
  
  // Set initial ARIA attributes
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    tab.setAttribute('tabindex', index === 0 ? '0' : '-1');
  });
  
  // Add keyboard navigation
  const tabContainer = document.querySelector('.products__tabs');
  if (tabContainer) {
    tabContainer.setAttribute('role', 'tablist');
    
    tabContainer.addEventListener('keydown', function(e) {
      const currentTab = document.activeElement;
      if (!currentTab.classList.contains('tab')) return;
      
      const currentIndex = Array.from(tabs).indexOf(currentTab);
      let nextIndex;
      
      switch(e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          nextIndex = currentIndex > 0 ? currentIndex - 1 : tabs.length - 1;
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextIndex = currentIndex < tabs.length - 1 ? currentIndex + 1 : 0;
          break;
        case 'Home':
          e.preventDefault();
          nextIndex = 0;
          break;
        case 'End':
          e.preventDefault();
          nextIndex = tabs.length - 1;
          break;
        default:
          return;
      }
      
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    });
  }
}

// ============================================================================
// SMOOTH SCROLLING
// ============================================================================

function initSmoothScrolling() {
  // Handle navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#" or empty
      if (!href || href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;
      
      e.preventDefault();
      
      // Calculate offset for fixed navigation
      const navHeight = document.querySelector('.nav')?.offsetHeight || 0;
      const targetPosition = targetElement.offsetTop - navHeight - 20;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      // Update URL without jumping
      history.pushState(null, null, href);
    });
  });
}

// ============================================================================
// MOBILE NAVIGATION (for future enhancement)
// ============================================================================

function initMobileNavigation() {
  // Placeholder for mobile menu functionality
  // Could be enhanced with a hamburger menu for mobile devices
  
  // Handle scroll behavior for navigation
  let lastScrollTop = 0;
  const nav = document.querySelector('.nav');
  
  if (!nav) return;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove shadow based on scroll position
    if (scrollTop > 0) {
      nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
    } else {
      nav.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
  }, { passive: true });
}

// ============================================================================
// FORM HANDLING (for testimonial form)
// ============================================================================

function initFormHandling() {
  // This would handle any custom form submission logic
  // Currently using embedded Google Form, so this is a placeholder
  
  const form = document.querySelector('#testimonial-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    // Custom form handling logic could go here
    console.log('Form submitted');
  });
}

// ============================================================================
// ANALYTICS & TRACKING (placeholder)
// ============================================================================

function trackEvent(eventName, eventData = {}) {
  // Placeholder for analytics tracking
  console.log('Event tracked:', eventName, eventData);
  
  // Example: Google Analytics 4 event tracking
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, eventData);
  }
}

// Track important interactions
document.addEventListener('click', function(e) {
  const target = e.target;
  
  // Track CTA button clicks
  if (target.matches('.btn--primary')) {
    trackEvent('cta_click', {
      button_text: target.textContent.trim(),
      button_location: target.closest('section')?.id || 'unknown'
    });
  }
  
  // Track product tab interactions
  if (target.matches('.tab')) {
    trackEvent('product_tab_click', {
      tab_name: target.dataset.tab
    });
  }
  
  // Track external link clicks
  if (target.matches('a[href^="mailto:"]')) {
    trackEvent('email_click', {
      email_type: target.href.includes('subject=') ? 'templated' : 'direct'
    });
  }
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

// Debounce function for scroll events
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

// Animate elements on scroll (optional enhancement)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements that should animate in
  const animatableElements = document.querySelectorAll('.impact__card, .product, .help__column');
  animatableElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations if supported
if ('IntersectionObserver' in window) {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
}
