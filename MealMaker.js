const menu = {
  _courses:{
    _appetizers: [],
    _mains: [],
    _dessert: [],
    get appetizers() {
  return this._appetizers;
},
set appetizers(appetizersIn) {
  this._appetizers = appetizersIn;
},
get mains() {
  return this._mains;
},
set mains(mainsIn) {
  this._mains = mainsIn;
},
get desserts() {
  return this._desserts;
},
set desserts(dessertsIn) {
  this._desserts = dessertsIn;
},
  },

  get courses (){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },
   addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },
   getRandomDishFromCourse (courseName){
    const dishes = menu._courses[courseName];
    const num= Math.floor(Math.random() * dishes.length);
    return dishes[num];
  },
  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers')
    const main = this.getRandomDishFromCourse('mains')
    const dessert = this.getRandomDishFromCourse('desserts')
    const totalPrice = appetizer.price + main.price + dessert.price
    return `the price is RM${totalPrice} and the items that you ordered are ${appetizer}, ${main} and ${dessert}`
  }
};
menu.addDishToCourse('appetizers', 'kacang', 1)
menu.addDishToCourse('appetizers', 'french fries', 5)
menu.addDishToCourse('appetizers', 'some french stuff', 7)

menu.addDishToCourse('mains', 'steak', 35)
menu.addDishToCourse('mains', 'chee cheong fun', 10)
menu.addDishToCourse('mains', 'roti canai', 5)

menu.addDishToCourse('dessert', 'ice cream', 6)
menu.addDishToCourse('dessert', 'fruits', 15)
menu.addDishToCourse('dessert', 'chocolate', 9)

  let meal= menu.generateRandomMeal()
  console.log(meal)
