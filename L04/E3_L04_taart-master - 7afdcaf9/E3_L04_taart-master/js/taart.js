document.getElementById("start").addEventListener("click", start);
document.getElementById("beurtSpeler1").addEventListener("click", beurtSpeler);
document.getElementById("beurtSpeler2").addEventListener("click", beurtSpeler);
document.getElementById("trigger").addEventListener("click", triggerGedrukt);

let aantalTotTaart=0;
let aantalTotEindeBeurt=0;

function start(){
  aantalTotTaart = Math.floor(Math.random()*20)+1;
  let starter = Math.floor(Math.random()*2)+1;
  alert("Speler " + starter + " mag beginnen! Zijn jullie er klaar voor? Start!!!");
}

function beurtSpeler(){
  if(aantalTotTaart === 0){
    alert("De taart is al gegooid ... Start een nieuw spel! ");
  }
  else{
    aantalTotEindeBeurt = Math.floor(Math.random()*6);
    if(aantalTotEindeBeurt !== 0){
      alert("Je beurt is begonnen! Je moet " + aantalTotEindeBeurt + " keer op de trigger duwen. Krijg jij de taart in je gezicht? Spannend ... ");
    }
    else{
      alert("Je hebt geluk! Je moet NIET op de trigger duwen! Next ...");
    }
  }
}

function triggerGedrukt(){
  if(aantalTotEindeBeurt === 0){
    alert("Er is niemand aan de beurt... Druk op de juiste speler knop!");
  }
  else if(aantalTotTaart === 0){
    alert("De taart is al gegooid ... Start een nieuw spel! ");
  }
  else{
    aantalTotEindeBeurt -=1;
    aantalTotTaart -= 1;
    if(aantalTotTaart === 0){
      alert("Incomming: TAAAAAAAAAAAAAAART");
    }
    else{
      alert("Sjanske! Geen taart in je gezicht deze keer. ");
    }
  }
}