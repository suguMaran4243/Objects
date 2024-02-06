class Private
{
    private1;
    #private2='Hello';
    constructor(private1,private2)
    {
        this.private1=private1;
        this.#private2=private2;
    }
    print()
    {
        console.log(this.private1+""+this.#private2)
    }
}
const p1=new Private('hi','red');
console.log(p1);
console.log(p1.print());
console.log(p1.private1);

