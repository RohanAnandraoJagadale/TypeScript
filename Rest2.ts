// Rest parameters : Variable number of arguments


// function Addition(Arr : number[]) : number
function Addition(...Arr : number[]) : number  // data type should be fix
{
    let Sum : number = 0

    let Cnt : number = 0

    for(Cnt = 0; Cnt <Arr.length; Cnt++)
    {
        Sum = Sum + Arr[Cnt]
    }
    return Sum
}

var Ret : number = 0
var Mydata : number[] = [10,20,30,40]

// Ret = Addition(Mydata) // not allowed

Ret = Addition(10,20)
console.log("Result is : "+Ret)