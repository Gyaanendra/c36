/*

1. read/ get the gameState of the game --> getState()
2. update the gameState --> update(state)
3. the wait state of the game --> start()

*/


class Game{
    constructor(){
        
    }

    getState(){
    //create a variable called 'gameStateRef' to refer to the database --> database.ref()
    var gameStateRef = database.ref('gameState');

     //create a listener for the varible --> var.on("value", function)
      gameStateRef.on("value", function(data){
          
     //store the listened data inside the gameState
        gameState = data.val();
      });
    }

    update(state){
     //refer to the entire database and update the gameState entry to state
     database.ref('/').update({
      gameState: state
     })
    }

    wait(){
    if(gameState === 0){
      //create a new player object for the Player class --> objectName = new className();
     player = new Player();

      //read the no of players
      player.getCount();

      //create a new form object for the Form class
      form = new Form(); 
      
      //display the form
      form.display();
    }

      
    }
}

//box1 = new Box()-->