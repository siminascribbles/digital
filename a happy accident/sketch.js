function setup() {
createCanvas (800, 800)}

var position = 20;
var speed = 2;
var size = 3

draw = function() {
  
    position = position + speed;
    ellipse(position, mouseY, 50, 50);
    fill (230, 230, 255);
    if(mouseIsPressed) {
    ellipse (mouseX, position, 50, 50);
    fill (204,204,255)}
    if(mouseIsPressed) {
      ellipse (position, position, 50, 50);
      fill (153, 153,255)
    }
    
  
if (position > 800) {
    speed = -2;
}
if (position < 0) {
    speed = 2;
}
};