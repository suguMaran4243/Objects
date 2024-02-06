const Emp1={
    name:'Sugu',
    age:22,
    role:'MEAN',
    introself :()=>
    {
       console.log(`Hi I am ${Emp1.name}.And my age is ${Emp1.age}.My role is ${Emp1.role} stack.` );
    }
}

console.log(Emp1.name);
console.log(typeof(Emp1));
Emp1.introself()

//Data's of objects can be anything..
const NamesOfEmployees={
    name:['Sugu','Thiru','Dinesh','Rathish','Sathur']
}
console.log(NamesOfEmployees.name[2]);
//Objects as object properties
const Names={
    name:
    {
        firstname:['Sugu','Thiru','Sathur','Dinesh'],
        lastname:['Maran','Murugan','Ganth','Kanna']
    }

}
console.log(Names.name.firstname[0].concat(Names.name.lastname[0]));
Names.name['firstname'][4]='Deepak';
Names.name['lastname'][4]='raj';
console.log(Names.name['firstname'][4].concat(Names.name.lastname[4]));

const Team=
{
    TeamName:'India',
    Captain:'Rohit',
    ViceCaptain:'KL Rahull',
    Batters:['Virat','SKY','Ruturaj','Gill','Jaiswall'],
    All_rounders:['Jaddu','Hardik','Dube'],
    Bowlers:['Bumrah','Shami','Siraj','Ashwin'],
    Coach:['Dravid','Sreenath']

}
Team.Coach=['Dravid','Sreenath']
Team.Coach[2]='Sachin'
console.log(Team.Coach);

//this--used to refer current object
const person1=
{
    name:'Sugu',
    intro()
    {
        console.log(`Hi I am ${this.name}`)
    }
}
const person2=
{
name:'Suve',
intro()
{
    console.log(`Hi I am ${this.name}`);
}
}
person1.intro()
//constructor in objects
function Person(name)
{
    this.name=name;
    this.printWelcome=()=>
    {
        console.log(`Hi i am ${this.name}.Welcome`)
    }
}


const p1=new Person('Sugu');
console.log(p1.name);
p1.printWelcome()
//------------------------------------
//Object Prototypes
const myObj={
    city:'Trichy',
    greet()
    {
        console.log(`I am from ${this.city}`)
    }
}
myObj.greet()
//using prototype we can add methods to objects and properties
function Student(name,age,city,email)
{
    this.name=name
    this.age=age
    this.city=city
    this.email=email
   this.printDetails=()=>
    {
        console.log(`Hi I am ${this.name}.My age is ${this.age}.I am coming from ${this.city}.Please contact me through this ${this.email} id.My dept is ${this.Dept}`)
    }
}

Student.prototype.Dept='BCA'
const s1=new Student('Thiru',20,'Trichy','thirumurugan@gmail.com');
s1.printDetails()
////---------------------------------
//Classes in js
class School
{
    //  var schoolName;
    // name;
    constructor(schoolName,name)
    {
        this.schoolName=schoolName;
        this.name=name;
    }
    printSchoolName()
    {
        console.log(`Hi i am ${this.name}.I am studying in ${this.schoolName}`);
    }
}
const std1=new School('BIT','Thiru');
std1.printSchoolName()




//omitting constructor
class Demo
{
    demomessage()
    {
        console.log('Hi this is demo message');
    }
}
const d1=new Demo();
d1.demomessage();
//Inheritance

class Car
{
    constructor(brand)
    {
        this.brand=brand;
    }
    printBrand()
    {
        console.log(`i have this ${this.brand} brand`);
    }
}
class Model extends Car
{
    constructor(brand,year)
    {
        super(brand);
        this.year=year;
    }
    printmodel()
    {
        console.log(`My car is ${this.brand}.Model ${this.year}`)
    }
}
const car1=new Model('XUV700',2023);
car1.printmodel()

//Encapsulation
// class Empdetails
// {
//     // var name;
//     #sal;
//     constructor(name,#sal)
//     {
//         this.name=name;
//         this.#sal=#sal
//     }
//     printEmp()
//     {
// console.log(`I am ${this.name}.My salary is ${this.#sal}`)
//     }
// }
// const emp1=new Empdetails('Sugu',300000);
// emp1.printEmp()

