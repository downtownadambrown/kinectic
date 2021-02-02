## Responsiveness

![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/gameplay/responsive_image_vuuQ5NOgIdjq.png)


## Gameplay Demo

![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/gameplay/gameplay_--IbYIbuJkBy.gif)

## Table Of Contents

- [User Experience Design - UX](#user-experience-design---ux)
  - [Strategy](#strategy)
  - [Scope](#scope)
  - [Structure & Skeleton](#structure--skeleton)
  - [Surface](#surface)
- [Technologies](#technologies)
- [Resources](#resources)
- [Implementation](#implementation)
  - [HTML & CSS](#html--css)
  - [jQuery & Javascript](#jquery--javascript)
  - [Strapi & MongoDB](#strapi--mongodb)
- [Testing](#testing)
  - [User Stories](#user-stories)
  - [Browser Compatibility](#browser-compatibility)
  - [Responsiveness](#responsiveness-1)
  - [Form Validation](#form-validation)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
- [Project Barriers and Solutions](#project-barriers-and-solutions)
- [The Future](#the-future)
  - [Features and Functionalities](#features-and-functionalities)
- [Deployment](#deployment)
  - [Creation and Publication](#creation-and-publication)
  - [Download Project & Github CLI](#download-project--github-cli)
  - [Backend Deployment](#backend-deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)


# User Experience Design - UX

  

## Strategy

The proposed project for Milestone 2 from Code Institute is a word search game where users will be displayed with a set of words and a randomized square with letters, the user must look for the word and highlight it. In addition, the game will be timed and it will form the basis for the leaderboard. In  order to make the game interesting the game will have different categories to choose which will be theme based such as nature, countries, movies and so on.

- **User Stories**

	- As a User, I want to be presented with a well structured game, so I can intuitively navigate through the game and access the information I seek.
	- As a User, I want to have a how to play section, so I don't waste time figuring out how to play the game.
	- As a User, I want to be able to select different words, so the game does not feel repetitive.
	- As a User, I want the UI to be consistent throughout the game, so it will be visually appealing to play it.
	- As a User, I want to have a way to save my progress, so I don't have to start the game from scratch every time.
	- As a User, I want a way to visualise how I am doing in the game, so I can see how well I do in the game.
	- As a User, I want the game to give me feedback every time I successfully find a word, so I am aware how I am doing as I play the game.
	- As a Return User, I want to have a profile, so I can see how my progress is going.
	- As a New and Return User, I want the game to have some theme base sounds, so it can keep me engaged with the game.
	- As a Return User, I want to see a learderboard section, so I can see how well I performed against other players.


## Scope

-  **Functional Specifications**

	* The functional specification will be based on the [assessment criteria](https://drive.google.com/file/d/1GBoEwg5ODXp1Gg3oJJdXYpELdO7_s3MP/view?usp=sharing) and user stories.

-  **Content Requirements**

	The content required to bring value are the following:

	- The written content has to be concise and to the point, relevant to the section of the game. It has to follow the same typography to maintain consistency throughout the website.

	- The imagery has to be consistent throughout the website in terms of colours and sizes.

	- The colours has to be consistent with the logo colours to bring a theme based to the visitors.

	- The typography will have consistency between written content and logo. It is important that the game will have one typography for the logo and one for the content.

	- The logo has to bring set the tone for the look and feel of the game so that the other parts can follow it nicely.

	- All information to have the right amount of contrast between foreground and background to avoid distractions.

## Structure & Skeleton

I have designed the structure and skeleton using Balsamiq to layout how I would implement sections of the website. I have started by doing a sitemap of how I would structure the website, following that I have laid out all the wireframes using low fidelity wireframing.

-  **Wireframes & Sitemap**
 
	- All wireframes and sitemap can be visualize in the following link - [view]()

	
- **API Routes**

>     - GET	/users
>     - GET	/puzzles
>     - GET	/leaderboards

## Surface

At this stage I have chosen the Colours, Typography, Logo and Images.
 
-  **Design Choices**

	- **Colours** - you can view my colour palette [here](https://coolors.co/1d9934-dd2424-113cff-000000-ffffff). The palette was created based on the logo.
	
	- **Typography** - I will use Space Grotesk for headings and sub-headings and for the paragraphs it will be Jura. All these from [Google Fonts](https://fonts.google.com/).
	
	- **Images** - I will use [Pixabay](https://www.pixabay.com) and [Pexels](https://www.pexels.com) to source the images. Also, images provided by the client.
	
	- **Logo** - I used [Canva](https://www.canva.com) to design logo and favicon. You can view this under **Resources** in this document.  The fonts used for the logo are Mont Thin and Alta which both are also from canva.
	
	- **Icons** - I will be using icons from Font Awesome. more in the **Resources** section in this document.

# Technologies

  This section is for technologies used in this website. I explain how I used them and a brief description of each.

- **CSS**
	- I have used CSS to create custom styles to fit the purpose of my design plan. This has been used as a requirement of this project to describe HTML elements how to be styled and structured. By using the Bootstrap Framework, it reduces dramatically the amount of CSS being used in the project.

- **HTML**

	- HTML was also a requirement for this project and it was used for the semantic side to give the bare bones of the pages.

- **JavaScript and jQuery**

	- I will be using jQuery and JavaScript in this project in order to make the game more dynamic and interactive.

- **UiKit**

	- I main reason I have chosen **UIKIT** for the frontend because it will provide me with more flexibility to design all UI components that I need for this particular project. Also, elements are customizable, which will lead to better flexibility as well as the modular approach that it has for all components.

- **Strapi**

	- Strapi is a headless CMS that focus on developing APIs fast with a lot of flexibility and provides a easy to use interface for content modification. In addition this CMS is developer friendly so they provide with good documentation. I will be setting up this CMS with MongoDB Atlas for persistent storage. The APIs will be used to load data such as words, leaderboard data and user profiles.

- **CDN**

	- I have used the CDN from imagekit to store my images. This is called content delivery network (CDN) which are servers that are geographically distributed around the world to deliver fast internet content by serving from the server closest to the user.

- **GitPod**

	- This is the IDE that I will be using for the coding part of the project, due to personal choice as well as exploration of full scope of the IDE. I will be using extensions which will be noted in the **Resources** section.

- **Github**

	- I have used github to create the repository for this project and have constantly saved my code through commits locally and then pushed to remote server from github, it uses Git as the version control. The great about using it is that in a way it creates versions of the work done as it is being committed, if something breaks or go terribly wrong it is possible to load the latest working version. Fortunately I have not had critical problems. 
	
- **Git**

	- I have used Git as my version control, through the project I have made several commits whenever I made changes to the code. I recognise that I could have made more commits but I got carried with coding at times and not committed in sections where I should have done. This is something I am working on to improve from next project.

-  **Web Development Tools**
 
	- I have used this tool to help me with debugging issues that I had during implementation. In addition, by using the inspection mode I could see how responsive the feature was after coding it.  

- **W3C Validation** 
 
	- I have used the W3C validador to check on my CSS and HTML to check if it complies with standards, please refer to the **Testing** section for more details.

- **Am I Responsive?**

	 - This is a website that provides an online [tool](http://ami.responsivedesign.is/) to check website responsiveness to different screen sizes. Please, refer to the **Testing** section for more details. 

- **Responsive Website Checker**
	
	- This [tool](https://responsivedesignchecker.com/) in conjunction with Am I Responsive were used for responsive testing.

# Resources


- **Font Awesome & Iconify**
	- [Font Awesome](https://fontawesome.com/) was used for all icons.
	
- **Canva** 
	
	- I have used canva to design some iterations of the logo which you can view them [here](https://www.canva.com/design/DAES7tZQo7A/t9gMvx49dTM8Y4uy7A030Q/view?utm_content=DAES7tZQo7A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink).

- **StackEdit**

	- I have come across this small website called [StackEdit](https://stackedit.io) where it makes editing of markdown content easily by having a split window where you write your markdown and to visualise updates as you change it.

- **UIKIT**

	- I have used UIKIT  [documentation](https://getuikit.com/docs/introduction), extensively through out this project, so this piece of resource has been crucial to it. Please, check **implementation** section in this document for more details.
	
- **jQuery**

	-  I have used jQuery [documentation](https://api.jquery.com/) to remind myself how some of these functions work on this framework. 

- **Javascript**
	- I have also used javascript [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) as a refresher and reference.

- **HTML**

	- I have also referenced to the HTML [documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference) during implementation as a refresher. 	
  
 - **CSS**
 
 	 - I have referred to the CSS [documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) during this project.
 
 - **ImageKit** 
  
	 - This [resource](https://imagekit.io/) was used to store all images and video for faster loading.

- **Auto CSS Prefixer**
	- I have used auto-prefixer in this project to enhance compatibility with browsers, it can be found [here](https://autoprefixer.github.io/). 

# Implementation


## HTML & CSS

I have coded the HTML side of the project by starting from the home page. The first section was the header, once I was happy with that section I moved on to the next section. During implementation I took some decisions that I believed it would contribute to a better user experience. All the UI was created using UIKIT framework similar to Bootstrap.

- **index.html**  
		 
	- I have decided to have the **index.html** to hold a **div** where all content would be served by the index.js. This is an attempt to keep code isolated and easily to read and maintain. All it contains is the bare bones to support everything else.

- **homepage.html**  
		 
	-  This page is the most basic and it is the entry point of the puzzle. There the user must login or signup an account which then will load the game page. Furthermore, It contains a menu with Login and Logout buttons and once click a form modal will pop up with the respective form. I have done this way, so it minimizes the amount of pages and repeated code.
			
- **gamepage.html**
			
	- This page is the one that holds the most amount of **HTML code** as it holds not only the game but all necessary code for playing a new game, such as the categories difficulties and so on. The menu is basic, it has a information modal about the game and its rules, a leaderboard for users to see how well they are doing against others and a logout button. 

## jQuery & Javascript  

- **index.js**
 
	-	This JavaScript file is where it all starts by looking if the user has already logged, and it keeps user logged in until user logs out or deletes all local storage. In addition it deals with loading the leaderboard after logged in as well as personalising the logged in gamepage with welcoming user.

- **generateData.js**
 
	-	This file is for populating data to the database via Strapi APIs, I have done it this way to avoid adding entry by entry to the database, in this case I have one file that if needed can be reused and modified as often as necessary.

- **login.js**
 
	-	This is where all the login logic happens, I took the decision to have split files for login and logout to make more easier to debug, read and maintain. I use a library called **axios** to do all **CRUD** operations through **Strapi API**, in this case **Strapi** comes with a built in User API that can be used to create new users and also login new users, more Information can be found in the **Strapi** section below this document. The validation uses the jQuery Validation Plugin, I have decided to use this as I have greater flexibility for the things I wanted to do rather than creating one from scratch, this was due to time constrains and avoidance to write from zero when its there ready to use., and it also have more advanced validation features than the one I initially wanted to build.


- **signup.js**
 
	-	The signup form also uses Strapi API to register users and this is also done with **axios**. When signing up the username and email must be unique so I have implemented the validation for these two to happen as the user enters the information rather than after wards when form is submitted. I have also used **axios** to the **CRUD operation**, and the jQuery validation plugin to help with validation, particularly verifying existing username and email.


- **puzzlePlay.js**
 
	-	This is where game settings are gathered to be passed to the **puzzleUI.js**. These settings are puzzle orientation, words list, difficulty level and process category request which is pulling all words for a particular category selected by the user. Once all this information is obtained it is then passed to the **puzzleUI.js** for game generation.

- **puzzleUI.js**
 
	-	In this file you find all UI generation for the game. I use **CSS Grid** to create squares for each puzzle letter as they are quite responsive. The responsibility of puzzleUI.js is to get the settings received from from **puzzlePlay.js** and pass them to **puzzleLogic.js** to create a 2 dimensional array containing the puzzle, once **puzzleUI.js** receives the puzzle it will generate the **UI**, and map all array indexes to each grid square by using html attributes, and also add all adequate event listeners. In addition, it will add the timer and and score for the game to track user performance, then when user  has successfully completed puzzle it also has the responsibility to display user with a modal summarizing all user performance and finally registering it to the database.

- **puzzleLogic.js**
 
	-	This is the brains of the puzzle, but it starts by taking settings from **puzzleUI.js** and it will generate an empty array in two ways either by using the word list array length or by using the biggest word in the array, whichever is bigger. Once the empty array is generated, it will take the word list find best fitting location and also calculate overlapping one word at a time starting from the biggest word and orientation, then it inserts each word. Once the puzzle have all words list the remaining empty spaces are filled with letters randomly. Finally, this array is returned to **puzzleUI.js** for game generation.
	
	- The code is wrapped in a class as for me I see a puzzle as one object so my approach was towards Object Oriented Programming (OOP), I have done this way because I have some coding background and I know OOP is more maintainable and readable. Also, it makes it easy to be used by other files as all is needed is to create an instance of the class and pass all settings required.

## Strapi & MongoDB


- **MongoDB**
 
	-	I have chosen to us **MongoDB** as a personal preference and also because of **MangoDB Atlas** which is a great **PaaS**. In order to setup **Strapi**, but **Mongo** has to be setup first. I have done so by doing the following steps:
	
		-	**STEP 1** Create cluster project
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/mongoDB_setup_part_1_fbk2OzG_xPCb.gif)


		-	**STEP 2** Create Database User and Setup Network Access.
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/mongoDB_setup_part_1_fbk2OzG_xPCb.gif)

		-	**STEP 3** Get database credentials.
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/mongoDB_setup_part_3_AjIeUVHn-.gif)

- **Strapi**
 
	-	Once we have the credentials is pretty straight forward to setup Strapi locally, as long as Node.js is installed in the operating system. I have taken this step to set it up: 
	
		-	**STEP 3** Get database credentials.
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/strapi_setup_part_1_Wr_h-DFTb.gif)

		- 	**STEP 2** Change to the respective directory where it was installed and do **yarn develop**.
		 ![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/strapi_setup_part_2_yC4ej6V_D.png)
		- 	**STEP 3** Open the local URL to setup admin credentials.
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/strapi_setup_part_3_GodHLTCzk97I.png)
		-	**STEP 4** Navigate to Content Type Builder to build the schemas and fields.
		![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/strapi_setup_part_4_m8awI3_PVog5.png)
		-	**STEP 5** Set what kind of CRUD operations the HTTP request will be allowed.
			![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/mongo_strapi/strapi_setup_part_5_6n8y_YhdQ.png)

	- Once all this is done the APIs can be consumed.


# Testing

## User Stories

- *As a User, I want to be presented with a well structured game, so I can intuitively navigate through the game and access the information I seek.*
 
	-  **This has been achieved by having designed a very minimalistic UI. All users have to do is sign up, once logged he can use the sandwich bar menu to find out game play information or select a category and difficulty.**

-  *As a User, I want to have a how to play section, so I don't waste time figuring out how to play the game.*	
	-  **This has been achieved by having designed a very minimalistic UI. As the user logins in there is a 3 step guide on how to play the game, even though the game itself is intuitive. Also, the menu has an information section**

- *As a User, I want to be able to select different words, so the game does not feel repetitive.*

	-  **This has been achieved by giving 6 options for the user to pick, each serves a different category with 3 difficulty levels, when a game is generated is always going to be different as the words are randomly placed in the puzzle.**

- *As a User, I want the UI to be consistent throughout the game, so it will be visually appealing to play it.*
	
	-  **I have tried my best to give a simplicity in the UI, by providing with the barebones, in general the user is given a 10 x 10, 15x15 or 20x20 grid, this can also depend on word sizes. Each word is highlighted in the grid when the full word is found and also the word list has animations by shaking and striking through the word. **

- *As a User, I want to have a way to save my progress, so I don't have to start the game from scratch every time.*
	
	- **This has been achieved by having a leaderboard where it shows the progress by everyone. It displays the username, total score, total time and categories since started playing. The game is scored and timed based. **

- *As a User, I want a way to visualise how I am doing in the game, so I can see how well I do in the game.*
	
	- **This has been achieved by having designed by having words highlighted when they are found and also there is a progress bar to inform user how far off to complete the game .**
	- 
- *As a User, I want the game to give me feedback every time I successfully find a word, so I am aware how I am doing as I play the game.*

	- **This has been achieved by highlighting and animating words as they are found.**
	
- *As a Return User, I want to have a profile, so I can see how my progress is going.*
	-  **This has been achieved by giving each user a way to sign up, and login back again to see their progress in the leaderboard.**

- *As a New and Return User, I want the game to have some theme base sounds, so it can keep me engaged with the game.*
 
	-  **This has been achieved, but instead of theme, it plays sounds according to each word found.**
	 
- *As a Return User, I want to see a learderboard section, so I can see how well I performed against other players.*

	-  **This has been achieved by having a leaderboard modal that's pops up displaying table with all players performance. This is accessible once logged in located in the menu bar.**


## Browser Compatibility

 - The website was compatible with most browsers with latest updates. The optimum experiences was at Firefox, Chrome, Edge and Safari. The worst experience was IE 11 and below which completely broke the website. I have added prefixers to improve browser compatibility using [Autoprefixers](https://autoprefixer.github.io/) online.

## Responsiveness

In this section, I have checked how responsive my website is by using **Google Development Tools**, **Am I Responsive?**  and **Responsive Design Checker**. Also, I checked on **Samsung S20**, **iPhone 6S** and **iPhone 6S Plus** which all worked 100%. However, below 400px the game will break because of the puzzle. Whilst doing this game I have learned its hard to get the responsiveness 100% because of the nature of the game. The intention is for this game to be played in screens bigger than 700px of width.

- **Am I Responsive?**
	- I have checked my app against responsiveness and it all works fine up until a point. In general the app is a puzzle game and it is best played in bigger screen sizes between 700px to 1920px, outside of this range the game is not at its best because the puzzle sizes that can be large.

- **Google Development Tools** 
	- I have tested my website extensively during development and testing. I have taken some screenshots for the following sizes below, all tests done below worked properly without issues, however, if the screen is smaller than 400px the game breaks. I would say 700px and above are optimum sizes for the game.

- **Responsive Design Checker** 

	- I have tested using this website for all iPhones and all Samsung's were displaying the puzzle appropriately.  

## Form Validation

The tests that I have carried was for all forms. I can confirm that I have tested all forms and all of them behaved as expected.

- **Login Form - Submitted With No Input** ![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/login_form_no_input_error_CtyxpRctU.gif)

- **Login Form - User Not Authenticated**
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/login_form_with_input_not_authenticated_error_XhIpFDuRSmBV.gif)

- **Login Form  - User Authenticated Success**
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/login_form_with_input_authenticated_successful_wKrMuVyn6aLo.gif)

- **Signup Form - User Authenticated Success**
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/signup_form_successful_F8VHNxEmGwAtu.gif)

- **Signup Form - Email And/Or Password Already Exist**
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/signup_form_with_username_and_password_exist_error_EiwFsu1X_l7p.gif)

- **Signup Form - Email And/Or Password Already Exist**
![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/signup_form_with_no_input_error_zkgw_J6YzXBxh.gif)


## HTML Validation

- I have tested my website on the HTML Validation, there are no errors displayed in the check. The final check after the change shows validation successful. It can be viewed [here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/html_validator_JAu-zvhzJGGC.png).

## CSS Validation

- I have tested also my CSS file using the W3C validation. The result shows 3 errors:
 
	- **URI: 1** - This is a parse error from the UIKIT framework, I have no control over this error.
	- **URI 18** and **URI 19** - It does not recognise the repeat() function which is actually supported by all browsers except internet explorer. You can find more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat%28%29). Therefore, it indicates it is normal to use it.	
-  The result can be viewed [here](https://ik.imagekit.io/2a1in3cldn/MS2/login_signup/css_validator_uTezsIc3Ti.png).
  

# Project Barriers and Solutions

-  **Project Scope**

	- I initially planned to have a lot more done than required because of my background in coding. However, after discussions with my mentor it was decided to down size my initial proposal. So I have cut down from a blog  to then create a game. It was hard as I went through some tough times with my partner contracting covid-19. So a lot of the game features that I had in mind I had to cut it down. These are the following:
	- **Settings Modal** - This is where users would turn on and off the sound for the game, reset password and game difficulty. Instead, I had to re think and now the game difficulty is chosen on per game basis.
	
	- **Leaderboard Table** -  I was going to have a filterable table for global players and to see just your own achievements. 

-  **UIKit Framework**

	- I have set myself to attempt something else other than Bootstrap, so I have chosen UIKit. I feel I learned a lot about both frameworks, even though UIKit is not taught by the Code Institute course, it has similarities with bootstrap, the main challenge was how to implement components together.

- **Game**
	
	- The most challenging part of the game is to get the logic right. I have used **OOP** which was what I initially thought to do. I have created a class that has a constructor that communicates with functions in order to generate the game. The constructor receives settings and a set of words from **puzzleUI.js**, then it starts to build the puzzle. It became much easier once I saw the puzzle as an object, from there I broke down the problem into smaller parts to get where I wanted.

	- `class  PuzzleLogic {`
		- `constructor(wordList, settings) {`
    	`const  puzzle = this.generatePuzzle(wordList, settings);`
    	`const  orientations = this.getOrientations();`
    	`const  allOrientations = this.getAllOrientations();`
    	`return { puzzle, orientations, allOrientations };` 
    	`}`
	- `}`
	 
	- The snippet above is how the constructor looks like, it will take two parameters, an array of words and game settings, such as orientation depending on game difficulty, difficulty level, chosen category. Once this is passed to the constructor it will then generate the puzzle and return an object containing the created puzzle, all possible orientations in the game and the functions needed to calculate orientations, which are then used together with CSS variables and CSS Grid to generate each grid square. The game follows this logic:
		1.	 Create empty string array from array length or biggest word length
		2. Find best locations taking in consideration the array size and word  list
		3. Place words in array randomly on word per word basis
		4. Fill the remaining empty strings with random letters
		5. return puzzle
  
 - **Responsiveness**
	 - This is one of the most difficult parts because of the nature of the game, the grid sometimes are too large for small screens so I have attempted many different things to try to make this looking great in all screen, but it gets to a point that is hard to make it good in all screens, the main intention of the game is to play it on tablets and desktops but obviously desktops are the best options.

	- I have added code that will detect screen size and disable medium and/or hard difficulties, this is an attempt to improve playability in smaller screens, however I still recommend to use tablets or desktop.

- **Project Name**
	- Initially the project name was puzzlemania but this has been changed to kinectic to represent the connection between letters to form a word. The puzzlemania logo was too long and it would look bad on small screens so instead I change to something shorter and different. 

# The Future 

## Features and Functionalities

 - Once the course has ended I plan to continue to improve the game by adding new features. These are the features and functionalities I plan for the future:
	
	 - To give user the ability to change their passwords
	 - To automatic generate all categories instead  of hard coding it. 
	 - Refactor the code towards a more MCV pattern, module, view , controller. This would improve maintainability and readability.
	 - To create a reward system based on badges each badge would be necessary to achieve a certain criteria to attain it.
	 - To add profile images so people can upload their faces if they wish or choose a pre-set image.
	 - To eventually include a variety of puzzle games, for users to choose, if they get bored of word search.
	 - To improve security and not have the game store anything locally, even though no sensitive information  is not stored locally I wish to not use local storage all together.
	 - To have a global leaderboard and a regional leaderboard.
	 - To allow users to search their usernames in the leaderboard, also add sorting.
	 - To create mobile app specific for small devices such as smartphones and tablets and have this game for large screens, this is because creating a native app will fit best and function better than web apps.


# Deployment

## Creation and Publication  

1.  I created an account on GitHub -  [My account](https://github.com/tpsantos2120)
2.  I used the my-full-template -  [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)  from Code Institute as the base for my project.
3.  I created the repository -  [Kinectic](https://github.com/tpsantos2120/kinectic)  for my Milestone project.
4.  To publish the project and make it available for public viewing, I used the following steps:
    -   Opened my repositories.
    -   Selected -  [Kinectic Repository](https://github.com/tpsantos2120/kinectic)  from the list of repositories.
    -   Chose the settings option on the right of the taskbar.
    -   Scrolled down the page until ‘GitHub Pages’ was visible.
    -   Clicked on the ‘source settings’ drop-down menu and selected ‘master branch’ for publishing.
    -   You are returned to the top of the page.
    -   After scrolling back down to ‘GitHub Pages’, a link to my repository was available.
    -   My project is now available to view publicly -  [https://tpsantos2120.github.io/kinectic/](https://tpsantos2120.github.io/kinectic/)
 
##  Download Project & Github CLI
 
-  You can select to clone my repository via CLI.
	
	1. Open terminal in your preferred IDE.
	2. Navigate to the folder where you wish to close the repository.
	3. Enter `git clone https://github.com/tpsantos2120/kinectic.git`
	4. The project will be pulled to your current directory.

- To download this project do the following:
	1. Navigate to the menu in the very top of this page
	2. Click on the **Code** button.
	3. Then click on **Download.zip**
		- **Note** you can also click [here](https://github.com/tpsantos2120/kinectic/archive/master.zip) to download the zip file. 
	4. Choose the directory you wish to download it.
	5. Unzip file.
	6. Once unzipped project will be ready.
		- If you are going to use it locally you will need a web server, something like **LAMP**, you use this [Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04) from Digital Ocean for Linux Machines or this [link](https://www.apachefriends.org/index.html) for Windows machines.

## Backend Deployment

- As I have used a headless CMS, in order to deploy it I have used Digital Ocean via their App Platform. Once an account with them is opened and your github account is authorized, the deployment is very straight forward, all is needed is to have Strapi push to a repository, then in Digital Ocean you can select that repository and deploy it.

-  **Deployment Strapi**
	1. **Follow Strapi Deployment Documentation** 
		- [Follow this documentation](https://strapi.io/documentation/developer-docs/latest/getting-started/deployment.html).
		 
	2. **Cloud Deployment With Digital Ocean** 
	 ![enter image description here](https://ik.imagekit.io/2a1in3cldn/MS2/strapi_deployment_4LBy8TFJX.gif) 

	3.  **Domain and DNS Records**
	 
		- The domain I used was one that I had bought a while ago. Navigate to your Domain Registrar and point the NS Records to match the ones given by Digital Ocean. Once the domain has been propagated it is now possible to go to your APP deployment settings and create a alias record so your Strapi App now points to that domain. 	
-  There are other ways, but this is the most straight forward if the backend is being developed locally.
# Credits

- **Home Page Intro**
	- I have used some text from wikipedia for the intro in the home page. The link to the source is [here](https://en.wikipedia.org/wiki/Word_search).

- **Puzzle Logic**
	- I have researched on how I could go on about creating the game and I have used these resources:

		- https://codeguppy.com/site/tutorials/word-search.html
		- https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
		- https://davidxmoody.com/2014/wordsearch-game/

- **Puzzle Words**
	- I have used this [website](https://www.brainzilla.com/word-games/word-search/) to get the words for the game.

- **UIKit** 
	
	- The majority of the project was completed using [UIkit framework](https://getuikit.com/docs/animation), I have mainly customised the framework to my own proposed wireframes and mockup as specified in the UX section of this document. I have used a lot of the documentation from UIkit to accomplish the end project.

- **jQuery** 
	- I have used jQuery for parts of the website, I have mainly used previous knowledge and documentation provided by jQuery.

- **jQuery Form Validator** 

	- I have used this jQuery Plugin for form validation, but mainly because of the jQuery Login Validator. The source can be found [here](https://jqueryvalidation.org/). 

- **ImageKit** 
	 - This is a [CDN](https://imagekit.io/) where I have used to store all images and gifs.

- **UIKit**
	- I have used extensively the UIKit framework in this project all UI components apart from the grid was created using this framework. 

- **Axios**
	- I have used this library to make all the HTTP requests, mainly because of the error handling and because I have used it in the past. It can be found [here](https://github.com/axios/axios). 

- **Game Sound** 
	-  I have used this piece of code from [W3C](https://www.w3schools.com/graphics/game_sound.asp)  for the sounds in the game.
- **Font Awesome**
	- I have used [font awesome](https://fontawesome.com/icons?d=gallery) for the icons in the game.
# Acknowledgements

  

- I would like to thank you [Stuart Crang](https://www.linkedin.com/in/stuart-crang-50401897/) again for helping me getting enrolled in this course which took ages and the support. Also, for the long conversations and patience that you had with me through this time.

- Also, I would like to mention my mentor here. Thank you [Dick Vlaanderen](https://www.linkedin.com/in/dick-vlaanderen/) for the support and guidance especially when my plan was bigger than was needed so you told me to calm down. Also, for giving me your opinion throughout our meetings.

- Last but not least, I would like to thank the [Code Institute](https://codeinstitute.net/) for the course content and amazing support they have always provided me!


