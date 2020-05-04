(function(){
  "use strict";
  window.addEventListener("load", init);

  function init(){
    console.log("test");
    createSignIn();
  }

  function createSignIn(){
    let appSpace = document.getElementById("application");
    let signInSpace = document.createElement("div");
    signInSpace.setAttribute("id", "signInSpace");
    let usernameTextField = document.createElement("input");
    usernameTextField.setAttribute("id", "usernameTextField");
    let submitButton = document.createElement("button");
    submitButton.innerHTML = "Sign in";
    usernameTextField.type = "text";
    signInSpace.appendChild(usernameTextField);
    signInSpace.appendChild(submitButton);
    appSpace.appendChild(signInSpace);

    submitButton.addEventListener("click", signIn);
  }

  function signIn(){
    let username = document.getElementById("usernameTextField").value;
    console.log(username);
    if(username == "James"){
      runApplication();
    }
  }

  function runApplication(){
    document.getElementById("signInSpace").remove();
    let appSpace = document.getElementById("application");
    appSpace.style.display = "flex";
    appSpace.style.flexDirection = "row";


    let buttonsPlace = document.createElement("div");
    buttonsPlace.setAttribute("id", "buttonsPlace");
    buttonsPlace.style.display = "flex";
    buttonsPlace.style.flexDirection = "column";
    buttonsPlace.innerHTML = "<h3>Add Row</h3>";
    buttonsPlace.classList.add("place");

    let titlesPlace = document.createElement("div");
    titlesPlace.setAttribute("id", "titlesPlace");
    titlesPlace.style.display = "flex";
    titlesPlace.style.flexDirection = "column";
    titlesPlace.innerHTML = "<h3>Title</h3>";
    titlesPlace.classList.add("place");

    let distancesPlace = document.createElement("div");
    distancesPlace.setAttribute("id", "distancesPlace");
    distancesPlace.style.display = "flex";
    distancesPlace.style.flexDirection = "column";
    distancesPlace.innerHTML = "<h3>Distance (miles)</h3>";
    distancesPlace.classList.add("place");

    let minutesPlace = document.createElement("div");
    minutesPlace.setAttribute("id", "minutesPlace");
    minutesPlace.style.display = "flex";
    minutesPlace.style.flexDirection = "column";
    minutesPlace.innerHTML = ("<h3>Minutes</h3>");
    minutesPlace.classList.add("place");

    let secondsPlace = document.createElement("div");
    secondsPlace.setAttribute("id", "secondsPlace");
    secondsPlace.style.display = "flex";
    secondsPlace.style.flexDirection = "column";
    secondsPlace.innerHTML = ("<h3>Seconds</h3>");
    secondsPlace.classList.add("place");

    let speedPlace = document.createElement("div");
    speedPlace.setAttribute("id", "speedPlace");
    speedPlace.style.display = "flex";
    speedPlace.style.flexDirection = "column";


    appSpace.appendChild(titlesPlace);
    appSpace.appendChild(distancesPlace);
    appSpace.appendChild(minutesPlace);
    appSpace.appendChild(secondsPlace);
    appSpace.appendChild(buttonsPlace);
    appSpace.appendChild(speedPlace);
    addRun();
  }

  function addRun(){
    console.log("addRun is running");
    let appPlace = document.getElementById("application");
    let buttonsPlace = document.getElementById("buttonsPlace");
    let titlesPlace = document.getElementById("titlesPlace");
    let distancesPlace = document.getElementById("distancesPlace");
    let minutesPlace = document.getElementById("minutesPlace");
    let secondsPlace = document.getElementById("secondsPlace");
    let newButton = document.createElement("button");

    newButton.style.backgroundColor = "lightgreen";
    newButton.innerHTML = "Add";

    let newTitle = document.createElement("input");
    let newDistance = document.createElement("input");
    let newMinutes = document.createElement("input");
    let newSeconds = document.createElement("input");
    //newTitle.setAttribute("id", "newTitle");

    newTitle.setAttribute("id", "userTitle");
    newDistance.setAttribute("id", "userDistance");
    newMinutes.setAttribute("id", "userMinutes");
    newSeconds.setAttribute("id", "userSeconds");


    newButton.addEventListener("click", store);
    newButton.addEventListener("click", addToPage);
    newButton.style.height = "19px";
    //let newTitle = document.createElement("input");
    titlesPlace.appendChild(newTitle);
    distancesPlace.appendChild(newDistance);
    minutesPlace.appendChild(newMinutes);
    secondsPlace.appendChild(newSeconds);
    buttonsPlace.appendChild(newButton);
  }

  function removeRun(){
    console.log("removeRun placeholder");
  }

  function store(){
    console.log("store is running");
    // var values = {
    //   "Title": this.
    // }
  }

  function addToPage(){
    let title = document.getElementById("userTitle");
    let distance = document.getElementById("userDistance");
    let minutes = document.getElementById("userMinutes");
    let seconds = document.getElementById("userSeconds");
  }

  // function takeAverage(){
  //   //TODO: implement this with the value of each element
  //   //of the class distance or time
  //   let total = 0;
  //   let count = 0;
  //   for(let i = 0; i < arr.length; i++){
  //     count++;
  //   }
  //   return(total/count);
  // }
})();
