function init(){
// add your javascript code below

// Create a variable to store button object content
let alertMeButtonObj = document.getElementById("entrybutton"); 

// Create a function for the addEventListener (myFunction) {
// Create a variable to store what the user types into the textbox
// Display in the alert box as your new message. Watch video.
// change the value of the h2 below the button to have the text contents of
// the textbox
// }
function buttonLogic(){
  let entryObj = document.getElementById("entryinput"); // storing entryinput button from html and storing it as an object in entryObj variable 
  let userMessage = entryObj.value; // grabing the value of entryObj (which should be the text the user typed out) and storing it in the variable user message
  alert("Jesus Martinez: " + userMessage);

  let textOutObj = document.getElementById("textoutput"); // grab the output text object from the html file and store it in the variable textoutObj
  textOutObj.innerHTML = userMessage; // set the userMessage as the innertext of textOutObj
}

// object.addEventListener("click", myFunction);
alertMeButtonObj.addEventListener("click", buttonLogic);

}
window.addEventListener('load', init);