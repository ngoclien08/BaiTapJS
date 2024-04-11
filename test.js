$(document).ready(function() {
    $('#loadData').click(function() {
        $.ajax({
            url: 'https://dummyjson.com/products',
            type: 'GET',
            success: function(data) {
                const productsContainer = $('#products');
                productsContainer.html('');
                data.products.forEach(product => {
                    const productElement = $('<div class="product"></div>');

                    const thumbnail = $('<img>');
                    thumbnail.attr('src', product.thumbnail);
                    productElement.append(thumbnail);

                    const productInfo = $('<div class="product-info"></div>');

                    const title = $('<h2></h2>').text(product.title);
                    productInfo.append(title);

                    const description = $('<p></p>').text(product.description);
                    productInfo.append(description);

                    const price = $('<p></p>').text(`Price: $${product.price}`);
                    productInfo.append(price);

                    productElement.append(productInfo);

                    productsContainer.append(productElement);
                });
            },
            error: function(xhr, status, error) {
                console.log('Error:', error);
            }
        });
    });
});
