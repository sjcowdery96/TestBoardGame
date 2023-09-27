const gameBoard = document.querySelector("#gameboard")
const playerOnDeck = document.querySelector("#playerOnDeck") //span element
const infoDisplay = document.querySelector("#infoDisplay")

const scores = [0,0]
const piecesLeft = [36,36,4,4,1] //defines 36 seed pieces each, 4 deserts each, 1 koya


const width = 9 //meaning 0-8 indexes

let playerTurn = 'white' //global variable for whose turn
playerOnDeck.textContent = 'white' //sets the display span to be white

const startPieces = [
    sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, sampleSeed, 
    '','','','','','','','','',
    '','','','','','','','','',
    '','','','','','','','',otherTree,
    '','','','','','','','','',
    '','','',otherSeed,'','','','','',
    '','','','','','','','','',
    '','','','','','','','','',
    singlePine, singlePine, singlePine, singlePine, singlePine, singlePine, singlePine, singlePine, singlePine,
]

function createBoard(){
    startPieces.forEach((startPiece,i)=> {
        const square = document.createElement("div")
        square.classList.add("square")
        square.setAttribute("square-id", i)
        square.innerHTML = startPiece
        square.firstChild?.setAttribute('draggable', true)
        
        if(i%2===0){
            square.classList.add("accentColor")
        }
        //these throw errors if the space does not have an SVG to fill -- the error is for no first child
        if(i <= 8){
            square.firstChild?.firstChild.classList.add("p1Color")
        }

        if(i >= 72){
            square.firstChild?.firstChild.classList.add("p2Color")
        }
        gameBoard.append(square)

    })
}

createBoard()


//selects all squares
const allSquares = document.querySelectorAll("#gameBoard .square")

allSquares.forEach(square=>{
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('draggend', dragOver)
})

//define global variables for position and dragged element
let startPositionID
let draggedElement
let endDraggedPosition

function dragStart(e){
  startPositionID = e.target.parentNode.getAttribute('square-id')
  //draggedElement = e.target
  console.log(startPositionID)
}

function dragOver(e){
    //e.preventDefault()
    endDraggedPosition = e.target.parentNode.getAttribute('square-id')
    console.log(endDraggedPosition)
}

function changePlayer(){
    if(playerOnDeck === 'white'){
        playerOnDeck = 'black'
        playerTurn.textContent = "black"
    }
    else{
        playerOnDeck = 'white'
        playerTurn.textContent = 'white'
    }
    console.log("changed player")
}

function dragDrop(e){
    e.stopPropogation()
    //define some logic for replacing and taking pieces 
    const taken = e.target.classList.contains('piece')
    console.log(e)
    //e.target.remove()
    //e.target.parentNode.append(draggedElement) //parentNode is grabbing the parent node of the piece...meaning the square
    //e.target.append(draggedElement)
    changePlayer()

}


function checkBranch(){
    //checks if a branch has been completed, to create a root

    //check branch left

    //check branch right

    //check branch up

    //check branch down

    //check diagonals
}

function placePiece(player, location){ //plays a piece   
    //checks if square is occupied
    if(location.firstChild!=null){
        //there is a piece there
        console.log("that move is invalid!")
    }
    else{
       console.log("no piece there!")
    }

    //if not, place piece 

    //resolves checkBranch

    //updates score and other things
}

