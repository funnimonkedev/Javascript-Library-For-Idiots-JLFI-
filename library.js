



function $(selector) {
const self = {
element: document.querySelector(selector),
html: () => self.element,
on: (event, callback) => {
self.element.addEventListener(event,callback)
},
hide:() => {
self.element.style.visibility = 'hidden';
},
show:() => {
self.element.style.visibility = 'visible';
},
attr:(name,value)=> {
if(value == null) 
self.element.getAttribute(name);
else
self.element.setAttribute(name, value);
},
color:(color)=> {
self.element.style.color = color;
},
txtSize:(size)=> {
self.element.style.fontSize = size;
},
txt:(text)=> {
self.element.innerHTML = text;
},
create:(element, text)=> {
var para = document.createElement(element); para.innerText = text; document.body.appendChild(para);
},
}

return self;
}


//examples
let sIze = 30;
$('p').create('button', 'hello'); //the selector $(selector) does not matter in this function just put something they're
$('p').on('click',function() {
$('p').hide();
});

$('h1').on('click', function() {
$('p').show();
$('p').color('blue');
sIze += 10
$('p').txtSize(sIze + 'px');
$('p').txt('paragraph(p) p-a-r-a-g-r-a-p-h');
});

$('h4').attr('className', 'classy');
