  
function Addition(No1 : number, No2 : number) : number
{
    let Ans : number = 0

    Ans = No1 + No2

    return Ans 
}

function Substraction(No1 : number, No2 : number) : number
{
    let Ans : number = 0

    Ans = No1 - No2

    return Ans 
}

var Value1 : number = 21

var Value2 : number = 20

var Ret : number = 0

Ret = Addition(Value1,Value2)
console.log("Addition is : "+Ret)

Ret = Substraction(Value1,Value2)
console.log("Substraction is : "+Ret)