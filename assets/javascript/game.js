//console.log("test");

var mainCharacter;
var restOfCharacters;



$(".characterArea").one("click",".character", function() {
    //$(this).hide();
    mainCharacter=$(this).data("name");
restOfCharacters=$(".character").not(this);
   restOfCharacters.detach().appendTo('.enemiesAvailable');
    //console.log($(mainCharacter).attr('data-name'));
    //$('.selectCharacter').html($(".yourCharacter"));
    $('.selectCharacter').empty().append(($('.yourCharacter').contents()));
    
    
   //restAreEnemies(restOfCharacters);
});



$(".enemiesAvailable").one("click", ".character",function(){

   $(this).appendTo('.defenderSection');
   var attackButton = $("<button>");
   attackButton.attr({value:'attack',type:'button'});
   attackButton.addClass("btn btn-danger");
   attackButton.text("Attack");
   
   $('.fightSection').append(attackButton);
});





//TODO-keep character that was selected and remove rest - done

//TODO-after character selected, change title to your character and remove select character - done

//TODO-put all characters not selected under enemies available- done

//TODO-put selected enemy as defender- done

//TODO-add attack button to fight section






