**Factory Method pattern**

The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**Design Principle**

1. Factory Method relies on inheritance: object creation is delegated to subclasses which implement the factory method to create objects.
2. The intent of Factory Method is to allow a class to defer instantiation to its subclasses.
3. The Dependency Inversion Principle guides us to avoid dependencies on concrete types and to strive for abstractions.
4. Factories are a powerful technique for coding to abstractions, not concrete classes