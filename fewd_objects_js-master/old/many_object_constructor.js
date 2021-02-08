function Hero(heroName, realName, power, strength, tier) {
    // Object properties
    this.heroName = name;
    this.realName = realName;
    this.power = power;
    this.strength = strength;
    this.tier = tier;
    this.checkAvailablity = function(){
        return this.rooms - this.booked;
    };
  }

var clyatonHotel = new Hotel('Clayton', 300, 25);
var lemonHotel = new Hotel('Lemon', 76, 14 )


console.log(clyatonHotel, lemonHotel);
