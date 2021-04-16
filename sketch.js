var canvas;
var gameState = 0;
var playerCount ;
var form , game, player;      //objects of the classes
var database;

function setup(){
//creating the canvas - 400 x 400 --> createCanvas(400,400)
 canvas = createCanvas(400,400);

//create the database inside the variable 'database' --> firebase.database()
database =  firebase.database();
}

function draw(){

}