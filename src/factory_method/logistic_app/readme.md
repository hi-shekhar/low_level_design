**Factory Method pattern**

The Factory Method Pattern defines an interface for creating an object, but lets subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

**Design Principle**

1. Factory Method relies on inheritance: object creation is delegated to subclasses which implement the factory method to create objects.
2. The intent of Factory Method is to allow a class to defer instantiation to its subclasses.
3. The Dependency Inversion Principle guides us to avoid dependencies on concrete types and to strive for abstractions.
4. Factories are a powerful technique for coding to abstractions, not concrete classes

**Logistic App**

![Logistic App](./../assets/logistic_app.png)

**Idle Steps:**

 1. The RoadLogistic and SeaLogistic classes extends from an abstract class LogisticApp.
 2. The RoadLogistic and SeaLogistic classes contains the factory methos which will return the concrete products(Truck and Ship)
 3. The product Truck and Ship implement the transport interface, which has method deliver.
 4. Here the client only know about the Transport, and all transport object will have deliver() method.
 5. The requirement to create product has been delegated to subclasses, having factory methods

