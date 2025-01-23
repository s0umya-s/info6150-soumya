# Using Grid Areas

```css
header {
    grid-area: header;
}
```
- Now looks correct (so far)!
- BUT we never labeled the other areas
    - Working by coincidence!
    - Always be complete, don't rely on luck
    - Someone will later change the page

```css
nav { 
    grid-area: menu; /* area names NOT the element name!*/
}
main { 
    grid-area: main;
}
```
