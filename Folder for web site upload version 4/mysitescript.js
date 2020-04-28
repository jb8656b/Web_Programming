(function(){
  "use strict";
  window.addEventListener("load", init);


  function init() {
    console.log("If you can see this then JS is running");
    ratingInit();
    //let stars = document.getElementsByClassName("stars");
    //starContainer1 = document.getElementById("starContainer1");
    //stars.addEventListener("click", rating);
    //stars.addEventListener("click", rating);
    let nightModeButton = document.getElementById("nightModeButton");
    nightModeButton.addEventListener("click", nightMode);
    saySomethingPart1();
  }


  function ratingInit(){
    console.log("RatingInit is running");
    let starContainers = document.getElementsByClassName("starContainer");
    console.log(starContainers);
    for (let i = 0; i < starContainers.length; i++){
      let newForm = document.createElement("form");
      newForm.style.display = "inline";
      for (let j = 1; j < 6; j++){
        let newRadioButton = document.createElement("input");
        newRadioButton.setAttribute("type", "radio");
        newRadioButton.setAttribute("name", "optradio");
        newRadioButton.setAttribute("id", "rating" + j);
        newForm.appendChild(newRadioButton);
      }
      starContainers[i].appendChild(newForm);
      let newSubmitButton = document.createElement("button");
      newSubmitButton.setAttribute("type", "button");
      newSubmitButton.setAttribute("id", "submitButton" + (i+1));
      newSubmitButton.innerHTML = "Rate!";
      newSubmitButton.addEventListener("click", function(){
        console.log(this);
      });
      newForm.appendChild(newSubmitButton);
    }
  }

  function nightMode(){
    let body = document.getElementById("body");
    let sidebar = document.getElementById("sidebar");
    let container = document.getElementById("container");
    container.classList.add("nightModeLight");
    body.classList.add("nightModeDark");//This is the only one working.
    sidebar.classList.add("nightModeLight")//This should make the boxes gray, but it doesn't work.
    let moon = document.createElement('img');
    moon.src = "moon.png";
    moon.width = "25";
    let nightModeButton = document.getElementById("nightModeButton");
    nightModeButton.appendChild(moon);

    console.log("Night Mode activated");//Will continue to investigate
  }

  function saySomethingPart1(){
    let i = 0;
    let timerID = setInterval(function(){
      if (i === 0) {
        clearInterval(timerID);
        console.log("Timer has reached 0");
        saySomethingPart2();
        let thumbsUp = document.createElement('img');
        thumbsUp.src = "thumbsUp.png";
        document.getElementById('h1').appendChild(thumbsUp);
        thumbsUp.width = "25";
      }
      else{
        console.log(i);
        i--;

      }
    }, 5000);
  }

  function saySomethingPart2(){
    let h1 = document.getElementById("h1");
    h1.innerHTML = "Click something!";
  }
})();
