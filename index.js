
// Detecting button pressed
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
// Detecting keyboard pressed

document.addEventListener("keypress", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {

//  First Row

        case "q":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

         case "w":
         var kick = new Audio("sounds/kick-bass.mp3");
         kick.play();
         break;

         case "e":
         var snare = new Audio("sounds/snare.mp3");
         snare.play();
         break;

         case "r":
         var tom1 = new Audio("sounds/tom1.mp3");
         tom1.play();
         break;

          case "t":
          var tom2 = new Audio("sounds/tom2.mp3");
          tom2.play();
          break;

          case "y":
          var tom3 = new Audio("sounds/tom3.mp3");
          tom3.play();
          break;

          case "u":
          var tom4 = new Audio("sounds/tom4.mp3");
          tom4.play();
          break;

          case "i":
          var boom = new Audio("sounds/boom.wav");
          boom.play();
          break;

          case "o":
          var clap = new Audio("sounds/clap.wav");
          clap.play();
          break;

          case "p":
          var hihat = new Audio("sounds/hihat.wav");
          hihat.play();
          break;

// second row

          case "a":
          var kick = new Audio("sounds/second/kick.wav");
          kick.play();
          break;

          case "s":
          var openhat = new Audio("sounds/second/openhat.wav");
          openhat.play();
          break;


          case "d":
          var ride = new Audio("sounds/second/ride.wav");
          ride.play();
          break;

          case "f":
          var snare = new Audio("sounds/second/snare.wav");
          snare.play();
          break;

          case "g":
          var tom = new Audio("sounds/second/tom.wav");
          tom.play();
          break;

          case "h":
          var bubbles = new Audio("sounds/second/bubbles.mp3");
          bubbles.play();
          break;


          case "j":
          var clay = new Audio("sounds/second/clay.mp3");
          clay.play();
          break;

          case "k":
          var confetti = new Audio("sounds/second/confetti.mp3");
          confetti.play();
          break;


          case "l":
          var glimmer = new Audio("sounds/second/glimmer.mp3");
          glimmer.play();
          break;

//   Third Row

          case "z":
          var moon = new Audio("sounds/third/moon.mp3");
          moon.play();
          break;

          case "x":
          var ufo = new Audio("sounds/third/ufo.mp3");
          ufo.play();
          break;

          case "c":
          var rimshot = new Audio("sounds/third/rimshot.wav");
          rimshot.play();
          break;

          case "v":
          var drum = new Audio("sounds/third/drum.wav");
          drum.play();
          break;


          case "b":
          var tink = new Audio("sounds/third/tink.wav");
          tink.play();
          break;

          case "n":
          var teledrum = new Audio("sounds/third/teledrum.wav");
          teledrum.play();
          break;

          case "m":
          var drumroll = new Audio("sounds/third/drumroll.wav");
          drumroll.play();
          break;

    default: console.log(key);

  }

}


function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
  activeButton.classList.remove("pressed");
}, 100);
}





// // alert("I got clicked");

// this.style.color = "white";
