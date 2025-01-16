# Assignment - Basic Layout

**Due: Wed Jan 22, 11:59pm ** 

## Submission Instructions

* Start from the up-to-date main branch (`git checkout main; git pull origin main`)
    - Make sure you switch to main first!  
    - If you get an error message when switching, do NOT just continue with later commands!
* Create a feature branch named 'basic-layout' (`git checkout -b basic-layout`)
* Add the necessary file in this directory (Hint: or in a subdirectory) to have the required features
* Add, commit, and push the branch to github
    - You pick the commit message, but it should summarize your work in this commit
    - Remember that your commit message is for the whole repo, not just this assignment.  If your change is specific to this assignment, mention that in the message.
    - Do NOT use "Adds MYNAME", that was the commit message for assignment 1 only
    - The push should be to this feature branch name (`git push origin basic-layout`) 
* Create a PR to merge to main
* Be sure to include the TA(s) and myself as Reviewer(s)

## Goals and Expectations

You will fill in the matching stylesheet for the provided HTML so that the rendered page matches the provided mockup images
- Differences due to browser window size are expected - your page should work for a wide range of desktop window sizes, but is not expected to work at mobile sizes yet
- You are not expected to be "pixel-perfect", but shoot for having whitespace and color in the same places and ways

This exercise will NOT allow you to use many modern options, forcing you to learn how the pieces covered in class interact.  Next class we will learn more modern solutions for some of the challenges this exercise will present, but the knowledge this assignment covers is very useful even when using more modern solutions.

## Special Notes and Hints

- As mentioned in class, NORMALLY you will want your CSS selectors to be based on class names
    - Because you can't modify the HTML, your options are limited this time
    - This is intentional - This assignment is practicing creating and understanding selectors
    - But be sure to understand that what you do for this assignment will often be UNDESIRABLE for future assignments and real-world work
- To modify the styling of a link on hover, use the `a:hover` selector which will only apply while hovering
- To center `inline` or `inline-block` child elements in a `block`, use `text-align: center` on the parent block
- To place `inline-block` elements to the top of their parent, use `vertical-align: top;` on the parent
- a `<ul>` can set `list-type-style: none;` to remove bullet points
- `<li>` elements are special `display: list-item;` by default, but you can still change that value to inline/block/inline-block
- Be sure to add padding/margins as needed to match the reference images
    - These show the highlight colors and behaviors, as well as behavior at different sizes
    - Most common mistake is to add a background color but no padding/margins, leaving the text feeling very cramped
    - Another common issue is failing to get the padding to work with the `<a>` elements.  Remember that `<a>` elements are `display: inline;` by default, and that limits how padding/margin/etc can impact the text flow as shown in class if you don't change that display value.
        - Notice the cursor to click is active over the entire area with a background color!

## Assignment Details

- Do NOT modify the HTML files
- Do NOT use `display: flex;`, `display: grid;`, or `float:`
- A trick is that you can put a border on just one side: `border-bottom: 1px solid black;` or `border-right: 1px solid black;`
- The left-side menu is set to roughly 20% of the container width - at different window sizes it will be different sizes
- The main content is set to `width: calc(80% - 1ch);` - this is a hack trying to deal with a space from rendering the newlines between elements.  We will deal with that another way next class
- The colors used are all named colors: black, plum, rebeccapurple, and pink. 
- You must view the file using `npx serve` (run in THIS directory, the one containing this README) and by visiting `http://localhost:3000/homepage.html` in the browser
    - If you use File->Open in your browser, the page will fail to load the styles.  This is intentional to force you to get used to using a web server (like `npx serve` as shown in class) to actually serve your files
    - Notice the `homepage.html` in the url above - that matches the filename
- The links in the page are not going to work if you try to follow them - that's fine, they are not part of the assignment

## Additional Restrictions
* Do NOT modify the HTML file
- Do NOT use `display: flex;`, `display: grid;`, or `float:`
* Do NOT use external CSS libraries, only CSS you are writing yourself and included in this PR
* Do NOT use floats
* Do NOT use client-side/browser-side Javascript
* Do NOT use CSS preprocessors, minifiers, or other tools to modify your CSS
  * Reviewers must be able to read your work easily

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
- The page displays using `npx serve` as described
- PR does not contain changes to files unrelated to the assignment
- You did not edit a file that says "Please do not edit this file"
- You did not have a commit message that says "Adds MYNAME" (literally or your actual name)
- You obeyed all of the listed "Do NOT" under "Additional Restrictions"
  - In particular: Do NOT modify the HTML file
  - In particular: Do NOT use `display: flex;`, `display: grid;`, or `float:`
- Do not use `style` attributes
- Do not write `<style>` elements

### Additional Requirements
- Your PR has the correct branch name and follows other course expectations for a PR
- Your commit message should be a single sentence that completes the phrase "these changes _______"
- Your commit message makes sense if someone reading it doesn't know what assignment it is part of
- You matched the reference images (many separate requirements):
    - Does your page match the layout and colors of the reference image?
    - Do the links show the hover colors and behaviors?
    - Do the color and clickable areas for links match the reference image?
        - Including the areas they cover and don't cover when hovered?
        - For both top menu links and sidenav links?
    - Does the page content react to smaller viewport size as the reference image does?
- Your styled page works for a variety of desktop sizes (you didn't expect a specific size, or restrict to an unreasonable desktop size)
- You followed the best practices listed in the course so far, including but not limited to (each a separate requirement):
  - CSS declarations have a space after the `:`
  - CSS selectors tend to use class names (when available)
  - CSS selectors with just element types or combinations of types are setting defaults for that element type, not a specific appearance for a particular usage of that element type
- Any other detail mentioned in class or the instructions may be an Additional Requirement

