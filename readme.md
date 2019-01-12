# Book-Worm App
An apllication created with *create-react-app* and Google's Books API that allows you to:
- Type in a query and display a list of books matching it.
- Check each book's information (title, book's author and picture of the book).
- Navigate from each book to modal with addidtional infomation about the book(publishing company, publication date, description).

The application is composed of the following components:
*  App - the primary (root) component for managing all Book-Worm and underlying component state.
* Header - contains main heading of the page.
* Books - fetches the API and contains other components:
    * SearchArea - used to input query and submit the form
    * BookList - displays list of books
    * BookCard - displays information about each book and picture; navigates to more information about the book.
    * BookPage - displays more information about the book in modal
    * BookPagination - navigates to next page with more book items

### Build With:
- Visual Studio Code
- create-react-app
- React
- Google Books API
- Bootstrap
- Sass
- Flexbox
- Jest - for testing application features

