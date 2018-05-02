//console.log("test");

var mainCharacter;
var restOfCharacters;

var getthis = [Math.floor(Math.random() * 10) + 5];
var attackPower = getthis[0];
console.log(attackPower);

var attackRating = {
    "obiwan": attackPower,
    "luke": attackPower,
    "yoda": attackPower,
    "darth": attackPower
}
var defenceRating = {
    "obiwan": 17,
    "luke": 23,
    "yoda": 25,
    "darth": 15
}


var attack;
var defence;
var userHealth;
var enemyHealth;


$(".characterArea").one("click", ".character", function () {

    mainCharacter = $(this).data("name"); console.log(mainCharacter);

    restOfCharacters = $(".character").not(this);
    restOfCharacters.detach().appendTo('.enemiesAvailable');//put all characters not selected in enemies section

    $('.selectCharacter').empty().append(($('.yourCharacter')));

    for (var property in attackRating) {
        if (mainCharacter === property) {
            $('.characterArea>.character>.characterPower').attr({ "data-attack": attackRating[property] });
            attack = attackRating[property];//store attack rating
            console.log(attack);
            userHealth = $('.characterArea>.character>.characterPower').data("health");//store userhealth rating
        }
    }


});

var inBattle;
var userWon;//enable if user won
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

    for (var property in defenceRating) {
        if (el.data("name") === property) {
            $('.defenderSection>.character>.characterPower').attr({ "data-defence": defenceRating[property] });
            defence = defenceRating[property];
            enemyHealth = $('.defenderSection>.character>.characterPower').data("health");
        }
    }

    console.log("attack is:" + attack);
    console.log("defence is:" + defence);
    //create attack  button
    var attackButton = $("<button>").attr('type', 'button').addClass("btn btn-danger givePower").text("Attack");
    $('.fightSection').append(attackButton);
}



var currentAttackValue = 0;
$('.fightSection').on("click", ".givePower", function () {//when you click attack button
    console.log(attack);
    if (userWon) {
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
    if (enemyHealth <= 0) {
        $('.defenderSection>.character').remove();
        $('.givePower').hide();
        inBattle = false;
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







