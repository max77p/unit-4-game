//console.log("test");

var mainCharacter;
var restOfCharacters;

var attackRating = {
    "obiwan": 6,
    "luke": 10,
    "yoda": 15,
    "darth": 25
}
var defenceRating = {
    "obiwan": 12,
    "luke": 20,
    "yoda": 25,
    "darth": 15
}

$(".characterArea").one("click", ".character", function () {

    mainCharacter = $(this).data("name");
    for (var property in attackRating) {
        if (mainCharacter === property) {
            $('.characterArea>.character>.characterPower').attr({ "data-attack": attackRating[property]});
        }
    }
    restOfCharacters = $(".character").not(this);
    restOfCharacters.detach().appendTo('.enemiesAvailable');
    //console.log($(mainCharacter).attr('data-name'));
    //$('.selectCharacter').html($(".yourCharacter"));
    $('.selectCharacter').empty().append(($('.yourCharacter')));

});


$(".enemiesAvailable").one("click", ".character", function () {

    $(this).appendTo('.defenderSection');
    for (var property in defenceRating) {
        if ($(this).data("name") === property) {
            $('.defenderSection>.character>.characterPower').attr({ "data-defence": defenceRating[property] });

        }
    }

    //create attack  button
    var attackButton = $("<button>").attr('type', 'button').addClass("btn btn-danger givePower").text("Attack");
    $('.fightSection').append(attackButton);
});





//TODO-keep character that was selected and remove rest - done

//TODO-after character selected, change title to your character and remove select character - done

//TODO-put all characters not selected under enemies available- done

//TODO-put selected enemy as defender- done

//TODO-add attack button to fight section - done

//TODO-set attack and defence value for fighters- done

//TODO-when attack button pressed, change respective fighters healthy by the others attack power

//TODO-set attack values for each character



var getthis = [Math.floor(Math.random() * 20) + 5];
var attackPower = getthis[0];
console.log(attackPower);

$('.fightSection').on("click", ".givePower", function () {



});





//each time player attacks, characters attack power increases by its base power--after each attack add base to the number.
//i.e 6 is base, then 12, then 18 etc. If they win, then current power + base will be new power

//enemy character only has counter attack power, which stays constant

//all these values must be different for each character



var healthPoints;
var attackPower;
var counterAttackPower;







