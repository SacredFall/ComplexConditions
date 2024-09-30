Problem 1

1. The animal must either be a herbivore OR weigh less than 50 pounds.
2. The animal must NOT be a predator.
   [------------------------------------------------------]
   Herbivore | Predator | Weight < 50
   T | F | T Roam
   T | F | F Roam
   F | T | T No Roam
   F | T | F No Roam

<----------------------------------------------------------------------------------->

Problem 2: Theme Park Discount
You are building a system to check if a person qualifies for a discount at a theme park. The
discount is offered based on two conditions:

1. The person must be a child (under 12 years old) OR a senior (65 years or older).
2. The person must either be a resident OR have a valid membership card.

Age <12 or >65 | Resident | Membership
[===============================================]
T | T | T Discount
T | T | F Discount
T | F | T Discount
T | F | F Discount
F | T | T Discount
F | T | F Discount
F | F | T Discount
F | F | F No Discount
