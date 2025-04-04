let seasons = ["winter", "summer"];
let categories = ["vegetables", "fruits"];
let products = {
    vegetables: ["cabbage", "avocado", "tomato"],
    fruits: ["grapes", "raspberry", "coconut"]
};

let prices = {
    cabbage: 10,
    avocado: 30,
    tomato: 15,
    grapes: 25,
    raspberry: 40,
    coconut: 50
};
let season;
do {
    season = prompt("Enter season (winter or summer):").trim().toLowerCase();
} while (!seasons.includes(season));

let multiplier = season === "winter" ? 2 : 0.8;

let category;
do {
    category = prompt("Enter category (vegetables or fruits):").trim().toLowerCase();
} while (!categories.includes(category));

let product;
do {
    product = prompt(`Enter product (${products[category].join(", ")}):`).trim().toLowerCase();
} while (!products[category].includes(product));

let quantity;
do {
    quantity = parseInt(prompt("Enter quantity (must be greater than 1):"));
} while (isNaN(quantity) || quantity < 2);

let finalPrice = prices[product] * quantity * multiplier;

document.write(`
  <div class="product" align="center">
    <p>Selected product: <b>${product}</b></p>
    <p>Count of ${product}s: <b>${quantity}</b></p>
    <p>Selected period: <b>${season}</b></p>
    <p>Selected category: <b>${category}</b></p>
    <p>Final sum: <b>${finalPrice} UAH</b></p>
  </div>
`);

