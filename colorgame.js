var numColors = 6;
var colors =[];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();
function init(){   
    
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons(){
    for(var i = 0; i < modeBtn.length; i++){
    
       modeBtn[i].addEventListener("click", function(){
           modeBtn[0].classList.remove("selected");
           modeBtn[1].classList.remove("selected");
           this.classList.add("selected");

           this.textContent === "Easy" ? numColors = 3: numColors = 6;
           reset();
       
   }); 
}
}

function setUpSquares(){
        for(var i =0; i<squares.length; i++){
    
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
          // grab color of clicked square 
            var clickedColor = this.style.backgroundColor;
            //compare colors
            if(clickedColor === pickedColor){
               messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
}
}

function reset(){
    
   //genrate all new colors
     colors = generateRandomColors(numColors);
    //pick a new random color from array
     pickedColor = pickColor();
    // change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    
    //change color of squares
    
    for(var i =0; i<squares.length; i++){
    // add new colors to squares
    
        if(colors[i]){
         squares[i].style.display = "block";   
         squares[i].style.backgroundColor=colors[i];
       }else{
           squares[i].style.display = "none";
       }
    }
    
    h1.style.backgroundColor = "steelblue"; 
    
}
// THIS WAS THE FIRST RUN AND THEN WE CLEANED UP OUR CODE
//easyBtn.addEventListener("click", function(){
//    numColors = 3;
//    hardBtn.classList.remove("selected");
//    easyBtn.classList.add("selected");
//    colors = generateRandomColors(numColors);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        
//        if(colors[i]){
//            squares[i].style.backgroundColor=colors[i];
//        }else{
//            squares[i].style.display = "none";
//        }
//        
//    }
//    
//});
//
//hardBtn.addEventListener("click", function(){
//    
//    numColors = 6;
//    hardBtn.classList.add("selected");
//    easyBtn.classList.remove("selected");
//    
//    
//    colors = generateRandomColors(numColors);
//    pickedColor = pickColor();
//    colorDisplay.textContent = pickedColor;
//    for(var i = 0; i < squares.length; i++){
//        
//    
//      squares[i].style.backgroundColor=colors[i];
//       
//      squares[i].style.display = "block";
//        
//        
//    }
//    
//});

resetButton.addEventListener("click", function(){
   
   reset();
});



function changeColors(color){
    // loop through all squares
    for(var i =0; i<squares.length; i++){
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i = 0; i< num; i++){
        //get and push random color into arr
        arr.push(randomColor());
    }
    
    //return that array
    return arr;
    
}

function randomColor(){
    
    //pick a reb from 0-255
    var r = Math.floor(Math.random()* 256);
    //pick a green from 0-255
    var g = Math.floor(Math.random()* 256);
    //pick a blue from 0-255
    var b = Math.floor(Math.random()* 256);
    
   return "rgb("+ r +", "+ g +", "+ b +")";
    
}