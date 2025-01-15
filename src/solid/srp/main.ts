/**
 * Single Responsibility Principle (SRP)
 * 
 * It dictates that a class should have only one reason to change, meaning it should have only one specific job or responsibility.
 * SRP is about logic partitioning into code: which logic should be declared in which class. 
 */

// Vehicle class handles both data and persistence.
export class VehicleBad {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    showDetail() {
        console.log(`make: ${this.make} and model: ${this.model}`);
    }

    saveToDatabase() {
        // Database logic (subject to change due to the following considerations):
        // 1. Connection establishment.
        // 2. Data persistence.
        console.log(`Saving ${this.make} ${this.model} to database`);
    }
}

// Good: Separate classes for data and persistence
class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }
}

class ConnectionDAO {
    createConnection() {
        console.log('create connection based on db details');
    }
}

interface VehicleRepository {
    save(vehicle: Vehicle): void;
}

class VehicleDatabaseRepository implements VehicleRepository {
    save(vehicle: Vehicle) {
        console.log(`Saving ${vehicle.make} ${vehicle.model} to database`);
    }
}

class VehicleFileRepository implements VehicleRepository {
    save(vehicle: Vehicle) {
        console.log(`Saving ${vehicle.make} ${vehicle.model} to file`);
    }
}
