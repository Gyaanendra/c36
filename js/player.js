/*

1. read/ get the no. of players in the game --> getCount()
2. update the playerCount in the database --> updateCount(count)
3. update the name of the player in the database --> update(name)

*/

class Player{
    constructor(){
        
    };

    getCount(){
    //create a variable called 'playerCountRef' to refer to the database --> database.ref()
    var playerCountRef = database.ref('playerCount')

    //create a listener for the varible --> var.on("value", function)
    playerCountRef.on("value",function(data){

    //store the listened data inside the playerCount
    playerCount = data.val();
    })
    }

    updateCount(count){
    //refer to the entire database and update the playerCount entry to count
    database.ref('/').update({
        playerCount: count
    })
    }

    update(name){
    var playerIndex = "player"+playerCount;

    //refer to the database and update the name for each player
    database.ref(playerIndex).set({
        name:name
    })
    }
}

