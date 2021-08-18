const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
  var ball_options = {
    restitution :1,
    frictionAir:0.01
  }
	var roof_options={
		isStatic:true			
	}
    bob1 = Bodies.circle(300,150,25,ball_options);
    World.add(world,bob1);
    bob2 = Bodies.circle(350,150,25,ball_options);
    World.add(world,bob2);
    bob3 = Bodies.circle(400,150,25,ball_options);
    World.add(world,bob3);
    bob4 = Bodies.circle(450,150,25,ball_options);
    World.add(world,bob4);
    bob5 = Bodies.circle(500,150,25,ball_options);
    World.add(world,bob5);
	roof = Bodies.rectangle(400,100,250,20,roof_options);
    World.add(world,roof);
    console.log(roof);
    var roofy = roof.position.y;
    console.log(roofy);
  rope1 = new rope(bob1,{x:300,y:roofy});
  rope2 = new rope(bob2,{x:350,y:roofy});
  rope3 = new rope(bob3,{x:400,y:roofy});
  rope4 = new rope(bob4,{x:450,y:roofy});
  rope5 = new rope(bob5,{x:500,y:roofy});
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  //create ellipse shape for multiple bobs here
  ellipse (bob1.position.x,bob1.position.y,25);
  ellipse (bob2.position.x,bob2.position.y,25);
  ellipse (bob3.position.x,bob3.position.y,25);
  ellipse (bob4.position.x,bob4.position.y,25);
  ellipse (bob5.position.x,bob5.position.y,25);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.06,y:0})
  }
}