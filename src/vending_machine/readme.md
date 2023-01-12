State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

The State pattern is closely related to the concept of a Finite-State Machine 

The State Pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

1. First, we’re going to define a State interface that contains a method for every action in the Vending Machine.

2. Then we’re going to implement a State class for  every state of the machine. These classes will be  responsible for the behavior of the machine when it is in the corresponding state.

3. Finally, we’re going to get rid of all of our conditional code and instead delegate to the state class to do the work for us.