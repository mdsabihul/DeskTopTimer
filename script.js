

let visitor_name=prompt("hello, Who is Here ?")
document.getElementById('visitor_name').innerHTML=visitor_name;
console.log(visitor_name+"gfdg");

let quoteOftheDay=document.getElementById("quoteOftheDay");
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let lenghtOfArray=data.length;
    let randomText=Math.floor(Math.random()*100);
    quoteOftheDay.innerHTML=data[randomText]['text']+' &nbsp;&nbsp;&nbsp;&nbsp;[Author - '+ data[randomText]['author']+']';
  });

  let greetSpan=document.getElementById('greetSpan');
  let greetSpanvalue;
  let checkBefore;
  setInterval(()=>{

    // let beforeValue=document.getElementById('greetSpan').innerHTML;
    greetSpanvalue=new Date().getHours();
    if(greetSpanvalue!=checkBefore)
    {
        if(greetSpanvalue>=17 && greetSpanvalue<24)
        {
             greetSpan.innerHTML='Good Evening';
             checkBefore=greetSpanvalue;
        }
        else if(greetSpanvalue<17 && greetSpanvalue>=12)
        {
            greetSpan.innerHTML='Good Afternoon';
            checkBefore=greetSpanvalue;
        }
        else if(greetSpanvalue<12 && greetSpanvalue>=1)
        {
            greetSpan.innerHTML='Good Morning';
            checkBefore=greetSpanvalue;
        }
    }
    
  },1000)


  let greetPng=document.getElementById('greetPng');
  if(greetSpanvalue>17)
  {
    greetPng.src="sun.png";
  }
  else
  {
    greetPng.src="moon.png";
  }
 

let timeDiv=document.querySelectorAll('.timeDiv');
let hour=timeDiv[0];
let min=timeDiv[1];
let sec=timeDiv[2];
let meridiem=timeDiv[3];

let dateTime;
let hourShow;
let minShow;
let secShow;
let meridiemShow;

setInterval(() => {
    dateTime=new Date();
    hourShow=dateTime.getHours();
    minShow=dateTime.getMinutes();
    secShow=dateTime.getSeconds();
    if(hourShow>12)
    {
        meridiemShow='PM';
    }
    else
    {
        meridiemShow='AM';
    }
    
    if(minShow<10)
    {
        minShow='0'+minShow;
    }
    
    if(secShow<10)
    {
        secShow='0'+secShow;
    }
    // let hourShow=dateTime.getHours();
    document.body.querySelector("#hour").innerHTML=hourShow;
    document.body.querySelector("#min").innerHTML=minShow;
    document.body.querySelector("#sec").innerHTML=secShow;
    document.body.querySelector("#meridiem").innerHTML=meridiemShow;
    // console.log(hourshow);    
}, 1000);
