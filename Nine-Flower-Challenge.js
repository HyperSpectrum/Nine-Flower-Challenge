console.log('loading SVG')
let draw = SVG('drawing').size(1000, 1000);
let circleRadius = 15
let coord;
let coord2;
Field();
Flower();

var numberOfItems = 8;
var rainbow = new Rainbow(); 
rainbow.setNumberRange(1, numberOfItems);
rainbow.setSpectrum('red', 'black');
var s = '';
for (var i = 1; i <= numberOfItems; i++) {
    var hexColour = rainbow.colourAt(i);
    s += '#' + hexColour + ', ';
}
document.write(s); 

let bodyWidth = 80;
let bodyHeight = 60;
let headSize = 50;
let bodyPosX = 700;
let bodyPosY = 400;
let body = draw.ellipse(bodyWidth,bodyHeight).fill('yellow');
let head = draw.circle(headSize).fill('yellow');

let bee = draw.group();
bee.add(body);
bee.add(head);

document.getElementById(bee).onclick = function(){
    console.log('body');
    console.log(coord);
    console.log(coord2);
}
body.center(bodyPosX, bodyPosY);
head.center(bodyPosX - 50, bodyPosY);

function Flower(x, y, r, color){
    let circle = draw.circle(r).fill('yellow');
    circle.center(x, y);
    Petals(x, y, color);
    let stem = draw.line(x, y + 55, x, y + 100).stroke('lightgreen').stroke({width: 4});
    let right_filament = draw.line(x + 1, y, x + 5, y - 10).stroke('lightgreen').stroke({width: 2});
    let left_filament = draw.line(x - 1, y, x - 5, y - 10).stroke('lightgreen').stroke({width: 2});
    let middle_filament = draw.line(x, y, x, y - 15).stroke('lightgreen').stroke({width: 2});
    let right_middle_filament = draw.line(x, y, x + 2, y - 10).stroke('lightgreen').stroke({width: 2});
    let left_middle_filament5 = draw.line(x, y, x - 2, y - 10).stroke('lightgreen').stroke({width: 2});
    let right_middle_anther = draw.ellipse(4, 8).fill('brown').move(x - 2, y - 20)
    document.getElementById(circle).onclick = function(){
        coord = x; 
        coord2 = y;
        console.log(coord);
        console.log(coord2);
    }
}

/*function Anther(width, height, x, y, degree, co) {
    let Anther = draw.ellipse(width, height).fill(co);
    Anther.center(x, y);
    Anther.transform({rotation: degree});
}*/

function Petal(width, height, x, y, degree, co){
    let ellipse1 = draw.ellipse(width, height).fill(co);
    ellipse1.center(x, y);
    ellipse1.transform({rotation: degree});
}

function Petals(x, y, c) {
    Petal(30,50, x, y - 30, 0, c);
    Petal(50,30, x + 25, y - 15, -25, c);
    Petal(30,50, x, y + 30, 0, c);
    Petal(50,30, x - 25, y + 15, -25, c);
    Petal(50,30, x - 25, y - 15, 25, c);
    Petal(50,30, x + 25, y + 15, 25, c);
}

/*function Anthers(x, y, c) {
    Anther(4, 8, x - 10, y, 0, c)
}*/

function Field() {
    Flower(50,525, circleRadius, rainbow)
    Flower(150,650, circleRadius, rainbow)
    Flower(250,550, circleRadius, rainbow)
    Flower(350,675, circleRadius, rainbow)
    Flower(450,800, circleRadius, rainbow)
    Flower(550,575, circleRadius, rainbow)
    Flower(650,775, circleRadius, rainbow)
    Flower(750,850, circleRadius, rainbow)
    Flower(850,600, circleRadius, rainbow)
    Flower(950,800, circleRadius, rainbow)
}
