
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(2500,windowHeight);

	
	engine = Engine.create();
	world = engine.world;
	var ground_options={
		isStatic:true
	}

	//Create the Bodies Here.
	ground = new Ground(600,height-500,700,20,ground_options);
	bobobject1 = new Bob(300,500,90);
	bobobject2 = new Bob(400,500,20);
	bobobject3 = new Bob(500,500,20);
	bobobject4 = new Bob(600,500,20);
	bobobject5 = new Bob(700,500,20);
	bobobject6 = new Bob(800,500,20);
	bobobject7 = new Bob(900,500,20);
	sling1= new Rope(bobobject1.body,ground.body,-149*2,0)

	sling2= new Rope(bobobject2.body,ground.body,-101*2,0);
	sling3= new Rope(bobobject3.body,ground.body,-52*2,0);
	sling4= new Rope(bobobject4.body,ground.body,-3*2,0);
	sling5= new Rope(bobobject5.body,ground.body,46*2,0);
	sling6= new Rope(bobobject6.body,ground.body,96*2,0);
	sling7= new Rope(bobobject7.body,ground.body,146*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("azure");
  ground.display();

  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  bobobject6.display();
  bobobject7.display();
  fill("black");
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  sling6.display();
  sling7.display();
 
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(bobobject1.body,{x:mouseX,y:mouseY})
	
	}

