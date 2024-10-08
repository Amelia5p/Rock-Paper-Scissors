# Rock, Paper, Scissors

## Site Overview
Rock, Paper, Scissors is a simple, fun, and user-friendly game to be enjoyed by both children and adults. Players choose one of three options (rock, paper, or scissors) while the computer randomly selects its own choice. With each round, the outcome and winner is random which adds excitement! 

Live site: https://amelia5p.github.io/Rock-Paper-Scissors/

![Responsive Site](assets/images/read-me-images/responsive.png) 

<details>
<summary>Table of Contents </summary>

- [Rock, Paper, Scissors](#rock--paper--scissors)
  * [Site Overview](#site-overview)
- [User Experience](#user-experience)
  * [Design](#design)
    + [Wireframes](#wireframes)
    + [Color Palettes](#color-palettes)
    + [Typography](#typography)
  * [User Stories](#user-stories)
    + [First time visitor goals](#first-time-visitor-goals)
- [Structure](#structure)
  * [Features](#features)
    + [Heading](#heading)
    + [Rules](#rules)
    + [Game Area](#game-area)
  * [Buttons](#buttons)
  * [Score](#score)
  * [Alert](#alert)
    + [Responsiveness](#responsiveness)
    + [Accessibility](#accessibility)
    + [Future features](#future-features)
- [Testing](#testing)
  * [Feature Testing](#feature-testing)
  * [Browsers Compatibility](#browsers-compatibility)
  * [Responsiveness](#responsiveness-1)
  * [Lighthouse Testing](#lighthouse-testing)
  * [Code Validation](#code-validation)
      - [HTML](#html)
      - [CSS](#css)
      - [JAVASCRIPT](#javascript)
- [Bugs](#bugs)
- [Deployment](#deployment)
    + [<ins>Step 1:</ins>](#-ins-step-1---ins-)
    + [<ins>Step 2:</ins>](#-ins-step-2---ins-)
    + [<ins>Step 3: </ins>](#-ins-step-3----ins-)
    + [<ins>Result:</ins>](#-ins-result---ins-)
  * [Cloning Repository](#cloning-repository)
    + [<ins> Step 1: </ins>](#-ins--step-1----ins-)
    + [<ins> Step 2:</ins>](#-ins--step-2---ins-)
    + [<ins>Step 3: </ins>](#-ins-step-3----ins--1)
    + [<ins>Step 4: </ins>](#-ins-step-4----ins-)
    + [<ins> Result: </ins>](#-ins--result----ins-)
  * [Forking Repository](#forking-repository)
    + [<ins>Step 1:</ins>](#-ins-step-1---ins--1)
    + [<ins>Step 2:</ins>](#-ins-step-2---ins--1)
    + [<ins>Step 3: </ins>](#-ins-step-3----ins--2)
    + [<ins>Result:</ins>](#-ins-result---ins--1)
- [Credits](#credits)
  * [Image](#image)
  * [Favicon](#favicon)
  * [Other](#other)
  * [Code / Educational Resources](#code---educational-resources)
- [Acknowledgements](#acknowledgements)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>
</details>

<br><br>

# User Experience

## Design

Wireframes were made in Balsamiq to ensure a clear and easy development process. The color palette was created using Muzli colors, the colors used are quite loud and exciting creating a fun experience and environment for users. The images used are a pop of color for the same purpose.  The 'Poppins' font was chosen as it is easily legible and attractive. Sans Serif is used as the fallback font.

### Wireframes


![wireframes](assets/images/read-me-images/wf1.png)
![wireframes](assets/images/read-me-images/wf2.png)

### Color Palettes

![Color-palette1](assets/images/read-me-images/colors1.png)
![Color-palette2](assets/images/read-me-images/colors2.png)
### Typography

![Poppins Font](assets/images/read-me-images/font.png)


## User Stories

### First time visitor goals
* As a first time user, I want to easily understand the purpose of the site and the game.
* As a first time user, I want to be excited, intrigued and feel I am in a fun environment.
* As a first time user, I want the game to function correctly.


# Structure
The website is one page only.

![landing](assets/images/read-me-images/landing.png)

## Features

### Heading
The heading shows the game name: Rock, Paper, Scissors with a clear contrast to the background so it stands out.

![heading](assets/images/read-me-images/heading.png)

### Rules
The rules are at the top of the page and are clear so the user knows what to do and what to expect.

![rules](assets/images/read-me-images/rules.png)

### Game Area
The game area is clear and simple, while still fun, it shows the rules and choices. Once a button has been clicked it reveals the images of the computers choice and your choice.

![Game area](assets/images/read-me-images/choice-full.png)

## Buttons
There are three interactive buttons for rock, paper and scissors and a clear instruction for the user to chose an option.

![Buttons](assets/images/read-me-images/pick-fighter.png)

## Score
The score is counted for both the computer and the player up to 3 as stated in the rules.

![Score](assets/images/read-me-images/score1.png)

## Alert
Once the player or computer reaches a score of 3 there is an alert stating the winner of the game. Once you dismiss the alert, the game will reset making it very user friendly.

![Alert](assets/images/read-me-images/alert.png)


### Responsiveness

The site is responsive from 320px and functions on a range of screen sizes. 

### Accessibility
Aria-labels, alt text, color contrast and font selections were thoughtfully chosen to ensure an inclusive and accessible user experience.

### Future features
I would like to implement the following features in the future to allow for an improved user experience:

- Add the options of 'Lizard' and 'Spock', this would expand possible outcomes of the game making it more interesting.
- Add a multiplayer mode so users can play against their friends.

# Testing

## Feature Testing 
The control buttons were tested across many browsers to ensure they were functioning correctly.

## Browsers Compatibility
The site was tested using Dev Tools on Google Chrome, Safari, Firefox and Edge and functions and appears as it should across all major browsers. I also tested it on an Iphone 12 mini and a Samsung Galaxy S21 ultra.

## Responsiveness

Responsiveness was tested with Chrome Dev Tools and by changing the viewport from 320px and upwards. I also checked responsiveness on 'Am I Responsive' and Responsive test tool.  I also tested it on an Iphone 12 mini and a Samsung Galaxy S21 ultra.

## Lighthouse Testing
The lighthouse testing was successful with scores above 90 for all four ratings (Performance, Accessibility, Best Practices and SEO).

![ lighthouse testing](assets/images/read-me-images/lighthouse.png)


## Code Validation

#### HTML

HTML was tested through the W3C validator with no errors:

![Code Validation](assets/images/read-me-images/html.png) 


#### CSS

The CSS stylesheet was tested through the W3C Validator with no errors:

![CSS Code Validation](assets/images/read-me-images/css.png) 

#### JAVASCRIPT

JavaScript was tested through Jshint with no errors:

![CSS Code Validation](assets/images/read-me-images/javascript.png)

# Bugs

Debugging and problem solving was done consistently throughout the development process.

List of some issues that arose:

- I had a curly bracket in the wrong place so that my if statements were wrongly placed outside of the playGame function, fixed this by simply moving the bracket.
- The score would only get to 2 before the DOM would alert the winner before updating the results, I made sure that the score was updated first, and then check for a winner after that, I fixed this by setting delay time. 
- I did not write the code for media queries correctly, so therefore it was not being applied, after inspection I fixed the code.
- The images in the computer and player's choice section when opened pushed content up, used display block to keep them from doing this as a fix.
- When testing my JavaScript code it threw the warning '"Functions declared within loops referencing an outer scoped variable may lead to confusing semantics."' I changed the for to a forEach loop which fixed the issue and cleared the warning.


# Deployment

This site has been built on Gitpod, the code was then pushed to GitHub where it was deployed.

### <ins>Step 1:</ins>

From the <a href="https://github.com/Amelia5p/Rock-Paper-Scissors" target="_blank">GitHub repository</a> click on settings which is near the top op the right side of the page.

![Deployment step one](assets/images/read-me-images/dep-s1-readme.png)

### <ins>Step 2:</ins>
From the options listed on the left hand side of the page, click 'Pages'.

![Deployment step one](assets/images/read-me-images/dep-s2-readme.png)

### <ins>Step 3: </ins>
From the drop down menu under source select deploy from branch. From the dropdown menu's under branch select 'Main' and 'Root' then click save.

![Deployment step one](assets/images/read-me-images/dep-s3-readme.png)

### <ins>Result:</ins>
The page will be refreshed and you will see the link to the live site.

![Deployment step one](assets/images/read-me-images/dep-result.png)


## Cloning Repository

### <ins> Step 1: </ins>

From the <a href="https://github.com/Amelia5p/Rock-Paper-Scissors" target="_blank">GitHub repository</a> click on the 'code' button.

### <ins> Step 2:</ins>

Click 'local' on the top of the drop down menu and copy the URL.

### <ins>Step 3: </ins>

Open Git Bash on windows and change the working directory to the location where you want the cloned directory.

### <ins>Step 4: </ins>

Type 'Git clone' followed by a space and paste the URL previously copied, hit enter.

### <ins> Result: </ins> 

You now have a local copy of the Github repository.

## Forking Repository

### <ins>Step 1:</ins>

From the <a href="https://github.com/Amelia5p/Rock-Paper-Scissors" target="_blank">GitHub repository</a> click on the 'fork' button in the top right corner of the page. 

### <ins>Step 2:</ins> 

Choose to copy only the main branch or all branches to the new fork.

### <ins>Step 3: </ins>

Click Create a Fork.

### <ins>Result:</ins>

There is now a forked copy on GitHub.

# Credits

## Image

- The only visible image I sourced was from Vecteezy https://www.vecteezy.com/vector-art/690792-rock-paper-scissors-hand-icons
- I also used a transparent image which is used as a placeholder image until a button is clicked and a random computer choice is made. I used this as the image source cannot be empty.  https://onlinepngtools.com/create-transparent-png

## Favicon

- <a href="https://favicon.io/favicon-converter/#google_vignette"> Favicon Converter</a>
- <a href="https://www.canva.com/"> Canva</a>
 
## Other
- <a href="https://fonts.google.com/"> Google Fonts</a>
- <a href="https://www.w3schools.com/"> W3schools</a>
- <a href="https://colors.muz.li/"> Muzli Colors</a>
- <a href="https://imageresizer.com/crop-image">Resize images</a>

## Code / Educational Resources
- Code institutes 'Love Maths' project and material.
- <a href="https://www.w3schools.com/"> W3schools</a>
- https://www.c-sharpcorner.com/article/show-and-hide-divs-on-button-click-with-javascript/ 

# Acknowledgements 
This is project two, created for the Code Institutes Full Stack Web Developer (eCommerce) course. I would like to thank my cohort facilitator and the Code Institute team for their support.