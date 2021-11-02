# Giphy Search Engine

## Technologies Used

- CSS
- jQuery
- JavaScript
- HTML
- GiphyAPI

## Screenshots

##### *Giphy Search Engine!*
![Giphy Search Engine!](/images/giphy-search-engine.png "Giphy Search Engine")

##### *Giphy Search Engine Rating Selector*
![Giphy Search Engine Rating Selector](/images/rating-selector.png "Giphy Search Engine Rating Selector")


## Getting Started

[Giphy Search Engine!](https://jlb2137.github.io/)

This app is simple to use and allows you to cycle gifs quickly pulling from Giphy! You are able to perform 4 functions using the online app.

1. Submit (Search) - This function is used to search for new gifs based on the input of the user. Using this button will pull from the input of the user. Depending on what is input in the search box, the app will search the giphy database and return the results. If no results appear, the current image will persist.


2. Shuffle - This function allows you to move through the results of the API search. It will take you through the next result returned from the API and continue until the end of the results at which point it will return you to the first result. This function does not work until the user has already used the Submit (Search) function.

3. Rating - This selector adjusts the rating of the gif results. All possible variations are provided to the user and are inclusive of strictor ratings. Using this selector will reset the result and maintain whatever search the user has input.

4. Copy - This function copies the original sized gif file and adds it to the user's clipboard. This function will not work until the user has used the Submit (Search) function.


## Future Enhancements

I would love to add a counter to the page where you can see the number of results as you "Shuffle" through the results. I would also like to use an arrow key to continue to move back and forth through the stack of gifs returned.