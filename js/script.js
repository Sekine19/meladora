Fancybox.bind("[data-fancybox]", {
    // Your custom options
});




if (document.querySelector('.product-buttons')) {
    let categoryButtons = document.querySelectorAll('.product-buttons button');
    let products = document.querySelectorAll('.product-col');

    categoryButtons[0].classList.add('active')

    categoryButtons.forEach((button) => {
        button.addEventListener('click', () => {
            let categoryID = button.getAttribute('data-id')
            let filteredProducts = Array.from(products).filter((product) => product.getAttribute('data-category-id') === categoryID)

            for (let i = 0; i < categoryButtons.length; i++) {
                categoryButtons[i].classList.remove('active');
            }
            button.classList.add('active')


            if (categoryID === '0') {
                for (let i = 0; i < products.length; i++) {
                    products[i].classList.remove('d-none')
                }
            } else {
                for (let i = 0; i < products.length; i++) {
                    products[i].classList.add('d-none')
                }
                for (let i = 0; i < filteredProducts.length; i++) {
                    filteredProducts[i].classList.remove('d-none')
                }
            }
        })
    })
}