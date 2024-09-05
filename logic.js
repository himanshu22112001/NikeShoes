let shoes1=document.getElementById("jordan0");
let shoes2=document.getElementById("jordan1");
let shoes3=document.getElementById("jordan2");
let shoes4=document.getElementById("jordan3");
let shoes5=document.getElementById("jordan3G");
let shoes6=document.getElementById("jordan3R");
let shoes7=document.getElementById("mag");
let content1=document.getElementById("content1")
let content2=document.getElementById("content2")
let content3=document.getElementById("content3")
let content4=document.getElementById("content4")
let content5=document.getElementById("content5")
let content6=document.getElementById("content6")
let parent=document.getElementById("parent");
let parent2=document.getElementById("parent2");
let bulb1=document.getElementById("bulb1");
let bulb2=document.getElementById("bulb2");
let bulb3=document.getElementById("bulb3");
let bulb4=document.getElementById("bulb4");
let txt=document.getElementById("main");


function jordan1(){
shoes1.style.marginLeft="300%";
shoes2.style.marginLeft="300%";
shoes3.style.marginLeft="0%";
shoes4.style.marginLeft="300%";
shoes5.style.marginLeft="300%";
shoes6.style.marginLeft="300%";
shoes7.style.marginLeft="300%";
shoes1.style.transition="3s"
shoes2.style.transition="3s"
shoes3.style.transition="3s"
shoes4.style.transition="3s"
shoes5.style.transition="3s"
shoes6.style.transition="3s"
shoes7.style.transition="3s"
parent.style.background="linear-gradient(to right,rgb(163 20 27),rgb(198 99 27))"
parent.style.transition="4s";
txt.innerHTML="Nike Zoom <br>Flyknit";


}



function jordan2(){
    shoes1.style.marginLeft="300%";
    shoes2.style.marginLeft="300%";
    shoes3.style.marginLeft="300%";
    shoes4.style.marginLeft="0%";
    shoes5.style.marginLeft="300%";
    shoes6.style.marginLeft="300%";
    shoes7.style.marginLeft="300%";
    shoes1.style.transition="5s"
shoes2.style.transition="3s"
shoes3.style.transition="3s"
shoes4.style.transition="3s"
shoes5.style.transition="3s"
shoes6.style.transition="3s"
shoes7.style.transition="3s"
parent.style.background="linear-gradient(to right, rgb(41 36 36), rgb(212 212 214))"
parent.style.transition="4s";
txt.innerHTML="AIR JORDAN 6 RETRO";

    }

   
    function jordan3(){
        shoes1.style.marginLeft="300%";
        shoes2.style.marginLeft="300%";
        shoes3.style.marginLeft="300%";
        shoes4.style.marginLeft="300%";
        shoes5.style.marginLeft="0%";
        shoes6.style.marginLeft="300%";
        shoes7.style.marginLeft="300%";
        shoes1.style.transition="5s"
shoes2.style.transition="3s"
shoes3.style.transition="3s"
shoes4.style.transition="3s"
shoes5.style.transition="3s"
shoes6.style.transition="3s"
shoes7.style.transition="3s"
parent.style.background=" linear-gradient(to right, rgb(239 74 60), rgb(46 41 39))"
parent.style.transition="4s";
txt.innerHTML="AIR JORDAN 6 RETRO";
        }


        function jordan4(){

            shoes1.style.marginLeft="0%";
            shoes2.style.marginLeft="300%";
            shoes3.style.marginLeft="300%";
            shoes4.style.marginLeft="300%";
            shoes5.style.marginLeft="300%";
            shoes6.style.marginLeft="300%";
            shoes7.style.marginLeft="300%";
            shoes1.style.transition="5s"
    shoes2.style.transition="3s"
    shoes3.style.transition="3s"
    shoes4.style.transition="3s"
    shoes5.style.transition="3s"
    shoes6.style.transition="3s"
    shoes7.style.transition="3s"
    parent.style.background=" linear-gradient(to right, black,black)"
    parent.style.transition="4s";
    
    txt.innerHTML="AIR JORDAN 1 RETRO";

        }



        function jordan3r(){
            shoes1.style.marginLeft="300%";
            shoes2.style.marginLeft="300%";
            shoes3.style.marginLeft="300%";
            shoes4.style.marginLeft="300%";
            shoes5.style.marginLeft="300%";
            shoes6.style.marginLeft="0%";
            shoes7.style.marginLeft="300%";
            shoes1.style.transition="3s"
            shoes2.style.transition="3s"
            shoes3.style.transition="3s"
            shoes4.style.transition="3s"
            shoes5.style.transition="3s"
            shoes6.style.transition="3s"
            shoes7.style.transition="3s"
            parent.style.background="linear-gradient(to right, rgb(255 0 46), rgb(255 130 133))"
            parent.style.transition="4s";
            txt.innerHTML="AIR JORDAN 6 RETRO";
            
            }

            function mag(){
                shoes1.style.marginLeft="300%";
                shoes2.style.marginLeft="300%";
                shoes3.style.marginLeft="300%";
                shoes4.style.marginLeft="300%";
                shoes5.style.marginLeft="300%";
                shoes6.style.marginLeft="300%";
                shoes7.style.marginLeft="0%";
                shoes1.style.transition="3s"
                shoes2.style.transition="3s"
                shoes3.style.transition="3s"
                shoes4.style.transition="3s"
                shoes5.style.transition="3s"
                shoes6.style.transition="3s"
                shoes7.style.transition="3s"
                parent.style.background="linear-gradient(to right, rgb(80 140 153), rgb(225 224 227)"
                parent.style.transition="4s";
                txt.innerHTML="Nike Air MAG";
                
                }

        //menu slider

        let panel1=document.getElementById("panel1");
        let panel2=document.getElementById("panel2");


       
        function back(){
            panel1.style.marginLeft="-100%";
            panel2.style.marginLeft="100%";
            panel1.style.transition="1s";
            panel2.style.transition=".5s";
            

        }


        let navcontact=document.getElementById("brandshow");
        let displaybrand=document.getElementById("displaybrand");
        let Contact=document.getElementById("contact");

        function brand(){
            panel1.style.marginLeft="0px";
            panel2.style.marginLeft="50%";
            panel1.style.transition="1s";
            panel2.style.transition=".5s";
            Contact.style.display="none";
            displaybrand.style.display="block";
            navcontact.innerHTML="Brand";
        }


        function take(){
            panel1.style.marginLeft="0px";
            panel2.style.marginLeft="50%";
            panel1.style.transition="1s";
            panel2.style.transition=".5s";
            navcontact.innerHTML="Contact";
            Contact.style.display="block";
            displaybrand.style.display="none";
           
        }


   //slider--------------------------



