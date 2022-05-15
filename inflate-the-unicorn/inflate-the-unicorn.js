// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

// create an array of the images

let ImageArray = new Array()
ImageArray[0] = new Image()
ImageArray[0].src = './images/unicorn-0.png'

ImageArray[1] = new Image()
ImageArray[1].src = './images/unicorn-1.png'

ImageArray[2] = new Image()
ImageArray[2].src = './images/unicorn-2.png'

ImageArray[3] = new Image()
ImageArray[3].src = './images/unicorn-3.png'

let unicorns = document.getElementsByClassName('inflate-an-image')

for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = unicornsClicked
}

let number = [1]
//onclick, loop through image files, if image file is same as unicorn html file,
//then increase by 1 integer

function unicornsClicked(e) {
  let unicorns = e.target
  for (let i = 0; i < ImageArray.length; i++) {
    if (ImageArray[i].src === unicorns.src) {
      i++
      if ((unicorns.src = ImageArray[0].src)) {
        unicorns.src = ImageArray[i++].src
      }
    }
    if (unicorns.src === ImageArray[3].src) {
      alert('Unicorn ' + number++ + ' says thank you!')
    }
  }
}
