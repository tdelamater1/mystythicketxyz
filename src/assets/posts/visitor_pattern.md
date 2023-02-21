# Visitor Design Pattern

Separates the algorithms or behaviors from the objects on which they operate.

To determine the correct method to execute the visitor pattern uses an idea called [[double dispatch]] which delegates choosing the proper method to the object itself instead of letting the client select a method.

Accept takes the visitor, and since the concrete class knows its type it can call the correct visit method. The double dispatch is the redirection to call the client so that it can use itself (this) to call the overloaded visit method on the visitor.

![Visitor Pattern](/assets/images/blog/visitor_pattern.png)
