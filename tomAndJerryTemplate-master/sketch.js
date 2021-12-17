
var garden
var cat1, cat2, cat3, cat4
var mouse1, mouse2, mouse3, mouse4

var tom, jerry


function preload() {
    //load the images here
    garden  = LoadImage("images/garden.png");
    cat1  = LoadAnimation("images/cat1.png");
    cat2  = LoadAnimation("images/cat2.png", "images/cat3.png");
    cat4  = LoadAnimation("images/cat4.png");
    mouse1  = LoadAnimation("images/mouse1.png");
    mouse2  = LoadAnimation("images/mouse2.png", "images/mouse3.png");
    mouse4  = LoadAnimation("images/mouse4.png");


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(850, 600)
    tom.addAnimation(cat1);
    jerry = createSprite(200,600)
    jerry.addAnimation(mouse1);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (cat.width - mouse.width)/2)
    {
        tom.addAnimation("catLastImage", cat3);
        cat.changeAnimation("catLastImage");
    }

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("catRunning", cat2);
        cat2.changeAnimation("catRunning");

    }
}
