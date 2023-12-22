/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Fonction pour récupérer les données depuis le fichier JSON
async function fetchData() {
    try {
        const response = await fetch('docjson/motif.json'); // Assurez-vous que le chemin d'accès au fichier est correct
        const data = await response.json();

        // Crée une liste pour contenir les formulaires
        var listeFormulaires = document.getElementById('liste-formulaires');

        // Boucle à travers les objets "members" et crée le formulaire
        data.members.forEach(member => {
            createFormElement(member.id, member.name, member.title, member.options, listeFormulaires);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des données JSON:', error);
    }
}

// Fonction pour créer un élément de formulaire à partir des données du membre
function createFormElement(id, name, title, options, parentElement) {
    var formulaire = document.createElement("form");
    formulaire.appendChild(document.createElement("hr"));
    var titre1 = document.createElement("h2");
    titre1.innerHTML = `${name} - ${title}`;
    formulaire.appendChild(titre1);

    options.forEach(option => {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "checkbox1";
        formulaire.appendChild(checkbox);

        var checkboxLabel = document.createElement("label");
        checkboxLabel.innerHTML = option.op_label;
        checkboxLabel.insertBefore(checkbox, checkboxLabel.firstChild);
        formulaire.appendChild(checkboxLabel);

        formulaire.appendChild(document.createElement("br"));
    });

    // Ajoutez le formulaire à la liste
    parentElement.appendChild(formulaire);
}

// Appel de la fonction pour récupérer les données et créer le formulaire
fetchData();
