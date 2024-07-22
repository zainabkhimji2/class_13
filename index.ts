import inquirer from "inquirer"


// *****************************OBJECT ORIENTED PROGRAMMING********************************************

// code likhnai ka tarika hai code efficent hojata hai , clean hojata hai

// there are two waysto do 
// 1 : object
// 2 : class

// class House {
//     ownwerName:string = "Zainab";
//     address:string = "123 main st";
//     NumberOfRooms:number = 8;


// }
// let house1 = new House();  // new intence or object 
// let house2 = new House()
// console.log(house1);
// output

// House {
//     ownwerName: 'Zainab',
//     address: '123 main st',
//     NumberOfRooms: 8
//   }


// class House {
//     ownwerName:string = "Zainab";
//     address:string = "123 main st";
//     NumberOfRooms:number = 8;


// }
// let house1 = new House();  // new intence or object 
// let house2 = new House()
// console.log(house2.address);

// output :
// 123 main st



// 88888888******************888constructor************888888888888888


// class House {
//     ownwerName:string = "Zainab";
//     address:string = "123 main st";
//     floors:number = 8;
//     constructor(){
//         this.ownwerName = "Neha"
//     }


// }
// let house1 = new House();  // new instence or object 

// console.log(house1.ownwerName);

// output:
// neha



// class House {
//     ownwerName:string = "Zainab";
//     address:string = "123 main st";
//     floors:number = 8;
//     constructor(name:string,adres:string){
//         this.ownwerName = name
//         this.address = adres
//     }


// }
// let house1 = new House("Ali","123 dvgdj");

//   let house2 = new House("neha","3455 hddj"); 
// console.log(house1);
// console.log(house2);

// output

// House { ownwerName: 'Ali', address: '123 dvgdj', floors: 8 }
// House { ownwerName: 'neha', address: '3455 hddj', floors: 8 }

// **************************readonly ********************************

// readonly is used not to change the value of adress in outside the class
// class House {
//     ownwerName:string = "Zainab";
//      readonly address:string = "123 main st";
   
//     constructor(name:string,adres:string){
//         this.ownwerName = name
//         this.address = adres
//     }


// }
// let house1 = new House("Ali","123 dvgdj");

//   let house2 = new House("neha","3455 hddj"); 
//   let house3 = new House("khimji","a323")
  
// console.log(house1);
// console.log(house2);
// house3.address = "123"   // error in this line 


// ****************************************method**********************************************88888

// class House {
//     ownwerName:string = "Zainab";
//     address:string = "123 main st";
   
//     constructor(name:string,adres:string){
//         this.ownwerName = name
//         this.address = adres
//     }
//     bell(){
//         console.log("ding dong");
        
//     }
    
// }
// let house1 = new House("Ali","123 dvgdj");

//   let house2 = new House("neha","3455 hddj"); 
  
//   house1.bell()
// console.log(house1);
// console.log(house2);

// output :

// // ding dong
// House { ownwerName: 'Ali', address: '123 dvgdj' }
// House { ownwerName: 'neha', address: '3455 hddj' }


// *******************************pillars of oop ***************************************************

// there are 4 pillars of oop        
// 1 inheritance
// 2 encapsulation
// 3 abstraction
// 4 polymorphism



// inheritance

// class person{         // parent class
//     name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age

//     }
// }
// class student extends person {
    
//     rollNumber:string
//     constructor(name:string,age:number,rollNumber:string){
//         super(name,age)
//         this.rollNumber = rollNumber

//     }
// }  

// class teacher extends person {
    
//     qualification:string
//     constructor(name:string,age:number,qualification:string){
//         super(name,age)
//         this.qualification =qualification                                                      

//     }
// }
// let teacher1 =new teacher("khimji",24,"master")

// let student1 = new student("zainab",18,"1234a")
// console.log(student1);
// console.log(teacher1);


// class person{         // parent class
//     name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age

//     }
//     introduction(){
//         console.log(`hello ${this.name} your age is ${this.age}`);
        
//     }
// }
// class student extends person {
    
//     rollNumber:string
//     constructor(name:string,age:number,rollNumber:string){
//         super(name,age)
//         this.rollNumber = rollNumber

//     }
// }  

// class teacher extends person {
    
//     qualification:string
//     constructor(name:string,age:number,qualification:string){
//         super(name,age)
//         this.qualification =qualification                                                      

//     }
// }
// let teacher1 =new teacher("khimji",24,"master")

