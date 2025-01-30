# Project 1: Multi-page Website

**Due Wed Feb 12, 11:59pm **

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'project1' (`git checkout -b project1`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit
  - Because this `project1/` folder is NOT inside `work/`, ONLY the `.gitignore` file you created (if you created one) in the root of the repo will be used.  If you did not yet create one, now is a good time to do so.
* Add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

- You will create a website made of several HTML pages and related CSS to demonstrate the skills learned in class so far.
- The website will be about an animal of your choice (real or not, but make sure you will be able to get any images needed following the restrictions in this README!)
- This webpage can be viewed and used by running:
  - `npm install` (only required once on any given computer per project)
  - `node server.js` (starts the server, Ctrl-C to stop running the server)
  - Visiting `http://localhost:3000/` in the browser

## Functional Expectations

- The website will consist of these pages (created inside the `public/` directory):
  - `index.html` ( a "Homepage")
  - `about.html` ( an "About" page )
  - `register.html` (a Registration page to register any data you choose to meet the form requirement)
- Each page will consist of a `<header>`, `<main>` and `<footer>` that are semantically correct.  You may include other elements in/around these (for example, a `<div>` might contain one or all of the above elements) as long as these elements are used in a semantically correct way (those elements must contain content that matches the meaning of the element type - see the element's definitions on MDN if you are uncertain as to what a given element should contain).
- Each page will have a `<title>` element that names the page. 
- Each page will have an `<h1>` element with text that matches the text in the `<title>`
- The site may contain links to pages that do not exist
  - Example: you can have a link to a privacy policy page that does not exist
- Every link should use a filename that could exist
  - Example: you can link to a non-existent "privacy.html", but you should not have multiple links to "/fake", "fake.html", or "#" because "fake" or "#" does not say what the page would be.

## Header/Footer Expectations

- The visual header/footer for each page is identical
  - Hint: There is no way to automatically do this with just HTML, so you will have repeated content in each HTML file.  We will learn alternatives later in the semester.
  - Exception: If the page identifying header (`<h1>` or `<h2>`) is visually in the header, it will be unique on each page
- The header/footer is visually distinct from the main content of the page
- The header will include a "logo" image (of your choice, subject to the image restrictions given in this file)
  - The logo image cannot be a placeholder image
  - The logo image will be a link to the home page
  - The logo image will have an alt attribute that describes the image
    - All your `alt` attributes should be quality, that actually describe the images for someone that can't see them

## Navigation requirements
- The page will include a `<nav>` that includes two options:
    - "Menu"
    - "External Links"
- The "Menu" option in the nav will offer links to each of these pages: 
    - "Home"
    - "About"
    - "Register"
- The "External Links" option in the nav will offer links to at least 3 actual pages on the internet (example: the wikipedia page about Cats)
- The navigation can be anywhere you want in your HTML structure, but should appear on every page
  - Example: The navigation may be inside the `<header>` or it may not be, either is acceptable
- You may choose different specific text for the links 
  - They must link to those pages
  - The text you use must make it clear that they link to those pages
    - Example: "About Us" or "About Dragons" are fine, but "Ponder the Inscrutable" is not clear that it takes you to the about page
- You may link to the pages with absolute or relative paths, your choice
  - You must NOT use fully qualified URLs in these links (Example no mention of "localhost") unless you are linking to pages outside of this project code (such as wikipedia)
- The navigation must be shown in at least one of the following ways:
  - A horizonal menu with dropdowns
  - A vertical menu that does slide-in/slide-out

## Content Expectations

### Homepage Contents

- The home page will include at least 7 UI Cards. 
  - These must be in two different areas
    - These two areas use the 12 column grid with different proportions at desktop size
    - Example: a div with 3 cards about topics in one category ("Cats in the News"), and a second div with 4 cards about topics in a second category ("Famous Historical Cats").  At the widest adaptive size these form 1 full-width row of 3 cards and a second full-width row of 4 cards
    - The cards of the one area do not have to have the same structure/appearance as the other area, but they may (except for the different use of the 12 column grid)
- Each card will contain at least:
  - A visible and semantic heading title
    - Hint: Remember not to skip numbers in h1-h6 elements!
  - A call-to-action link
- Each card will have at least one of:
  - A background color that makes it visually unique from the other cards in that category
  - A image that makes the card visually unique from the other cards
- The links in the cards to not need to link to actual pages
  - They must be `<a>` elements with `href` attributes regardless of appearance
- The Home Page should make it obvious what Animal the site is about

### About Contents

- The About page will include at least 3 paragraphs of text that each contain at least 3 sentences.  
  - At least 1 sentence must be real text saying in more detail what animal the site is about and something about that animal. 
  - The remaining text may be lorem-ipsum like text, but the layout of that text should show how actual text would appear (and should be a reasonable UX).

### Registration Contents

The Register page will include a form
- The form will submit via POST to `/register` 
- The form will ask for (at minimum):
  - name
  - email
  - one piece of info using a checkbox
  - one piece of info using a dropdown
- You should use a 1 column form layout (vertical) for the form
  - Checkboxes/Radios are allowed (and likely should be) exceptions to this convention
  - Remember: the columns used to describe a **form layout** refer to if the form labels are above/below the fields or next to the fields, NOT how many columns of fields are shown to the user
- The form must be usable at the required viewport sizes, but there is no specific requirement for adaptive behavior of the form
- At least 1 form field must be required and should be visibly marked as required
  - Reminder: An asterisk alone does not tell a user a field is required! They may not know what that means
- The page/form should make it clear what information it is requesting

## Responsive/Adaptive Expectations

- Each page is primarily laid out according to a 12-column grid
  - Exceptions are allowed (example: a horizontal menu bar), but the main content of each page should mostly align to the 12 column grid with no exceptions that take up significant space
- This means that every page should have the main content aligned using the 12 column grid, though they need not use all 12 columns (Example, the form might fill only some of the 12 columns, and the labels/fields inside the form do not need to align to the 12 column grid)
- The page must be pleasant to read from 360px and up (at standard font-size), with no cut-off content, overlapping text, or awkwardly wrapped text.
  - You may contain the page contents with expanding gutters, but the page must show responsive behavior (wrapping text) until 800px
- There must be at least one adaptive breakpoint (exact size is your choice) on at least one page
- Adaptive breakpoints should use rem as their unit
- You must have text/panels that are easily seen to be responsive (wrapping text as the browser resizes)

## Accessibility Expectations

- Reasonably resizing text/zooming must not cause your display to become difficult to use
- All font-sizes must be expressed in rem units
- The majority of text must be font-size: 1rem
- All text must be font-size: 0.75rem or larger
- All forms, menus, buttons, and links must be usable with keyboard as well as mouse
- Information must not be conveyed through color differences only
- All form fields must be explicitly associated with a `<label>` element that contains useful text
- Any form fields that are required must be visibly and textually marked as required
- All images must have descriptive `alt` attributes
  - These alt attributes must describe what the picture is/contains
- Any icons must not be required to understand and use the page
  - This means there must be text to explain what happens, icons can only add to the experience, not be the only means to understand it

## Image and Copyright Expectations

- Any images appearing in your pages must be:
  - Ones you personally own
  - From `https://unsplash.com` (under their Free license, not their Plus offerings)
  - From `https://fonts.google.com/icons` (PNG or JPG only)
- All images used must be included in your repo
- Include a `licenses.txt` file in your project directory (at the same level as package.json, not in `public/`)
  - List the url of each image you downloaded from an external source
- Link to the license that allows you to use the image 
    - For icons from google fonts, use this link: https://fonts.google.com/icons#:~:text%3DApache
  - For any images that you personally own and used:
    - List the filename of that image as you have it in this project
    - Instead of linking a license, say "personal copyright"  

## Demonstrated Skills

These are skills that I/TA(s) must be able to confirm you have an understanding of based only on seeing you use the skills in the HTML/CSS
- Box Model
- Semantic HTML
- Semantic Class names
- CSS organization
- CSS Grid
- CSS Flexbox
- 12 column grid layout
- A non-static position property
- Responsive HTML
- Adaptive HTML
- HTML Forms

## Extra Credit (See Bonus Requirements in Grading) 

Extra credit points should be worked on only after fulfilling all the other requirements, because the other requirements are more important to your grade.  The Extra Credit has some subjective elements, so focusing on the main requirements is a better guarantee of points.  It is expected that not every attempt to get extra credit will actually get extra points.

- Use of colors and borders to create distinct visual areas
  - This requires more than just having colors/borders - the created areas should be recognizable as distinct and have a reason for being distinct (such as covering different topics)
- Good use of box-shadow to add visual depth to cards or buttons
  - Again, this require more than the having the properties, the results should create a visual texture
- Strong use of whitespace and line-height to create clear, readable text
  - Demonstrate the use of Proximity and Whitespacing to associate related content and separate less-related content.  
  - No text should feel squished against borders or be difficult to read
- Additional page content to provide context and ways to expand the site in the future
  - The result should not feel like a "minimal" project, and suggests how you would expand the material to create a "real" site.

## Additional Restrictions
- Do not load or use any Javascript (JS) (soon!)
- Do not alter server.js
- Do not use `float` unless wrapping text around an inline element
- Do not use `position` to do the normal layout/arrangement of elements of the page
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have learned the lessons based one what we read
- Do not use placeholder images!
- Do not link to external images - download the images and include them in your repo
- Do not have images that are not listed in the licenses.txt
- Do not download and use random images from the internet/web.  Only use your own images or images from one of the permitted sites
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not load or use any CSS you did not write

## Grading

Note: The project is to show your understanding of the material from class.  If you don't show your understanding of class material, you can lose points, even if your code "works".  

**Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).**

This project is graded as a base of 100 points
- Each Critical Requirement you miss is a minimum of -10 points, and may lose more
- Each Additional Requirement you miss is -2 points. There may be MANY non-critical requirements, and they add up!
- Each Bonus Requirement is +2 points, and the Project grade exceed 100%
  - Remember that this project is 25% of the course grade, so just one +2 on this project is worth more than a -2 on every single assignment added together 
  - You wish to first fulfill all the Critical and Additional Requirements for the same reasons: missing them hurts more on a Project
- If you are not showing the lessons from class, your grade will be worse or even given a 0. Each week builds on the material from the previous week so it is important that you learn and practice the lessons from class.

### Critical Requirements
- Your submission demonstrates that you practiced the overall purpose of the project
- You create a PR with your code for this project roughly following the course process
- PR does not contain changes to files unrelated to the project
- The site displays using `npm install`, `node server.js` as described
- Every field has a correctly and explicitly (using `for`) associated label element that includes a useful text label
- The form correctly has the expected fields
- The form submits correctly to the expected url with the expected method
- The form displays the labels and fields in a 1 column form layout (vertical) except for allowed exceptions
- The form is usable with both keyboard and/or mouse navigation
- Every skill listed in "Demonstrated Skills" is used sufficiently to show your understanding of the concept
  - Ex: If you use Box Model properties terribly, you will fail related requirements, but pass this one (demonstrated low understanding is still a demonstration).  If you simply don't use any of those properties, you will fail this requirement.
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
- Form fields that are required are indicated to the user, clearly and understandably
- You do not rely on color alone to convey meaning in fields or field-related text
- Form fields reached via keyboard navigation have a focus outline
  - This is there by default, you may alter it but should not remove it
- Each bullet point under the various Expectations is created as describe and per class (multiple requirements)
  - Unless already listed as a separate requirement
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

### Bonus Requirements

- Use of colors and borders to create distinct visual areas
- Good use of box-shadow to add visual depth to cards or buttons
- Strong use of whitespace and line-height to create clear, readable text
- Additional page content to provide context and ways to expand the site in the future
