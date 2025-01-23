# What if we wanted one element off to the right?

- Common way to center without flexbox/grid
    - `margin: auto;`
    - Can also be used one just one side

```css
ul { /* Better with class names */
  display: flex;
  gap: 2rem; /* preventing a squish */

  padding: 0;
  margin: 0;

  list-style-type: none;
}

li:last-child { /* MUCH better with class names */
    margin-left: auto;
}
```
