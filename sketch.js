
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var paper,ground;

function setup() {
	createCanvas(1400, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper = new Paper(250,220,20);
     ground = new Ground(600,450,2000,20);
     dustbin = new Dustbin(950,430,1,1);
//	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dustbin.display();
 
}
function keyPressed (){
 if(keyCode===UP_ARROW){
  
      Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
     
      
      
 }
}


