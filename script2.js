//// ARRAYS

var myArray=[];
var myNumArray=[1, 2, 3, 4, 5, 6];

console.log(myNumArray[2])

myNumArray.push(7);
console.log(myNumArray.length);

var subArr= myNumArray.slice(1,2);
console.log(subArr);

//// DOM Manipulation

// var header = document.getElementById("header");
// header.style.backgroundColor= "red";
// header.style.fontSize= "30px";

// header.innerHTML= "<p>something else?<p>";

var newElem= document.createElement('div');
newElem.style.width="200px";
newElem.style.height="200px";
newElem.style.backgroundColor="green";

document.body.appendChild(newElem);
// header.appendChild(newElem);

newElem.remove();

/////Overlay

var overlay= document.querySelector('.overlay');
var popup= document.getElementById('popup');

popup.addEventListener('click', function(e){
  console.log(e);
  overlay.style.display="block";
});

overlay.addEventListener('click', function(){
  overlay.style.display="none";
});

///// SCROLL

function getScrollPercent()
{
  let scrollRange= document.body.offsetHeight- window.innerHeight;
return window.scrollY/ scrollRange;
}

window.addEventListener('scroll', function(e){
  //console.log(window.scrollY, getScrollPercent()); //Comments this out to remove coordinates
  let percent= getScrollPercent();
  document.body.style.backgroundColor= 'rgb('+250* percent+','+190* (3.0 - percent)+',200)';
});


////Mouse Interaction

function getRelativeCoordinates(mouse, element){
  let rect= element.getBoundingClientRect()
  return {
    x: mouse.clientX- rect.left,
    y: mouse.clientY- rect.top
  };
}

// var sections= document.getElementsByClassName('section');
// // OR section= document.querySelectorAll('.section');
//
// for(let i = 0; i< sections.length; i++)
// {
//   sections[i].addEventListener('mouseenter', function(){
//     console.log("mouse entered section!");
//   });
//   sections[i].addEventListener('mousemove', function(mouse){
//     coords= getRelativeCoordinates(mouse, sections[i])
//     //console.log("mouse moving inside section!", mouse.clientX, mouse.clientY, coords.x,coords.y);
//     coords.x/= section[i].clientWidth;
//     coords.y/= section[i].clientHeight;
//     //console.log(coords.x,coords.y);
//   });
//   sections[i].addEventListener('mouseleave', function(){
//     //console.log("mouse left section!");
//   });
// }

/// TIMING

var timeHandler= setTimeout (function(){
  header.remove();
}, 5000);

// to turn off the timer (for header)
//clearTimeout (timeoutHandle);

// var i= 0;
// setInterval(function(){
//   console,log("interval...", i++);
// }, 1000);

setInterval(function(){
  var newDiv= document.createElement('div');
  newDiv.style.position= "absolute";
  newDiv.style.width= "200px";
  newDiv.style.height= "200px";
  newDiv.backgroundColor= 'rgb('+255* Math+','+255* (1.0 - Math)+',255)';
  newDiv.style.top= window.innerHeight* Math.random()+"px";
  newDiv.style.top= window.innerWeight* Math.random()+"px";

newDiv.addEventListener('click', function(){
  newDiv.remove();
});
  document.body.appendChild(newDiv);

}, 100);

setTimeout(function(){
  clearInterval(intervalHandle);

}, 5000);
