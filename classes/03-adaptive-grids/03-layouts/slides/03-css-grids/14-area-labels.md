# Applying Grid Area Names

- That didn't change the appearance!
- We created area names
    - The labels happen to match element names
    - (Mostly) Coincidence! Just labels!
- Did NOT tell browser which elements to use

```css
footer { 
    grid-area: footer; /* NOT quoted!*/
}
```

- Now `<footer>` spans the page!
- Now 6 cells!
