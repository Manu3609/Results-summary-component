import data from './data.json' assert {type : 'json'}
const reactionComponent = document.querySelector('#reaction') 
const memoryComponent = document.querySelector('#memory') 
const verbalComponent = document.querySelector('#verbal') 
const visualComponent = document.querySelector('#visual') 
// console.log(data)
reactionComponent.innerHTML=data.reaction
memoryComponent.innerHTML=data.memory
verbalComponent.innerHTML=data.verbal
visualComponent.innerHTML=data.visual