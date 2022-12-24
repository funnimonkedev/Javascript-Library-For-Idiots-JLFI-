

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
}

return self;
}


//examples
let sIze = 30;

$('p').on('click',function() {
$('p').hide();
});

$('h1').on('click', function() {
$('p').show();
$('p').color('blue');
sIze += 10
$('p').txtSize(sIze + 'px');
});

$('h4').attr('className', 'classy');