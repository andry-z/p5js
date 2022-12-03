let ax = 0.01
let ay = 0.01
let vx = 0
let vy = 0
let x = 0
let y = 200
let d = 50
let axField = document.querySelector("[name=ax]")
axField.addEventListener("input", function(e){
    ax = parseFloat(axField.value)
})

let ayField = document.querySelector("[name=ay]")
ayField.addEventListener("input", function(e){
    ay = parseFloat(ayField.value)
})

function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(240, 240, 240)
    fill(255)
    circle(x, y, d)
    vx = vx + ax
    vy = vy + ay
    x = x + vx
    y = y + vy
    if(x>= 425){
        x = 0
    }

    if(x<-25){
        x = 425
    }
    if(y>= 425){
        y = 0
    }

    if(y<-25){
        y = 425
    }
}