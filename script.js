let active = 0;
let color = "black";
let gridSize = 16;



function createStartingGrid () {

    const container = document.querySelector("#container");
    const clearButton = document.querySelector("#clear");
    const newGridButton = document.querySelector("#new-grid");

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

    if( active === 0) {

        clearButton.addEventListener("click", () => {

            clearTheBoard( container );

        });

        newGridButton.addEventListener("click", () => {

            createNewBoard( container );

        })

        active = 1;

    }

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

function createNewBoard ( gridContainer ) {

    let gridSizeTemp = parseInt(prompt("Please enter a size for the new grid"));
    
    if (gridSizeTemp <100 && gridSizeTemp > 1) {
        
        gridSize = gridSizeTemp;

        clearTheBoard( gridContainer );

    }else {

        alert("Please enter a number less than a 100 and more than 1");

    }


}





createStartingGrid();