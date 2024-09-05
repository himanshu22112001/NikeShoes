
let img=document.getElementById("redalert");
let parent=document.getElementById("parent");
let baby1=document.getElementById("baby1");
let baby2=document.getElementById("baby2");
let baby3=document.getElementById("baby3");
let field=document.getElementById("num1");
let field2=document.getElementById("num2");



function login(){
var user=document.getElementById("num1").value;
var pass=document.getElementById("num2").value;


    if(user==="gossner@123" && pass==="BCA123"){
        alert("You succesfully loged in");
        baby1.style.transform="translateX(-1000px)";
        baby1.style.transition="2s"
        baby2.style.transform="translateX(1000px)";
        baby2.style.transition="2s"
        baby3.style.transform="translateY(0px)";
        baby3.style.transition="2s"
        img.className="img";

    }
    else if( user=="" || pass==""){
       alert("All fields are required")
       field.style.animation="field2 1s infinite";
        field2.style.animation="field2 1s infinite";
    }
    else{
        field.style.animation="field2 1s infinite";
        field2.style.animation="field2 1s infinite";
        img.className="img2";
        img.style.transition="1s";
        alert("pls enter valid username password");
     
        
        
    }
    
}