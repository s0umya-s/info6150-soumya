# Explaining Named Grid Areas

- Multiple solutions to this!
- We will start with **grid areas**

```css
body { 
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header"  /* Quoted lines */
    "menu main"       /* No commas between */
    "footer footer"
  ;
}
```
Remember: Newlines and indentation are for HUMANS
- Browser doesn't care
- But **Programming is Communication**
