class Car{
    constructor(model,color, year, fuel, produced){
    this.model = model,
    this.color = color,
    this.year = year,
    this.fuel = fuel,
    this.produced = produced
    }
    showData(){
      console.log(this.model);
      console.log(this.color,'color');
      console.log( 'Manufacture Date', this.year);
      console.log('Fuel type is ', this.fuel)
      console.log('Made in ', this.produced)
    }
  }
  
  module.exports = Car;