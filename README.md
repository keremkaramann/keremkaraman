# Seesaw

A simple project where users can click and drop random weights(1-10w) on a seesaw and the seesaw tilts based on weights.

#Thought process and design decisions

- I build this project with step by step and trying to find simple solutions,
- First I created draft UI.
- Then I focused on drop animation to seesaw.
- Next, I implemented the JS logic: when a user clicks, a weight is created and drops smoothly onto the seesaw.
- I figured out whether the user clicked on the left or right side, so the next weights are placed correctly.
- I added the sum of left and right weights to the UI.
- I found a simple way to tilt the seesaw based on the difference between left and right weights, I used transform css.

  #Trade-offs and Limitations

- Tilt logic simplified I did not consider torque difference, it was complex to implement.
- I only implemented localstorage logic partially, its not finished.

#AI Assistance

-All code was written by me.
-I used Google and Stack Overflow.
