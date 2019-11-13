
function burger(){
  var nav = document.getElementById('navlist');
  if(nav.style.width == '0px'){
    nav.style.width = '40vh';
    nav.style.opacity = '1';
    
  }else{
    nav.style.width = '0px';
    nav.style.opacity = '0';
  }
    
}

function dropdown(){
  var drop = document.getElementById('dropdownn');
  if(drop.style.height == '10vh'){
    drop.style.overflow = 'hidden'
    drop.style.height = '0vh';
    drop.style.padding = '0%';
    
  }else{
    drop.style.height = '10vh';
    drop.style.width = '20vw';
    drop.style.opacity = '100%';
    drop.style.padding = '2%';
  }
    
}


function fadein(){
  var namebox = document.getElementById('square');
  var main = document.getElementById('main')
  namebox.style.opacity = '1';
  main.style.padding = '15%';
}



function notescroll(){
  var scroll = window.scrollY;
  document.getElementById('scroll').innerHTML = scroll;
}

window.addEventListener('scroll', () =>{
  var scroll = window.scrollY;
  var third = document.getElementById('third');
  var second = document.getElementById('second');
  if(scroll > 15){
    second.style.opacity = '1';
    main.style.opacity = "0";
    main.style.height = "0";
    main.style.padding = "0";
  }
  else if(scroll > -15){
    second.style.opacity = '0';
    main.style.opacity = "1";
    main.style.height = "100vh";
    main.style.padding = "10%";

  }
});

setInterval(changeword ,2000);
var number = 0;

function changeword() {
    var words = ["EN JETTE", "N'EST PAS OUF", "PASSE TRANQUILLE", "SURPREND", "N'EST PAS TRES RESPONSIVE..."]
    document.getElementById("alea").innerHTML = words[number];
    number++;
    if (number == 5){
        number = 0;
    }
}

TimingText();


