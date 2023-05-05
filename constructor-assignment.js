//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
  // false, false to true)
function Car (make,model,year,isAvailable){
   this.make = make
   this.model = model
   this.year = year
   this.isAvailable = true;
   this.toggleAvailability = function (){
      this.isAvailable = !this.isAvailable
   }
}
let car1 = new Car("Toyota","Camry",2020)
console.log(car1.isAvailable);
car1.toggleAvailability()
console.log(car1.isAvailable);
car1.toggleAvailability()
console.log(car1.isAvailable);

//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.
function Rental (car,renterName,rentalStartDate,rentalEndDate){
   this.car = car
   this.renterName = renterName
   this.rentalStartDate = 10022023
   this.rentalEndDate = 20022023
   this.calculateRentalDuration = function (){
      let days = this.rentalEndDate - this.rentalStartDate
      return days
   }
}
