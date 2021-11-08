//alert('JS Working')

const $img = $('img')
const $shuffle = $('input[value="Shuffle"]')
const $userInput = $('input[type="text"]')
const $submit = $('#submit-button')
const $form = $('.user-search')
const $copy = $('input[value="Copy"]')
const $select = $('select');
const $counter = $('#counter')
const $return = $('#return')
const URL = 'https://api.giphy.com/v1/gifs/search'
const API_KEY = '?api_key=hvGei9QgKHO2wGpIseEMtFaRyyd0dPN2'
let searchInput = 'cheese'
let gifRating = 'g'
let promise = ''
let responseGlobal
//object for interating with the gif setup
const gif = {
    search: `&q=${searchInput}`,
    rating: `&rating=${gifRating}`,
    imageSource: '',
    resultsCounter: 0,
    response: 'response'
}



function giphyAPI() {
    
    console.log(`${URL}${API_KEY}${gif.search}${gif.rating}`)

    promise = $.ajax(`${URL}${API_KEY}${gif.search}${gif.rating}`)

    promise.then(function(response) {
        //set the image source equal to the response
        gif.imageSource = response.data[gif.resultsCounter].images.original.url
        //set the image on the index file equal to the source of the first gif in the response
        $img.attr('src',`${gif.imageSource}`)
        //set the response to be used globally by other buttons/functions
        gif.response = response
        console.log('length',gif.response.data.length)
        console.log(gif.response)
        $counter.text(`${gif.resultsCounter+1}/${gif.response.data.length}`)
        

    }, function(error) {
        console.log(error)
    })
}

//updates the search inputs so that the API string can be adjusted correctly
function updateSearch(input) {
    //update the searchInput variable to what is the input
    searchInput = input
    //update the total gif search string to include the new search
    gif.search = `&q=${searchInput}`
}

//setting up the shuffle event
$shuffle.on("click", function(evt) {
    //prevent default behavior
    evt.preventDefault()
    //update the counter to move to the next gif in the array only if we have more gifs in the stack left
    if (gif.resultsCounter < gif.response.data.length - 1) {
        gif.resultsCounter++
        $counter.text(`${gif.resultsCounter+1} / ${gif.response.data.length}`)
        console.log('gifCounter',gif.resultsCounter)
    //otherwise reset the counter to the first gif
    } else {
        gif.resultsCounter = 0
        $counter.text(`${gif.resultsCounter+1}/${gif.response.data.length}`)
        console.log('gifCounter',gif.resultsCounter)
    }
    //set the image source equal to the response
    gif.imageSource = gif.response.data[gif.resultsCounter].images.original.url
    //update the image with the next gif in the array
    $img.attr('src',`${gif.imageSource}`)
})

//running the giphyFunction with new input from the user
$submit.on("click", function() {
    updateSearch($userInput.val())
    //reset the results counter
    gif.resultsCounter = 0
    //rerun the giphyAPI to update the image in the index
    giphyAPI()
})

//updates the gif rating if the user adjusts this value
//will update once a new search is submitted
$select.on("change", function(evt) {
    //set the gif rating to what has been selected
    gifRating = $(evt.target).val()
    //updated the gif rating string for promise setup
    gif.rating = `&rating=${gifRating}`
    //reset the results counter
    gif.resultsCounter = 0
    //rerun the giphyAPI to adjust the value
    giphyAPI()
})



//submit the form that the submit button is nested in
$form.submit(function(submitEvent) {
        //capture the input when the enter key is hit
        submitEvent.preventDefault()
        //enter key is equal to 13
    if (submitEvent.which == 13) {
        console.log("press enter")
        //update the search variable to what is in the text box
        updateSearch($userInput.val())
        //reset the results counter
        gif.resultsCounter = 0
        //rerun the giphyAPI to update the image in the index
        giphyAPI()
    }
})


$copy.on("click", function(evt) {
    evt.preventDefault()
    console.log(gif.response.data[gif.resultsCounter].images.original.webp)
    let x = gif.response.data[gif.resultsCounter].images.original.webp
    navigator.clipboard.writeText(`${x}`)
})

$return.on("click", function(evt) {
    //prevent default behavior
    evt.preventDefault()
    //update the counter to move to the next gif in the array only if we have more gifs in the stack left
    if (gif.resultsCounter > 0) {
        gif.resultsCounter--
        $counter.text(`${gif.resultsCounter+1} / ${gif.response.data.length}`)
        console.log('gifCounter',gif.resultsCounter)
    //otherwise reset the counter to the first gif
    } else {
        gif.resultsCounter = 0
        $counter.text(`${gif.resultsCounter+1}/${gif.response.data.length}`)
        console.log('gifCounter',gif.resultsCounter)
    }
    //set the image source equal to the response
    gif.imageSource = gif.response.data[gif.resultsCounter].images.original.url
    //update the image with the next gif in the array
    $img.attr('src',`${gif.imageSource}`)

})
