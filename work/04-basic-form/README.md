# Assignment - Basic Form

**Due: Wed Feb 5, 11:59pm ** 

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'basic-form' (`git checkout -b basic-form`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit.
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goals and Expectations

You will create a webpage that contains a registration form as described below.
- This page will be usable with the webserver described below
- This page and the form on the page will be styled as described below

### General Expectations

- You will create a webpage (`index.html`) in the `public/` directory found in this directory
    - Note: _in the public/ folder!_
- You will use a provided custom webserver to handle the form input
    - NOT `npx serve` (otherwise submitting your form won't work)
- This webpage can be viewed and used by running (in the same folder as this README):
  - `npm install` (only required once on any given computer for this project)
  - `node server.js` (starts the server, Ctrl-C to exit)
  - Visiting `http://localhost:3000/` in the browser
- The page you create must use semantic HTML and semantic CSS

### Page Expectations

- The page must have a visually distinct header
  - An `<h1>` header text is required, logo image and/or menu are optional
  - If you want a logo image, you can use a placeholder or an image you personally took ONLY (more options later)
- The page must have a visually distinct footer
  - A link to a "privacy policy" is required
    - The link does not need to link to an existing page
    - The styling and structure of the footer is otherwise up to you
- The main content of the page (including the form) must be inside a `<main>` element

### Form Expectations

- The form must submit to `/submit` using POST
  - This server will show the data that is sent so you can confirm it works
    - Do not worry about styling the page of results
    - Make sure that the page of results correctly shows the entered data
- The form must collect the user's name (as field `name`)
- The form must collect the users email (as field `email`)
- The form must have checkbox for "Do you want us to send you annoying emails?" (as field `annoy-me`)
  - The checkbox must default to being checked when the page is loaded
- The form must have a dropdown field offering the options of "Silver Tier", "Gold Tier", or "Platinum Tier" (the data sent is "1", "2", or "3" respectively, as field name `tier`)
  - The form must default to having none of these selected, and instead an option with an empty value and the option of "Please select" will be selected by default
- The form must have a submit button with the text "Register"

The name, email, and dropdown fields are required to have a value for the form to submit. The form should visually indicate the fields are required before any fields are filled in, in a manner that provides good a11y.
- Ex: Can't be just a red `*` if the `*` isn't defined on the page

### Styling Expectations

- The page must be responsive and adaptive, with a breakpoint of your choice that works well with the content
- The "desktop" version must show a two-column form layou
  - Remember: "two column form layout" refers only to the relationship between the label and the form field, NOT the number of columns of content
  - Note: Two column form layouts are not preferred - this assignment has them to force practice, not to encourage their use
  - The checkbox must have the label on the right of the field, unlike the other fields
- The "mobile" version must have a one-column form layout
  - Remember: "one column form layout" refers only to the relationship between the label and the form field, NOT the number of columns of content
  - The checkbox must have the label on the right of the field, unlike the other fields
  - The checkbox will not follow the one-column format, unlike the other fields
- One column form layout labels must be closer to their related field than to the any field above them
- Two column form layout labels must be aligned close to the field

### Accessibility Expectations
- The form must allow navigation and use with both the keyboard (using tab, typing, and space) and mouse
  - Hint: This is automatic if you use semantic HTML and correctly associated labels
- All fields must be labeled and the labels must be explicitly associated with the fields
- Every form field should have a functional label with meaningful text
  - Hint: Easy test is to click the label text - it should focus/activate the input
- "Required" fields are labeled as such in a way that do not require color-sightedness
- The page layouts must be reasonable for readability and comprehension at a range of widths, from 360px to 1000px (with normal text-size)

## Allowances
- You must have explicit association between labels and fields, but you can choose if you have an implicit association as well
- You decide whether to write your CSS as mobile-first or desktop-first
- You decide how to construct your form HTML, as long as it meets the other requirements
- You may have additional text in/around the form to create a more involved experience, your choice
- You may create any additional semantic HTML for the page subject to the rest of the requirements

## Additional Restrictions
- Do not use tables or table-layouts
- Do not use positioning to manipulate the layout of form elements
- Do not use transforms, transitions, animations, or other effects not yet covered in class. (soon!)
- Do not include, load, or use CSS you didn't write 
- Do not include, load, or use any Javascript on the page (soon!)
- Do not use float for layout
  - This assignment must have NO use of float
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
- The page displays using `npm install`, `node server.js` as described
- Your form has two versions that roughly match the requested "one-column" (vertical) and "two-column" (horizontal) layouts (even if those layouts have errors)
  - Note: Failing to understand that these do not refer to the number of columns shown will likely fail this requirement.
- Every field has a correctly associated label element
- The form correctly has the expected fields
- The form submits the data from those field using the expected `name` attributes and values
- Form form submits correctly to the expected url with the expected method
- Your HTML use is reliably semantic
- Your CSS class names are usually kebab-case
- Your CSS class names are usually semantic
- You do not use the `style` attribute
- You do not use the `<style>` element
- You obeyed all of the listed "Do NOT" under "Additional Restrictions" (each a separate requirement)

### Additional Requirements
- Your PR has the correct branch name and follows other course expectations for a PR
- Your PR does not include files it should not, even if related to the assignment (`.DS_Store`, `.idea`, `.vscode`, etc)
- Your commit message should be a single sentence that completes the phrase "these changes _______"
- Your commit message makes sense if someone reading it doesn't know what assignment it is part of
- Your content displays reasonably for a range of viewport widths, from 360px - 1000px
- Your content is responsive where appropriate
- Your content does not use a rigidly defined layout of fixed sizes that would making changes complicated
  - Ex: Do not use a fixed size that is made up of 4 other fixed sizes
- Your CSS appears to follow an organized ordering of rules and properties within rules
- The field labels are explicitly associated (using `for` attribute)
- Form fields that are required are indicated to the user, clearly and understandably
- You do not rely on color alone to convey meaning in fields or field-related text
- Your form fields and controls can be reached and used using both keyboard and mouse navigation
- Form fields reached via keyboard navigation have a focus outline
  - This is there by default, you may alter it but should not remove it
- The forms correctly meet all display expectations that aren't covered by other requirements
  - In particular the checkbox will have a different label layout from other fields
- The adaptive change meets the expectations
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
- Each feature in the various Features sections is created as described and per class (multiple requirements)
  - Unless already listed as a separate requirement
- Any other detail mentioned in class or the instructions may be an Additional Requirement

