// Lazy loading images
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.onload = () => {
                    img.removeAttribute('data-src');
                };
                observer.unobserve(img);
            }
        });
    });

    io.observe(target);
};

lazyImages.forEach(lazyLoad);
