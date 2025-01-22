// Пример данных о товарах
const products = [
    { id: 1, name: "Футболка", price: 500, image: "shirt.jpg" },
    { id: 2, name: "Джинсы", price: 1500, image: "jeans.jpg" },
];

// Функция для отображения товаров
function renderProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productDiv.appendChild(productImage);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        productInfo.innerHTML = `
            <h2>${product.name}</h2>
            <p>Цена: ${product.price} руб.</p>
        `;
        productDiv.appendChild(productInfo);

        productsDiv.appendChild(productDiv);
    });
}

// Функция для обработки покупки
function handleBuy() {
    // Здесь будет логика для обработки покупки
    // Например, отправка запроса к платежной системе
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', () => {
        // Пример отправки запроса к платежной системе
        fetch('https://api.yoomoney.ru/api/request-payment', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer YOUR_PAYMENT_TOKEN',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'amount=100&label=Покупка+товара&message=Спасибо+за+покупку!'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
}

renderProducts();
handleBuy();
