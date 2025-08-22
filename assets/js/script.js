// Navigation Bar JavaScript - Mobile Menu Functionality

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile menu elements
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileSidebar = document.getElementById('mobile-sidebar');
    const closeSidebar = document.getElementById('close-sidebar');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    
    // State variable
    let isMenuOpen = false;
    
    /**
     * Open mobile sidebar menu
     * - Shows overlay with blur effect
     * - Slides in sidebar from right
     * - Changes hamburger to X icon
     * - Prevents body scroll
     */
    function openMobileMenu() {
        if (isMenuOpen) return;
        
        console.log('Opening mobile menu...'); // Debug log
        
        // Show and animate overlay
        overlay.classList.remove('hidden');
        // Force reflow to ensure transition works
        void overlay.offsetHeight;
        overlay.classList.add('show');
        
        // Slide in sidebar - directly set transform
        mobileSidebar.style.transform = 'translateX(0)';
        mobileSidebar.classList.add('active');
        
        // Transform hamburger to X
        mobileMenuBtn.classList.add('active');
        
        // Prevent body scroll
        body.style.overflow = 'hidden';
        
        // Update state
        isMenuOpen = true;
        
        // Add click outside to close functionality
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    }
    
    /**
     * Close mobile sidebar menu
     * - Hides overlay with fade effect
     * - Slides out sidebar to right
     * - Changes X back to hamburger icon
     * - Restores body scroll
     */
    function closeMobileMenu() {
        if (!isMenuOpen) return;
        
        console.log('Closing mobile menu...'); // Debug log
        
        // Fade out overlay
        overlay.classList.remove('show');
        
        // Slide out sidebar - directly set transform
        mobileSidebar.style.transform = 'translateX(100%)';
        mobileSidebar.classList.remove('active');
        
        // Transform X back to hamburger
        mobileMenuBtn.classList.remove('active');
        
        // Restore body scroll
        body.style.overflow = '';
        
        // Update state
        isMenuOpen = false;
        
        // Remove click outside listener
        document.removeEventListener('click', handleClickOutside);
        
        // Hide overlay after animation completes
        setTimeout(() => {
            overlay.classList.add('hidden');
        }, 300);
        
        // Close all dropdowns when menu closes
        closeAllDropdowns();
    }
    
    /**
     * Toggle mobile menu
     */
    function toggleMobileMenu() {
        if (isMenuOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }
    
    /**
     * Handle click outside sidebar
     */
    function handleClickOutside(e) {
        if (!mobileSidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    }
    
    /**
     * Initialize mobile dropdown functionality
     * - Toggles dropdown content visibility
     * - Rotates arrow icon
     * - Closes other dropdowns when opening new one
     */
    function initializeMobileDropdowns() {
        const dropdowns = document.querySelectorAll('.mobile-dropdown');
        
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.mobile-dropdown-trigger');
            const content = dropdown.querySelector('.mobile-dropdown-content');
            const arrow = dropdown.querySelector('.mobile-arrow');
            
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const isOpen = content.classList.contains('show');
                
                // Close all other dropdowns first
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherContent = otherDropdown.querySelector('.mobile-dropdown-content');
                        otherContent.classList.remove('show');
                        otherDropdown.classList.remove('active');
                    }
                });
                
                // Toggle current dropdown
                if (isOpen) {
                    // Close dropdown
                    content.classList.remove('show');
                    dropdown.classList.remove('active');
                } else {
                    // Open dropdown
                    content.classList.add('show');
                    dropdown.classList.add('active');
                }
            });
            
            // Prevent closing menu when clicking dropdown links
            const dropdownLinks = content.querySelectorAll('a');
            dropdownLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // Optionally close menu after selecting item
                    // closeMobileMenu();
                });
            });
        });
    }
    
    /**
     * Close all dropdown menus
     */
    function closeAllDropdowns() {
        const dropdowns = document.querySelectorAll('.mobile-dropdown');
        dropdowns.forEach(dropdown => {
            const content = dropdown.querySelector('.mobile-dropdown-content');
            content.classList.remove('show');
            dropdown.classList.remove('active');
        });
    }
    
    /**
     * Initialize scroll effect for navbar
     */
    function initializeScrollEffect() {
        const nav = document.querySelector('nav');
        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add shadow when scrolled
            if (scrollTop > 10) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
            
            // Hide menu on scroll (optional)
            if (scrollTop > lastScrollTop && scrollTop > 100 && isMenuOpen) {
                closeMobileMenu();
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }
    
    /**
     * Handle window resize
     */
    function handleResize() {
        // Close mobile menu if resizing to desktop
        if (window.innerWidth >= 768 && isMenuOpen) {
            closeMobileMenu();
        }
    }
    
    /**
     * Initialize touch gestures for mobile
     */
    function initializeTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        document.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        document.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
        
        function handleSwipe() {
            const swipeThreshold = 100;
            const diff = touchEndX - touchStartX;
            
            // Swipe left to open menu (from right edge)
            if (diff < -swipeThreshold && touchStartX > window.innerWidth - 50 && !isMenuOpen) {
                openMobileMenu();
            }
            
            // Swipe right to close menu
            if (diff > swipeThreshold && isMenuOpen) {
                closeMobileMenu();
            }
        }
    }
    
    /**
     * Initialize keyboard navigation
     */
    function initializeKeyboardNav() {
        document.addEventListener('keydown', function(e) {
            // Close menu with Escape key
            if (e.key === 'Escape' && isMenuOpen) {
                closeMobileMenu();
            }
        });
    }
    
    /**
     * Initialize language selector
     */
    function initializeLanguageSelector() {
        const langOptions = document.querySelectorAll('.mobile-dropdown-content a');
        
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                const dropdown = this.closest('.mobile-dropdown');
                if (dropdown && dropdown.querySelector('.fa-globe')) {
                    e.preventDefault();
                    
                    const selectedLang = this.textContent.trim();
                    
                    // Show notification
                    showNotification(`Language changed to ${selectedLang}`);
                    
                    // Close menu after selection (optional)
                    setTimeout(() => {
                        closeMobileMenu();
                    }, 500);
                }
            });
        });
    }
    
    /**
     * Show notification message
     */
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed bottom-4 right-4 bg-[#171717] text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-y-full transition-transform duration-300';
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
        }, 10);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateY(100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Event Listeners
    mobileMenuBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Hamburger menu clicked!'); // Debug log
        toggleMobileMenu();
    });
    
    closeSidebar.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        closeMobileMenu();
    });
    
    overlay.addEventListener('click', function(e) {
        e.preventDefault();
        closeMobileMenu();
    });
    
    // Handle resize events with debounce
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(handleResize, 250);
    });
    
    // Initialize all components
    initializeMobileDropdowns();
    initializeScrollEffect();
    initializeTouchGestures();
    initializeKeyboardNav();
    initializeLanguageSelector();
    
    // Prevent menu items from closing sidebar when clicked
    const menuLinks = mobileSidebar.querySelectorAll('a:not(.mobile-dropdown-content a)');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Optional: Close menu after clicking a link
            closeMobileMenu();
        });
    });
    
    // console.log('Mobile navigation initialized successfully!');
});

