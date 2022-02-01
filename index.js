for (var i = 0; i < 19; i++) {
    document.querySelectorAll(".button")[i].addEventListener("click" , sound);
    function sound(){
        var audio = new Audio("./sound/click.mp3");
        audio.play();
        
    }
    
}

var output = document.getElementById("output");

function display(num){
   output.value += num;
}

function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch{
        alert("Wrong Input!");
    }
}

function Clear(){
    var output = document.getElementById("output");
    output.value = "0";
}

function Delete(){
     output.value=output.value.slice(0 , -1);
}

// buttons
// function lightStyle(){
//     document.querySelector(".container").style.backgroundColor="black";
// }

// function darkStyle(){
//     document.querySelector(".container").style.backgroundColor="black";
// }