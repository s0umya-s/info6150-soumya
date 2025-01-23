# Further complications

What happens if we add padding?

```css
body { 
  /* Other stuff like grid stuff here */

  min-height: 100vh; /* Normally overridden by next line */
  min-height: 100dvh; /* Browser ignores unless understood */

  margin: 0px; /* Perhaps move to a reset later */
  padding: 1rem;
}
```

Scrollbar is back!
- By default `padding` is NOT part of content height
- This is controlled by `box-sizing` property

