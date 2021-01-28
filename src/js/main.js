body=document.querySelector("body");
html=document.querySelector("html");
header=document.querySelector("header");
btnMenu=document.querySelector(".btn-menu");

window.onload= function(){
  pagescroll();

}

//mobile menu
nav = document.querySelector(".nav");
document.querySelector(".btn-menu").addEventListener("click" , togglenav);
document.querySelector(".nav-menu").onclick = closenav;

document.querySelector(".nav-background").onclick = closenav;
function closenav(){
  nav.classList.remove("nav-open");
  btnMenu.style.marginRight="0";
  showscroll();
  
}
function togglenav() {
  nav.classList.toggle("nav-open");
if(nav.classList.contains("nav-open")){
  btnMenu.style.marginRight=window.innerWidth-html.offsetWidth +"px";
  hidescroll();
  
} else {
  showscroll();
  btnMenu.style.marginRight="0";
}
}
// mobile menu

// popup
popup = document.querySelector(".popup");
 let popupopenbtn= document.querySelectorAll(".popupopen");
 let popupclosebtn = document.querySelectorAll(".popupclose");

for (i=0; i<popupopenbtn.length ; i++){
  popupopenbtn[i].addEventListener("click" , openpopup)
}
for (i=0; i<popupclosebtn.length ; i++){
  popupclosebtn[i].addEventListener("click" , closepopup)
}


function openpopup() {
  popup.classList.add("popup-open");
if(popup.classList.contains("nav-open")){
  btnMenu.style.marginRight=window.innerWidth-html.offsetWidth +"px";
  hidescroll();
  
} else {
  showscroll();
  btnMenu.style.marginRight="0";
}
}



function closepopup() {
  popup.classList.remove("popup-open");
  showscroll();
  btnMenu.style.marginRight="0";
}





// popup


// noscroll
function hidescroll(){
  body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
  body.style.overflow="hidden";
}

function showscroll(){
  body.style.paddingRight=0;
  body.style.overflow="visible"
}

let scrolid = 0 ;
function togglescroll(){
  if (scrolid==0){
    body.style.paddingRight=window.innerWidth-html.offsetWidth +"px";
    body.style.overflow="hidden";
    scrolid=1;
  } else{
    body.style.paddingRight=0;
    body.style.overflow="visible"
    scrolid=0;
  }
}

// no scroll






 //sticky header


function pagescroll(){
  header.classList.add("fixed-header"); 
  hplace=document.querySelector(".header-place"); 
  let headerheight=header.offsetHeight+"px"; 
    hplace.style.height=headerheight; 
  window.addEventListener('resize', function(event){
    if(headerheight!==header.offsetHeight+"px"){

      headerheight=header.offsetHeight+"px";
      hplace.style.height=headerheight;
    }
  });

  let pscroll = 0;
  window.addEventListener('scroll', function() {
   
   
      if (pscroll<pageYOffset&pageYOffset>header.offsetHeight){
               header.style.transform="translateY(-100%)";   
              
       }else {
    
           header.style.transform="none"; 
         
       }  
   pscroll=pageYOffset;
 });
}

 //sticky header






//form





let form = document.querySelectorAll('.popup');


function ajaxform(evt) {
  evt.preventDefault();
  let formstatus = this.querySelector('.progress');
  formstatus.innerHTML = '<class="load-form">Connecting ...';
  let info = "";
  info+= " \n ";
  info+="Message :" + this.querySelector('.message').value;
  info+= " \n ";
if (this.querySelector('#no').checked){
  info+= "care clinic: " + " No ";
}
if (this.querySelector('#yes').checked){
  info+= "care clinic: " + " Yes ";
}
info+= " \n ";
 

  let formData = {
 
    desc: this.querySelector('input[name="email"]').value,
    name: this.querySelector('input[name="name"]').value,

    phone: this.querySelector('input[name="role"]').value + info

  };
  console.log(formData);
  let request = new XMLHttpRequest();

  request.addEventListener('load', function () {

    formstatus.innerHTML = 'complete!';

  });

  request.open('POST', './mail.php', true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&phone=' + encodeURIComponent(formData.phone) + '&desc=' + encodeURIComponent(formData.desc));


};



for (i = 0; i < form.length; i++) {
  form[i].addEventListener('submit', ajaxform);
}

// form



