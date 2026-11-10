function init(){
    
  const entryInput = document.getElementById("entryinput");
  const entryButton = document.getElementById("entrybutton");
  const textOutput = document.getElementById("textoutput");

  entryButton.addEventListener("click", function() {
    const message = entryInput.value;

    alert("YourName: " + message);

    textOutput.textContent = message;
  });
}

window.addEventListener('load', init);