// let student1 = new student("zainab",18,"1234a")
// console.log(student1);
// console.log(teacher1);

// console.log(teacher1.introduction());


/// output :
// student { name: 'zainab', age: 18, rollNumber: '1234a' }
// teacher { name: 'khimji', age: 24, qualification: 'master' }
// hello khimji your age is 24
// undefined

// *********************************method overwrite ********************************
//  polymoriphism

// class person{         // parent class
//     name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age

//     }
//     introduction(){
//         console.log(`hello ${this.name} your age is ${this.age}`);
        
//     }
// }
// class student extends person {
    
//     rollNumber:string
//     constructor(name:string,age:number,rollNumber:string){
//         super(name,age)
//         this.rollNumber = rollNumber

//     }
// }  

// class teacher extends person {
    
//     qualification:string
//     constructor(name:string,age:number,qualification:string){
//         super(name,age)
//         this.qualification =qualification                                                      

//     }
//     introduction() {
//        console.log(`hello ${this.name} your age is ${this.age} and you have ${this.qualification} `);
       
//     }
    
// }
// let teacher1 =new teacher("khimji",24,"master")
// teacher1.introduction()
// let student1 = new student("zainab",18,"1234a")
// console.log(student1);
// console.log(teacher1);


// ***************************************accses modify ***********************************************

// there are three type of acces modify
// public
// private


//  private:

// encapsulation:
// class person{         // parent class
//     name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age

//     }
//     introduction(){
//         console.log(`hello ${this.name} your age is ${this.age}`);
        
//     }
// }
// class student extends person {
    
//     rollNumber:string
//     constructor(name:string,age:number,rollNumber:string){
//         super(name,age)
//         this.rollNumber = rollNumber

//     }
// }  

// class teacher extends person {
    
//     qualification:string;
//      private salary:number  /// private
//      private secret:number = 1234
//     constructor(name:string,age:number,qualification:string,slary:number){
//         super(name,age)
//         this.qualification =qualification    
//         this.salary = slary                                                  

//     }
//     introduction() {
//        console.log(`hello ${this.name} your age is ${this.age} and you have ${this.qualification} `);
       
//     }
//     getSalary(secret:number){
//         if(secret === this.secret){
//             console.log(this.salary);
//         }else{
//             console.log("enter a valid code");
            
//         }
        
        
//     }
// }
// let teacher1 =new teacher("khimji",24,"master",1234456)
// teacher1.introduction()
// // console.log(teacher1.salary); // Property 'salary' is private and only accessible within class 'teacher'.ts(2341)
// teacher1.getSalary(1234)

// let student1 = new student("zainab",18,"1234a")
// console.log(student1);
// console.log(teacher1);

// output:
//hello khimji your age is 24 and you have master 
// 1234456

// *********************************protected ***********************************************

// class person{         // parent class
//      protected name:string;
//     age:number
//     constructor(name:string,age:number){
//         this.name = name
//         this.age = age

//     }
//     introduction(){
//         console.log(`hello ${this.name} your age is ${this.age}`);
        
//     }
// }
// class student extends person {
    
//     rollNumber:string
//     constructor(name:string,age:number,rollNumber:string){
//         super(name,age)
//         this.rollNumber = rollNumber

//     }
// }  

// class teacher extends person {
    
//     qualification:string;
//      private salary:number  /// private
//      private secret:number = 1234
//     constructor(name:string,age:number,qualification:string,slary:number){
//         super(name,age)
//         this.qualification =qualification    
//         this.salary = slary                                                  

//     }
//     introduction() {
//        console.log(`hello ${this.name} your age is ${this.age} and you have ${this.qualification} `);
       
//     }
//     getSalary(secret:number){
//         if(secret === this.secret){
//             console.log(this.salary);
//         }else{
//             console.log("enter a valid code");
            
//         }
        
        
//     }
// }
// let teacher1 =new teacher("khimji",24,"master",1234456)
// teacher1.introduction()
// teacher1.getSalary(1234)

// **************************************abstraction*******************************************************

interface IDraw {
    draw():void
    color():void
}

class Circle implements IDraw{
draw():void{
    console.log("draw circle");
    
}
color(): void {
    console.log("coloring");
    
}
}

class Triangle implements IDraw{
    draw(): void {
        console.log("drawing triangle");
        
    }
    color(): void {
        console.log("pink color");
        
    }
}


// home work
// gattor /sattor
// university management system
// learn static member
// abstract class







