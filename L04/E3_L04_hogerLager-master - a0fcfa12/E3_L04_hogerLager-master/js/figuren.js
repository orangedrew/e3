let divContent = document.getElementById("divContent");

let tekst = document.createElement("p");
tekst.innerHTML = "Kijk hoe mooi:";
divContent.appendChild(tekst);

for(let i = 0; i<9; i++){
  let tellen = document.createElement("p");
  if(i>2 && i<6){
    tellen.innerHTML = "&#9734";
  }
  else{
    tellen.innerHTML = "&#9733";
  }
  divContent.appendChild(tellen);
}
