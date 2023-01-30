**Template Method Design Pattern**

The Template Method Pattern defines the skeleton of an algorithm in a method, deferring some steps to 
subclasses. Template Method lets subclasses redefine certain steps of an algorithm without changing the 
algorithm’s structure.

**Design Principle**

1. The template method’s abstract class may define concrete methods, abstract methods and hooks.
2. Abstract methods are implemented by subclasses.
3. Hooks are methods that do nothing or default behavior in the abstract class, but may be overridden in the subclass.
4. To prevent subclasses from changing the algorithm in the template method, declare the template method as final.
5. The Hollywood Principle (Don’t call us, we’ll call you.) guides us to put decision-making in high-level modules that can 
decide how and when to call low level modules.

**Note: No Provision to add final method in typescript**