/**
 * Multi-Layer Parallax Scrolling Effect
 * Each layer moves at different speed creating depth
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // PARALLAX CONTROLLER CLASS
    // ========================================
    class MultiLayerParallax {
        constructor() {
            this.layers = [];
            this.scrollY = 0;
            this.ticking = false;
            this.smoothingFactor = 0.08; // Smoothing for all layers
            
            this.init();
        }
        
        /**
         * Initialize parallax system
         */
        init() {
            // Find all elements with data-parallax-speed attribute
            const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
            
            parallaxElements.forEach(element => {
                const speed = parseFloat(element.dataset.parallaxSpeed) || 0.5;
                
                // Store layer information
                this.layers.push({
                    element: element,
                    speed: speed,
                    currentY: 0,
                    targetY: 0,
                    originalPosition: this.getOriginalPosition(element)
                });
            });
            
            // Only proceed if we have layers to animate
            if (this.layers.length > 0) {
                this.bindEvents();
                this.startAnimation();
            }
            
            // Remove loading class after initialization
            setTimeout(() => {
                document.body.classList.remove('loading');
                document.body.classList.add('loaded');
            }, 100);
        }
        
        /**
         * Get original position of element
         */
        getOriginalPosition(element) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return rect.top + scrollTop;
        }
        
        /**
         * Bind scroll and resize events
         */
        bindEvents() {
            // Optimized scroll handler with passive listener
            window.addEventListener('scroll', () => {
                this.scrollY = window.pageYOffset;
                this.updateParallax();
            }, { passive: true });
            
            // Handle window resize
            window.addEventListener('resize', () => {
                this.handleResize();
            });
        }
        
        /**
         * Update parallax positions
         */
        updateParallax() {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.calculatePositions();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        }
        
        /**
         * Calculate target positions for each layer
         */
        calculatePositions() {
            const windowHeight = window.innerHeight;
            
            this.layers.forEach(layer => {
                const { element, speed } = layer;
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + this.scrollY;
                const elementHeight = element.offsetHeight;
                
                // Check if element is in viewport (with buffer)
                const isInViewport = (
                    elementTop < this.scrollY + windowHeight * 1.5 &&
                    elementTop + elementHeight > this.scrollY - windowHeight * 0.5
                );
                
                if (isInViewport) {
                    // Calculate parallax offset
                    // Different speeds create the parallax effect
                    layer.targetY = -(this.scrollY * (1 - speed));
                }
            });
        }
        
        /**
         * Smooth animation loop
         */
        startAnimation() {
            const animate = () => {
                this.layers.forEach(layer => {
                    // Smooth interpolation (lerp) for each layer
                    const diff = layer.targetY - layer.currentY;
                    
                    // Only update if difference is significant
                    if (Math.abs(diff) > 0.1) {
                        layer.currentY += diff * this.smoothingFactor;
                        
                        // Apply transform with hardware acceleration
                        layer.element.style.transform = `translate3d(0, ${layer.currentY}px, 0)`;
                    }
                });
                
                // Continue animation loop
                requestAnimationFrame(animate);
            };
            
            animate();
        }
        
        /**
         * Handle window resize
         */
        handleResize() {
            // Recalculate original positions
            this.layers.forEach(layer => {
                layer.originalPosition = this.getOriginalPosition(layer.element);
            });
            
            // Update parallax
            this.updateParallax();
        }
    }
    
    // ========================================
    // SMOOTH SCROLL FOR BUTTONS
    // ========================================
    class SmoothScroll {
        constructor() {
            this.init();
        }
        
        init() {
            // Add smooth scrolling to all buttons and links
            const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, a[href^="#"]');
            
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    // Check if it's a hash link
                    const href = button.getAttribute('href');
                    if (href && href.startsWith('#')) {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            this.scrollToElement(target);
                        }
                    } else if (button.classList.contains('btn-primary')) {
                        // Scroll to blog posts section
                        e.preventDefault();
                        const blogSection = document.querySelector('section[data-parallax-speed="1"]');
                        if (blogSection) {
                            this.scrollToElement(blogSection);
                        }
                    } else if (button.classList.contains('btn-secondary')) {
                        // Scroll to about section
                        e.preventDefault();
                        const aboutSection = document.querySelector('section:last-of-type');
                        if (aboutSection) {
                            this.scrollToElement(aboutSection);
                        }
                    }
                });
            });
        }
        
        /**
         * Smooth scroll to element with easing
         */
        scrollToElement(element) {
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1000; // 1 second
            let start = null;
            
            const animation = (currentTime) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const progress = Math.min(timeElapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeInOutCubic = progress < 0.5
                    ? 4 * progress * progress * progress
                    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                
                window.scrollTo(0, startPosition + distance * easeInOutCubic);
                
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };
            
            requestAnimationFrame(animation);
        }
    }
    
    // ========================================
    // REVEAL ANIMATIONS ON SCROLL
    // ========================================
    class ScrollReveal {
        constructor() {
            this.animatedElements = [];
            this.init();
        }
        
        init() {
            // Select all cards and articles
            const cards = document.querySelectorAll('.blog-card, .article-card');
            
            cards.forEach((card, index) => {
                // Add staggered delay based on index
                card.style.transitionDelay = `${index * 0.1}s`;
                this.animatedElements.push(card);
            });
            
            // Create intersection observer
            this.createObserver();
            
            // Check initial visibility
            this.checkVisibility();
        }
        
        createObserver() {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Stop observing once animated
                        this.observer.unobserve(entry.target);
                    }
                });
            }, options);
            
            // Observe all animated elements
            this.animatedElements.forEach(element => {
                this.observer.observe(element);
            });
        }
        
        checkVisibility() {
            this.animatedElements.forEach(element => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                
                if (isVisible) {
                    element.classList.add('visible');
                    this.observer.unobserve(element);
                }
            });
        }
    }
    
    // ========================================
    // PERFORMANCE MONITOR
    // ========================================
    class PerformanceMonitor {
        constructor() {
            this.fps = 60;
            this.lastFrameTime = performance.now();
            this.frameTimes = [];
            this.maxSamples = 60;
            
            if (window.location.hash === '#debug') {
                this.showDebugInfo();
            }
        }
        
        /**
         * Monitor FPS for performance optimization
         */
        measureFPS() {
            const now = performance.now();
            const delta = now - this.lastFrameTime;
            this.lastFrameTime = now;
            
            this.frameTimes.push(delta);
            if (this.frameTimes.length > this.maxSamples) {
                this.frameTimes.shift();
            }
            
            const averageFrameTime = this.frameTimes.reduce((a, b) => a + b) / this.frameTimes.length;
            this.fps = Math.round(1000 / averageFrameTime);
            
            requestAnimationFrame(() => this.measureFPS());
        }
        
        /**
         * Show debug information
         */
        showDebugInfo() {
            const debugPanel = document.createElement('div');
            debugPanel.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px;
                font-family: monospace;
                font-size: 12px;
                z-index: 9999;
                border-radius: 5px;
            `;
            document.body.appendChild(debugPanel);
            
            this.measureFPS();
            
            setInterval(() => {
                debugPanel.innerHTML = `
                    FPS: ${this.fps}<br>
                    Scroll: ${Math.round(window.pageYOffset)}px<br>
                    Viewport: ${window.innerWidth}x${window.innerHeight}
                `;
            }, 100);
        }
    }
    
    // ========================================
    // RESPONSIVE HANDLER
    // ========================================
    class ResponsiveHandler {
        constructor() {
            this.breakpoints = {
                mobile: 480,
                tablet: 768,
                desktop: 1024,
                wide: 1440
            };
            
            this.currentBreakpoint = this.getBreakpoint();
            this.init();
        }
        
        init() {
            window.addEventListener('resize', () => {
                const newBreakpoint = this.getBreakpoint();
                if (newBreakpoint !== this.currentBreakpoint) {
                    this.currentBreakpoint = newBreakpoint;
                    this.handleBreakpointChange();
                }
            });
        }
        
        getBreakpoint() {
            const width = window.innerWidth;
            if (width <= this.breakpoints.mobile) return 'mobile';
            if (width <= this.breakpoints.tablet) return 'tablet';
            if (width <= this.breakpoints.desktop) return 'desktop';
            return 'wide';
        }
        
        handleBreakpointChange() {
            // Adjust parallax speeds for different screen sizes
            const parallaxLayers = document.querySelectorAll('[data-parallax-speed]');
            
            parallaxLayers.forEach(layer => {
                const baseSpeed = parseFloat(layer.dataset.parallaxSpeed);
                let adjustedSpeed = baseSpeed;
                
                // Reduce parallax effect on smaller screens
                if (this.currentBreakpoint === 'mobile') {
                    adjustedSpeed = baseSpeed * 0.5;
                } else if (this.currentBreakpoint === 'tablet') {
                    adjustedSpeed = baseSpeed * 0.75;
                }
                
                // Update the speed
                layer.dataset.parallaxSpeed = adjustedSpeed;
            });
            
            console.log(`Breakpoint changed to: ${this.currentBreakpoint}`);
        }
    }
    
    // ========================================
    // INITIALIZE ALL COMPONENTS
    // ========================================
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        // Initialize parallax effect
        const parallax = new MultiLayerParallax();
        console.log('✨ Multi-layer parallax initialized');
        
        // Initialize scroll reveal animations
        const scrollReveal = new ScrollReveal();
        console.log('📜 Scroll reveal animations initialized');
    } else {
        // Remove loading state even if animations are disabled
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
        console.log('⚠️ Animations disabled due to reduced motion preference');
    }
    
    // Initialize smooth scrolling (works regardless of motion preference)
    const smoothScroll = new SmoothScroll();
    console.log('🖱️ Smooth scrolling initialized');
    
    // Initialize responsive handler
    const responsiveHandler = new ResponsiveHandler();
    console.log('📱 Responsive handler initialized');
    
    // Initialize performance monitor (only in debug mode)
    if (window.location.hash === '#debug') {
        const performanceMonitor = new PerformanceMonitor();
        console.log('📊 Performance monitor initialized');
    }
    
    // Log parallax layer information
    const layers = document.querySelectorAll('[data-parallax-speed]');
    console.log(`🎨 Parallax layers detected: ${layers.length}`);
    layers.forEach((layer, index) => {
        const speed = layer.dataset.parallaxSpeed;
        const description = layer.querySelector('h1') ? 'Heading' :
                           layer.querySelector('p') ? 'Subheading' :
                           layer.querySelector('.button-group') ? 'Buttons' :
                           layer.querySelector('img') ? 'Background' : 'Content';
        console.log(`   Layer ${index + 1}: ${description} - Speed: ${speed * 100}%`);
    });
    
    // Success message
    console.log('🚀 All systems initialized successfully!');
});