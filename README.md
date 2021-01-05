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

>     - GET	/categories
>     - GET	/users
>     - GET	/words
>     - GET	/leaderboard

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




