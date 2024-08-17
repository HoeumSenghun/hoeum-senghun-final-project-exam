// Example: Add event listeners for 'Add to Cart' buttons
document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.btn-primary');
    
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});
