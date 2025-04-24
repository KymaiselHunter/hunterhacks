# Hunter Hacks 2025

## Overview
This repository contains the code for the website for the [Hunter Hacks Website 2025](https://hunterhacks.com/)
Deployed with Vercel


## Setup required to run locally
Run while in the directory" hunterhacks-website
```bash
  npm install
  npm i -g vercel
  npm i @vercel/analytics
   ```

## File Explanation and component
For this project, the goal was to make each component as modular as possible, all of the files for the components can be found in the components folder  

to keep it intuitive, we use the naming convention of using the same name between the jsx and css file to indicate contributions to the same component.

### Main  
- main.jsx  
- Index.css  

Component to hold all of the content  

### App
- App.jsx  

Component that holds the main website  

### Navbar
- Navbar.jsx  
- Navbar.css  
- NavbarMobile.css  

Component that holds the train stop navbar and the mobile navbar, this component being so far 
the only exception, where the css files have been split in tow, where the mobile css is seperated

### Section
- Section.jsx
- Section.css

Use this component as a wrapper for all the main sections on the page,
it takes a "title" string prop to be used as the sections header, and a reference from it's parent component
(so the navbar can use this reference to scroll to it)

 
## WORK IN PROGRESS
I JUST NEED TO POST THE READ ME SO THE SITE HAS A BACK LINK RAHH