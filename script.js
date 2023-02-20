

function createStartingGrid () {

    const container = document.querySelector("#container");

    for( let i = 0; i < 64; i++ ) {
        for( let j = 0; j < 64; j++ ) {

        const square = document.createElement( "div" );

        square.setAttribute( "class", "square" );

        addHoverEffect( square );

        container.appendChild( square );

        }
    }

}

function addHoverEffect ( square ) {

    square.addEventListener("mouseover", () => {

        square.style.backgroundColor = "black";

    });

}

createStartingGrid();