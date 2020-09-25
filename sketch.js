var xts = []
var t = 0
var del_t = 0.1
var slider
function setup() {
    createCanvas(displayWidth, 400);
    frameRate(100)
    fill(0)
    textSize(16)
    slider = createSlider(1, 3000, 1000, 1)
    slider.position(10, 10)
    slider.style('width', `${displayWidth-10}px`)
}

function draw() {
    background(220);
    t += del_t
    let xt = 0
    for (let n = 1; n < slider.value(); n++) {
        xt += (1 / (n * 3.14)) * sin(n * t)
    }
    xt = (1 / 2) - xt
    xts.unshift(xt)
    line(40, 50, 40, 300)
    line(40, 300, 450, 300)
    text('t', 250, 320)
    text('x(t)', 10, 200)
    text(slider.value(), 350, 50)
    beginShape(LINES)
    for (let i = 0; i < xts.length; i++) {
        vertex(i + 40, 100 * xts[i] + 200)
    }
    endShape()
    if (xts.length > 400)
        xts.pop()
}