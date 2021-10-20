
var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mySong.paused){
      mySong.play();
      icon.src = "/media/pausse.png";
    }else{
      mySong.pause();
      icon.src = "/images/play.png";
    }
}

let button = document.querySelector("body a");
button.addEventListener("click",()=>{
    // alert("Success");
    const span = document.querySelector("a span");
    button.style.paddingRight = "10px;";
    span.style.visibility = "visible";
    setTimeout(()=>{
      span.style.visibility = "hidden;";
      button.style.transition = ".3s ease-in-out";
      button.style.paddingRight = "0px";
    },3000);
})





setInterval(displayClock, 500);
function displayClock(){
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric'});
}

window.onload = function () {
  /*The below code is used to make greeting according to local time. It will check current time in system and greet according to time for 5s and hides after 5s*/
  var greeting;
    var time = new Date().getHours();
    if (time < 12) {
      greeting = "Good morning";
    } else if (time < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    document.getElementById("greet").innerHTML = greeting;
      setTimeout(function(){
          document.getElementById("greet").style.visibility = "hidden";
      }, 5000);
  
  function changeImage() {   
      var BackgroundImg=["./images/ev1.jpg", "./images/bkmt.jpg", "./images/bs1.jpg", "./images/bs2.jpg", "./images/bksl2.jpg","./images/mt2.jpg"];
      var i = Math.floor((Math.random() * 6));
      document.getElementById("home").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
  }
  window.setInterval(changeImage, 5000);
}


