//class className{}
//create the form(input,button,element) 
//display the form --> display()
class Form{
    constructor(){
        
    };

    display(){

        //create the element (title/greeting) var title, var greeting
        var title = createElement('h1');
        title.html("Car Racing Game")
        title.position(130,0);

        //create the element inside 'greeting' variable
         var greeting = createElement("h2");

        //create the button inside the 'button' variable
        var button = createButton("play");
        button.position(250,200);

        //create an input inside the 'input' variable 
        var input = createInput("name");
        input.position(130,160);

        //to press the button and something to happen --> variable.mousePressed()
        button.mousePressed(function(){
        
        //hide the input and button --> variable.hide()
        input.hide();
        button.hide();
        
        //create a variable called 'name' to store the input given by the user --> input.value()
        var name = input.value();

        //playerCount is increased
        playerCount +=1           // playerCount = playerCount + 1

        //update the playerCount in the database
        player.updateCount(playerCount);

        //update the name of the player in the database
        player.update(name);

        //greet the player with "Hello " + player's name
        greeting.html("hello "+ name);
        greeting.position(130,160);
        });
    }
}

