/**
 * Liskov Substitution Principle (LSP)
 * 
 * It states that if a program module is using a base class, 
 * then substituting a derived class for the base class should not alter the correctness of the program. 
 * In simpler terms, subclasses should be substitutable for their base classes without causing unexpected behavior.
 * 
 * Subclasses should extend the behavior of their superclasses without reducing their existing capabilities.
 */

// Bad
class VehicleBad {
    startEngine(): void {
        console.log("Vehicle engine started.");
    }

    accelerate(): void {
        console.log("Vehicle accelerating.");
    }

    hasEngine(): boolean {
        return true;
    }
}

class Bike extends VehicleBad {
    // Bikes have engines, so this is fine
}

class Cycle extends VehicleBad {
    startEngine(): void {
        throw new Error("Cycles don't have engines!"); // Violates LSP
    }

    accelerate(): void {
        console.log("Cycle pedaling");
    }

    hasEngine(): boolean {
        return false; // Also violates LSP
    }
}

function useVehicle(vehicle: VehicleBad) {
    vehicle.startEngine(); // This will throw an error if the vehicle is a Cycle
    vehicle.accelerate()
}


// Good:

interface Movable {
    move(): void
}

interface EngineVehicle extends Movable {
    startEngine(): void
    accelerate(): void
}

class VehicleGood implements Movable {
    move(): void {
        console.log("Vehicle is moving");
    }
}

class BikeGood extends VehicleGood implements EngineVehicle {
    startEngine(): void {
        console.log("Bike engine started");
    }

    accelerate(): void {
        console.log("Bike accelerating.");
    }

    move(): void {
        console.log("Bike is moving");
    }
}

class CycleGood extends VehicleGood {
    move(): void {
        console.log("Cycle is pedaling");
    }
}

function useMovable(movable: Movable) {
    movable.move()
}

function useEngineVehicle(engineVehicle: EngineVehicle) {
    engineVehicle.startEngine()
    engineVehicle.accelerate()
}

const myBikeGood = new BikeGood()
const myCycleGood = new CycleGood()

useMovable(myBikeGood)
useEngineVehicle(myBikeGood)

useMovable(myCycleGood)
