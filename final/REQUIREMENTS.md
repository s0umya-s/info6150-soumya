# Final Project

**Due Mon Apr 21, 11:59pm **

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'final' (`git checkout -b final`)
* Create all necessary files for your project here
* add, commit, and push the branch to github
  - Commit with a GOOD commit message!  Not "Adds MYNAME" or "Adds files via upload"
* Create a PR to merge to main
* Be sure to include the TA(s) and myself as reviewer(s)

Hint: Because we've already covered most of the content of this project, the scoring is heavily impacted by attention to detail.  **I must be able to definitively say that you understand the concepts you are using based on this code**.  A minimal implementation can leave that unclear.  Use this project as a piece to demonstrate not only to me but also to future employers rather than trying to do the minimum required effort.

## Goal

- Create a React-based Single Page Application (SPA) using Vite
- This web app will be about a topic of your choice
  - This can be informational, a game, whatever, your choice
- This web app MUST appear "complete"
  - No fake screens/views/pages
  - No lorem ipsum-like text
  - Appropriately complete visuals
- This web app will have certain required and a selection of optional features (see below)
- This web app will demonstrate your your understanding of the best practices and concepts taught in class
- The web app will be tested by running these commands in your React project folder:
  - `npm install` (once per project)
  - `npm run build`
  - `npx serve -s dist`
  - Be sure to run this process to test your application! An improperly written app may work with the dev server from `npm run dev` and NOT with the above flow!

## Fully Required Feature Expectations

Your web app MUST feature all of the below, in addition to featuring SOME of the "Partially Required Features"

### Additional Submission Expectations

- Your submission must NOT include the `dist/` directory as part of your commit and PR
  - The project will default to correctly excluding the `dist/` directory because Vite creates a `.gitignore` file, so just don't break that default behavior
  - Properly using git is part of your score!

### Functionality Expectations
Your web app MUST contain and demonstrate these features/abilities/style of writing

- Multiple "pages" for the SPA that replace most/all of the main content
  - Navigation and branding can remain between pages, your choice
  - Your app must consist of at least 3 "pages", but I expect most projects will have more pages than 3 in order to demonstrate all features
- A navigation that allows the user to move from one "page" to another in the SPA
  - Your app does not require the user to use the browser "Back" button
  - Your app does not require the user to reload/refresh the page
- At least one form with some sort of validation that conditionally appears
  - "conditionally" here means the HTML and/or text is or is not in the content, it not always in the content but sometimes hidden by CSS
  - This validation must NOT display the browser default HTML-based validation
  - You can have additional forms that do not have input limitations (and thus have no validation)
  - All forms that DO have input limitations must have validation 
  - You are required to have at least 1 form that has input limitations (and thus has validations)
- A `<title>` that describes your application

### Maintainability Expectations

- Your CSS class names must be semantically descriptive
- Your CSS class names must be kebab-case or BEM-style
- Your `.css` must be follow the practices of class
- Your styling must not use CSS Modules, styled-components, or other CSS-in-JS styles
  - Not because those other practices are bad, but in order to see that you have learned the general lessons from class
  - You must not set any `style` attributes, properties, or props
- Your CSS must be in more than one file
- Your `.css` files must be organized to make it easy to find the proper file for styling a given element
- Your `.css` within a file must be organized to make it easier to find/modify the rules and properties for a given element
- Your CSS must use classes unless setting app-wide defaults for elements or targeting specifically unique elements (ex: a skiplink or `#root`)
  - Including other selectors in addition to classes (example: `.footer a`) is acceptable if it follows the lessons of class
- Your Components must each be separate `.jsx` files
- Your Component file filenames must match the component name
    - The component functions must be named in MixedCase
        - The `main.jsx` file that Vite creates is an exception
- Any JS files that are not using JSX must be `.js` files
- All `.js`, `.jsx`, and `.css` files must be consistently indented
- While the app is tested in Chrome for grading, you must not use CSS/JS features that are not supported in all modern major browsers

### Legalities Expectations

- Outside images or CSS MUST be in your repository, not linked from outside
- Any images that you use MUST be listed in `licenses.txt` saying where the image is from and what license allows you to use it
  - For future work, remember that the `licenses.txt` I require is NOT how you would track legalities on the job
    - But only because there is no standard.  You MUST track the source and license for any external material used in the workplace
  - You must only use images from `http://unsplash.com`, .SVG or .PNG (only) from https://fonts.google.com/icons, or images you own

### Visual Expectations

