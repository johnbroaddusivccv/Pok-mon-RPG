//========//Game Manager//=========//
let gameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreBattle();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Blissey":
            player = new player(classType, 110, 140, 25, );
            break;
            case "Totodile":
            player = new player(classType, 95, 85, 95, );
            break;
            case "Leafeon":
            player = new player(classType, 65, 70, 90, );
            break;
            case "Houndour":
            player = new player(classType, 100, 75, 100, );
            break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.html = '<img src="assets/images/' + classType + '.jpeg" class="img-poke"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreBattle: function() {
        

    }
}












//========//Player//=========//









//========//Player//=========//
let enemy;
function player(enemyType, health, strength, speed ) {
    this.enemyType = enemyType;
    this.health = health;
    this.strength = strength;
    this.speed = speed;
}

