const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingshot, ground


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(700, 325, 300, 10);
  ball = new Ball(400, 400, 100);

  //level one
  b1 = new Building(600, 200, 50, 50);
  b2 = new Building(650, 200, 50, 50);
  b3 = new Building(700, 200, 50, 50);
  b4 = new Building(750, 200, 50, 50);
  b5 = new Building(800, 200, 50, 50);

  //level two
  b6 = new Building(600, 250-100, 50, 50);
  b7 = new Building(650, 250-100, 50, 50);
  b8 = new Building(700, 250-100, 50, 50);
  b9 = new Building(750, 250-100, 50, 50);
  b10 = new Building(800, 250-100, 50, 50);

  //level three
  b11 = new Building(600, 300-200, 50, 50);
  b12 = new Building(650, 300-200, 50, 50);
  b13= new Building(700, 300-200, 50, 50);
  b14= new Building(750, 300-200, 50, 50);
  b15 = new Building(800, 300-200, 50, 50);

  //level four
  b16 = new Building(600, 350-300, 50, 50);
  b17 = new Building(650, 350-300, 50, 50);
  b18= new Building(700, 350-300, 50, 50);
  b19= new Building(750, 350-300, 50, 50);
  b20 = new Building(800, 350-300, 50, 50);

  //level five
  b21 = new Building(600, 350-400, 50, 50);
  b22 = new Building(650, 350-400, 50, 50);
  b23= new Building(700, 350-400, 50, 50);
  b24= new Building(750, 350-400, 50, 50);
  b25 = new Building(800, 350-400, 50, 50);

  //b3 = new Building(800, 200, 50, 50);
  //b4 = new Building(800, 200, 50, 50);


    slingshot = new SlingShot(ball.body,{x:400, y:100});
}

function draw(){
    
background(202, 202, 202);
    Engine.update(engine);
    
 
    ground.display();
  ball.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
    slingshot.display(); 
    platform.display(); 
    
}

//pull the bird with the rubber band when mouse is dragged
function mouseDragged(){
   
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
        Matter.Body.applyForce(ball.body, ball.body.position, {x:5,y:-5})
        
        
    
}
//fly the bird when mouse is released


