var header= document.getElementById("header");

header.style.color= "#fff";

console.log("hello world");

var myInt= 5;
var myNumber= 1.2345;
var myBool= true;
var myString= "i'm a string";
var myOtherString= 'i\'m another string of text';

console.log(""+ " "+myInt+ " "+myNumber+ " "+myBool+ " "+myString+ " "+myOtherString);
console.log(myInt, myNumber, myBool, myString, myOtherString);

var unAssigned;

console.log(unAssigned);

const unchangable= "i can't be changed";

let iAmAScopedVAriable= 25;
{
  var globalActually="hello!";
  let local="i'm local";
  console.log(local);
}

console.log(globalActually);

function myFunc(){
  console.log("my func!");
}

myFunc();

var myFunVar= function() {
  console.log("Hi there");

}
myFunVar();

var _addTwo= (p1, p2)=>{
  if (val2)

{
  return val1+ val2;
}  else{
  return val1+2;

  }
}

var sayHi= ()=> console.log("hello");


////OBJECTS
var obj={};

var obj2={
  hello:"hello object",
  someVal:100
};

console.log(obj2.hello);

obj.thisCoolProp= "so cool!";

console.log(obj.thisCoolProp);
console.log(obj['thisCoolProp']);

obj.aCoolFunction= function(){
  console.log("wow!")
}

obj.aCoolFunction();

var obj3={
  anotherOne:{
    x:1,
    y:3
  },
  somethingElse:{
    test:"hi"
  }
};

console.log(obj3.somethingElse.test);
