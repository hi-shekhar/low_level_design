/**
 * Open/Closed Principle (OCP)
 * 
 * The Open/Closed Principle (OCP) states that a class should be open for extension but closed for modification. 
 * This means you should be able to add new functionality without changing existing code. 
 * Software entities should be open for extension, but closed for modification.
 */

// Bad: FuelCalculator needs modification for each new fuel type
class FuelCalculatorBad {
    calculateFuelConsumption(vehicle: any, distance: number) {
        if (vehicle.fuelType === 'gasoline') {
            return distance / 20; // Example: 20 miles per gallon
        } else if (vehicle.fuelType === 'electric') {
            return distance * 0.3; // Example: 0.3 kWh per mile
        }
        throw new Error("Invalid fuel type");
    }
}

// Good: Use interfaces and abstract classes
interface FuelConsumptionCalculator {
    calculateFuelConsumption(distance: number): number;
}

class PetrolCalculator implements FuelConsumptionCalculator {
    calculateFuelConsumption(distance: number): number {
        return distance / 20;
    }
}

class ElectricCalculator implements FuelConsumptionCalculator {
    calculateFuelConsumption(distance: number): number {
        return distance * 0.3;
    }
}

// Good: The FuelCalculator is extensible to support new fuel types without modification.
class FuelCalculator {
    calculateFuelConsumption(calculator: FuelConsumptionCalculator, distance: number): number {
        return calculator.calculateFuelConsumption(distance)
    }
}

