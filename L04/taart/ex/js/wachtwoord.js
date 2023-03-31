document.getElementById("addWordToPassword").addEventListener("click", addWordToPassword);

let password = "";

function addWordToPassword(){
  let word = prompt("Welk woord wil je toevoegen aan je wachtwoord?");
  password+=word;
  if(password.length < 20){
    alert("Je wachtwoord is nog niet lang genoeg. Geef nog een woord in! ");
  }
  else{
    alert("Perfect! Je wachtwoord is nu lang genoeg om veilig te zijn! Je wachtwoord is: " + password);
  }
}