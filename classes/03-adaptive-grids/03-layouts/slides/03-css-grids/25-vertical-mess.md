# Body is now full height, but everything stretched

Like when we the grid columns were evenly spaced
- Except with our row heights
- Want the header/footer only as tall as needed
- Want the menu/main row taking up extra space

```css
body {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto; 

  /* other css here */
}
```

