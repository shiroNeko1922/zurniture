document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-images');
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    // Limit the items to 10
    const limitedItems = items.slice(0, 10);

    let currentIndex = 0;

    // Function to create item content dynamically
    limitedItems.forEach(item => {
        const src = item.dataset.src;
        const name = item.dataset.name;
        const price = item.dataset.price;

        item.innerHTML = `
            <div class="image-container"> 
                <img src="${src}">
                <div class="product-info">
                    <p class="product-name">${name}</p>
                    <p class="product-price">${price}</p>
                </div>
            </div>
        `;
    });

    function updateCarousel() {
        carousel.style.transform = `translateX(${-currentIndex * 330}px)`;
    }

    function handleButtonClick(direction) {
        currentIndex = (currentIndex + direction + limitedItems.length) % limitedItems.length;
        updateCarousel();
    }

    prevButton.addEventListener('click', () => handleButtonClick(-1));
    nextButton.addEventListener('click', () => handleButtonClick(1));

    updateCarousel();
});
