# gem-ffw-typescript-functions

[Video](https://vimeo.com/917120042/02686cd0c5?share=copy)

The provided transcript outlines a TypeScript tutorial focusing on type safety, interface creation, function definition, and conditional greetings based on time. Here's a breakdown of the steps detailed in the transcript to complete the lesson:

### Step 1: Introduction to Type Safety in TypeScript
- The instructor begins by explaining the importance of type safety, a primary use case for TypeScript. Type safety helps ensure that variables and parameters are of the expected type.

### Step 2: Defining a New Data Type
- An interface named `User` is created, which includes one attribute: `name` of type `string`. This enforces that any object defined as a `User` must have a `name` attribute.

### Step 3: Creating a Function to Greet the User
- A function named `greetUser` is introduced. It's designed to accept an object of the `User` type and return a greeting string.
- The function is defined to strictly accept a parameter of the `User` type, ensuring the passed object has a `name` attribute.

### Step 4: Implementing the Greet Function
- The instructor demonstrates how to declare a `User` object (`user1`) with the `name` property set to "Bob".
- The `greetUser` function is called with `user1` as an argument, and the greeting is logged to the console. The function dynamically includes the user's name in the greeting.

### Step 5: Ensuring Type Safety
- An attempt to call `greetUser` with a string instead of a `User` object is shown to illustrate TypeScript's type safety features. TypeScript prevents this incorrect call because the string does not match the `User` type expected by the function.

### Step 6: Enhancing the Greeting Function
- The lesson progresses by modifying the `greetUser` function to issue different greetings based on the time of day (morning or afternoon).
- The current time is obtained using the `Date` object, and the hour is extracted.
- A conditional statement adjusts the greeting ("Good morning" or "Good afternoon") based on the hour.

### Implementation Notes:
- The tutorial emphasizes TypeScript's type system, including interfaces and type annotations, to ensure objects match expected structures.
- Demonstrates practical use of TypeScript features for runtime safety and developer productivity by providing clear, type-safe APIs.
- Shows how to enhance functions with additional logic (time-based greeting) while maintaining type safety.

This lesson showcases the utility of TypeScript for building safer, more predictable code by enforcing type checks at compile time.