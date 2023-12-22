/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function toggleFieldset(fieldsetId) {
    // Masquer tous les fieldsets
    document.getElementById('fieldset1').style.display = 'none';
    document.getElementById('fieldset2').style.display = 'none';

    // Afficher le fieldset choisi
    document.getElementById(fieldsetId).style.display = 'block';
}

// Appeler la fonction pour afficher le fieldset correspondant au chargement de la page
toggleFieldset('fieldset1');