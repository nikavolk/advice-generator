# Advice generator

My first API-related project.
Life advice generator with a "fetch another advice" function.

# Live URL

https://nvstudio.si/advice-generator/

# How it works

Axios fetches data from "https://api.adviceslip.com/advice" and displays
the advice ID and the advice text upon loading. Errors are caught and
shown in the console.

A button is added to add the function of fetching a new random advice and
displaying it, replacing the previous advice.

Fully responsive design.

# What I've learned:

- basics of SASS (using variables and nesting)
- playing with media view for responsive design
- basics of useState
- basics of useEffect
- basics of GIT (commit, push, setting up SSL key) and Github

# Considerations

CSS:
Positioning the button was difficult, played around with negative margins
which didn't seem like an elegant solution. Researched alternatives and used
transform, instead.

React:
Could have used fetch instead of the axios addin, had difficulties implementing
the get function and reading data on it. Lots of Googling and reading docs.


Coding challenge by frontendmentor.io
