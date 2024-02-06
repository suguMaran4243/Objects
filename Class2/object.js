class Person
{
    name;
    age;
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    printName()
    {
        console.log(this.name+""+this.age)
    }
}
const obj1=new Person('Sugu',22);
obj1.printName()