
let div=document.createElement("div")
document.body.appendChild(div)
div.style.textAlign="centre"
function hi (){
let AGE=document.createElement('p')
let name=document.createElement('h2')
let img=document.createElement('img')
let card=document.createElement('div')

let names=document.createTextNode('hello')
 img.src="gg.jpg"
let AGE1=document.createTextNode('to my task')
 name.appendChild(names)
AGE.appendChild(AGE1)

card.appendChild(name)
card.appendChild(AGE)
card.appendChild(img)

card.style.width="200px"
img.style.width="100%"
card.style.background="black"
card.style.color='white'
card.style.padding='10px'
card.style.display='inline-block'
card.style.marginLeft='50px'

div.appendChild(card)




}
