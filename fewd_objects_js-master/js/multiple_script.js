// Define a constructor function template for hotels
function Hero(heroName, realName, power, strength, tier) {
    // Object properties
    this.heroName = Name;
      this.realName = RealName;
      this.power = Power;
      this.strength = Strength;
      this.tier = Tier;
    this.checkAvailablity = function() {
        return this.Name;
    };
}

// Define to instances of the hotel and their arguments
var SupermanHero = new Hero("Superman","Kal-El", 100, 100, 6);
var BatmanHero = new Hero("Batman","Bruce Wayne", 25, 13, 1);
var ScarletHero = new Hero("Scarlet Witch","Wanda Maximoff", 100, 1, 8);
var WonderHero = new Hero("Wonder Woman","Diana Prince", 100,100, 6);
var HulkHero = new Hero("Hulk","Bruce Banner", 85, 100, 6);
var ThorHero = new Hero("Thor","Thor Odinson", 100, 100, 6);
// Declare a variable to hold the name of the hotel and room availability
var details1 = SupermanHero.name ;
    // add content to an existing variable----
   details1 += SupermanHero.checkAvailablity();
// Get the hero1 div
var elhero1 = document.getElementById('hero1');
// Add the variables created onto the empty div
elhero1.textContent = details1;

//var details2 = BatmanHero.name + ' rooms: ';
//    details2 += BatmanHero.checkAvailablity();
//var elhero2 = document.getElementById('hero2');
//elhero2.textContent = details2;
