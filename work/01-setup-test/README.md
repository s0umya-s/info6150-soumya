# Assignment - Testing node and git

**Due: Wed Jan 15, 11:59pm ** 

EXCEPTION: If you joined the class after the first week, you will need to complete this assignment but the due date is Wed Jan 22, 11:59pm , same as the second assignment.  I highly encourage you complete this assignment as soon as possible, and as a courtesy to the TA, mention in the PR description that you joined the class late.

## Goal

This assignment confirms:
- You have NodeJS installed on your machine
- You can run code I provide using NodeJS
- You have git installed on your machine
- Your repo is properly connected to your class repo on GitHub
- You understand how to submit assignments using git and GitHub
- You understand the basics of creating an HTML Page

## Instructions

NOTE: This assumes you have followed all of the instructions from the "setup-for-this-class" document at the base of this repo.  Do that first.

Future submissions will assume you can follow this process, adapted to the material for that assignment.

**From this directory**, at the command line:

1. Run `npm install`
  * Did you run this **in the correct directory?** (If you don't know what that means, ask!)
    - The "correct directory" is the same folder that this README.md file is in, the same folder that has `package.json` in it.  If you get an error (ENOENT) that includes the text "Could not read package.json", that's a sign that you are NOT "in the correct directory".
  * In response to running this command you should see some text while it downloads a library or two
  * If you see a permission error (EACCES) you probably installed something as root/administrator, and now your normal user account can't override it. That's a bit messy to clean up, but it's doable and you want to clean that up NOW rather than later in the semester.
      * Lots of ways of addressing this exist, with varying levels of success and computer security.  Speak up on Slack if this is an issue for you.
  * You only need to run "npm install" successfully once for each assignment/project that has this step.  Once the dependencies are installed, you can run the program (see below) as much as needed without reinstalling.  Reinstalling is only necessary if the dependencies are changed.
2. Run `node parse.js`  
  - You should see an error about "people.html" not existing
  - If you see something else, confirm that you are running this command "in" the folder the `package.json` file is in.
3. You are going to make changes, so you should first create a "feature branch" to create those changes in
  * run `git checkout -b setup-test`
  * This branch name, "setup-test", is specific to this assignment.  Each assignment will be done in its own branch with a unique name.
4. Create a file in this directory, "people.html".  
  * Edit this file to be valid HTML (including doctype and other required parts from class) with a title element that says "About Me"
  * The unordered list should have the class of `person`
  * You should should have 5 li elements inside your unordered list element
  * Each li element should have text inside it: "Name", "NEUID", "Email", "Slack Display Name", and "Github Username"
  * Inside each li, after the text for humans, you should have a single span element
    * The span element should have a class attribute with one of these exact values that corresponds to the data inside it ("name", "neuid", "email", "slackhandle", and "github")
      - Notice how each of these class names have no spaces, and are in lowercase
    * The span elements should contain the text for that value (example: Your name is inside the span with class "name")
    * Note the Slack Display Name should start with "@".  These values, particularly the github username, are case sensitive!
      - You can confirm your Slack Display Name  by typing "@" in slack and starting to type your Slack Display Name - it should offer to autocomplete your complete display name.
  * Make sure your data is accurate for you!
  * Don't forget to open and close your tags appropriately
  * Don't forget to use double quotes around the values of your attributes
  * Don't forget to include necessary elements (example: html and body, and an unordered list requires list item (li) elements), as well as a doctype
  * To search/google for info, Use `MDN (element)` to search, for example `MDN unordered list` 
  * Example: my span element for "name" would look like `<span class="name">Brett Ritter</span>`
5. If open the people.html file in Chrome, it should resemble the output in chrome-sample.png
  - Chrome on Mac: File-Open or Cmd-O.  On Windows, Chrome doesn't have the menu option, but Ctrl-O should work
6. Run `node parse.js` again now that you've saved your changes
  * You should see your information output
  * It should resemble command-sample.png, except with your information
  * Everything should run smoothly
  * Fix any errors that do turn up and repeat this step until everything runs smoothly
7. Add the file to the list of files to commit: `git add people.html`
8. Run `git status` to make sure nothing is listed as an 'Untracked file' and only `people.html` is listed to be added.
  * I have never heard *anyone* say "I run git status too much".  It is much easier to clean up a commit BEFORE you make it, so always run git status before doing a commit.  Always pay attention to the output of git status.  Multiple students forget this step each semester.
  * If you have git troubles, I recommend consulting the list of common solutions at https://ohshitgit.com
9. Commit the file: `git commit -m "Adds MYNAME"` (Example: `git commit -m"Adds Lex"`)
  * This commit message reflects your changes.  If you make other changes and have to commit those, and when you commit other assignments, the commit messages should reflect THOSE changes, they should NOT say "Adds MYNAME".
  * Repeat: This commit message should have your ACTUAL name and not the literal text of "MYNAME"
  * Repeat: Future assignments should not have commit messages that say "Adds MYNAME" (literal text or actual name), that is specific to this assignment
10. Send your changes to github: `git push origin setup-test` 
11. Go to the github page for this repository and create a Pull Request(PR), with 'main' on the left dropdown and your setup-test branch on the right dropdown.
  * Do not merge, you must create a Pull Request.  Your repositories should be set so that you cannot merge to main without a Pull Request, but they are created without that requirement so there is a period of time where you can merge, but you shouldn't do it.  Learn how to create the PR, because that's how all assignments for the class will be turned in, and if you do it wrong, your grade could suffer.
  * Add myself and the TA to review the PR.  If you don't do this, we may not know your work is ready and you won't get credit for it.
12. If the changes look correct, Create the Pull Request.
  * If you created a `.gitignore` file, that change should be listed as well as your changes to people.html
    - Please do NOT edit existing `.gitignore` files that start with the line "Please do not edit this file"
    - You should create your `.gitignore` file at the root of your repo, not in the assignment folder. (It should be in the same folder as "syllabus.md" and "do-not-copy-work.md")
  * There should NOT be changes to other files.
  * Be sure to **add me and any TA(s) as reviewers** on the PR.
    - "Reviewer", not "Assignee"
13. Remember to return to the main branch at the command line!  `git checkout main`.  In this branch, your changes do not exist (not until they are approved, merged in, and you pull the updated main branch)

## Grading Rubric

Note: The assignment is to show your understanding of the material from class.  If you don't show your understanding of class material, you can lose points, even if your assignment "works".  

*Do NOT copy or generate your work (see "do-not-copy-work.md" at the root of this repo).*

This assignment is graded as a base of 100 points
- Each Critical Requirement you miss is a minimum of -10% of the assignment grade, and may lose more
- Each Additional Requirement you miss is -2% of the assignment grade.  There may be MANY non-critical requirments, and they add up!
- If you are not showing the lessons from class, your grade will be worse or even given a 0. Each week builds on the material from the previous week so it is important that you learn and practice the lessons from class.

### Critical Requirements

- You create a PR following the described process
  - This MAY be different than other courses have done!
- `node parse.js` (using the unchanged parse.js file) runs without error
- `node parse.js` (using the unchanged parse.js file) shows your information as requested
- PR contains the requested changes to the appropriate file
- Your HTML has a DOCTYPE
- Your HTML has the base lang attribute
- Your HTML contains a correct title element
- Your HTML appears to follow the material given in class
- PR does not contain files unrelated to the assignment (a root `.gitignore` file IS related)
  - A root `.gitignore` file IS related and may be included
  - This requirement means you didn't `git add` any unrelated files.  It does NOT mean that you removed any existing files
- You did not edit a file that says "Please do not edit this file"
- You applied the required commit message (this assignment only!)
  - Future assignments will require you add a useful commit message of your choice
- Any other detail required to meet the core purpose of the assignment may be considered a Critical Requirement

### Additional Requirements

- PR is created using the correct branch name
- PR does not contain files that are related to the assignment but that should not be in the PR 
  - (Examples: `.DS_Store`, `.idea`, `.vscode`, etc
- A PR is created (you need to do more than just push the branch)
- Myself _and_ the TA(s) are added as Reviewers to the PR
- No one is an "Assignee" on the PR
- Your HTML includes an explicit element declaring the UTF-8 encoding
- Your elements are valid and correctly closed
- No elements contain child elements that are not permitted
     - For example, a `<ul>` has strict restrictions about child elements, but an `<li>` element does not
- You are not including any CSS (no style elements, no style attributes, no linked CSS files)
- You are not including any Javascript
- Your elements are used semantically
  - In particular, no "<p></p>" or "<br>" used to create space - that is not the job of HTML
- Each requested detail (github id, username, etc) must be accurate (each detail is a separate requirement)
- Each requested detail (github id, username, etc) must have the requested class name (each detail is a separate requirement)
- Do not reformat lines of code you are not editing
- Any other detail mentioned in class or the instructions may be an Additional Requirement

## After Submission

You're done!  Your Pull Request (PR) is listed on github, and nothing further is required from you at this point.
- Your local code will NOT show your changes, because you switched back to the "main" branch, which does not have your changes yet.
- When you add the Reviewers to the PR you are saying the code is ready to be graded
  - Do not create the PR if you intend to make additional changes
- Canvas will NOT automatically update to show your submission - it is unaware of what is sent to github
- Grading is a manual process 
  - The TA(s) have 4 days after the due date to complete grading
- The TA(s) and/or myself may request explicit changes on your PR
- The TA(s) and/or myself will leave comments on your PR with advice to improve in the future
  - Make sure you are getting notifications from GitHub (and will notice them!)
  - This is practice for a job, where your peers will leave questions and suggestions on your Pull Request 
- Grades will appear in Canvas
- After grading, a TA/myself will merge your PR into into your "main" branch on Github
  - This is where our work is different than a "real" job: For most employers you are usually responsible for merging your code after it is approved, but for this class the TA/instructor will merge it after approval

## Making Changes

If you need to make changes in response to TA/Myself, or if you are making changes before the due date:
- You should NOT close the PR (unless it is completely the wrong code/branch)
- (if before due date) Remove everyone assigned as a Reviewer
- Switch back to the branch for this assignment in your local copy of the repo
- Make the necessary changes (make sure you are in the correct branch!)
- As you did previously: add the changed files, commit with a descriptive commit message, and push the branch to github ("origin")
  - The existing PR will update to show your new changes (the PR is a request to merge this branch on github into main on github, so once you update this branch on github the PR will include the updated changes)
- If you removed myself and the TA(s) as Reviewers, add us back
- Once again switch your local repo to the main branch so you are ready for the next assignment

Working with git can be a lot to learn all at once, but it is a common aspect of many programming-related jobs, and ensures that everyone can make tracked changes to a shared, approved common code base without accidentally overwriting each others' work or putting in incompatible changes.

