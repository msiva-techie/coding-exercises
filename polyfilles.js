
Function.prototype.myCall = function (context, ...params)  {
    this.apply(context, params)
}

Function.prototype.myApply = function (context, params = [])  {
    this.call(context, ...params)
}

Function.prototype.myBind = function (context, ...params)  {
    const obj = this;
    return function (...args) {
        obj.call(context, ...params, ...args)
    }
}

const obj = {
    firstName: "Siva",
    lastName: "M"
}

let obj1 = {
    firstName: "Ram",
    lastName: "M"
}
function getMessage (msg, msg2 = "") {
    console.log(`${this.firstName} ${this.lastName} .... ${msg} ${msg2}`);
}

getMessage.myCall(obj, "hello");
getMessage.myApply(obj1, ["hai from myapply"]);
const g = getMessage.myBind(obj, "bind hello")
g("hi")
