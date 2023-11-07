
class Circle
{
    Radius : number
    PI : number

    constructor(Data : number)
    {
        this.Radius = Data
        this.PI = 3.14
    }

    Area() : number
    {
        let Ans : number = 0
        Ans = this.PI * this.Radius * this.Radius
        return Ans
    }
}

var obj = new Circle(10.7)

var Ret : number = 0

Ret = obj.Area()
console.log("Area is : "+Ret)