# Assignment - JS Form

**Due: Wed Feb 26, 11:59pm ** 

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'js-form' (`git checkout -b js-form`)
* Add the necessary files to have the required features
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goals and Expectations

Build an `index.html` page in `public/` that contains a form that is validated by JS
- The validation messages will appear in certain situations and be cleared in response to certain steps
- The form will show a layout in 1 column format for a "mobile" size
- The form will show a layout in 2 column format for a "desktop" size
  - Remember that 1-column/2-column for form layout refers to labels and fields, NOT the total number of columns in a row!
- Your error message text should be set by `innerText` or `innerHTML`
  - Replacing form fields gets complicated because it will lose the data in that field, it will lose any cursor position in that field - I recommend NOT replacing form fields just yet.  Replace any validation message text instead

The code is usable by:
- Running `npm install` **in this directory** 
  - Only needs to run **in this directory** once per computer
- Running `npm start` **in this directory**
  - Visiting http://localhost:3000/

## Form Details

- The page will have a visually distinct header and footer
- The page will contain a registration form that will submit to "/register" using POST
- The form will collect these fields
  - Name
  - Email
  - Confirm Email
  - A checkbox with name attribute of "wants-spam"
    - Label of your choice
  - A select menu with name attribute of "tier"
    - Label and options and values of your choice
- Each form field will have label text that meaningfully identifies the field being collected
- The fields will have the following validations
  - Name is required
  - Email is required
    - There is no validating the content of the email for this assignment!
  - Confirm Email must match the Email
- The validations must NOT be done with HTML validations
  - This is to confirm your understanding of JS validation, not because HTML validation is good or bad
  - No "required" attributes
  - No "pattern" attributes
  - No `type="email"` 
    - Use `type="text"` (the default for input elements) instead
- All "required" fields will be indicated to the user as required before they fill the form out
  - This is separate and in addition to the validation message.  This is the same as the "\* Required" (or similar) that we had previously.
- Any field validation failures will be shown by extra text in addition to any required indication
  - Color alone is not sufficient to indicate an error, but color should be used
- All failed validations will be indicated to the user when the validations fail as described below
  - The Name field will inform the user they need to fill out the field if they have not
    - This validation will occur when the "input" event occurs on the field OR the user attempts to submit the form (meaning you have listeners for both events)
    - This error message will not be shown if this error is fixed (the field is provided)
  - The Email field will inform the user they need to fill out the field if they have not
    - This validation will occur when the user goes to submit the form
    - This error message will be removed if this error is fixed (the field has characters) and the user attempts to submit
  - The Confirm Email field will inform the user the field needs to match Email if it does not
    - This validation will occur when the user goes to submit the form
    - This error message will be removed if this error is fixed (the field matches) and the user attempts to submit
  - All fields are validated when the form is submitted
    - If a validation is failed the form will not submit

## Accessibility Expectations
- The form can be navigated and used with keyboard (using tab, typing, and space) or mouse
- Required fields are labeled as such in a way that do not require color-sightedness
  - This means you CAN use color and/or bolding, but should not ONLY use color/bolding.  You want something that a screen reader or other assistive technology would notice
  - Errors are indicated with additional text that do not require color-sightedness to read
- The page will have an adaptive breakpoint at 40rem
  - Above this breakpoint the form will use a 2 column layout
  - Below this breakpoint the form will use a 1 column layout
    - Remember that 1-column/2-column for form layout refers to labels and fields, not the total number of columns in a row!
    - Remember that 1-column form layouts are overall better, regardless of viewport.  We practice both to build your skills, not because switching is a common or recommended practice.
  - The column requirements do not apply to checkboxes - use whatever formatting looks best (this is usually label to the right of the field)
- The page should have a reasonable layout for a range of widths, from 360px to 1000px (with normal text-size)

## Additional Expectations
- Load your CSS as described in class
- Use meaningful and helpful variable names as described in class
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Do not use `alert()`, `prompt()`, or `confirm()`
- Do not use tables or table-layouts to arrange elements unless creating an actual table of data
- Do not use positioning to manipulate the layout of form elements
  - Allowed: Explicitly displaying content "over" other content (dropdown menus, a heading in a border, floating menus, nav)
  - Allowed: Motion actions, such as shifting an item's display on hover/focus (while translate is more common, position relative can do the same thing)
  - Forbidden: Arranging element blocks in a way that you could use `display` to manage instead
- Do not include, load, or use CSS you didn't write except as directed
- Do not include, load, or use any Javascript you didn't write except as directed
- Do not use float for reasons other than allowing text to wrap around an inline element or text
- Do not use `var`
- Use `let` and `const` as described in class
  - use `const` when variable isn't reassigned
- Load your JS as described in class.  In particular:
    - Do not use inline JS
    - Do not use JS to set or change the `style` attribute
    - Do not use JS to set or change the `style` property
    - Do use JS to add or remove classes using classList() on the DOM Node
- Use meaningful and helpful variable names as described in class
- Use camelCase JS variable and function names
- Use semantic kebab-case or semantic BEM CSS class names 
- Use consistent indentation and helpful whitespace to make your JS, HTML, and CSS easy to read
- Use semicolons appropriately as described in class
    - Our JS must use semicolons as a course requirement
- Add event listener(s) as described in class using addEventListener()
    - Do not use handler related element attributes (Ex: no `onclick` attribute)
    - Do not use direct DOM elements to add listeners/handlers (Ex: No `.onclick` property)
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
- The page displays using `node server.js` as described
  - Notice: NOT `npx serve` - we're using an explicit server so our form can submit
- Your HTML use is reliably semantic
- You did not edit a file that says "Please do not edit this file"
- Your CSS class names are usually kebab-case (or BEM)
  - Remember: BEM will never have a single underscore nor more than one each of `__` or `--`
- Your CSS class names are usually semantic
- Your JS event handlers are loaded using addEventListener()
- You do not use `alert()`, `confirm()`, or `prompt()` in your JS
- You do not use the `style` property on DOM Nodes with JS
- You do not use the `style` attribute
- You do not use the `<style>` element
- You obeyed all of the listed "Do NOT" items under "Additional Restrictions" (each a separate requirement) 

### Additional Requirements
- Your PR has the correct branch name and follows other course expectations for a PR
- Your PR does not include files it should not, even if related to the assignment (`.DS_Store`, `.idea`, `.vscode`, etc)
- Your commit message should be a single sentence that completes the phrase "these changes _______" or similar concept
  - This means your commit message does not START with "these changes".  That part is assumed.
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
- No h1-h6 levels skipped, any such section header is a subheader of the previous level
    - Max of one h1 per page
- Required adaptive breakpoint per requirements
- Content is responsive to avoid horizontal scrolling or poor UI/UX between 360px-1000px width
- Labels are properly associated with fields
- Any content images have accurate and useful descriptive alt text
- Each feature in the various Expectations sections are created as described and per class (multiple requirements)
  - Unless already listed as a separate requirement
- Any other detail mentioned in class or the instructions may be an Additional Requirement

