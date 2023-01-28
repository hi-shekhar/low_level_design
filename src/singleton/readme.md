**Singleton Pattern**

The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.

**Design Principle**
1. The Singleton Pattern ensures you have at most one instance of a class in your application.
2. The Singleton Pattern also provides a global access point to that instance.



**Logger singleton scenarios**

1. Logger class is created having private constructor, a static method combined with a static 
variable.
2. It means, the class cant'be intialized using ***new*** operator
3. The static method let only creation of only one intance of the Logger class.
