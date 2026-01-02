document.addEventListener('DOMContentLoaded', () => {
    
    // --- Header Dinâmico ---
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.remove('bg-transparent', 'py-4');
            header.classList.add('bg-primary-dark', 'shadow-md', 'py-2');
        } else {
            header.classList.add('bg-transparent', 'py-4');
            header.classList.remove('bg-primary-dark', 'shadow-md', 'py-2');
        }
    });

    // --- Menu Mobile ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // --- Animação ao Scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-item').forEach(el => {
        observer.observe(el);
    });

    // --- Modal de Privacidade (CORRIGIDO) ---
    const privacyModal = document.getElementById('privacy-modal');
    const modalContent = privacyModal.querySelector('div');
    const openBtns = [document.getElementById('open-privacy')];
    const closeBtns = [document.getElementById('close-privacy'), document.getElementById('close-privacy-btn')];

    const openModal = (e) => {
        e.preventDefault();
        
        // Remove hidden e adiciona flex para centralizar
        privacyModal.classList.remove('hidden');
        privacyModal.classList.add('flex');
        
        // Animação suave
        setTimeout(() => {
            privacyModal.classList.remove('opacity-0');
            modalContent.classList.remove('scale-95');
            modalContent.classList.add('scale-100');
        }, 10);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        privacyModal.classList.add('opacity-0');
        modalContent.classList.remove('scale-100');
        modalContent.classList.add('scale-95');
        
        setTimeout(() => {
            // Remove flex e volta a ser hidden
            privacyModal.classList.remove('flex');
            privacyModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }, 300);
    };

    openBtns.forEach(btn => btn?.addEventListener('click', openModal));
    closeBtns.forEach(btn => btn?.addEventListener('click', closeModal));

    privacyModal.addEventListener('click', (e) => {
        if (e.target === privacyModal) closeModal();
    });
});