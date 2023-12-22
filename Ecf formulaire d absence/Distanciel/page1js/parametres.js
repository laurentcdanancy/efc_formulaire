/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var data = window.location.search;
var params = new URLSearchParams(data);

// Récupérer les éléments input par leur ID
var nomInput = document.getElementById("nom-textbox");
var prenomInput = document.getElementById("prenom-textbox");
var formationInput = document.getElementById("formation");
var datejourInput = document.getElementById("datejour");
var datejourdebutInput = document.getElementById("datejourdebut");
var datejourfinInput = document.getElementById("datejourfin");
var debutheureInput = document.getElementById("debut-heure");
var finheureInput = document.getElementById("fin-heure");

// Récupérer les valeurs des paramètres et les afficher dans les éléments correspondants
var nom = params.get("nom");
var prenom = params.get("prenom");
var formation = params.get("formation");
var datejour = params.get("datejour");
var datejourdebut = params.get("datejourdebut");
var datejourfin = params.get("datejourfin");
var heuredebut = params.get("debut-heure");
var heurefin = params.get("fin-heure");
var choix = params.get("choice");

// Mettre à jour le contenu des éléments input
nomInput.value = nom;
prenomInput.value = prenom;
formationInput.value = formation;
datejourInput.value = datejour;
datejourdebutInput.value = datejourdebut;
datejourfinInput.value = datejourfin;
debutheureInput.value = heuredebut;
finheureInput.value = heurefin;

// Récupérer les éléments des boutons radio par leur ID
var choixOui = document.getElementById("oui");
var choixNon = document.getElementById("non");

// Mettre à jour l'état des boutons radio
if (choix === "fieldset2") {
    choixNon.checked = true;
} else {
    choixOui.checked = true;
}


