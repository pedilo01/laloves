onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // Valentine's heart popup functionality
    const valentineHeart = document.getElementById('valentineHeart');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupClose = document.getElementById('popupClose');

    // Open popup when heart is clicked
    valentineHeart.addEventListener('click', () => {
        popupOverlay.classList.add('active');
        // Add some floating hearts effect
        createFloatingHearts();
    });

    // Close popup when X is clicked
    popupClose.addEventListener('click', () => {
        popupOverlay.classList.remove('active');
    });

    // Close popup when clicking outside the content
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            popupOverlay.classList.remove('active');
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popupOverlay.classList.contains('active')) {
            popupOverlay.classList.remove('active');
        }
    });

    // Create floating hearts animation
    function createFloatingHearts() {
        const container = document.querySelector('.valentine-container');
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            heart.style.opacity = Math.random() * 0.5 + 0.5;
            document.body.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    // Add CSS for floating hearts
    const style = document.createElement('style');
    style.textContent = `
        .floating-heart {
            position: fixed;
            top: 100vh;
            z-index: 999;
            pointer-events: none;
            animation: floatUp linear forwards;
        }
        
        @keyframes floatUp {
            to {
                top: -100px;
                opacity: 0;
                transform: translateX(calc(var(--random-x, 0) * 100px)) rotate(calc(var(--random-r, 0) * 360deg));
            }
        }
    `;
    document.head.appendChild(style);
};