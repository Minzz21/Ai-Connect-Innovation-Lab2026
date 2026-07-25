/* ============================================
   INJECT — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    /* --- Hamburger Menu Toggle --- */
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        const header = document.querySelector('.header');
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('open');
            nav.classList.toggle('open');
            if(header) header.classList.toggle('menu-open');
            document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : '';
        });

        // Tutup menu saat link di-klik (mobile)
        nav.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                nav.classList.remove('open');
                if(header) header.classList.remove('menu-open');
                document.body.style.overflow = '';
            });
        });
    }

    /* --- Header Shadow on Scroll --- */
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    /* --- Fade-in Animation on Scroll --- */
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        fadeObserver.observe(el);
    });
});


// ==========================================
// Modal Logic untuk Proyek AI
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('ai-modal');
    if (!modal) return; // Only run if modal exists on page
    
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalTeam = document.getElementById('modal-team');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');
    const modalLink = document.getElementById('modal-link');
    
    const aiCards = document.querySelectorAll('.ai-card');
    
    // Open modal on card click
    aiCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent default link behavior if needed
            e.preventDefault();
            
            // Populate modal data
            modalTitle.textContent = card.getAttribute('data-title');
            modalTeam.textContent = "Tim: " + card.getAttribute('data-team');
            modalDesc.textContent = card.getAttribute('data-desc');
            modalImg.src = card.getAttribute('data-img');
            modalLink.href = card.getAttribute('data-link');
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        });
        
        // Accessibility: allow opening via keyboard
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Close modal functions
    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
    };
    
    modalClose.addEventListener('click', closeModal);
    
    // Close when clicking outside modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
