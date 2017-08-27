console.log('Loaded!');
var element=document.getElementById('main-text');
console.log(element);
element.innerHTML='New Value';

//move the image

var img=document.getElementById('madi');
img.onClick =function(){
  img.style.marginLeft='100px';
};