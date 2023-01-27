class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    brag() {
        console.log(`My car is a ${this.year} ${this.brand} ${this.model}!`);
    }
}

const myCoolCar = new Car("Ford", "Mustang", 2022);
myCoolCar.brag();
// My car is a 2022 Ford Mustang!
