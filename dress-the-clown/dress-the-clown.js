// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// push the left and right arrow keys to change the outfit
// create function for changing horizontal keys
// create variable of headindex to know how far left or right we're shifting
// put in argument 'shift' which relates to 1 and -1 in the checkKey function, now the head changes with left and right buttons
// put in if statement to keep within the 5 head options

// push the up and down arrow keys to change which part of the body we're changing

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
  } else if (e.keyCode == '40') {
    changeVertical(1)
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
  }
}

let headIndex = 0
//an index to assign left and right with numbers, so we know which is being executed
let bodyIndex = 0
let shoesIndex = 0

let mainIndex = 0

let head = document.getElementById('head')
let body = document.getElementById('body')
let shoes = document.getElementById('shoes')

// function for left and right keys that i'll put into the above function
function changeHorizontal(shift) {
  if (mainIndex == 0) {
    headIndex += shift

    if (headIndex < 0) headIndex = 5

    if (headIndex > 5) headIndex = 0

    head.src = './images/head' + headIndex + '.png'
  }

  if (mainIndex == 1) {
    bodyIndex += shift

    if (bodyIndex < 0) bodyIndex = 5

    if (bodyIndex > 5) bodyIndex = 0

    body.src = './images/body' + bodyIndex + '.png'
  }

  if (mainIndex == 2) {
    shoesIndex += shift

    if (shoesIndex < 0) shoesIndex = 5

    if (shoesIndex > 5) shoesIndex = 0

    shoes.src = './images/shoes' + shoesIndex + '.png'
  }
}

function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0) mainIndex = 2

  if (mainIndex > 2) mainIndex = 0

  console.log(mainIndex)
}
