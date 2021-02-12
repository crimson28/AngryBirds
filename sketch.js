//Datatypes - Numbers,Strings,Null,Undefined,Boolean

//String
var string = "This is a string";
console.log(string);

//Number
var num = 100;
console.log(num);

//Boolean
var bool = true;
console.log(bool);

//Undefined
var object;
console.log(object);

//Reassigning the same undefined object to null
//null
object = null;
console.log(object);

//An Array is created inside a [] 
//and can store a list of same or different types of data 
//separated by comma 

//Examples of Array

//An array holding same data types
var arr1 = [1,2,3,4,5];
console.log(arr1);
//Number of values stored
console.log(arr1.length);
console.log(arr1[0]);

//An array holding different data types
var arr2 = ["name",12,true];
console.log(arr2);

var arr3 = [[1,2],[2,3],arr2,"hi",123];
console.log(arr3);
console.log(arr3[1]);
console.log(arr3[2][0]);
arr3.push("Whitehat");
arr3.pop();
console.log(arr3);

const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint


var engine,world;
var ground;
var box1,box2, box3, box4, box5;
var pig1;
var pig2;
var log1, log2, log3,log4;
var bird;
var backgroundImage;
var constrainedLog;
var slingshot;
var platform;
var gameState = "onSling";

function preload(){

backgroundImage= loadImage("sprites/bg.png");


}


function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20); 
    platform = new Ground(150,400,300,400);
    
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);

    bird = new Bird(200,50);

    //angle calculated in Radians
    // 180 degrees = PI
    // 90 degrees = PI/2
    // 45 degress = PI/4
    log1 = new Log(810,260,300,PI/2);
    log2 = new Log(810,180,300,PI/2);
    log3 = new Log(760,120,150,PI/2);
    log4 = new Log(870,120,150,PI/2);

    constrainedLog = new Log(230,180,80,PI/2);

    slingshot = new Slingshot(bird.body,{x:200,y:50});


    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);

}

function draw(){
    background(backgroundImage);

    //Always Update the Engine to apply the new changes
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    pig1.display();
    pig2.display();

    

    log1.display();
    log2.display();
    log3.display();
    log4.display();
    //constrainedLog.display();
    slingshot.display();

    ground.display();
    platform.display();

    bird.display();
}


function mouseDragged(){

    if(gameState !== "launched"){

        Matter.Body.setPosition(bird.body, {x:mouseX,y:mouseY});
    }
    
    
}

function mouseReleased() {
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){

    if(keyCode === 32){
        //Attach the bird to the slingshot
        //slingshot.attach(bird.body);
    }
}