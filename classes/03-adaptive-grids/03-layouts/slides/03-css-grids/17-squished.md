# Now the Menu is too SQUISHED

- We can give the `<nav>` element some `padding`
- OR we can give our grid a **gap**
    - Distance between all cells
    - See impact in DevTools!

```css
body {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "header header"
    "menu main"
    "footer footer"
  ;
  gap: 1rem;
}
```
