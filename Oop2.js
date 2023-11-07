// Write application which perform addition and substraction of two numbers
// kay kaarayche aahe(Method / behaviour) -> Addition / substraction
// Kay lagnar aahe(data) -> 2 number
var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arithematic.prototype.substraction = function () {
        return this.No1 - this.No2;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var Ret = 0;
Ret = obj1.Addition();
console.log("Addition is : " + Ret);
var obj2 = new Arithematic(21, 15);
Ret = obj2.substraction();
console.log("Substraction is : " + Ret);
