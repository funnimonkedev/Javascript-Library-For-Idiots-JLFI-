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
delete: document.querySelector(selector).remove(), //had to do it this way to not have it be a function, don't ask.
}
return self;
}
function $reverseStr(str)  {
return str.split("").reverse().join("");
}
function $lex(str){
    return str.split(' ').map(item => {
      return item.trim() //convert code to seperated parts(extremely useful at times)
    })
}
function $lex2(str){
    return str.split(' '); //doesnt map instead reverses (simple to understand, easy to use)
}
