class Car
{
    name;
    model;
    brand;
    constructor(name,model,brand)
    {
        this.name=name;
        this.model=model;
        this.brand=brand;
    }

}
const car=new Car('Ford',2010,'Ford-speed');
console.log(car.brand)

//getter
const person={
    firstname:'Sugu',
    lastname:'Maran',
    get names()
    {
        // console.log('My name is '+this.firstname+this.lastname);
        return this.firstname+this.lastname.toUpperCase();

    }
}
let ans=person.names
console.log(ans);

//set property
const person2=
{
    firstname:'Suve',
    lastname:'Sugu',
    role:'',
    set roles(roles)
    {
       this.role=roles.toUpperCase();
    }

}

person2.roles='bf';
console.log(person2.firstname)
console.log(person2.role)