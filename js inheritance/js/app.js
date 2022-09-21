 class Car{
     constructor(brand){
         this.brand=brand;
     }
 }

 class Model extends Car{
     constructor(brand, model){
         super(brand);
         this.model=model;
     }

     Show(){
        return `Car : ${this.brand} / Car Model: ${this.model}`; 
     }
 }

 var firstCar=new Model("BMW","428i");
 var secondCar=new Model("Kia","Optima");
 console.log(firstCar.Show());
 console.log(secondCar.Show());

