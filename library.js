
function changeColor(amount, element, colorType) {
  if (amount == 'single') {
  document.querySelector(element).style.color = colorType;
}
 /* if (amount == 'all') { //(this code is broken)
  document.querySelectorAll(element).style.color = colorType;
}*/
}
function changeVis(amount, element, visibility) {
if (amount == 'single') {
  document.querySelector(element).style.visibility = visibility;
}
// I have not added an all function yet for visibility, anyways the colors all function is broken so I figured it wouldnt work for this
}

changeColor('single','p', 'blue');
changeVis('single','#heading3', 'hidden');
