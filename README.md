
 Table Of Contents



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
  - [Responsiveness](#responsiveness)
  - [Form Validation](#form-validation)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
- [Project Barriers and Solutions](#project-barriers-and-solutions)
- [Deployment](#deployment)
  - [Creation and Publication](#creation-and-publication)
  - [Download Project & Github CLI](#download-project--github-cli)
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
	- I had initially not planned to use [Iconify](https://iconify.design/) but during the mockup stage I have used Iconify for it and for some icons during implementation. In addition, [Font Awesome](https://fontawesome.com/) was also used for most of the icons.
	
- **Canva** 
	
	- I have used canva to design some iterations of the logo which you can view them [here](https://www.canva.com/design/DAEJMth8LoU/S4D2xtRz3mKmKW6sMpT09A/view?utm_content=DAEJMth8LoU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton).

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

- **Auto Minifier** 
	-  I have used this website to minify my CSS and JS to improve loading times. I have preserved the un-minified versions. The auto minifier can be found [here](https://www.minifier.org/).

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

	- I have tested using this website for all iPhones and all Samsungs were displaying the puzzle appropriately.  

## Form Validation

The tests that I have carried was for all forms. I can confirm that I have tested all forms and all of them behaved as expected, I did not screenshot extensively all inputs validation as all of them are the same, but all passed validation tests. 


## HTML Validation

- I have tested my website on the HTML Validation, there are no errors displayed in the check. The final check after the change shows validation successful. It can be viewed [here](https://ik.imagekit.io/2a1in3cldn/testing_images/html_validation_FA3s44bpxZL7.png).

## CSS Validation
- I have tested also my CSS file using the W3C validation. The result is that it did not pass the validation checks due to the bootstrap framework. All the CSS that I have coded passed were validated fine.  As it shows in the screenshot it shows that there were 2 errors and 751 warnings all from bootstrap. The result can be viewed [here](https://ik.imagekit.io/2a1in3cldn/testing_images/css_validation_LlCqghCeZexg.png).
  

# Project Barriers and Solutions

  

-  **Project Scope**

	- I initially planned to have a lot more done than required because of my background in coding. However, after discussions with my mentor it was decided to down size my initial proposal. So I have cut down from an eCommerce website to a more static one.

	- In addition, I was initially going to do an ordering system so users would be able to order cakes from the site, it would have a small backend and google maps for users to check location distance and so on. I have turned the ordering section into a photo gallery instead and removed the google maps feature.

-  **Bootstrap Framework**

	- The main challenging part for me was using bootstrap framework, as i have not used it extensively in the past. I took the wrong approach of not going through the documentation in detail. This lead me to do a lot of hard coding CSS when bootstrap had already had all laid out. After realising this mistake, starting from mid project forward I have extensively used more the framework and less hard coding.

-  **Heavy Loading Website**

	- In addition, I have had problems with the amount of images in my website. Initially I have just uploaded all images to the project images folder and even after resizing and using [TINYPNG](https://tinypng.com/) it still was making the website very heavy to load. So I decided to look for a CDN platform to mitigate this issue. Once I had the images in the CDN the website loaded much faster due to auto compressing and resizing.

- **Bootstrap Navbar**
	
	- I have come across an issue during testing where the fixed top navbar was overlapping with the carousel, so I have followed bootstrap solution to add padding top to the body, even though this does work, if using older browsers it will actually display the white padding space, due to this reason I decided to remove the navbar being fixed to the top when scrolling and instead added a back to top button.
  

# Deployment

## Creation and Publication  

1.  I created an account on GitHub -  [My account](https://github.com/tpsantos2120)
2.  I used the my-full-template -  [Code Institute Template](https://github.com/Code-Institute-Org/gitpod-full-template)  from Code Institute as the base for my project.
3.  I created the repository -  [Hansel's Bakery](https://github.com/tpsantos2120/hanselsbakery)  for my Milestone project.
4.  To publish the project and make it available for public viewing, I used the following steps:
    -   Opened my repositories.
    -   Selected -  [Hansel's Bakery Repository](https://github.com/tpsantos2120/hanselsbakery)  from the list of repositories.
    -   Chose the settings option on the right of the taskbar.
    -   Scrolled down the page until ‘GitHub Pages’ was visible.
    -   Clicked on the ‘source settings’ drop-down menu and selected ‘master branch’ for publishing.
    -   You are returned to the top of the page.
    -   After scrolling back down to ‘GitHub Pages’, a link to my repository was available.
    -   My project is now available to view publicly -  [https://github.com/tpsantos2120/hanselsbakery](https://github.com/tpsantos2120/hanselsbakery)
 
##  Download Project & Github CLI
 
-  You can select to clone my repository via CLI.
	
	1. Open terminal in your preferred IDE.
	2. Navigate to the folder where you wish to close the repository.
	3. Enter `git clone https://github.com/tpsantos2120/hanselsbakery.git`
	4. The project will be pulled to your current directory.

- To download this project do the following:
	1. Navigate to the menu in the very top of this page
	2. Click on the **Code** button.
	3. Then click on **Download.zip**
		- **Note** you can also click [here](https://github.com/tpsantos2120/hanselsbakery/archive/master.zip) to download the zip file. 
	4. Choose the directory you wish to download it.
	5. Unzip file.
	6. Once unzipped project will be ready.
		- If you are going to use it locally you will need a web server, something like **LAMP**, you use this [Tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu-16-04) from Digital Ocean for Linux Machines or this [link](https://www.apachefriends.org/index.html) for Windows machines.


  

# Credits

  https://www.w3schools.com/graphics/game_sound.asp
  https://mixkit.co/free-sound-effects/alerts/


- **UIKit** 
	
	- The majority of the project was completed using UIkit framework, I have mainly customised the framework to my own proposed wireframes and mockup as specified in the UX section of this document. I have used a lot of the documentation from UIkit to accomplish the end project.

- **jQuery** 
	- I have used jQuery for parts of the website, I have mainly used previous knowledge and documentation provided by jQuery.

- **jQuery Form Validator** 

	- I have used this jQuery Plugin for form validation. The source can be found [here](https://jqueryvalidation.org/). 

- **ImageKit** 
	 - This is a [CDN](https://imagekit.io/) where I have used to store all images and video.



# Acknowledgements

  

- I would like to thank you [Stuart Crang](https://www.linkedin.com/in/stuart-crang-50401897/) again for helping me getting enrolled in this course which took ages and the support. Also, for the long conversations and patience that he had with me through this time.

- Also, I would like to mention my mentor here. Thank you [Dick Vlaanderen](https://www.linkedin.com/in/dick-vlaanderen/) for the support and guidance especially when my plan was bigger than was needed so he told me to calm down. Also, for giving me your opinion throughout our meetings.

- Last but not least, I would like to thank the [Code Institute](https://codeinstitute.net/) for the course content and amazing support they have always provided me!


