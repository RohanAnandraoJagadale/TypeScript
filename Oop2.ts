// Write application which perform addition and substraction of two numbers

// kay kaarayche aahe(Method / behaviour) -> Addition / substraction

// Kay lagnar aahe(data) -> 2 number

class Arithematic
{
    // Data / Characteristics
    No1 : number
    No2 : number

    constructor(A : number, B : number)
    {
        this.No1 = A
        this.No2 = B
    }

    Addition(): number
    {
        return this.No1+this.No2
    }

    substraction(): number
    {
        return this.No1 - this.No2
    }
}

// addition

var obj1 = new Arithematic(11,10)
Ret = obj1.substraction()
console.log("Substraction is : "+Ret)



var obj2 = new Arithematic(21,15)
Ret = obj2.substraction()
console.log("Substraction is : "+Ret)