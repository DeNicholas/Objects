const menu={
  _courses:{
    appetizers: [],
    mains: [],
    dessert: []
  },
  get appetizers (){},
  set appetizers (app){},
  get mains (){},
  set mains (main){},
  get dessert (){},
  set dessert (des){},
  get _courses (){
    return  this.appetizers, this.mains, this.dessert
  },
   addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: courseName,
      price: dishPrice,
    };
   this._courses[courseName].push(dish);
  },
   getRandomDishFromCourse (courseName){
    const dishes= menu._courses[courseName];
    let num= Math.floor(Math.random()*dishes.length)
    return dishes[num]
  },
  generateRandomMeal(){
    const appetizer= this.getRandomDishFromCourse('appetizers')
    const main= this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('dessert')
    const totalPrice = appetizer.price + main.price + dessert.price
    return `the price is RM${totalPrice} and the items that you ordered are ${appetizer}, ${main} and ${dessert}`
  }
};
menu.addDishToCourse('appetizers', 'kacang', "1")
menu.addDishToCourse('appetizers', 'french fries', "5")
menu.addDishToCourse('appetizers', 'some french stuff', "7")
menu.addDishToCourse('main', 'steak', "35")
menu.addDishToCourse('main', 'chee cheong fun', "10")
menu.addDishToCourse('main', 'roti canai', "5")
menu.addDishToCourse('dessert', 'ice cream', "6")
menu.addDishToCourse('dessert', 'fruits', "15")
menu.addDishToCourse('dessert', 'chocolate', "9")

  const meal= menu.generateRandomMeal()
