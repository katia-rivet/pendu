// PENDU

var listeMots = ["pingouin", "chat", "souris", "connard", "cheveux", "bouillabaisse", "valetudinaire", "circoncision", "ordinateur", "parapluie", "concombre", "croqueuse", "paprika", "pastis", "coulommiers", "pourparler", "tagliatelle", "beaujolais", "string", "alcoolique", "navrant", "bucolique", "rocambolesque", "vicieux", "pikachu", "parachute", "tyrannosaure", "poitrail", "pervenche", "blaireau"];

var mot = "";

var membre = 0;

var lettre = "";

var lettresUtilisees = "";

var status = "";

var motAffiche = ""; // Affichage underscore

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var gagne = "";


//function afficher : afficher les variables dans la page
     //afficher motAffiche ; lettresUtilisees ; fonction dessinPendu

     function afficher(){
          document.getElementById('motMystere').innerHTML=mot-Affiche;
          document.getElementById('listeLettres').innerHTML=lettresutilisees;
          dessinPendu();
     }


//function dessinPendu : 


     // 1. if(membre = 0)
               //css : blur all

          // Else if (membre = 1)
               // css unblur image 1
               // css blur image 2 3 4 5 6

          // else if (membre = 2)
               //css unblur image 1, 2
               //css blur image 3 4 5 6

          //----- ainsi de suite


     //2.  les images sont CSS Blurred de base
               //for (i=0;i=membres; i++ )
                    // css unblur image number i

     //3. les images sont nettes de base
               //for (i=membres; i=6; i++)
                    //css blur image number i





//generer un mot random de la liste = mot

function init(){
     mot = listeMots[Math.floor(Math.random() * Math.floor( mot.length))];
     motAffiche = ""
     gagne = ""
     lettre = "";
     lettresUtilisees = "";
     membre = 0;

     //creer variable motAffiche par for(incrementation)
     for (i=0; i<mot.length; i++){

          motAffiche = motAffiche+"_";
          gagne = gagne + "0"

     }
     
      console.log(gagne)
      console.log(motAffiche)
     


     
}

function dessinPendu(){
     bgrd-src = "../img/background"+membre+".jpg"

     document.getElementById('bgrd').src=bgrd-src;

}




function jouer(){
     // Entrer lettre
     lettre = document.getElementById("lettre").value;
     // console.log(champ);

     // si la lettre est dans alphabet
     if(alphabet.includes(lettre)){

          // Si elle ne fait pas partie de lettresEntrees
          if(lettresUtilisees.includes(lettre) == false){
               //ajouter à lettresUtilisees
               lettresUtilisees = lettresUtilisees += lettre


                    //si la lettre est dans  mot
                    if(mot.includes(lettre) == true){


                         


                         
                         //while (lettre est dans mot)
                         
                         
                         // index = index de lettre dans mot
                         
                         
                         // motAffiche[index].replace par lettre
                    }else{

                         membre = membre + 1;
                         afficher();
                         if(membre == 6){

                              if(confirm("Perdu ! Tu es pendu ! Rejouer ?")){

                                   init();
                                   afficher();

                              }else{
                                   alert("Merci d'avoir joué et perdu lamentablement.")
                              }
                         }else{
                              alert("HE NON !");
                              afficher();

                         }

                    }

          }else{
                    alert("Deja utilisée !")
               }

          }

     }else{
          alert('Entrez une LETTRE');


     }
}

    
                              

                                        
                                        

                                             
                                                  
                                                  
                                                  // mot[index].replace par 0
                                             
                                             //afficher
                                                  // si mot = gagne

                                                       //afficher gagné
                                                       //rejouer ?

                                                            //si oui
                                                                 // function Init
                                                                 //afficher
                                                            
                                                            //sinon : tchao


                                                  //sinon
                                                       //afficher()


                                        //sinon fausse pioche
                                             
                                             //incrementer membre
                                             // dessinPendu()
                                                  //si membre = 6
                                                       //afficher perdu
                                                       // rejouer ?
                                                            // si oui :  fonction init
                                                            //si non : rien , tchao
                                                            //afficher
                                                  //sinon
                                                       //afficher


                              //sinon deja joue
                                   //message deja joué
                                   // A décider selon la règle soit on fait rien soit membre = membre - 1
// Else
     // Message : Entrer une lettre
     // A décider selon la règle soit on fait rien soit membre = membre - 1

// Générer mot, la fonction math random choisi un chiffre entre 0 et la listeMots.lenght





// mot = listeMots[fonction random.math(chiffre <> 0 et listeMots.lenght) ]





       

