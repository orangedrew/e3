document.getElementById("knopHoger").addEventListener("click", hogerAangeklikt);
document.getElementById("knopLager").addEventListener("click", lagerAangeklikt);
document.getElementById("knopReset").addEventListener("click", reset);

let aantalCorrect = 0;
let laatsteGetal;
let willekeurigGetal;
let divContent = document.getElementById("hogerLagerContent");

start();

function start() {
	laatsteGetal = Math.floor(Math.random() * 13) + 1;

	let boodschap = document.createElement("p");
	boodschap.innerHTML = laatsteGetal;
	divContent.appendChild(boodschap);
}


function reset() {
	aantalCorrect = 0;
	while (divContent.firstChild) {
		divContent.removeChild(divContent.firstChild)
	};
	start();
}

function hogerAangeklikt() {
	kiesWillekeurigEnToonOpHetScherm();
	if (willekeurigGetal >= laatsteGetal) {
		spelerIsJuist();
	}
	else {
		spelerIsFout();
	}
}

function lagerAangeklikt() {
	kiesWillekeurigEnToonOpHetScherm();
	if (willekeurigGetal <= laatsteGetal) {
		spelerIsJuist();
	}
	else {
		spelerIsFout();
	}
}

function kiesWillekeurigEnToonOpHetScherm() {
	willekeurigGetal = Math.floor(Math.random() * 13) + 1;

	let boodschap = document.createElement("p");
	boodschap.innerHTML = willekeurigGetal;
	divContent.appendChild(boodschap);
}

function spelerIsJuist() {
	aantalCorrect = aantalCorrect + 1;
	laatsteGetal = willekeurigGetal;
	if (aantalCorrect === 7) {
		alert("Proficiat! Je hebt gewonnen!!!! Het laatste getal was: " + willekeurigGetal);
	}
}

function spelerIsFout(){
  alert("Oeps, je was fout! Het nieuwe getal was: " + willekeurigGetal);
}