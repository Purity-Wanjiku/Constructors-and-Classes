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
function Rental (car1,renterName,rentalStartDate,rentalEndDate){
   this.car = car1
   this.renterName = renterName
   this.rentalStartDate = rentalStartDate
   this.rentalEndDate = rentalEndDate
}
Rental.prototype.calculateRentalDuration = function(){
   let startTime = this.rentalStartDate.getTime();
   let endTime = this.rentalEndDate.getTime();
   let timeDifference = endTime - startTime
   let timeline = 24*60*60*1000;
   let duration = timeDifference / timeline
   return duration
};

let rent = new Rental(car1,"Jacob Juma",new Date(2002,11,20),new Date(2002,12,25))
console.log(rent);
console.log(rent.calculateRentalDuration());

//The Question class should also have a method called checkAnswer that takes a
// user's answer as a parameter and returns true if the answer is correct and false otherwise.

class Question{
   constructor(text,options,correctAnswer){
     this.text=text;
     this.options=options;
     this.correctAnswer=correctAnswer;
   }
   checkAnswer(isAnswer) {
     return isAnswer === this.correctAnswer;
   }
 }
 let question1 = new Question ("What are some of the landlocked countries in Africa?",["Uganda","Kenya","Eritrea","Togo"],"Uganda")
let isanswer = "Uganda"
console.log(question1.checkAnswer(isanswer));

