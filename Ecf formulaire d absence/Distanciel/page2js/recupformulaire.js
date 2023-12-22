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
                toggleFieldset('fieldset2'); // Masquer le fieldset1
            } else {
                choixOui.checked = true;
                toggleFieldset('fieldset1'); // Masquer le fieldset2
            }

            // Fonction pour afficher ou masquer le fieldset en fonction du choix du bouton radio
            function toggleFieldset(fieldsetId) {
                var fieldset1 = document.getElementById('fieldset1');
                var fieldset2 = document.getElementById('fieldset2');

                if (fieldsetId === 'fieldset1') {
                    fieldset1.style.display = 'block';
                    fieldset2.style.display = 'none';
                } else {
                    fieldset1.style.display = 'none';
                    fieldset2.style.display = 'block';
                }
            }
       
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
     