function preload() {

}

function setup() {
    mycanvas = createCanvas(650, 450);
    mycanvas.position(120, 220);
    webcam = createCapture(VIDEO);
    webcam.hide();
    filtercolor = "";
}

function draw() {
    image(webcam, 0, 0, 650, 450);
    tint(filtercolor);
}

function applyfilter() {
    filtercolor = document.getElementById("colorinput").value;
}

function takesnapshot() {
    save("myfilterimg.png");
}