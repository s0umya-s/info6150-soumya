# Always check caniuse.com for feature support

http://caniuse.com/

This is not a yes/no answer!
- Supported in all major browsers?
- For how long?
- Can you fallback?

```css
body { 
  /* Other stuff like grid stuff here */

  min-height: 100vh; /* Normally overridden by next line */
  min-height: 100dvh; /* Browser ignores unless understood */

  margin: 0px; /* Perhaps move to a reset later */
}
```
