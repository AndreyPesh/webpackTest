import './style/style.scss'
import imageSrc from './assets/bg.webp'
const body = document.body
import fun from './fun.ts'

const img = new Image ()
img.src = imageSrc
body.append(img)

console.log('without loaders');

console.log(fun());