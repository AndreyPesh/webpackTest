import './style/style.scss'
import imageSrc from './assets/bg.webp'
const body = document.body

const img = new Image ()
img.src = imageSrc
body.append(img)

console.log('without loaders');

console.log("Hello World!");
function firstFunction() {
  console.log('I need to make deploy');
}

firstFunction()

