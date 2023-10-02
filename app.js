const gameBoard = document.querySelector("#gameboard")
const playerOnDeck = document.querySelector("#playerOnDeck") //span element
const infoDisplay = document.querySelector("#infoDisplay")

const scores = [0, 0]
const piecesLeft = [36, 36, 4, 4, 1] //defines 36 seed pieces each, 4 deserts each, 1 koya


const width = 9 //meaning 0-8 indexes

let playerTurn = 'white' //global variable for whose turn
playerOnDeck.textContent = 'white' //sets the display span to be white

const startPieces = [
    sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed,
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', otherTree,
    '', '', '', '', '', '', '', '', '',
    '', '', '', otherSeed, '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    singlePine, singlePine, singlePine, singlePine, singlePine, singlePine, singlePine, singlePine, singlePine,
]

function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement("div")
        square.classList.add("square")
        square.setAttribute("square-id", i)
        square.innerHTML = startPiece
        square.firstChild?.setAttribute('draggable', true)

        if (i % 2 === 0) {
            square.classList.add("accentColor")
        }
        //these throw errors if the space does not have an SVG to fill -- the error is for no first child
        if (i <= 8) {
            square.firstChild?.firstChild.classList.add("p1Color")
        }

        if (i >= 72) {
            square.firstChild?.firstChild.classList.add("p2Color")
        }
        gameBoard.append(square)

    })
}

createBoard()


//selects all squares
const allSquares = document.querySelectorAll("#gameBoard .square")

allSquares.forEach(square => {
    //adds event listeners 
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', dragDrop)//listen for drop event
})

//define global variables for position and dragged element
let startPositionID
let draggedElement
let endDraggedPosition

function dragStart(e) {
    startPositionID = e.target.parentNode.getAttribute('square-id')
    draggedElement = e.target

    console.log("dragStart " + startPositionID + " \n" + draggedElement)

}

function dragOver(e) {
    e.preventDefault()//prevents from constantly listening for this
    endDraggedPosition = e.target.parentNode.getAttribute('square-id')
    //console.log(endDraggedPosition)
}

function changePlayer() {
    if (playerTurn === 'white') {
        playerTurn = 'black'
        playerOnDeck.textContent = "black"
    }
    else {
        playerTurn = 'white'
        playerOnDeck.textContent = 'white'
    }
    console.log("changed player")
    //flips board
    flipBoard()
}

function dragDrop(e) {
    //prevemtoimg doubling
    e.preventDefault()

    //if there is a piece in the target drop zone, define taken as not null
    const taken = e.target.classList.contains('piece')

    if (taken) {
        //append new piece then remove the current piece 
        e.target.parentNode.append(draggedElement)
        e.target.remove()

    }
    else {
        //no piece present = blank space
        e.target.append(draggedElement)
    }
    //change player
    changePlayer()

}

function checkBranch() {
    //checks if a branch has been completed, to create a root

    //check branch left

    //check branch right

    //check branch up

    //check branch down

    //check diagonals
}

function placePiece(player, location) {
    //plays a piece   
    //checks if square is occupied
    if (location.firstChild != null) {
        //there is a piece there
        console.log("that move is invalid!")
    }
    else {
        console.log("no piece there!")
    }

    //if not, place piece 

    //resolves checkBranch

    //updates score and other things
}

function updateScore() {
    //scans the board and updates the score

}

function isTrunk() {
    //checks if we created a tree
}

//flips the board around -- only useful if two players on one device
function flipBoard() {
    const allSquares = document.querySelectorAll(".square")
    if (playerTurn === "white") {
        allSquares.forEach((square, i) => {
            square.setAttribute('square-id', (width * width - 1) - i) //clever math to reverse id's
        })
    }
    else {
        allSquares.forEach((square, i) => {
            square.setAttribute('square-id', i) //clever math to re-reverse id's
        })
    }


}