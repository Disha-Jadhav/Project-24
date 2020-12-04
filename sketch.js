const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var paper1;
var ground1;

function setup() 
{
	createCanvas(1000, 700);
    
	engine = Engine.create();
	world = engine.world;

	box1 = new box(800, 644, 200, 20);
	box2 = new box(700, 604, 20, 100);
	box3 = new box(900, 604, 20, 100);

	paper1 = new paper(100, 635, 45);

	ground1 = new ground(400, 680, 1000, 10);

	Engine.run(engine);
}

function draw() 
{
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  paper1.x = paper1.body.position.x;
  paper1.y = paper1.body.position.y;
  paper1.body.position.x & paper1.body.position.y === paper1.body.position
  keypressed();
 
  box1.display();
  box2.display();
  box3.display();

  paper1.display();

  ground1.display();

  
  drawSprites();
}

function keypressed()
{
	if(keyCode === UP_ARROW)
	{
		
		if(paper1.x >= 350)
		{
			Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 30, y: 0.09});
		}
		else 
		{
			Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 5, y: -27});
		}
	}
}