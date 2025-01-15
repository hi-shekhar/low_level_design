/**
 * Interface Segregation Principle (ISP)
 * 
 * Tt states that clients should not be forced to depend on methods they do not use. 
 * In other words, large interfaces should be split into smaller, 
 * more specific interfaces so that clients only need to know about the methods that are relevant to them.
 */

// Bad: Vehicle interface forces unrelated methods on some implementations
interface VehicleActions {
    drive(): void;
    fly(): void;
    sail(): void;
}

class Car implements VehicleActions {
    drive() { }
    fly(): void {
        throw new Error("Cars cannot fly.");
    }
    sail(): void {
        throw new Error("Cars cannot sail.");
    }
}

// Good: Separate interfaces for specific actions
interface Drivable {
    drive(): void;
}

interface Flyable {
    fly(): void;
}

interface Sailable {
    sail(): void;
}

class CarISP implements Drivable {
    drive() { }
}

class AirplaneISP implements Flyable, Drivable {
    fly() { }
    drive() { } // Can taxi on the ground
}

class BoatISP implements Sailable {
    sail() { }
}