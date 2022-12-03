let ampiezza = 100
let frequenza = 2
let fase = 0
let angle = 0
let incremento = 0.01

let amplitudeInput = document.querySelector("[name=ampiezza]")
let frequencyInput = document.querySelector("[name=frequenza]")
let phaseInput = document.querySelector("[name=fase]")

amplitudeInput.addEventListener("input", function(e){
    ampiezza = parseFloat(amplitudeInput.value)
})

frequencyInput.addEventListener("input", function(e){
    frequenza = parseFloat(frequencyInput.value)
})

phaseInput.addEventListener("input", function(e){
    fase = parseFloat(phaseInput.value)
})


function setup(){
    createCanvas(400, 400)
    background(220)
    line(0, 200, 400, 200)
    frameRate(60)
}

function draw(){
    let x = map(angle, 0, 2*PI, 0, 400)
    let y
    y = ampiezza * sin((2*PI*frequenza*angle)+fase) 
    stroke(0, 180, 0)
    strokeWeight(3)
    point(x, y+200)
    angle += incremento
}