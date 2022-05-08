// animation1
let sousTitres=document.querySelectorAll(".sousTitres");

// animation2
let border=document.querySelector(".border-left");

// animation3
let herosBtn=document.querySelector("heroBtn");
let adveBtn=document.querySelector("adveBtn");

if(herosBtn!=null && hero!=undefined){

}
if(herosBtn!=null && hero!=undefined){
        
}

// animation4
let blockInFade=document.querySelector(".blockInFade");
let imgZoom=document.querySelectorAll(".imgZoom");
let descriPersonnage=document.querySelectorAll(".personnage-description");
blockInFade.style.transition="1s"
for (let i = 0; i < imgZoom.length; i=i+1) {
    imgZoom[i].addEventListener("mouseover",function(){
        descriPersonnage[i].style.bottom="-10px"
        descriPersonnage[i].style.overflow="visible"
    });
    imgZoom[i].addEventListener("mouseout",function(){
        descriPersonnage[i].style.bottom="";
        descriPersonnage[i].style.overflow="hidden "
    });
}


// animation5
let point=document.querySelectorAll(".peti-ico span");
let citations=document.querySelectorAll(".citations");
let counter2=0;
setInterval(function () {
    document.querySelector(".rong").classList.remove("rong");
    point[counter2].classList.add("rong");
    document.querySelector(".citations-active").classList.remove("citations-active");
    citations[counter2].classList.add("citations-active");
    counter2++;
    if(counter2==point.length){counter2=0;
    }
},5500);

// animation6
let slider_content=document.querySelectorAll(".slide-content");
let counter=0;
setInterval(function () {
    for (let i = 0; i < slider_content.length; i=i+1) {
        slider_content[i].style.transform="translateX(-200%)";
    }
    slider_content[counter].style.display="flex";
    slider_content[counter].style.transform="translateX(0%)" 
    counter++;
    if(counter==3){counter=0;}

},6500);

// survol
    var nav_underline=document.querySelectorAll("header nav a span");
    var nav_link=document.querySelectorAll("header nav a");
    for (let i = 0; i < nav_link.length; i=i+1) {
        nav_link[i].addEventListener("mouseover",(e)=>{
            nav_underline[i].style.width="100%";
            e.target.style.fontWeight="bolder"
        }); 
        nav_link[i].addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
            e.target.style.fontWeight=""
        });
    }

    // message
    
    document.querySelector(".popup").onclick=()=>{
        document.querySelector(".popup").style.display="none";
        document.querySelector("form").style.display="block";
    }
    document.querySelector("#submit").onclick=(e)=>{
        e.preventDefault();
        document.querySelector(".popup").style.display="flex";
        document.querySelector("form").style.display="none";
     }
    
    // fade in
    var text=["BATMAN AU CINÉMA","NÉMÉSIS","MULTIMÉDIA"];
    var titres=document.querySelectorAll(".titre");   
    var description=document.querySelector(".description");
    var fleche=document.querySelector(".image-scroll-btn div  img");
    function fadeIn() {
        description.style.transform="translateX(0)";
        fleche.style.transform="translate(0)";
        for (let i = 0; i < imgZoom.length; i=i+1) {
            imgZoom[i].style.transform="scale(1)";
        }
        for (let i = 0; i < titres.length; i=i+1) {
            titres[i].style.transform="translate(0)";
            titres[i].style.opacity="1";
            titres[i].textContent=text[i];
        }
        blockInFade.style.transform="translateX(10px)";
    }
    window.onload=fadeIn;


    //scroll
    var scroll = document.querySelector(".scroll");
    window.addEventListener("scroll",()=>{
    const {scrollTop} = document.documentElement;
    if(scrollTop<=5800 && scrollTop>120)
    scroll.style.top=scrollTop+"px";
    console.log(scrollTop)
    });