/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    console.log("Window loaded!");
    var encryptItBtn = document.getElementById("encrypt-it");
    encryptItBtn.addEventListener("click", encrypt);
    document.getElementById("result").value = result;



    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  function encrypt() {
    console.log("Button clicked!");
    var input = document.getElementById("input-text");
    console.log(input);
    //input = input.toLowerCase();
    var result = "";
    for (var i = 0; i < input.length; i++) {
      if (input[i] < 'a' || input[i] > 'z') { //for spaces
        result += input[i];
      }

      else if (input[i] == 'z') { //'z' is shifted all the way back to 'a'
        result += 'a';
      }

      else {
        letter = input.charCodeAt(i); //gets the unicode val of the letter
        //remember that letter is a unicode valueS
        resultLetter = String.fromCharCode(letter + 1); //to shift by one, we add one
        //above we converted unicode back to a letter
        result += resultLetter;
        console.log("cool!");
      }
    }
    return result;
  }


  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
