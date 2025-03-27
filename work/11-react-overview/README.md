# React Overview Assignment

**Due: Wed Apr 2, 11:59pm **

This assignment will be ungraded, but is a great chance to practice your skills and get feedback before the final project.

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'review' (`git checkout -b react-overview`)
* Create a React project in this directory using Vite
* Add/Delete/Modify the necessary files to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Demonstrate your understanding of:
- Using React Conditional Rendering for
    - Components
    - Class names
    - HTML(ish) content
- Breaking up content appropriately into Components 
- Using React State and passing setters/wrapped functions around setters
- Performing form validation in React

## Expectations

Create a react project using vite that:
- Is a Single Page Application
  - Any references to "page" or "navigation" below refers to changing state to show different content and not multiple HTML files or having the browser actually perform additional page loads.
- Contains the following:
  - Two "pages" (or so the user thinks)
    - A "Home" page
    - A "Profile" page
- The Home Page has content and layout of your choice, but must include:
  - A "Logo" image in the upper left
    - Clicking on the logo will navigate to the "Home page"
  - A "Profile pic" in the upper right (based on profile data, see below)
    - Clicking on the profile pic opens a dropdown revealing:
        - The username.  This is shown in a different font and is "fabulous" when the profile data says the user is certified "dog free", or is in normal text otherwise.  You define what "fabulous" looks like.
        - A "Profile Settings" link that will navigate to the Profile page.
- The Profile Page shows the profile data.  
    - Each datum should have identifying text (Example: "Username: Jorts") should not be shown as a form field, and should each be on a distinct line from each other.
        - The selected profile pic name (see below)
        - The username
        - The user's actual name
        - A checkbox "Verified Dog Free"
    - Each line of profile datum has a button with an appropriate icon image and the text "Edit"
        - If the "Edit" button for a line is clicked, the text for the field is replaced with a form field (username or actual name), checkbox (dog-free), or select dropdown (selected profile pic, must be from a set of predefined pictures of your choice).  The Edit button is replaced with two buttons "Save" and "Cancel".  Add enough space between these so that it is difficult to click the wrong one by accident.
        - Editing any field will show an appropriate validation message.  A field will not "Save" while the field is invalid.
            - Profile pic has no validation
            - Username cannot be empty or contain only whitespace
            - Username cannot be "dog" (validation message should be "You're kidding, right?")
            - User's actual name can be empty, but cannot be only whitespace
            - "dog-free" has no validation
        - Saving any field (Each field is managed separately, they are not all part of the same form) while the value is valid will update the profile state appropriately.  Saving an empty "actual name" field will save the actual name to be equal to the username.
- The App will start with default values of your choice already present in the state (a selected profile pic, a username, etc), so any required fields will already have a valid value
- Deeplinking isn't required, but feel free to try it out.

### Adaptive/Responsive Expectations

- App should be a good UX from 360px wide to 1000px wide (when normal text size), including on mobile devices.  You choose what that requires.

### Accessibility Expectations
- Use Semantic HTML properly
  - In particular for this assignment: buttons
- Follow WCAG guidelines mentioned in class
- Use ARIA attributes when necessary to identify data or interactions
  - Not any ARIA you CAN do, the ones that are needed for your content, such as aria-expanded on the dropdown
- All form fields must have labels
- Keyboard navigation and mouse navigation must both work

### Visual Expectations

- The profile pic is one of a limited number of images you select in advance.  (The user is just picking which of these to use, they are not uploading a new profile pic).  Remember to put images in 'public' and import them with an absolute path if you want their filenames unchanged or to put them in 'src' and import them with relative paths if you are okay with the filename being changed.
- Provide enough spacing to make your text legible and areas of the screen distinct

## Additional Restrictions
- Do not use outside JS or CSS libraries (including any outside React libraries, which are JS libraries).  Only use Vite as shown in class.
- Do not use JS to directly interact with the DOM
  - This means no `querySelector`, no `getElementXXX`, no `classList`
- Do not set `style` attributes, props, or properties!
- Do not not modify DOM nodes using `.classList`
- Do NOT use `alert()`, `confirm()`, or `prompt()`
- Follow the methods used in class or described in this README
- You must remove/replace the default provided CSS
  - This means no setting `style` attributes, properties, or props
- Do not use table, CSS table-cell, floats, or other related concepts for layout of the page structure (floats for text around images is fine, tables of data are fine)
- Do not use CSS Modules, styled-components, CSS-in-JS or other alternate forms of CSS organization
- Do not use outside JS or CSS libraries outside of what is installed by Vite
- Follow the methods and best practices used in class or described in this README

## Grading

Note: The assignment is to show your understanding of the material from class.  If you don't show your understanding of class material, you can lose points, even if your code "works".  

**Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).**

This project is graded as a base of 100 points
- Each Critical Requirement you miss is a minimum of -10 points, and may lose more
- Each Additional Requirement you miss is -2 points. There may be MANY non-critical requirements, and they add up!
- If you are not showing the lessons from class, your grade will be worse or even given a 0. Each week builds on the material from the previous week so it is important that you learn and practice the lessons from class.

### Critical Requirements
- Your submission demonstrates that you practiced the overall purpose of the project
  - Changing visible page content in React
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
- You show the different pages of content using the Conditional Rendering techniques shown in class, not by hiding content with CSS or any other technique

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
    - One property/line
    - Indented with a space before `{`
    - Declarations have a space after the `:`
  - CSS selectors tend to use class names (when available)
  - CSS selectors with just element types or combinations of types are setting defaults for that element type, not a specific appearance for a particular usage of that element type


