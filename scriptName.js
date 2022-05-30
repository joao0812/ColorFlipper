let colorNameID = document.getElementById('colorNameID')
let btName = document.getElementById('btName')

const colors = ["#ff6961", "#77dd77", "#fdfd96", "#84b6f4", "#fdcae1"]
const colorsName = ['Vermelho', 'Verde', 'Amarelo', 'Azul', 'Rosa']

const chooseColorName = () => {
    let randomColor = Math.floor(Math.random() * 5);
    document.body.style.backgroundColor = colors[randomColor]
    colorNameID.textContent = colorsName[randomColor]
    colorNameID.style.color = colors[randomColor]
}

btName.addEventListener('click', chooseColorName)