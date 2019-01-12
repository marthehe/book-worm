#To-do:- done
- create book list
- create book card
- style book list and book card
- add image to book card

- navigate to more information about the book but this information does not necessarily need to appear on a page within your application. In other words, this could link out to an external site with more information about that particular book.- done

- change files:
    - one folder for each component with js file and scss file- done
- add boostrap:-done
    - change buttons and cards MAKE IT SEXY-done
    - make grid for diffrent screen widths-done
    - add mixins and variables with colors and things that i'm reapiting-done

- add API -done
- rendering pagination: (remember to explain why you are using react-js-pagination in README) -done
    - check how many books are to display
    - divide number of books to display by displaying number (default number of books currently is 10)
    - change number of books to display from default 10 to 18
    - used fixed api link to do that

#To do styling:
- add card-deck(bootstrap class) before col
- fix padding in input- DONE
- fix colors in button- done
- fix the height of the book-cards- done
- move the paginantion to bottom - AT THE END


#To do part 2 :
- if there are no results for seraching term show information 'There are no results for yor seraching 



#To do tets part:
test componentDidMount:
- invoke componentDidMount
- check the fetch method- how to use mock???

1. Remove books.json - done
2. Check typos - done in readme file
3. Remove unnecessary comments `App.test.js` - done
4. `App.js` use functional component? - done
5. `SearchArea` use ES6 implicit return
6. `Books.js` instead of duplicating `fetch()` in 2 places use fetchBooks() method in handleSubmit() - done
7. `BooksPagination` use class fields like in `Books.js` for defining state instead of using `constructor` - done
8. Rename `BookPage` to `BookModal`- done
9. Provide description why modal was used instead of react-router
10. `BooksList` use ES6 implicit return - done
11. `BookCard` use class fields like in `Books.js` for defining state instead of using `constructor` -done
12. `BookCard` remove `.bind` from constructor and use arrow function as a method instead. Just like in `Books.js` - done
13. Remove comments from render() in `BookCard.js` - done


