let div = document.getElementById("smileyButtonsDiv");

for(let i = 0; i < 100; i++) {
  createSmileyButton()
};

function createSmileyButton()
{
  let button = document.createElement("a");
  button.innerHTML = ":(";
  button.className = "smileyButton";
  button.addEventListener("click", function (){
    button.innerHTML = ":)";
    button.style.background = "#FFFFFF";
    button.style.color = "#768D87";
  });
  div.appendChild(button);
}

