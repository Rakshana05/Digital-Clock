var h= document.querySelector('.h');
var m= document.querySelector('.min');
var s= document.querySelector('.sec');
var ampm = document.querySelector('.ampm');

function updateTime(){
  //current timings
  var hour = new Date().getHours();
  var min=new Date().getMinutes();
  var sec=new Date().getSeconds();
  
  m.innerText = min;
  s.innerText = sec;
  
  if(hour>12){
    h.innerText = hour - 12;
    ampm.innerText = 'PM';
  }
  
  setTimeout(updateTime,1000);
}

updateTime()
