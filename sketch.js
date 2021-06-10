const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var computer, computerBase, computerArcher;

var arrow;


function setup() {

    //to create canvas
    canvas = createCanvas(windowWidth, windowHeight);

    engine = Engine.create();
    world = engine.world;

    //to createplayerBase,player and playerArcher
    playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
    player = new Player(285, playerBase.body.position.y - 153, 50, 180);
    playerArcher = new PlayerArcher(
        width - 1200,
        playerBase.body.position.y - 180,
        120,
        120
    );


    //Create computer base, computer and computer archer Object
    computerBase = new ComputerBase(
        width - 300,
        random(450, height - 300),
        180,
        150
    );
    computer = new Computer(
        width - 280,
        computerBase.body.position.y - 153,
        50,
        180
    );
    computerArcher = new ComputerArcher(
        width - 340,
        computerBase.body.position.y - 180,
        120,
        120
    );

    //Create an arrow Object
    arrow = new PlayerArrow(width - 1200,
        playerBase.body.position.y - 180,
        120,
        120)

}

function draw() {
    background(180);

    Engine.update(engine);

    // Title
    fill("#FFFF");
    textAlign("center");
    textSize(40);
    text("EPIC ARCHERY", width / 2, 100);


    //to display all objects
    playerBase.display();
    player.display();


    computerBase.display();
    computer.display();

    playerArcher.display();
    computerArcher.display()


    //Display arrow();
    arrow.display();

    //if Space (32) key is pressed call shoot function of playerArrow
    if (keyCode === 32) {
        //Call shoot() function and pass angle of playerArcher
        arrow.shoot(playerArcher.body.angle);

    }
}