# Wonderschool UI take-home challenge
This is Alex Hollenbeck's solution for the Wonderschool UI take-home challenge.

# Challenge description
1. Build a form according to the design in the below link (doesn't have to be pixel perfect) 
https://www.dropbox.com/s/m0cqakzl0z9fvdc/Wonderschool%20Interview%20Form%20Component.png?dl=0

2. Create a JS module that validates forms on the screen and either displays validation errors or logs the form values to console. 
The form should: 
* Check for values in fields designated required 
* Check for both first and last name in the name field 
* Check for a sane email format 
* Check for a valid date format 
* Require at least 6 chars in the password 
* Be designed to be as reusable as possible - imaging you're going to share this as a (basic) Form component on npm.

The form should be initialized with `form([selector])` where [selector] is any CSS selector

# My solution
To solve this challenge, I created an npm module called alh_form which handles the form validation. I then created an instance of the form in this repo which pulls in alh_form.

# How to view the solution
Download this repo and open index.html in your browser.
