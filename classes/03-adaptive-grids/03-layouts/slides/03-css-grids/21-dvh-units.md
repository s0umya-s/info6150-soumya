# Works, but mobile has complication

"Viewport height" gets a bit complicated on mobile
- Browser/OS may insert "virtual" controls
    - These will cover up part of the viewport!
    - Why some sites have buttons that overlap with device controls
- A new unit, `dvh` helps!
    - Recalculates height when controls appear
    - BUT it is relatively recent!
    - Not all users may have updated browsers!
