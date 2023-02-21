let color = "black";
let gridSize = 16;



function createStartingGrid () {

    const container = document.querySelector("#container");
    const clearButton = document.querySelector("#clear");

    container.style.gridTemplateRows = `repeat(${gridSize},1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`;

    for( let i = 0; i < gridSize; i++ ) {
        for( let j = 0; j < gridSize; j++ ) {

        const square = document.createElement( "div" );

        square.setAttribute( "class", "square" );

        addHoverEffect( square );

        container.appendChild( square );

        }
    }

    clearButton.addEventListener("click", () => {

        clearTheBoard( container );

    })

}

function addHoverEffect ( square ) {

    square.addEventListener("mouseover", ()  => {

        square.style.backgroundColor = color;

    });
          
}


function clearTheBoard( gridContainer ) {

    const squares = document.querySelectorAll(".square");
    
    for(const square of squares) {
        square.parentNode.removeChild(square);
    }

    createStartingGrid();

}





createStartingGrid();