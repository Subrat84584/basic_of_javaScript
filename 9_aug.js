console.log("1")
let arr=[];
let obj = {
    "name":"Subrat"
};
let x=10;
console.log(x);
console.log("obj")
console.log(obj)

console.log(typeof x)
x="a";
console.log(typeof x)
console.log(x.length)

y="Subrat";
console.log(y.split(""))
console.log(y.split("b"))

x=15;
console.log(x);
x="15";
console.log(x)
console.log(+x)

x=10,y=13;
console.log(x+y)
console.log(x-y)

let str="subrat"
let char="acharya"
console.log(str+char)
console.log(str+" "+char)

x=19
console.log(str+x)
console.log(str,x)

let varr=str+" "+x+char
console.log(varr)
console.log(varr.split(""))
let sp=varr.split(" ")
console.log(sp)
console.log(sp.join(""))

let ar=[1,2]
console.log(ar.join(""))

const s=5;
console.log(s); //s=5 show
s=10;
console(s); //it show error

let t=2;
console.log(t**4);  //power of the number
t=10;
console.log(t%5); //modulus of the two number


console.log(3 + "3") //33
console.log(3+ +"3") //6

console.log(3 == "3")  //true
console.log(3 === "3") //false bcz === cheack for type

console.log(3>=3) //true
console.log(3<=3) //true
console.log(3<3) //false
 
console.log("silicon"==="Silicon") //false bcz s S is not same
console.log("silicon"=="Silicon")// it is also false 

//if condition

if(true)
{
    console.log("True"); //true is output
}
if(!true)
{
    console.log("true"); 
}
if(!false)
{
    console.log("True") //output is true
}
if(3=="3")
{
    console.log(3 =="3")
}

//if and esle part

if(3 === "3")
{
    console.log("true");
}
else
{
    console.log("false");
}

//nested if else

if(3==="3")
{
    console.log("true");
}else if("silicon"=="Silicon")
{
    console.log("false");
}
else{
    console.log("inside the else part");
}

//increament
let i=1;
console.log(i++);
console.log(++i);

//addition  value in the array
let a=[];
a.push(5);
console.log(a);  //output is 5

//2D array----------------
let p=[];
a.push([1,2,3,4,5])
a.push([11,22,33,44,55]);
a.push([21,22,23,24,25]);
a.push([32,33,34,35,36]);
a.push([41,42,43,44,45]);
console.log(p);
console.log(p[0][4]);
console.log(p[0].length);
console.log(p.lenght);
p.pop();  //pop----------------- lst index
console.log(p);
p.shift(); //shift -------dlt the fst index
console.log(p);
console.log(p.shift()); //remove the fst index

p.push(p.shift);
console.log(p);