- You MUST have an identifiable color palette for your site that goes well together
- Different areas of the "pages" of your SPA MUST appear visually distinct and have whitespace and boundaries that are sufficient and helpful for the user
- The app must appear to be "complete"
  - No placeholder text (Meaning no lorem-ipsum"-like text.  Placeholder attributes are allowed)
  - No placeholder images
  - No links to non-existent content
    - Exception: Links to social media accounts can link to other accounts, as if those accounts were for your project
  - Content the user would expect is present

### Responsive/Adaptive Behavior Expectations

Your web app MUST demonstrate these responsive/adaptive behaviors
- General Responsive behavior that allows the page to be readable and clear at any viewport sizes in between adaptive breakpoints (between 360px and 1200px widths at standard font size)
- At least one Adaptive breakpoint (Exact breakpoint size is of your choice, but we must notice it)

### Accessibility Expectations

Your web app MUST demonstrate these accessibility features

- You must use Semantic HTML when there is a clearly appropriate semantic HTML element for the purpose
  - `<a>` is used for navigation (between "pages" of the Single Page Application or to urls that are not part of the Single Page Application)
  - `<button>` is used for controls of an interactive portion of the "page"
  - You can make a `<button>` look like a link or make `<a>` look like a button, but the element used must match the actual semantic purpose (`<a>` for navigation and `<button>` for controls) regardless of the visual appearance
- You must use landmark HTML elements where appropriate
  - Ex: `<header>`, `<footer>`, `<main>`, `<nav>`
  - `<article>` and `<section>` have subtle semantics and their use is not required for this project 
- Any heading elements (`<h1>`, `<h2>`, etc) must be properly used
  - They are used for titles of content that is a subsection of the previous heading
  - No levels in between are skipped
  - The current HTML never has more than one `<h1>` element at a time
- ALL foreground images must have a useful and accurate `alt` attribute
  - "useful" and "accurate" are IMPORTANT.  It is not enough to have alt text if that alt text is not helpful to someone using it.
  - For this project, that includes any "logo" images
- Any image in the background MUST NOT display any relevant information to the user
- All font sizes must be in rem units
    - The majority of your text content must be sized 1rem
    - You must not have font sizes below 0.75rem
- Your pages must remain readable/usable when zoomed in up to 200%
- All controls and form fields must be accessible/usable via both keyboard and mouse
  - The skiplink must be focusable by keyboard.  It MAY be reachable otherwise
- You must have a skiplink that works when the app is loaded
  - Each "page" should work with the skiplink
  - "work with skiplink" means that using keyboard navigation and following the skiplink means the next Tab will enter the main content of the page and skip any material before the main content
- You must pass WCAG contrast requirements for AA level
- All links on the page must have useful text for the link
  - The link text must not include "click here"
  - The link text must be meaningful without context (such as when in a list of links in a screenreader)
  - You must not have links to different destinations with the same link text
    - You fulfill this requirement if the default link text is overridden by an aria-label value that matches the link-text requirements
- All form fields must have an appropriate `<label>` element properly associated with the data
  - You can confirm this by clicking on the label text - the field should be focused
- Any controls must have an accessible text description
  - Ex: Button text, an associated `<label>` element, or an `aria-label` attribute
  - This should NOT include error messages for the element, only the label text
- You must not use color as the only indicator for information to the user
- You must not have anything automatically rotate/advance (Example: Carousel)
- Any animation or transition CSS MUST be in a media query that blocks the motion for users that have `prefers-reduced-motion`

## Selected Features Expectations

You must implement at least **5** of these features following the practices from class. Make sure to follow the lessons from class!

- Feature: Drop Down Navigation Menu
  - The menu must "drop down" on click or on hover/focus, your choice of which trigger causes the dropdown
- Feature: An Adaptive "hamburger menu"
  - A menu that is visible at larger viewport size, but is replaced with a dropdown menu at smaller viewport sizes (this counts as a Dropdown Navigation Menu as well if done)
  - If you have a hamburger menu that is available on ALL page sizes, that counts as a dropdown navigation menu but NOT as an Adaptive Hamburger Menu
  - Having two navigations and only showing one at a time does NOT count as an Adaptive Hamburger Menu
- Feature: Accordions or Tabs
  - These require that content is conditionally rendered based on changing the Accordion from open to closed or on selecting a "Tab", or some similar option.
  - These must be usable and identified to accessibility tech, relying on semantic HTML where possible and must use aria properties given in class when needed (and must not use aria properties when semantic elements/attributes do the job  
- Feature: Theme selection (switching between a light or a dark theme) that then applies to all "pages" in the SPA
  - The option to change theme can be on all pages or in some "Settings" page, your choice
- Feature: Cards or Panels that include an image and text grouped together visually
  - This option must have sufficient styling to be noteworthy
  - There must be at least 3 Cards or 3 Panels to count for as this feature
- Feature: A Carousel of images/divs (where one image is shown at a time)
  - Reminder: I do NOT recommend carousels as a matter of UX, I include this option only because you may be asked to create such an abomination on the job
- Feature: A "gallery" that shows many items (images/cards/panels/rows/etc) that can be filtered or sorted or otherwise changes which items are shown   
  - You must have AT LEAST one of "filter" or "sort" or "otherwise change which items are shown"
  - "Filtering" meaning that the user can select options that changes which of the total number of possible items are shown
- Feature: A "complex" form interaction 
  - Definition: Specific Fields that appear/show or use a different input type based on criteria). Examples of complex form interactions:
      - A dropdown with "other" that shows an additional field to fill in what "other" is when selected, but if you pick something from the dropdown that isn't "other", the extra field isn't shown
      - A shipping address and billing address where a checkbox says "billing address same as shipping address" and when you check it the billing address is pre-filled and the fields are given the "readonly" attribute so that they can't be edited.  Unchecking the box makes those fields editable again.
        - This is an example of "complex" form interaction.  You do not have to have exactly these form contents or labels, but this demonstrates a behavior that qualifies as "complex"
      - Two select dropdowns where the selection in the first changes the options for the second, like selecting the make and model of a car (changing the "make" selection changes what is available in the dropdown for "model"). 
- Feature: A Modal form that alters some data shown in the app.  Examples of "altering some data shown in the app" include changing your Display Name in Slack or changing if emails are shown in "Compact" mode in Gmail
  - There are multiple parts to this requirement:
    - It must be a modal dialog using the `<dialog>` element as shown in class
    - It does not need to be a Modal component
    - The modal dialog content must include a form
    - The form collects/changes data that is saved into state in the application
    - This state data must be visible somewhere in the app OUTSIDE of the form
      - Example: The page says "Hello USERNAME" somewhere in the content (but it must appear OUTSIDE the form and modal) and the modal form allows the user to change the value of USERNAME

Any of these options implemented using techniques NOT based on class will not count towards the requirement

## Restrictions
- Follow the best practices from the course
- Do not use HTML-based form validation (including type="email", use type="text" instead)
- Do not use float unless wrapping text around an element
- Do not use tables or table-layouts unless showing a table of data
- Do not use iframes or otherwise load external content except as explicitly allowed/directed by this README
- I/TA(s) must be able to examine and evaluate your understanding of the course lessons
  - Meaning: We have to be able to look at your HTML/CSS and be able to tell if you have  learned the lessons based one what we read
- Do not use any CSS preprocessor (SASS/Less/etc)
- Do not use external CSS (meaning no CSS you didn't write)
  - Exception: You MAY link to outside webfonts 
- Any images must be ones you personally own, be from `http://fonts.google.com/icons` (SVG or PNG only), or be from `http://unsplash.com` ("free" only)
  - If you include any images in your repo, you must include a `licenses.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - For any images that you personally own and used, list (in `licenses.txt`) the filename of that image as you have it in this project, and list your name as the owner.
  - Do NOT download and use random images from the internet/web.  Only use images from the listed sites (or you own) and that you have permission to use
- Do not use any additional JS libraries or external JS
  - This means no JS you didn't write, except for that installed by Vite as shown in class
  - NO react-router/react-router-dom, NO libraries of components, etc
  - Such libraries are not bad, but this project is to demonstrate YOUR skills
- Do NOT use `alert()`, `prompt()`, `confirm()` or other blocking JS that wasn't introduced in class
- Do not use redirects
- Do not use cookies, localStorage, sessionStorage, or other client-side storage.  Store any data in Component state for this project.
- Do not modify the DOM in any way outside of using React
- Do not read the DOM outside of using the event target to capture values from form fields

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
- The site displays using `npm install`, `npm run build`, `npx serve -s dist`
  - Minor mistakes such as forgetting to commit a file are an Additional Requirement failure, but failing to demonstrate your understanding of the concept fails this Critical Requirement
- Your `licenses.txt` file list all images, their sources, and their licenses
- You do not use `querySelector`, `getElementById`, `getElementsByTagNames` or otherwise bypass React
- You do not use the `style` attribute
- You do not use the `style` prop
- You do not use the `<style>` element
- You obeyed all of the listed "Do NOT/Do not" under "Additional Restrictions" (each a separate requirement)
- You have at least 3 "pages" for the SPA that replace most/all of the main content
  - Mistakes in the implementation are Additional Requirement failures, but failing to demonstrate your understanding of the concepts as shown in class, using an outside library, or not reaching at least 3 pages fail this Critical Requirement
- You have responsive/adaptive behaviors as described in the Expectations
  - Mistakes in an implementation that shows understanding are Additional Requirement failures, but lacking the behaviors entirely or showing no understanding is a Critical Requirement failure
- You have at least 5 of the features listed Selected Features Expectations
  - Mistakes in an implementation that shows understanding are Additional Requirement failures, but lacking the behaviors entirely or showing no understanding of the concepts taught in class is a Critical Requirement failure

### Additional Requirements
- Each item listed under "Additional Restrictions" that is not a "Do NOT/do not" (each a separate requirement)
- All "must" and "must not" items from the Expectations that are not already covered by other requirements

### Bonus Requirements (Extra Credit)

Each item for Extra credit is based on meeting all of these requirements
  - You must demonstrating skills learned from class
  - Your demonstrations must show sufficiently complex understanding
    - Very simple inclusions do not count for credit
  - Your additions must improve the User Experience (UX)
- Each additional Selected Feature beyond the requirement can qualify as a Bonus Requirement
  - Max 6 Extra Features, +12 Points
- Deep linking qualifies as an additional Feature (despite not being an option for basic credit)
  - To qualify you must have all changes to the displayed "page" of content done using Deep linking

