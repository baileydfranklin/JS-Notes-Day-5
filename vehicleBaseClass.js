class vehicle {
    constructor(make, model, year, isEv, drive, tran) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.isEv = isEv;
        this.drive = drive;
        this.tran = tran;
    }

    brag(){
        console.log(`I drive a ${this.make} ${this.model} made in ${this.year}. It is an ${this.tran} ${this.drive} vehicle.`)
    }

}

letMyCoolCar = new vehicle("Vulkswagon", "Passat", "2014", false, "FWD", "Automatic")

letMyCoolCar.brag();