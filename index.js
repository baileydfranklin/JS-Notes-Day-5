// class Car {
//     constructor(brand, model, year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     brag() {
//         console.log(`My car is a ${this.year} ${this.brand} ${this.model}!`);
//     }
// }

// const myCoolCar = new Car("Ford", "Mustang", 2022);
// myCoolCar.brag();
// // My car is a 2022 Ford Mustang!

class Vehicle {
    constructor(make, model, year, isEV) {
        this.make = make
        this.model = model
        this.year = year
        this.isEV = isEV
    }

    Vroom(){
        console.log(`I'm driving a ${this.make} ${this.model} made in ${this.year}`)
    }

    Drive()
    {
        this.Vroom()
        console.log(`I'm driving an Ev: ${this.isEV ? "yes" : "no"}`)
    }
}

class Car extends Vehicle {
    constructor(make, model, year, isEV, passengers) {
        super(make, model, year, isEV)
        this.passengers = passengers
    }

    UnloadPassengers(count) {
        this.passengers -= count
    }
}

class Semi extends Vehicle {
    constructor(make, model, year, isEV, cargo) {
        super(make, model, year, isEV)
        this.cargo = cargo
    }

    UnloadCargo(amount){
        this.cargo -= amount
    }
}

class Limo extends Car {
    constructor(make, model, year, isEV, passengers, HasFancyDiscoBall)
    {
        super(make, model, year, isEV, passengers)
        this.HasFancyDisco
    }
}
/////////////////////////////////////////////////////////////////////////////////////////

//     ARRAY AUTOMOTIVE ACTIVITY     //
