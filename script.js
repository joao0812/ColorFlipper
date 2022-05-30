let colorID = document.getElementById('colorID')
let bt = document.getElementById('bt')


const colors = ["#ff6961", "#77dd77", "#fdfd96", "#84b6f4", "#fdcae1"]


const chooseColor = () => {
    let randomColor = Math.floor(Math.random() * 5);
    document.body.style.backgroundColor = colors[randomColor]
    colorID.textContent = colors[randomColor]
    colorID.style.color = colors[randomColor]
}

bt.addEventListener('click', chooseColor)
