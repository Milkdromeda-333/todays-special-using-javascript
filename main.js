const menu = {
  _meal: '',
  _price: 0,
  set meal(mealToCheck) {
    if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck){
    if(typeof priceToCheck === 'number'){
      return this._price = priceToCheck;
    }
  },
  get todaysSpecial(){
    if(this._meal && this._price){
      return `Todays Special is ${this._meal} and It Is $${this._price}.`
    } else{
      return 'Meal or price was not set correctly!'
    }
  }
}

menu.price = 6;
menu.meal = 'mozzarella sticks';

console.log(menu.todaysSpecial); // outputs Todays Special is mozzarella sticks and It Is $6.
