var num = 6;
var colors = generateRandomColors(num);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor = pickColor();
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButt = document.querySelector("#reset");
var easyButt = document.querySelector("#easy");
var hardButt = document.querySelector("#hard");

easyButt.addEventListener("click",function(){
    easyButt.classList.add("selected");
    hardButt.classList.remove("selected");
    switchToEasy();
})

hardButt.addEventListener("click",function(){
    hardButt.classList.add("selected");
    easyButt.classList.remove("selected");
    switchToHard();
})

resetButt.addEventListener("click",function(){
    resetButt.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue" ;
    messageDisplay.textContent = '';
    //generate new colors
    colors = generateRandomColors(num);
    //pick new color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // change the colors of squares
    for(var i=0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];


}})
colorDisplay.textContent = pickedColor;

for(var i=0; i< squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        console.log(clickedColor, pickedColor)

        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
            changeColor();
            h1.style.background = clickedColor;
            resetButt.textContent = "Play Again?";
        }
        else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
        
    })
}


function changeColor(){
    for(var i=0; i<colors.length; i++)
    {
        squares[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(){
   var random= Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i =0;i<num;i++)
    {
        //get num random colrs and push to array
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a red from 0 to 255
   var red = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    var green = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

function switchToEasy(){
    num =3;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0;i<squares.length;i++)
    {
        if(i<3){
            squares[i].style.backgroundColor = colors[i];
        }

        else{
            squares[i].style.display = "none";
        }
    }
    
}
function switchToHard(){
    num =6;
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i =0;i<squares.length;i++)
    {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
    }
    
}