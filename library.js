


function $(selector) {
const self = {
element: document.querySelector(selector), //selects the element defined
html: () => self.element,
on: (event, callback) => {
self.element.addEventListener(event,callback) // adds an event listener the 'event' is where you would put 'click' or 'mousedown' and the callback is where you would put 'function() {}' or '()=>'
},
hide:() => {
self.element.style.visibility = 'hidden'; //self explanatory
},
show:() => {
self.element.style.visibility = 'visible'; //self explanatory
},
attr:(name,value)=> {
if(value == null) //checking if it exists (it is 'the attribute')
self.element.getAttribute(name); //checking if it exists (it is 'the attribute')
else
self.element.setAttribute(name, value); //adds an attribute if the attribute does not already exist
},
color:(color)=> {
self.element.style.color = color; //self explanatory
},
txtSize:(size)=> {
self.element.style.fontSize = size; //self explanatory
},
txt:(text)=> {
self.element.innerHTML = text; //self explanatory
},
create:(element, text)=> {
 var para = document.createElement(element); para.innerText = text; document.body.appendChild(para); // the 'var para' is supposed to be the method 'document.createElement'
},
replacePage:(value)=> {
document.write(value);
},
regrets:(value)=> {
 if (value == 'none') alert('yessir my fello bro')
},
}

return self;
}


//examples
let sIze = 30;
$().create('button', 'hello'); //the selector $(selector) does not matter in this function just put something their or (preferably) put nothing
$('p').on('click',function() {
$('p').hide();
});

$('h5').on('click',function() {
$().replacePage('<h1> hello </h1>'); //(You don't have to type anything in the replace page constructor box just type '' or "") the selector $(selector) does not matter in this function just put something their or (preferably) put nothing
});

$('h1').on('click', function() {
$('p').show();
$('p').color('blue');
sIze += 10
$('p').txtSize(sIze + 'px');
$('p').txt('paragraph(p) p-a-r-a-g-r-a-p-h');
});

$('h4').attr('className', 'classy');
$().regrets('none');
