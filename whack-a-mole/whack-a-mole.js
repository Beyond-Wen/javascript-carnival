// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Whack-a-Mole!')

let cellsArray = document.getElementsByTagName('td')

//create mole image
let molePic = document.createElement('img')
molePic.src = 'mole.PNG'
//create audio
let boing = new Audio()
boing.src = ' whack-audio.wav'

//function to make mole appear in random cell
function moleAppear() {
  let randomIndex = Math.floor(Math.random() * 25)
  let randomCell = cellsArray[randomIndex]
  randomCell.appendChild(molePic)
}
moleAppear()

//clicking on mole

molePic.onclick = whackedMole

function whackedMole() {
  molePic.remove(molePic)
  moleAppear()
  boing.play()
}
