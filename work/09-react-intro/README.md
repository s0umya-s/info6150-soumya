# React Intro Assignment

**Due Wed Mar 19, 11:59pm **

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-intro' (`git checkout -b react-intro`)
* Add the necessary files in this directory to have the required features
* Add, commit, and push the branch to github
  - You will add/commit ALL the files created by Vite, not just the files you personally modify
  - Except for `node_modules/` and `dist/` (which should automatically be ignored by the .gitignore file Vite creates) you want to commit all the files Vite creates so that anyone getting your project from github can use it without making changes.
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a React project using Vite that demonstrates:
- Using and modifying state
- Creating and using Components
- Passing a state setter function
- Conditional rendering
- Applying CSS classes to a Component

## Expectations

Create a React project using Vite that:
- Has an App component with state that is modified
- App component conditionally renders another component (Reorder)
- This other component uses a callback to modify the ancestors state
- Uses CSS on elements in a component
- Uses a CSS animation to show a fade-in effect

### Setup Expectations

- Create a React project named "inventory" using Vite **inside this directory**
  - There will be an "inventory" folder inside this 09-react-intro folder
- Modify the files in the src/ directory inside inventory/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.
    - Remove all initial demo CSS content!
- Remember to meet the initial changes required in class:
    - Use semicolons
    - Remove any default content that you aren't deliberately using for your assignment
- You will need to create a Reorder.jsx for the Reorder Component
- The Reorder component must accept exactly one prop, "onReorder", which should be a function that takes no arguments.  When called, the onReorder function will set the count to 5.
  - This is a common point of confusion!  
  - Your App component will manage the state of the inventory (the count)
  - Your App component will CONDITIONALLY show the Reorder component to display the "Reorder" button
  - When clicked, the Reorder button in the Reorder component will call the function passed as "onReorder" to change the inventory state stored in App

### Functional Expectations

Your App component:
- Displays a count for an inventory
  - Hint: This will be a state in the App Component
- Allows you to increase/decrease the displayed count using +/- buttons
- Offers a "Reorder" button when the count is 0
  - Implement this in a Reorder component that is only shown when the count is 0
    - Hint: This means the Reorder Component is conditionally rendered inside App Component
      - "Conditionally Rendered" means the HTML is output or not output based on a condition
      - Using CSS to hide/show HTML is NOT conditionally rendering
  - Clicking the Reorder button will add 5 to the count
- Does not allow you to decrease the count below 0
  - Hint: put a `disabled={!count}` prop on the decrease button.  This will disable the button when the count is 0.
- Pressing the Reorder button sets the inventory count to 5
  - Hint: The Reorder button will need to change state that is defined in the App component.  This means you will need to pass a function to the Reorder component. Per the Setup Requirements, the passed "onReorder" prop is a function that takes no arguments, so App.jsx will have to define a function that does the state change and pass that function as "onReorder" to the Reorder component.

### Visual Expectations
- The buttons should have some space between them and each other as well as the output text
- the inventory count, the +/- buttons, and the Reorder button should all appear on the same line
- The Reorder button is ONLY shown when the Count is 0
- When it appears, the reorder button will have a "fade in" animation
  - Hint: set a CSS animation on the element or a wrapper of the element to animate from opacity 0 to opacity 1.  - Use a CSS animation (with keyframes) instead of a CSS transition.

## Additional Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout
- Do not use outside JS or CSS libraries (including any outside React libraries, which are JS libraries).  Only use Vite as shown in class.
- Do not set `style` attributes, props, or properties!
- Do not not modify DOM nodes using `.classList`
- Follow the methods used in class or described in this README

## Grading

Note: The assignment is to show your understanding of the material from class.  If you don't show your understanding of class material, you can lose points, even if your code "works".  

**Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).**

This project is graded as a base of 100 points
- Each Critical Requirement you miss is a minimum of -10 points, and may lose more
- Each Additional Requirement you miss is -2 points. There may be MANY non-critical requirements, and they add up!
- If you are not showing the lessons from class, your grade will be worse or even given a 0. Each week builds on the material from the previous week so it is important that you learn and practice the lessons from class.

### Critical Requirements
- Your submission demonstrates that you practiced the overall purpose of the project
- Create a PR with your code for this project roughly following the course process
- PR does not contain changes to files unrelated to the project
- Do not use the `.classList` DOM Node property or otherwise modify DOM Nodes directly
  - Instead modify state and allow components to rerender
- Do not use the `style` DOM Node property
- Do not use the `style` attribute
- Do not use the `<style>` element
- You obeyed all of the listed "Do NOT/Do not" under "Additional Restrictions" (each a separate requirement)
- You replaced the default CSS in index.css and App.css
- You replaced the default JSX in App.jsx
- The Reorder component is conditionally rendered
- The Reorder component is passed a callback to modify state from App.jsx

### Additional Requirements
- Each item listed under "Additional Restrictions" that is not a "Do NOT/do not" (each a separate requirement)
- Each bullet under an Expectation category that is not a Critical Requirement is an Additional Requirement
- Your HTML use is reliably semantic
- Your CSS class names are usually kebab-case
- Your CSS class names are usually semantic
- Your PR has the correct branch name and follows other course expectations for a PR
- Your PR does not include files it should not, even if related to the assignment (`.DS_Store`, `.idea`, `.vscode`, etc)
  - Note: The various files added by Vite should be included in your PR
  - Files in `node_modules/` or `dist/` should NOT be included
    - Vite supplies a `.gitignore` file that should do the correct things
- Your commit message should be a single sentence that completes the phrase "these changes _______"
- Your commit message makes sense if someone reading it doesn't know what assignment it is part of
- Your content does not use a rigidly defined layout of fixed sizes that would making changes complicated
  - Ex: Do not use a fixed size that is made up of 4 other fixed sizes
- Your CSS appears to follow an organized ordering of rules and properties within rules
- Any other detail mentioned in class or the instructions may be an Additional Requirement
- You followed the best practices listed in the course so far, including but not limited to (each a separate requirement):
  - HTML is valid and well-formed, containing all elements and details suggested from the course to date?
  - Used semantic HTML elements when applicable and appropriately 
  - CSS is formatted for humans, including but not limited to:
    - one property/line
    - indented with a space before `{`
    - declarations have a space after the `:`
  - CSS selectors tend to use class names (when available)
  - CSS selectors with just element types or combinations of types are setting defaults for that element type, not a specific appearance for a particular usage of that element type

