var coffeeShop = {
  beans: 40,
  money: 200,
  beanPrice: 3,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  price: {
    latte: 17,
    americano: 8,
    doubleShot: 10,
    frenchPress: 9
  }, 

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    
      if (coffeeShop.drinkRequirements[drinkType] === undefined) {
          alert("Sorry, we don't make " + drinkType + ". Would you like something else?");
      } else if (this.beans >= this.drinkRequirements[drinkType]) {
          this.beans -= this.drinkRequirements[drinkType];
          console.log("Your " + drinkType + " is ready!");
      } else {
          alert("Sorry, we're all out of beans!");
      }
  },
  buySupplies: function(units) {
  this.money -= (this.beanPrice * units);
  this.beans += units
  console.log("There are " + this.beans + " beans in the coffeeshop.")
  },

  buyDrink: function(drinkType) {
    if (coffeeShop.price[drinkType] === undefined) {
      alert("Sorry, we don't make " + drinkType + ". Would you like something else?");
    } else {
      this.makeDrink(drinkType);
      this.money += this.price[drinkType];
    }
  }
}

coffeeShop.buyDrink("americano");
coffeeShop.buySupplies(30);
coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");