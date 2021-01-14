console.log('The house always wins!')

const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')
console.log(idInput)
console.log(colorInput)


function setCard(){
    const card = document.getElementById(inputId.value)
    card.style.color = colorInput.value
    console.log('setCard')
} 