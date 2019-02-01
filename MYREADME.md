# Book-Worm App

[book-worm.netlify.com](https://book-worm.netlify.com) - latest build deployed using Netlify

An apllication created with *create-react-app* and Google's Books API that allows you to:
- Type in a query and display a list of books matching it.
- Check each book's information (title, the book's author and picture of the book).
- Navigate from each book to modal with additional information about the book(publishing company, publication date, description).

The application is composed of the following components:
*  App - the primary (root) component for managing all Book-Worm and underlying component state.
* Header - contains main heading of the page.
* Books - fetches the API and contains other components:
    * SearchArea - used to input query and submit the form
    * BookList - displays list of books
    * BookCard - displays information about each book and picture; navigates to more information about the book.
    * BookModal - displays more information about the book in modal
    * BookPagination - navigates to the next page with more book items

### Build With:
- Visual Studio Code
- create-react-app
- React
- Google Books API
- Bootstrap 4 with CSS Flexible Box Layout Module
- Sass
- Jest & Enzyme - for testing application features

### Comments:
In my task wanted to created book app that could showcase my approach for creating React app. My inspiration was a video course "React for beginners" from LevelUpTutorials.

I've used Bootstrap for styling as it's a nice framework that allowed me to create 
easily and quickly simple responsive design for this app. I utilized Bootstrap along with Sass. In real world application I would use Sass for easier management of repetitions with mixins. For naming CSS classes I used BEM methodology so CSS will be more understandable and clear.

To display more information about the book I implement react-modal to create a modal that would contain those extra information. I used react-modal instead react-router because it was easy and quick to implement. With not too much of quantity of content it looks neat and it's easy to navigate back.

Testing subject is quite new to me. I went along with the udemy course React Testing with Jest and Enzyme. First I tested if my components are rendering. Then I checked initial statates and if they are updating. To check functions in copmonentDidMount I used spyOn. In production I would use mock mechanism.

### Feedback: 

- [x] Set initialState on app title click
- [x] Fix failing test
- [ ] Fix skipped tests
- [x] Show loader while fetching API
- [x] Provide fallback for no results
- [x] Extract low-level logic to helper functions - line 20
- [ ] Test 'unhappy path'

