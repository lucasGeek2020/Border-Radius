
const topRigth = document.querySelector('#top-rigth');
const topLeft = document.querySelector('#top-left');
const bottomRigth = document.querySelector('#bottom-rigth');
const bottomLeft = document.querySelector('#bottom-left')

const containerBorder = document.querySelector('#container-border');

topRigth.onchange= function(){
    
    containerBorder.style.borderTopRightRadius = topRigth.value+'px';
}
topLeft.onchange= function(){
    
    containerBorder.style.borderTopLeftRadius = topLeft.value+'px';
}
bottomRigth.onchange= function(){
   
    containerBorder.style.borderBottomRightRadius = bottomRigth.value+'px';
}
bottomLeft.onchange= function(){
    
    containerBorder.style.borderBottomLeftRadius = bottomLeft.value+'px';
}

