/**
 * Dependency Inversion Principle:
 * 1. High-level modules should not depend on low-level modules. 
 *    Both should depend on interfaces or abstract classes (abstractions).
 * 2. Interfaces or abstract classes (abstractions) should not depend on concrete implementations (details).
 *    Concrete implementations should depend on interfaces or abstract classes.
 */

// Bad: (Violating DIP - Tightly Coupled)
class CarBad {
    private petrolEngine: PetrolEngine; // Directly depends on PetrolEngine

    constructor() {
        this.petrolEngine = new PetrolEngine();
    }

    start(): void {
        this.petrolEngine.start();
    }
}

class PetrolEngine {
    start(): void {
        console.log("Petrol Engine Started")
    }
}

const myCarBad = new CarBad()
myCarBad.start()

/**
 * Problems:
 * 1. If we want to create a DieselCar, we have to create a new class (DieselCar) and duplicate a lot of code.
 * 2. The CarBad class is tightly coupled to PetrolEngine, making it difficult to test and maintain.
 */

// Good: (Adhering to DIP - Loosely Coupled)
interface Engine {
    start(): void;
}

class PetrolEngineGood implements Engine {
    start(): void {
        console.log("Petrol Engine Started");
    }
}

class DieselEngineGood implements Engine {
    start(): void {
        console.log("Diesel Engine Started");
    }
}

class ElectricEngineGood implements Engine {
    start(): void {
        console.log("Electric Engine Started")
    }
}

class CarGood {
    private engine: Engine; // Depends on the abstraction (Engine interface)

    constructor(engine: Engine) {
        this.engine = engine;
    }

    start(): void {
        this.engine.start();
    }
}

const myPetrolCarGood = new CarGood(new PetrolEngineGood());
myPetrolCarGood.start();

const myDieselCarGood = new CarGood(new DieselEngineGood());
myDieselCarGood.start();

const myElectricCarGood = new CarGood(new ElectricEngineGood())
myElectricCarGood.start()