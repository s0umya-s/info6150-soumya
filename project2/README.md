# Project 2

**Due: Wed Mar 12, 11:59pm **

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'project2' (`git checkout -b project2`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory
  - `node_modules` and files inside it must NOT be added to your commit 
  - `package-lock.json` MAY be added to your commit, but is not required
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goals and Expectations

Provide ( in `public/`) the necessary HTML, CSS, and JS files to create the experience shown in the included images using the skills and best practices taught in class.

- Only the "index.html" and "cats.html" pages are required, the other links must be usable URLs that link to non-existent pages
  - Adding additional pages can net you extra credit, but fulfill the required pages and functionality first

This webpage can be viewed and used by running:
- `npm install` (only required once on any given computer for each project/assignment)
- `node server.js` (starts the server, Ctrl-C to stop running the server)
- Visiting `http://localhost:3000/` in the browser

### Functional Expectations

- Matching the exact text/images of the pages is not required
  - Any replacement text should make sure to demonstrate different line lengths and text blocks of different heights
  - Any replacement images should be the same sizes
  - They cannot be placeholder images, you must have actual images that are files in the repo and of an appropriate size.
- The same HTML must be used for the main navigational menu, both for the "desktop" horizontal menu and the "mobile" hamburger menu. All adaptive changes in presentation should be done with the same HTML content 
  - Elements can be shown or hidden (such as the hamburger menu icon), but there should not be two different versions of the same content that are in turn shown or hidden. If some content is visible in both adaptive views, the same HTML should be responsible for showing it with only styling differences.
- The logo image is also a link to the "/" page (index.html)
- Activating one of the "Subscribe" buttons (styled to look like links) on the "Famous Cats" page opens a modal window
  - Esc key must close this modal window
    - Hint: This is built in behavior if you use a `<dialog>`-based modal as required and as described in class.  No extra effort is required to make this work if you do so.
  - There must be only one single modal (one `<dialog>` element) but it can be opened by each of the "Subscribe" buttons
  - Note: This is a poor use of a modal, and is done to demonstrate your skill
- The form validation is done with JS, not HTML-based
  - This means you must NOT have `required` attribute or `pattern` attribute unless you prevent the browser from displaying a UI based on these attributes
  - The form fields are required
  - The email field must have an "@" in it
    - Do NOT test for any other email-like trait/text
        - ONLY test for an "@" symbol
    - NOT using type="email"
  - The confirm field must match the email field for the submission to succeed
  - These fields are tested when their value changes AND when the form attempts to submit
- When validation is passed, the form will submit to "/subscribe"
    - This will display a boring unstyled confirmation page, that's fine
    - You must confirm the confirmation page does list your entered fields and values, however
- When Cancel is pressed the modal closes, regardless of validation

## Responsive/Adaptive Expectations

- Both pages have an Adaptive Breakpoint at 44rem
- Both pages are Responsive at sizes other than the Adaptive Breakpoint
  - Grading will review using rem units to match up with 360px to 1200px in viewport width at standard text sizes
- Remember to set paddings/margins on elements to maintain some whitespace between text/elements
  - 0.5rem is a good distance for this assignment
- The main navigation menu changes from a horizontal menu in desktop sizes to a click-based hamburger menu at mobile sizes
- The footer navigation menu changes from a horizontal menu in desktop sizes to a vertical menu at mobile sizes
- The Home page panels lose the space between them and around them at mobile sizes
  - There is NOT a double-thick line between them
- The Home page panels have the text around the images at mobile size, but not at desktop size
  - Yes, this is done with float, using float the way it is meant to be used

## Accessibility Expectations

- The pages contain a "skiplink" letting you skip to the main content
- Reasonably resizing text/zooming does not cause your display to become difficult to use
- All forms, menus, buttons, and links must be usable with keyboard as well as mouse
  - This is demonstrated in the reference images when the mouse isn't moving and the focused links are changing
  - The hamburger icon can be reached via keyboard, and is activated with Space/Enter to open the menu
  - Tabbing on the hamburger menu is closed does NOT select (invisibly) one of the menu links. Instead it selects the next visible link on the page
- No information should be conveyed through color differences only
- All form fields should be associated with a `<label>` element that contains useful text
- Any form fields that are required should be visibly and textually marked as required
- All images must have descriptive `alt` attributes
  - These alt attributes should describe what the picture is
  - Alt text must be descriptive enough to be meaningful. "A happy cat" is not descriptive enough.
  - Logo images on these pages are not exempt from requiring an alt attribute
- Any icons are not required to understand and use the page with a screen reader
  - This means there must be aria-label text or visible associated text to explain what the icon is/does

## Appearance Notes

- The colors used on the page are:
  - papayawhip 
  - burlywood
  - #eee or #eeeeee
  - lime
  - lightcoral
  - black (with 0.7 opacity when used as a backdrop)
  - dodgerblue
  - red
  - blue
  - white
- image dimensions:
  - 100x100px (logo)
  - 200x200px (panels and cards)
  - 125x125px (floating in panels)
- line heights:
  - 1.2 (default)
  - 1.4
  - 1.6
- padding/gaps/margins:
  - 0
  - 0.5rem
  - 1rem
  - 2rem
- font-sizes
  - 1rem (default)
  - 1.2 rem (form buttons)

## Demonstrated Skills

These are skills that I/TA(s) must be able to confirm you have an understanding of based only on seeing you use the skills in the HTML/CSS
- Semantic HTML
- Semantic Class names
- CSS Grid
- CSS Flexbox
- 12 column grid layout
- A non-static position property
- Responsive HTML
- Adaptive HTML
- HTML Forms
- JS-based Form validation and reporting
- A dialog element-based modal window
- A hamburger menu using JS

## Extra Credit

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are more points

## Additional Restrictions
- Follow the best practices from the course
- Do not use HTML-based form validation (including type="email", use type="text" instead)
- Do not use float unless wrapping text around an image/inline element
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS
  - Exception: You may use icons downloaded as SVG/PNG from http://fonts.google.com/icons 
    - You MUST include the filename of any such image in your `licenses.txt` file AND include this link as the license information: https://github.com/google/material-design-icons/blob/master/LICENSE
- Any images must be ones you personally own, be from the Material Icons images mentioned above, or be from `http://unsplash.com`
  - You must have any images you use downloaded into your repo
  - You must include a `licenses.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - For any images that you personally own and used, list (in `licenses.txt`) the filename of that image as you have it in this project, and list your name as the owner.
  - Do NOT download and use random images from the internet/web.  Only use images from the listed sites (or that you own) and that you have permission to use
- Do not use var
- Use let and const as described in class (use const when variable isn't reassigned)
- Do not load your JS in any way other than as described in class
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

Note: The project is to show your understanding of the material from class.  If you don't show your understanding of class material, you can lose points, even if your code "works".  

**Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).**

This project is graded as a base of 100 points
- Each Critical Requirement you miss is a minimum of -10 points, and may lose more
- Each Additional Requirement you miss is -2 points. There may be MANY non-critical requirements, and they add up!
- Each Bonus Requirement is +2 points, and the Project grade may exceed 100%
  - Remember that this project is 25% of the course grade, so just one +2 on this project is worth more than a -2 on every single assignment added together 
  - You should first fulfill all the Critical and Additional Requirements for the same reasons: missing them hurts more on a Project
- If you are not showing the lessons from class, your grade will be worse or even given a 0. Each week builds on the material from the previous week so it is important that you learn and practice the lessons from class.

### Critical Requirements
- Your submission demonstrates that you practiced the overall purpose of the project
- You create a PR with your code for this project roughly following the course process
- PR does not contain changes to files unrelated to the project
- The site displays using `npm install`, `node server.js` as described
- The results generally resemble the provide reference images
- You use a single `<dialog>` element and open a modal from each Subscribe button
- You have the required Adaptive Breakpoint as described
- Your content is responsive, roughly matching the reference image 
  - Note how text wraps around the image at one adaptive size, but not in the other
- You have a working skiplink that is visible if focused using the keyboard
- Your `licenses.txt` file list all images, their sources, and their licenses
- You do not use the `style` attribute
- You do not use the `<style>` element
- You obeyed all of the listed "Do NOT/Do not" under "Additional Restrictions" (each a separate requirement)

### Additional Requirements
- Each item listed under "Additional Restrictions" that is not a "Do NOT/do not" (each a separate requirement)
- Every form field has a correctly associated (implicitly or explictly) label element that includes a useful text label
  - This is easily testable by clicking the label to focus the field
- The form correctly has the expected fields
- The form submits correctly to the expected url with the expected method
- The form is usable with both keyboard and/or mouse navigation
- Every skill listed in "Demonstrated Skills" is used sufficiently to show your understanding of the concept
  - Ex: If you use Box Model properties terribly, you will fail related requirements, but pass this one (demonstrated low understanding is still a demonstration).  If you simply don't use any of those properties, you will fail this requirement.
- Your HTML use is reliably semantic
- Your CSS class names are usually kebab-case
- Your CSS class names are usually semantic

- Your PR has the correct branch name and follows other course expectations for a PR
- Your PR does not include files it should not, even if related to the assignment (`.DS_Store`, `.idea`, `.vscode`, etc)
- Your commit message should be a single sentence that completes the phrase "these changes _______"
- Your commit message makes sense if someone reading it doesn't know what assignment it is part of
- Your content displays reasonably for a range of viewport widths, from 360px - 1000px
- Your content is responsive where appropriate
- Your content does not use a rigidly defined layout of fixed sizes that would making changes complicated
  - Ex: Do not use a fixed size that is made up of 4 other fixed sizes
- Your CSS appears to follow an organized ordering of rules and properties within rules
- Form fields that are required are indicated to the user, clearly and understandably
- You do not rely on color alone to convey meaning in fields or field-related text
- Form fields reached via keyboard navigation have a focus outline
  - This is there by default, you may alter it but should not remove it
- Each bullet point under the various Expectations is created as describe and per class (multiple requirements)
  - Unless already listed as a separate requirement
- You demonstrate an understanding of each skill listed in Demonstrated Skills (each a separate requirement)
  - These skills must be demonstrated using the methods shown in class or built from the methods shown in class
  - Example: We didn't explicitly cover a hamburger menu in class, but you can build one using the methods we have covered.  Searching for a solution may use other techniques that "work", but will not fulfill this requirement
- Any other detail mentioned in class or the instructions may be an Additional Requirement
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

### Bonus Requirements (Extra Credit)

Each item for Extra credit is based on meeting all of these requirements
  - You must demonstrating skills learned from class
  - Your demonstrations must show sufficiently complex understanding
    - Very simple inclusions do not count for credit
  - Your additions must improve the User Experience (UX)
  - Your additions do not prevent your work from matching the reference images

- Transitions/animations on state/visibility
  - Any motion MUST be added in media queries that check prefers-reduced-motion to count for credit
- Create any additional pages that are linked to on this page and provide content that demonstrates other skills from class 
- The "additional pages" credit can be fulfilled up to twice for different pages showing different skills)
- Above average clarity in your JS variable/function names
