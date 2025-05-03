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
the only exception, where the css files have been split in two, where the mobile css is seperated

### Section
- Section.jsx
- Section.css

Use this component as a wrapper for all the main sections on the page,
it takes a "title" string prop to be used as the sections header, and a reference from it's parent component
(so the navbar can use this reference to scroll to it)

NOTE: to optimize this in bigger projects with a lot more moving components, pass down a function for the observer from the parent component so we only use one observer

### About
- About.jsx
- About.css

Component holding the banner, about text, and application button

### Picture Board
- PictureBoard.jsx
- PictureBoard.css

This component is used to hold images of each of the judges

This component was initially made as a way to mess around and get a board similar to pinterest that I ended up re-using here

This component requires two props, these props are both arrays
The first array is called profileArray  
this array holds objects with three member variables  

- src: src of the displayed image
- name: string representing a judge'ss name
- profession: string representing a judge's professsion  

the second array is the sizingArray
this array holds objects with two member variables
- breakpoint: integer representing the amount of pixels for this sizing to be enabled
- size: integer representing the amount of columns that will appear with the associated breakpoint

make sure that the first breakpoint is -1 to set the defualt size  
this object will automatically sort the array based on breakpoint value but it is suggested to pass it in order for easier testing

### Sponsors
- Sponsors.jsx
- Sponsors.css

Component holding sponsors

### Schedule List
- ScheduleList.jsx
- ScheduleList.css

Parent component of the full schedule, holds the arrays of each day's schedules, and passes them into the the Schedule day component

### Schedule Day
- ScheduleDay.jsx
- ScheduleDay.css

Parent component of the full schedule, holds the arrays of each day's schedules, and passes them into the the Schedule day component

takes two props
- activityArray: array of activity objects
  - activityTitle: string representing title of activity
  - activityDescription: string representing it's description

- day: string representing the day of the week that should appear

### Tracks
- Tracks.jsx
- Tracks.css

Component all six tracks

### FAQHolder
- FAQHolder.jsx
- FAQHolder.css

Parent component of all FAQ questions, holds faqs in responsive divs

### FAQ
- FAQ.jsx
- FAQ.css

A singular FAQ question, that takes two props
- question: string that represents the given question
- children: the answer to given question via html (dont pass in as a prop but wrap the FAQ tag around html)

### Footer
- Footer.jsx
- Footer.css

footer and contancts component

## Credits
Made with Love from the GWC Team:  
Developer and Lead Designer: @Kelly Lin  
Lead Developer: @Kyle Bautista  
Developer: @Ynalois Pangilinan  

And Additional Help From:  
@Maggie Ma @Tahya Mumtahi @Fariha Kha