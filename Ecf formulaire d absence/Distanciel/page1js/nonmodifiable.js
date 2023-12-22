/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
    // Récupérer les éléments input par leur ID
    var nomInput = document.getElementById("nom-textbox");
    var prenomInput = document.getElementById("prenom-textbox");
    var formationInput = document.getElementById("formation");
    var datejourInput = document.getElementById("datejour");
    var datejourdebutInput = document.getElementById("datejourdebut");
    var datejourfinInput = document.getElementById("datejourfin");
    var debutheureInput = document.getElementById("debut-heure");
    var finheureInput = document.getElementById("fin-heure");

    // Récupérer le paramètre "submitted" depuis l'URL
    var urlParams = new URLSearchParams(window.location.search);
    var submitted = urlParams.get('submitted');

    // Si le formulaire a été soumis, rendre les champs en lecture seule
    if (submitted === 'true') {
        nomInput.readOnly = true;
        prenomInput.readOnly = true;
        formationInput.disabled = true;
        datejourInput.readOnly = true;
        datejourdebutInput.readOnly = true;
        datejourfinInput.readOnly = true;
        debutheureInput.readOnly = true;
        finheureInput.readOnly = true;
        // Rendez en lecture seule d'autres champs selon vos besoins
    }
});

