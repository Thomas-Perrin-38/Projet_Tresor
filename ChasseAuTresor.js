
//Aidé par Lucas sur certain points du scripte

// Tableau2D renvoit un objet tableau en 2D
function Tableau2D(x, y) {
	var array2D = new Array(x);
	for (var i = 0; i < array2D.length; i++) {
		array2D[i] = new Array(y);
	}
	return array2D;
}

// choix() récupère l'ID de la case cliquée et traite le résultat
var message = "";
function choix(id) {
	caseTable = document.getElementById(id);
	if (id == idTresor) {
		caseTable.setAttribute('class', 'good');
		com("<br/>Vous avez de pêché le poisson après " + compteur  + " erreur(s).");
		for (y = 0; y< monTableau.length; y++){
			for (i = 0; i <monTableau.length; i++){
				let caseId = y + "-" + i;
				document.getElementById(caseId).setAttribute('onclick','');
			}
		}
	} else {
		com("<br/> Essaies encore ce n'est pas la bonne case !");
		caseTable.setAttribute('class', 'bad');
		caseTable.setAttribute('onclick','')
	}
	afficherCompteur();
}

let textePoisson =" <p>Vous vous apprêtez à pêcher un poisson ! </p> <img id='poisson' src='poisson.png'> <img id='poisson' src='poisson.png'><img id='poisson' src='poisson.png'><img id='poisson' src='poisson.png'><img id='poisson'src='poisson.png'><img id='poisson' src='poisson.png'><img id='poisson' src='poisson.png'>"

function com(commentaire){
	document.getElementById("emplacementCommentaires").innerHTML = textePoisson + commentaire;
}


let monTableau = new Tableau2D(8, 8);
let coordonneeX = Math.floor(Math.random() * 8) ;
let coordonneeY = Math.floor(Math.random() * 8) ;

monTableau[coordonneeX][coordonneeY] = "Tresor" ;

// AfficherCompteur() permet d'afficher la variable compteur à l'emplacement voulu.
// affichera plus tard des commentaires.
var compteur = 0;
function afficherCompteur() {
	compteur ++;
	document.getElementById("compte").innerHTML = compteur;

}

// onload vérifie que la page soit complètement chargée avant de lancer la fonction
window.onload = function() { initTab(); }

// -----------------------------------------------------------------------------

// initTab() affiche le tableau et choisit les coordonnées du trésor
var idTresor = String(coordonneeX) + "-" + String(coordonneeY);

function initTab() {
	var compteur = 0;
    let monTableau = Tableau2D(8, 8);
    monTableau[coordonneeX][coordonneeY] = "Tresor";

    let dessinTableau = "<table id='fondtable'>";
	for (var i = 0; i < monTableau.length ; i++) {
		dessinTableau = dessinTableau + "<tr>";
		for (var x = 0; x < monTableau.length  ; x++) {
			if (monTableau[i][x] != monTableau[coordonneeX][coordonneeY]){
				monTableau[i][x] = "";
			}else{
				monTableau[i][x] == monTableau[coordonneeX][coordonneeY]
				monTableau[i][x] = "";
			}
			dessinTableau = dessinTableau + "<td id=" + String(i) + "-" + String(x) +" onclick='choix(this.id)'>" + monTableau[i][x] + "</td>"
        }
        dessinTableau = dessinTableau + "</tr>";
	}
	dessinTableau = dessinTableau + "</table>";
	document.getElementById("emplacementTable").innerHTML = dessinTableau;
	document.getElementById("Commentaires").innerHTML = "";
	return monTableau;
}




/*
let nbCaseX = 10
let nbCaseY = 10
let nbCase = nbCaseX*nbCaseY

let tableEvent = []

//boucle de remplissage du tableau
for(let i=0; i<nbCase; i++){
    let temp = new Surprise ("text"+i,5,5,0,0,0)
    tableEvent.push(temp)
}

tableEvent.forEach(element => {

    console.log(element.description)
});*/
