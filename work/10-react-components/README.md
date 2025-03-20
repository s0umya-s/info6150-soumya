# React Components Assignment

**Due: Wed Mar 26, 11:59pm **

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-components' (`git checkout -b react-components`)
* Create a React project in this directory using Vite
* Add/Delete/Modify the necessary files to have the required features
* add, commit, and push the branch to github
  - You will add/commit ALL the files created by Vite, not just the files you personally modify
  - Except for `node_modules/` and `dist/` (which should automatically be ignored by the .gitignore file Vite creates) you want to commit all the files Vite creates so that anyone getting your project from github can use it without making changes.
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a react project using vite that:
- Is a Single Page Application
- Has 3 "pages" from the perspective of the user
  - A "page" of mostly text content
  - A "page" of cards
  - A "page" with distinct "panels"
- Have some way for the user to change which "page" is shown 
  - Pass this ability around to different components
- Write a Button component
- This Button component is used multiple times (see below)
- This Button component accepts props that change the rendered appearance
- You will have a modal window using `<dialog>`

## Setup Expectations

- Create a react project named "components" inside this directory using Vite
- Modify the files in the src/ directory inside components/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.

## Functional Expectations

- Your app should show at least 3 different "pages"
  - "pages" here means the visible appearance, not actual .html files
  - All pages show the SAME header and footer
  - Each page has some navigation that allows you to to the other "pages"
  - One "page" will show mostly text content (text of your choice)
  - One "page" will show a set of cards (content of your choice)
    - At least one card should include a link that leads to a different "page"
      - The other cards do not need to have links
  - One "page" should have "panels" (Text and images side-by-side)
- There should be Header and Footer components
- There should be at least one Component for each of the "pages"
  - Those components may use additional Components if you wish
- Create a Component (outside of App.jsx) that includes and uses a `<dialog>` element for a modal window
- Create a Button component Use your Button component in 3 different ways
  - At least once with `type="button"` and `visual="link"` props in addition to any other props
  - At least once with `type="button"` and `visual="button"` props in addition to any other props
  - At least once with `type="submit"` and `visual="link"` props in addition to any other props
  - The `visual` and `type` props can default to a value, but must be able to be overridden by passing the appropriate prop
- A Button component should render a `<button>` with the matching `type` attribute
- The "submit" option above should be done in a form in a `<dialog>`-based Modal
- Clicking/submitting with ANY of the above options should NOT navigate the page
- You choose how, but each of the above options should visually let the user know they clicked the button
  - `console.log` is NOT visually letting the user know - it must be in their rendered page
  - This can be as simple as a conditionally rendered message in the HTML saying they clicked the button
  - Hint: This means something will need to change in some state so you can conditionally render
  - Hint: This means you will need to pass a function as a prop to handle onClick for the generated button
  - You may use instances of the Button component to open/close the modal.  These can count towards the 3 required Buttons.
- This assignment does not require a "complete" looking web page, but you can choose to include that

## Visual Expectations

- A Button component with a `visual="button"` prop will have styling to look like a button
- A Button component with a `visual="link"` prop will have styling to look like a link
- As mentioned in Functional Requirements, each Button must change the state so that the user can easily tell that clicking the button DID something
  - This involves the button changing a value in state and that state being used to conditionally render text or a component
- In addition to meeting the _functional_ requirements, try to make your page an attractive webpage that would make sense to a user.  Provide a concept/purpose for the page that explains the functionality.

## Accessibility Expectations

- Any links/buttons and navigation must be usable by both mouse and keyboard
- Any images should have useful alt attributes (logos must say that it is a logo and what the logo is for at a minimum)
  - There is no specific requirement for images in this assignment, but you may want to use them to create an attractive web app
  - If you include images, you should download them and use a licenses.txt to list the origins AND licenses that let you use the images.
- You should use Semantic HTML and other best practices from class

## Adaptive/Responsive Expectations

- No special requirements - You can provide such functionality, but there is no requirement for this assignment

## Additional Restrictions
- Do not use table, CSS table-cell, floats, or other related concepts for layout
- Do not use outside JS or CSS libraries (including any outside React libraries, which are JS libraries).  Only use Vite as shown in class.
- Do not use JS to directly interact with the DOM
  - This means no `querySelector`, no `getElementXXX`, no `classList`
- Do not set `style` attributes, props, or properties!
- Do not not modify DOM nodes using `.classList`
- Do NOT use `alert()`, `confirm()`, or `prompt()`
- Follow the methods used in class or described in this README

- You must remove/replace the default provided CSS
  - This means no setting `style` attributes, properties, or props
- Do not use table, CSS table-cell, floats, or other related concepts for layout of the page structure (floats for text around images is fine)
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
  - Able to pass a function to perform this change
  - A reusable Button component
  - Using `<dialog>` for a modal window
  - Interacting with that dialog modal using React
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

