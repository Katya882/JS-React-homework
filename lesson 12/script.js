const kitchenProducts = [
    { type: 'grater', price: 10 },
    { type: 'pastry-bag', price: 25 },
    { type: 'scale', price: 5 },
    { type: 'whisk', price: 15 }
];

let devicesProducts = [
    { type: 'desktop', price: [100, 1000] },
    { type: 'laptop', price: [50, 1500] },
    { type: 'smartphone', price: [80, 2000] },
    { type: 'tablet', price: [20, 1300] }
];

let cosmeticsProducts = [
    { type: 'blush', price: 100 },
    { type: 'eyeshadow', price: 50 },
    { type: 'lipstick', price: 80 },
    { type: 'nail-polish', price: 200 },
    { type: 'perfume', price: 300 }
];


function Product(category, type, price) {
    this.category = category;
    this.type = type;
    this.price = price;
}

Product.prototype.render = function () {
    const imageName = this.type.replaceAll("-", "");

    let productPrice;
    if (Array.isArray(this.price)) {
        productPrice = `${this.price[0]} - ${this.price[1]} USD`;
    } else {
        productPrice = `${this.price} USD`;
    }

    return `
        <tr>
            <td>
                <img src="images/${this.category}/${imageName}.svg" alt="${this.type}" width="50" height="50">
            </td>
            <td>${this.type}</td>
            <td>${productPrice}</td>
        </tr>
    `;
};

document.write(`
<table border="1">
    <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
    </tr>
`);


kitchenProducts.forEach(item => {
    const product = new Product("kitchen", item.type, item.price);
    document.write(product.render());
});

devicesProducts.forEach(item => {
    const product = new Product("devices", item.type, item.price);
    document.write(product.render());
});


cosmeticsProducts.forEach(item => {
    const product = new Product("cosmetics", item.type, item.price);
    document.write(product.render());
});

document.write(`</table>`);