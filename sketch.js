var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   surface1 = createSprite(100,600,150,20);
   surface1.shapeColor = "blue";
   surface2 = createSprite(300,600,150,20);
   surface2.shapeColor = "orange";
   surface3 = createSprite(500,600,150,20);
   surface3.shapeColor = "indigo";
   surface4 = createSprite(700,600,150,20);
   surface4.shapeColor = "green";
   
   box = createSprite(random(20,750),10,50,50);
   box.shapeColor = "white";
   box.velocityX = 4;
   box.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor = "blue";
        music.play();
    }
    if(surface2.isTouching(box)){
        box.shapeColor = "orange";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor = "indigo";
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor = "green";
    }
    
    drawSprites();
}
