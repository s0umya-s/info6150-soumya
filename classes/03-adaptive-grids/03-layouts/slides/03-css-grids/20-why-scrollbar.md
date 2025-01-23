# body 100vh gives us a scroll bar!

This is because `body` defaults to `margin: 8px;`
- Commonly solved by a **CSS reset**
    - "Resets" browser CSS defaults
        - Before your specific changes
- Common meaning of "reset" has evolved
- No longer stripping inconsistent browser defaults
    - More "fixing" unhelpful browser defaults

```css
body { 
    /* Other stuff like grid stuff here */

    min-height: 100vh;
    margin: 0px; /* Perhaps move to a reset later */
}
```
