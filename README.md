Unit Test Exercises – Software Engineering Class

This project is part of an activity from the Software Engineering class in my Computer Engineering course. The goal is to practice basic unit testing concepts.

I completed the exercises using Jest with TypeScript.
Included Exercises

    vote – Tests age input for voting eligibility in Brazil using equivalence partitioning.

    grade – Validates the logic to calculate the average of student grades.

    travel – Tests the use cases of a flight reservation system.

Structure

    All test files are located in the test/ directory.

    The implementations follow the instructions provided in the class PDF.

How to Run

Install dependencies:

npm install

Run all tests:

npm test

Bonus

You can run the travel logic directly from the terminal:

cd test/travel
node verifyReserve.js
