
const topRigth = document.querySelector('#top-rigth');
const topLeft = document.querySelector('#top-left');
const bottomRigth = document.querySelector('#bottom-rigth');
const bottomLeft = document.querySelector('#bottom-left');
const allrange = document.querySelector('#all');
const result = document.querySelector("#result");
const containerBorder = document.querySelector('#container-border');


allrange.onchange = function(){
    containerBorder.style.borderTopRightRadius = allrange.value + 'px';
    containerBorder.style.borderTopLeftRadius = allrange.value + 'px';
    containerBorder.style.borderBottomRightRadius = allrange.value + 'px';
    containerBorder.style.borderBottomLeftRadius = allrange.value + 'px';

    topRigth.value = allrange.value;
    topLeft.value = allrange.value;
    bottomRigth.value = allrange.value;
    bottomLeft.value = allrange.value;

   if(allrange.value != 0){
    result.innerHTML = "border-radius:" + allrange.value +'px \n';
    result.innerHTML += "-webkit-border-radius:" + allrange.value+'px \n';
    result.innerHTML += "-moz-border-radius:" + allrange.value+'px \n';

    }
    else{
        result.innerHTML  = "";
    }
}

topRigth.onchange= function(){
    containerBorder.style.borderTopRightRadius = topRigth.value+'px';
    if(topRigth.value != 0){
        result.innerHTML = "\n";
        result.innerHTML = "border-top-right-radius:"+topRigth.value+'px \n';
    }
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

