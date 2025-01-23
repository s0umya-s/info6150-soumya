# Trying Multiple Columns

```css
body { 
    display: grid; 
    grid-template-columns: auto auto; /* 2 cols */
    grid-template-rows: auto auto auto; /* 3 rows */
}
```

Now we have a mess!
- 2 rols, 2 cols, NOT 3 rows
- Parts are in the wrong cells

Cells were auto-filled
- We never told page what goes where
- Defaulted to first-come-first-serve
