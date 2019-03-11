// PENDU
                                   //dictionnaire
var listeMots = ["pingouin", "souris", "connard", "cheveux", "bouillabaisse", "valetudinaire", "circoncision", "ordinateur", "parapluie", "concombre", "croqueuse", "paprika", "pastis", "coulommiers", "pourparler", "tagliatelle", "beaujolais", "string", "alcoolique", "navrant", "bucolique", "rocambolesque", "vicieux", "pikachu", "parachute", "tyrannosaure", "poitrail", "pervenche", "blaireau"];
var mot = "";
var membre = 0;
var lettre = "";
var lettresUtilisees = "";                        // VARIABLES DE DEPART
var motAffiche = "";
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var gagne = "";
var motMystere = "";
var victoires = 0;                                //
var defaites = 0;                                 // Compteurs score et mots joués du dictionnaire
var motsDejaJoues = [];                           //


function afficher(){                                                            //pour rafraichir les valeurs dans le HTML
     document.getElementById('motAffiche').innerHTML=motAffiche;
     document.getElementById('lettresUtilisees').innerHTML=lettresUtilisees;
     document.getElementById('victoires').innerHTML=victoires;
     document.getElementById('defaites').innerHTML=defaites;
     dessinPendu();                                                             //pour actualiser la source de l'image de fond
}

function dessinPendu(){                                //pour faire apparaitre le pendu
     bgrdSrc = "img/background"+membre+".jpg"          //assigner une variable url d'image en fonction du nombre de membres
     document.getElementById('bgrd').src=bgrdSrc;      //changer l'url de l'image

}
function remplacer(){                                                           //pour réassigner mot et motAffiche pout toutes les occurences de la lettre
     while(mot.includes(lettre)==true){                                         //tant que la lettre se trouve dans mot

          i = mot.indexOf(lettre);                                                   //récuperer son index dans mot
          motAffiche = motAffiche.substr(0,i)+lettre+motAffiche.substr(i+1);         //mettre la lettre à la place du "_" dans motAffiche
          mot = mot.substr(0,i)+'0'+mot.substr(i+1);                                 //remplacer la lettre par un '0' dans mot
     }
}

function lettresRandom(){
     
     indexRandom1 = Math.floor(Math.random() * (mot.length-1));            // generer un premier index random de mot
     lettre = mot[indexRandom1];                                           // assigner une variable qui contient la lettre correspondante dans mot
     remplacer();                                                          //remplacer ses occurences dans mot par des zeros, et dans motAffiche par elle-même
     indexRandom2 = Math.floor(Math.random() * (mot.length-1));            // generer un second index random de mot
     while (  mot[indexRandom2] == '0') {                                  //tant qu'il retourne une valeur '0' (donc déja généré avant)
          indexRandom2 = Math.floor(Math.random() * (mot.length-1));       //generer l'index de nouveau
          }
     lettre = mot[indexRandom2];                                           //assigner à lettre la valeur retournée par cet index
     remplacer();                                                          //remplacer ses occurences dans mot par des zeros, et dans motAffiche par elle-même

}

function init(){
     mot = listeMots[Math.floor(Math.random() * Math.floor(listeMots.length))];           //Generer un index au hasard de listeMots et recuperer la valeur
     while(motsDejaJoues.includes(mot)==true){                                            //tant que l'on retrouve cette valeur dans motsDejaJoues, 
          mot = listeMots[Math.floor(Math.random() * Math.floor(listeMots.length))];      //generer un autre index
     }
     motMystere = mot;                        
     motAffiche = "";
     gagne = "";                             //Remettre les variables de jeu à zéro
     lettre = "";
     lettresUtilisees = "";
     membre = 0;

     for (i=0; i<mot.length; i++){           //pour chaque élément de mot

          motAffiche = motAffiche+"_";       //incrementer un "_" à motAffiche
          
     }

     lettresRandom();                        //Afficher deux lettres au hasard dans le mot (aide de départ)
     afficher();                             //Rafraichir
     
}

var input = document.getElementById("champ");              //pour submit avec la touche 'entrée'
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("jouer").click();
  }
});


function jouer(){        //onclick
     // Entrer lettre
     lettre = document.getElementById("champ").value;                           //recuperer la valeur entrée
     document.getElementById("champ").value = ""                                //effacer le champ input (c'est plus propre)
    
     if(alphabet.includes(lettre)){                                             // si la lettre est dans alphabet
         
          if(lettresUtilisees.includes(lettre) == false){                       // Si elle ne fait pas partie de lettresEntrees
              
               lettresUtilisees = lettresUtilisees += lettre                    //ajouter à lettresUtilisees
                  
                    if(mot.includes(lettre) == true){                           //si la lettre est dans  mot
                              
                              remplacer();                                      // la remplacer à toutes ses occurences
                                   
                              if(motAffiche.includes("_")==true){               // Si le motAffiché contient toujours des "_"
                                   afficher();                                  // Rafraichir l'affichage
                              
                              }else{                                            // Si motAffiché ne contient plus de "_"  : gagné
                                   victoires = victoires + 1;                   // incrémenter le compteur de victoires
                                   motsDejaJoues.push(motMystere);              // incrémenter la liste des mots déja joués
                                   afficher()                                   // Rafraichir

                                        if(listeMots != motsDejaJoues){         //Si les deux listes sont différentes, alors il y a toujours des mots à jouer

                                             if(confirm('Gagné, bien ouèj ! Une autre partie ?')){
                                                  
                                                  init();                       //réinitialiser
                                                  
                                             }                                  //Sinon, le joueur à fini le jeu (ou le dictionnaire)
                                        }else{alert("Tu as fini le jeu, il est grand temps de sortir prendre l'air.")}  
                                   }
                            
                    }else{                                                      // Si la lettre n'est pas dans le mot

                         membre = membre + 1;                                   // incrémenter les membres du pendu
                         afficher();                                            // Rafraichir
                         if(membre == 6){                                       // Si le pendu à six membres : Perdu

                              defaites = defaites+1;                            //incrémenter le compteur de défaites
                              motsDejaJoues.push(motMystere);                   //incrémenter la variable de mots joués
                              afficher();                                       //Rafraichir
                              if(listeMots != motsDejaJoues){                   //Si tous les mots n'ont pas été joués, alors proposer de rejouer
                                   
                                   if(confirm("Perdu ! Tu es pendu ! Le mot était "+motMystere+". Rejouer ?")){
                                        
                                        init();                                 // Si le joueur veut rejouer, réinitialiser
                                        
                                   }else{
                                        alert("Merci d'avoir joué et perdu lamentablement.")
                                   }
                                   
                              }else{alert("Perdu ! Le mot était "+motMystere+".Tu as fini le jeu, il est grand temps de sortir prendre l'air.")}

                         }else{
                              alert("HE NON !");                                // Si le compteur de membres < 6
                              afficher();                                       // Rafraichir
                         }
                    }
          }else{
                    alert("Deja utilisée !")                                    //si la lettre faite partie des lettresUtilisees
               }
     }else{
          alert('Entrez une LETTRE');                                           //si la lettre ne fait pas partie de l'alphabet
     }
}                                                                               //Et voila