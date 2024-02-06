class User
{
    firstName;
    lastName;
    constructor(firstName,lastName)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }

    getUserName()
    {
        return `Username is ${this.firstName} ${this.lastName}`
    }
    setUserName(firstName)
    {
        this.firstName=firstName.toUpperCase();
    }
}
const user1=new User('Sugu','Maran');
user1.setUserName('Sugu');
const user=user1.getUserName()
console.log(user);

class Name{
    firstName;
    lastName;
    role;
     constructor(firstName,lastName,role)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.role=role;
    }
    printdetails()
    {
        console.log(`Hi am ${this.firstName+this.lastName}.I am a ${this.role}`)

    }

}
class Student extends Name
{

}
class Teacher extends Name
{
//     constructor(role)
//     {
//       super(role);
//     }
//  printself=()=>
//  {
   
//    console.log(`I am ${this.role}`)
//  }
// }
}
const std1=new Student('Thiru','murugan','Student');
std1.printdetails()
const teacher1=new Teacher('karthi','keyyan','teacher');
teacher1.printdetails()
// teacher1.printself()