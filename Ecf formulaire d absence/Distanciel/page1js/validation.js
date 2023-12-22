/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function myFunction() {
    // Validation du champ Nom (alphabétique)
    var nom = document.getElementById("nom-textbox").value.trim();
    if (!/^[a-zA-ZÀ-ÿ-]+$/.test(nom)) {
        alert("Veuillez entrer un nom valide (alphabétique).");
        return;
    }

    // Validation du champ Prénom (alphabétique)
    var prenom = document.getElementById("prenom-textbox").value.trim();
    if (!/^[a-zA-ZÀ-ÿ-]+$/.test(prenom)) {
        alert("Veuillez entrer un prénom valide (alphabétique).");
        return;
    }

    // Validation du champ Formation (vérification s'il est vide)
    var formation = document.getElementById("formation").value;
    if (formation === "") {
        alert("Veuillez sélectionner une formation.");
        return;
    }

    // Validation des champs de la première option (fieldset1)
    if (document.getElementById("oui").checked) {
        // Validation du champ Date (format date)
        var datejour = document.getElementById("datejour").value;
        if (!/^\d{4}-\d{2}-\d{2}$/.test(datejour)) {
            alert("Veuillez entrer une date valide.");
            return;
        }

        // Validation des champs Heure (format heure)
        var debutHeure = document.getElementById("debut-heure").value;
        var finHeure = document.getElementById("fin-heure").value;
        if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(debutHeure) || !/^([01]\d|2[0-3]):([0-5]\d)$/.test(finHeure)) {
            alert("Veuillez entrer des heures valides (format 24 heures).");
            return;
        }
    }

    // Validation des champs de la deuxième option (fieldset2)
    if (document.getElementById("non").checked) {
        // Validation des champs Date (format date)
        var datejourdebut = document.getElementById("datejourdebut").value;
        var datejourfin = document.getElementById("datejourfin").value;
        if (!/^\d{4}-\d{2}-\d{2}$/.test(datejourdebut) || !/^\d{4}-\d{2}-\d{2}$/.test(datejourfin)) {
            alert("Veuillez entrer des dates valides.");
            return;
        }
    }

    // Si toutes les validations sont passées, soumettez le formulaire
    document.getElementById("myForm").submit();
}

