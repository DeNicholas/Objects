const menu={
  _courses:{
    appetizers: [],
    mains: [],
    dessert: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizers) {                        this._courses.appetizers = appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mains) {
   this._courses.mains = mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(desserts) {
   this._courses.desserts = desserts;
  },
  get _courses (){
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
   addDishToCourse (courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    };
   return this._courses[courseName]= dish;
  },
   getRandomDishFromCourse (courseName){
    const dishes = menu._courses[courseName];
    const num= Math.floor(Math.random() * dishes.length)
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
menu.addDishToCourse('appetizers', 'kacang', 1)
menu.addDishToCourse('appetizers', 'french fries', 5)
menu.addDishToCourse('appetizers', 'some french stuff', 7)
menu.addDishToCourse('main', 'steak', 35)
menu.addDishToCourse('main', 'chee cheong fun', 10)
menu.addDishToCourse('main', 'roti canai', 5)
menu.addDishToCourse('dessert', 'ice cream', 6)
menu.addDishToCourse('dessert', 'fruits', 15)
menu.addDishToCourse('dessert', 'chocolate', 9)

  const meal= menu.generateRandomMeal()
  console.log(meal)
