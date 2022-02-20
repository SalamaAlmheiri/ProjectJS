
//// DOM Manipulation
var newElem= document.createElement('div');
newElem.style.width="200px";
newElem.style.height="200px";
newElem.style.backgroundColor="green";

document.body.appendChild(newElem);

newElem.remove();

///// OVERLAY 1
var overlay1= document.querySelector('.overlay1');
var popup1= document.getElementById('popup1');

popup1.addEventListener('click', function(e){
  console.log(e);
  overlay1.style.display="block";
});

overlay1.addEventListener('click', function(){
  overlay1.style.display="none";
});

///// OVERLAY 2
var overlay2= document.querySelector('.overlay2');
var popup2= document.getElementById('popup2');

popup2.addEventListener('click', function(e){
  console.log(e);
  overlay2.style.display="block";
});

overlay2.addEventListener('click', function(){
  overlay2.style.display="none";
});

///// OVERLAY 3
var overlay3= document.querySelector('.overlay3');
var popup3= document.getElementById('popup3');

popup3.addEventListener('click', function(e){
  console.log(e);
  overlay3.style.display="block";
});

overlay3.addEventListener('click', function(){
  overlay3.style.display="none";
});

///// COLORFUL SCROLL
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

//// Mouse Interaction
function getRelativeCoordinates(mouse, element){
  let rect= element.getBoundingClientRect()
  return {
    x: mouse.clientX- rect.left,
    y: mouse.clientY- rect.top
  };
}

/// TIMING
var timeHandler= setTimeout (function(){
  header.remove();
}, 5000);

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
