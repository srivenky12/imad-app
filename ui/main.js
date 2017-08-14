console.log('Loaded!');

// change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = "New value From Main.js";

///move the the image 

var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onClick = function(){
    var interval = setInterval(moveRight,50);
   
    
};