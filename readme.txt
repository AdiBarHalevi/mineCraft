build a mimc to minecraft game:
- get all the resourses needed(pics,logos..etc)

- create an HTML with 2 main containers: one for the pregame, and one for the actual game
    in the game container:
    one div as the game window, second one as the inventory/tools

- create a CSS file with basic design (add classes to the logo,the blocks,the layout)
    for the outer game set a class of hideAfterRun to hide it once the game starts
    **the class will be injected to the file as the game starts.
    in order to make the game random when generated set a specific var to each element of the page
    (rocks,trees,clouds)
    for the inner game layout:use css-grid(we can try with 15/15)

- in the script file:
    iterate over the grid and assign classes to it.
    the first 3 blocks of the screen(from the bottom should be ground element)
    the rest should be sky.
    *create a function that override the classes given(starting from the 4th block height )
     and assign trees/rocks/clouds
    *create a function that removes a tile only from non-sky elements and replaces it with sky element
     same function should put the element in the inventory, the function has to be speicif with the tool
     choosen.(**create another function to validate)


