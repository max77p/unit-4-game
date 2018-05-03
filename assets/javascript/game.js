


var $playArea = $('.mainGame>.playArea').clone();

$('.mainGame').on("click", ".resetPower", resetGame);

function resetGame() {
    console.log("reset hit");
    //$('.playArea').replaceWith($playArea);
    location.reload();
    $('.mainGame>.resetPower').remove();
}


var randomAttack = [Math.floor(Math.random() * 10) + 5];
var attackPower = randomAttack[0];


var mainObj = {
    //obiwan object
    obiwan: {
        name: 'obiwan',
        attack: attackPower,
        counter: 17,
        hp: 120
    },


    //luke object
    luke: {
        name: 'luke',
        attack: attackPower,
        counter: 23,
        hp: 100
    },

    //yoda object
    yoda: {
        name: 'yoda',
        attack: attackPower,
        counter: 25,
        hp: 150
    },

    //darth vader object
    darth: {
        name: 'darth',
        attack: attackPower,
        counter: 20,
        hp: 180
    }
};


//for (property in mainObj) {
  //  console.log(mainObj[property].attack);
//}


var attack;
var defence;
var userHealth;
var enemyHealth;

var selectUser;//character select on or off*/

//keep copy for reset game

$(".characterArea").on("click", ".character", function () {
    if(userLost){
        return;
    }
    if(userWon){
        return;
    }


    var mainCharacter;
    var restOfCharacters;

    mainCharacter = $(this).data("name"); console.log(mainCharacter);

    restOfCharacters = $(".character").not(this);
    restOfCharacters.detach().appendTo('.enemiesAvailable');//put all characters not selected in enemies section

    $('.selectCharacter').empty().append(($('.yourCharacter')));

    for (property in mainObj) {
    if (mainCharacter === mainObj[property].name) {
        $('.characterArea>.character>.characterPower').attr({ "data-attack": mainObj[property].attack});
        attack = mainObj[property].attack;//store attack rating
        console.log(attack);
        userHealth = mainObj[property].hp//$('.characterArea>.character>.characterPower').data("health");//store userhealth rating
    }
    }

});



$(".enemiesAvailable").on("click", ".character", function () {
    if (inBattle) {//turn off click event until enemy defeated--inBattle is set to true below to do this
        return;
    }
    var thisEnemy = $(this);
    fighting(thisEnemy);
    inBattle = true;
});


function fighting(el) {//add attack and defence values to characters
    //turn off click enemies event until battle finishes
    $('.defenderSection').append(el);

    for (property in mainObj) {
        if (el.data("name") === mainObj[property].name) {
            $('.defenderSection>.character>.characterPower').attr({ "data-defence": mainObj[property].counter });
            defence = mainObj[property].counter;
            enemyHealth = $('.defenderSection>.character>.characterPower').data("health");
        }
    }

    console.log("attack is:" + attack);
    console.log("defence is:" + defence);
    //create attack  button
    var attackButton = $("<button>").attr('type', 'button').addClass("btn btn-danger givePower").text("Attack");
    $('.fightSection').append(attackButton);
}


var inBattle;//click event on or off
var userLost;//enable if user won
var userWon;
var currentAttackValue = 0;
$('.fightSection').on("click", ".givePower", function () {//when you click attack button
    console.log(attack);
    if (userLost) {
        return;
    }

    //set user attack value
    var counterAttackPower = defence;//set enemy defence value
    console.log(currentAttackValue);
    currentAttackValue += attack;//increment user attack by base value on every attack

    enemyHealth = enemyHealth - currentAttackValue;//bring down enemy health by user attack value

    userHealth = userHealth - counterAttackPower;//bring down user health by enemy defence value


    console.log(currentAttackValue);

    $('.defenderSection>.character>.characterPower').empty().html(enemyHealth);
    $('.characterArea>.character>.characterPower').empty().html(userHealth);


    if (enemyHealth > 0&& userHealth<=0) {
        inBattle = true; 
        alert("you have lost!");
        userLost = true;
        var resetButton = $("<button>").attr('type', 'button').addClass("btn btn-danger resetPower").text("Reset Game");
        $(".mainGame").append(resetButton);
    }
    else if(enemyHealth<=0 && userHealth>0){//if user beat enemy do this
        $('.defenderSection>.character').remove();
        $('.givePower').hide();
        inBattle=false;
        userWon=true;
    }
    

});
















/*function fightingLogic(uA, uH, eD, eH) {
    console.log(uA + "and" + uH);
    console.log(eD + "and" + eH);

    var currentAttackValue = uA;//set user attack value
    var counterAttackPower = eD;//set enemy defence value

    eH = eH - currentAttackValue;//bring down enemy health by user attack value
    uH = uH - counterAttackPower;//bring down user health by enemy defence value


    currentAttackValue = currentAttackValue + uA;//increment user attack by base value on every attack
    

    $('.defenderSection>.character>.characterPower').empty().html(eH);
    $('.characterArea>.character>.characterPower').empty().html(uH);

}*/






/*var defeated = false;
var won = false;
console.log(eH);
if (eH <= 0) {
    updateEnemy();
    console.log("you won!");
}
else if (uH <= 0) {
    defeated = true;
    console.log("you lost");
}
if (defeated) {
    alert("game over");
}*/




//TODO-keep character that was selected and remove rest - done

//TODO-after character selected, change title to your character and remove select character - done

//TODO-put all characters not selected under enemies available- done

//TODO-put selected enemy as defender- done

//TODO-add attack button to fight section - done

//TODO-set attack and defence value for fighters- done

//TODO-when attack button pressed, change respective fighters health by the others attack power - done

//TODO-set attack values for each character - done

//TODO-if you lose, restart game

//TODO-if you win, remove defender and ask user to select new defender 








//first attack equals attack value
//next attack add base to current value
//each time player attacks, characters attack power increases by its base power--after each attack add base to the number.
//i.e 6 is base, then 12, then 18 etc. If they win, then current power + base will be new power

//enemy character only has counter attack power, which stays constant

//all these values must be different for each character



var healthPoints;
var attackPower;
var counterAttackPower;







