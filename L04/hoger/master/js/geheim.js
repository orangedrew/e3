document.getElementById("raadWachtwoord").addEventListener("click", raadWachtwoord);

let resterendAantalGokken = 5;
toonResterendAantalGokken();

function toonResterendAantalGokken(){
	let strong = document.getElementById("aantalResterend");
  strong.innerHTML = resterendAantalGokken;
}

function raadWachtwoord(){
  if (resterendAantalGokken > 0){
    let gok = prompt("Wat denk je dat het wachtwoord is?");

    resterendAantalGokken = resterendAantalGokken - 1;

    if (gok === "Gary2019Robot"){
      alert("Mijn geheim is dat ik een grote fan ben van gerechtigheid, maar ik hou mij zelf niet altijd aan alle regels. Soms rij ik bijvoorbeeld met mijn fiets op het voetpad ...");
    }
    else{
      if (resterendAantalGokken === 0){
        alert("Je was fout! Dat was je laatste kans, nu mag je niet meer gokken!!!");
      }
      else{
        alert("Oeps, dat was fout!");
        toonResterendAantalGokken();
      }
    }
  }
  else{
    alert("Ik had toch gezegd dat je niet meer mocht gokken ... ");
  }
}