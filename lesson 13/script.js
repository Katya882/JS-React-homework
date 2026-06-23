class Hamburger {

    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };

    static SIZE_BIG = {
        price: 100,
        calories: 40
    };

    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    };

    static STUFFING_LETTUCE = {
        price: 20,
        calories: 5
    };

    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    };

    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    };

    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    };

    constructor(size, staffing) {

        this.size = size;
        this.staffing = staffing;
        this.topping = [];
    }

    addTopping(topping){
        this.topping.push(topping);
    }


    calculatePrice() {
        let totalPrice = this.size.price + this.staffing.price;

        this.topping.forEach(topping => {
            totalPrice += topping.price;
        });

        return totalPrice;
    }

    calculateCalories() {
        let totalCalories = this.size.calories + this.staffing.calories;

        this.topping.forEach(topping => {
            totalCalories += topping.calories;
        });

        return totalCalories;
    }
}

const hamburger = new Hamburger(
    Hamburger.SIZE_SMALL,
    Hamburger.STUFFING_CHEESE
);

hamburger.addTopping(
    Hamburger.TOPPING_MAYO
);

console.log("Calories: " + hamburger.calculateCalories()
);

console.log("Price: " + hamburger.calculatePrice()
);

hamburger.addTopping(
    Hamburger.TOPPING_SAUCE
);
console.log("With souse: " + hamburger.calculatePrice());


