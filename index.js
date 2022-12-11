var h= document.querySelector('.h');
var m= document.querySelector('.min');
var s= document.querySelector('.sec');
var ampm = document.querySelector('.ampm');

function updateTime(){
  //current timings
  var hour = new Date().getHours();
  var min=new Date().getMinutes();
  var sec=new Date().getSeconds();
  
  h.innerText = hour;
  m.innerText = min;
  s.innerText = sec;
  
  if(hour>12){
    h.innerText = hour - 12;
    hour = hour-12;
    ampm.innerText = 'PM';
  }
  
  if(hour<10){ h.innerText = "0"+ hour.toString();}
  if(min<10){ m.innerText = "0"+min.toString();}
  if(sec<10){ s.innerText = "0"+sec.toString();}
  
  setTimeout(updateTime,1000);
}

updateTime()
