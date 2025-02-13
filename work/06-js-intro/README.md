# Assignment - JS Intro

**Due: Wed Feb 19, 11:59pm ** 

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'js-intro' (`git checkout -b js-intro`)
* Add the necessary files to have the required features
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goals and Expectations

You will create a webpage that has:
- A navigation menu 
  - With **one** main option, "Menu"
  - Clicking on "Menu" will open a dropdown menu of links as described below
- At least 3 UI cards
    - Content of your choice
- Visually distinct header and footer

When you click on the menu item, a dropdown menu of at least 3 links will open
- When you click on the menu item again, the dropdown will close

Your page can be viewed using `npx serve` run in the same folder as this README
- Not `node server.js`, not using `public/` folder
    - Until we get to React, we only use a server.js when we have a form submitting data.  Otherwise a simple `npx serve` server does the job.

## Dropdown Menu Expectations

- The various links in your menu should link to urls that could exist 
  - Not "#".  Use urls to files that don't exist
- The dropdown effect should NOT use :hover/:focus-within, it should only happen on a click 
  - For this assignment only, we are testing your JS skill, not following best practices)
  - Hover/focus effects for highlighting individual elements are fine, just not for the effect to make the menu "drop down"
  - That click to make the menu "drop down" should be doable with keyboard navigation! 
    - Tab to the menu option, Enter to click
    - Hint: Do NOT add JS to handle the "Enter" or "Tab", that behavior is already built in as long as you use semantic elements.  Handling a "click" event on a semantic, focusable element like a button works fine with keyboard navigation, mouse, or touchscreen without additional effort required.
    - Repeat: Please DO NOT add JS to handle keyboard navigation when you don't need to (and you should not need to if you are using semantic elements as required and demonstrated!)
    - Hint: Toggle a class on an element when the button is clicked
    - Have your CSS apply the same changes you used with :hover/:focus-within, but instead of using :hover/:focus-within in your selector, use that extra class the JS is add/removing
    - Make sure to use a class name that is descriptive and semantic, such as "active"
    - Put another way, the above is saying that the CSS properties you use for the menu are no different than when you did the original dropdown assignment.  The SELECTORS are different, but the CSS properties are the same as that assignment.
- The menu HTML can be (likely should be) identical to what we use before, the difference is in how we are opening/closing the menu, and that there is only one main menu option, not many.  
    - If you got feedback on improvements to that assignment, make suggested or necessary changes on this assignment
- The menu can use a transition/animation to open/close, but it is not required

## Common Questions:
- There are no mobile requirements for this assignment, you are welcome to code a mobile-friendly version anyway
- Any images must have good alt attribute values
  - "Good" is as defined previously in class: A useful description of what the image shows that is sufficient for someone that can't see the image
- There is no requirement for transition/animation.  They are optional.

## Additional Restrictions
- Do not use tables or table-layouts
- Do not use positioning to manipulate the layout of form elements
- Do not use transforms, transitions, animations, or other effects not yet covered in class. (soon!)
- Do not include, load, or use CSS you didn't write 
- Do not include, load, or use any Javascript you didn't write
- Do not use float for reasons other than allowing text to wrap around an inline element or text
- Do not use var
- Use let and const as described in class (use const when variable isn't reassigned)
- Load your JS as described in class.  In particular:
    - Do not use inline JS
    - Don't use JS to set or change the style attribute
    - Do use JS to add or remove classes using classList() on the DOM Node
- Use meaningful and helpful variable names as described in class
- Use camelCase JS variable and function names
- Use semantic kebab-case or BEM CSS class names
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Use semicolons appropriately as described in class
    - Our JS must use semicolons as a course requirement
- Add event listener(s) as described in class using addEventListener()
    - Do not use handler related element attributes (Ex: no `onclick` attribute)
    - Do not use direct DOM elements to add listeners/handlers (Ex: No `.click` property)
- Include "use strict"; at the start of your JS file(s)
- Include an IIFE around your JS code
* You MUST follow the required/best practices outlined in this course to date

## Grading

Note: The assignment is to show your understanding of the material from class.  If you don't show your understanding of class material, you can lose points, even if your assignment "works".  

**Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).**

This assignment is graded as a base of 100 points
- Each Critical Requirement you miss is a minimum of -10% of the assignment grade, and may lose more
- Each Additional Requirement you miss is -2% of the assignment grade.  There may be MANY non-critical requirements, and they add up!
- If you are not showing the lessons from class, your grade will be worse or even given a 0. Each week builds on the material from the previous week so it is important that you learn and practice the lessons from class.

### Critical Requirements
- Your submission demonstrates that you practiced the overall purpose of the assignment
- You create a PR with your code for this assignment roughly following the course process
- PR does not contain changes to files unrelated to the assignment
- You did not edit a file that says "Please do not edit this file"
- The page displays using `npx serve` as described
- Your HTML use is reliably semantic
- Your CSS class names are usually kebab-case
- Your CSS class names are usually semantic
- Your JS event handlers are loaded using addEventListener()
- You do not use `alert()`, `confirm()`, or `prompt()` in your JS
- You do not use the `style` property on DOM Nodes with JS
- You do not use the `style` attribute
- You do not use the `<style>` element
- You obeyed all of the listed "Do NOT" under "Additional Restrictions" (each a separate requirement)

### Additional Requirements
- Your PR has the correct branch name and follows other course expectations for a PR
- Your PR does not include files it should not, even if related to the assignment (`.DS_Store`, `.idea`, `.vscode`, etc)
- Your commit message should be a single sentence that completes the phrase "these changes _______"
- Your commit message makes sense if someone reading it doesn't know what assignment it is part of
- Your content is responsive where appropriate
- Your content does not use a rigidly defined layout of fixed sizes that would making changes complicated
  - Ex: Do not use a fixed size that is made up of 4 other fixed sizes
- Your CSS appears to follow an organized ordering of rules and properties within rules
- You followed the best practices listed in the course so far, including but not limited to (each a separate requirement):
  - HTML is valid and well-formed, containing all elements and details suggested from the course to date?
  - Used semantic HTML elements when applicable and appropriately 
  - CSS class names are usefully semantic and in kebab-case
  - CSS is formatted for humans, including but not limited to:
    - one property/line
    - indented with a space before `{`
    - declarations have a space after the `:`
  - CSS selectors tend to use class names (when available)
  - CSS selectors with just element types or combinations of types are setting defaults for that element type, not a specific appearance for a particular usage of that element type
  - JS code should be syntactically correct and as per the course recommendations
    - indentation is present, consistent, and informative
    - whitespace is used in the code to improve readability and skimmability
      - Ex: have spaces around the `=` in an assignment
      - Ex: Have blank lines to form code into "paragraphs" of related content
- Each feature in the various Expectations sections are created as described and per class (multiple requirements)
  - Unless already listed as a separate requirement
- Any other detail mentioned in class or the instructions may be an Additional Requirement

