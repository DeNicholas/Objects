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
    return  Object.entries(appetizers), Object.entries(mains), Object.entries(dessert)
  },
  const addDishToCourse=(courseName, dishName, dishPrice)=>{

  }
};
