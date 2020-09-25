var xts = []
var t = 0
var del_t = 0.1
var slider
var xOffset = 100
function setup() {
    createCanvas(displayWidth, 400);
    frameRate(100)
    fill(0)
    textSize(16)
    slider = createSlider(1, 3000, 1000, 1)
    slider.position(10, 10)
    slider.style('width', `${displayWidth-30}px`)
}

function draw() {
    background(220);
    t += del_t
    let xt = 0
    for (let n = 1; n <= slider.value(); n++) {
        xt += (1 / (n * 3.14)) * sin(n * t)
    }
    xt = (1 / 2) - xt
    xts.unshift(xt)
    line(xOffset, 50, xOffset, 300)
    line(xOffset, 300, 850, 300)
    text('t', 250, 320)
    text('x(t)', 10, 200)
    text(`Number of sinusoids used: ${slider.value()}`, 350, 50)
    text("Fourier Series Expansion of Saw-Tooth Signal", width/2-50, height-20)
    beginShape(LINES)
    for (let i = 0; i < xts.length; i++) {
        vertex(i + xOffset, 100 * xts[i] + 200)
    }
    endShape()
    if (xts.length > 800)
        xts.pop()
}
