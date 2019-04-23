// //quand la page est chargée (ready)
$(document).ready(function () {
  // quand la souris passe sur une couleur je demande de choisir la class color
  // hover - quand la souris passe sur les couleurs et qu'lle quite les couleurs
  $('.color').hover(function () {
    //je récupère l'id de couleur'
    var color = $(this).attr('id');
    // je change le text en fonction de la couleur sur la quelle j'ai appuié
    $('#text').css('color', color);
  },
    // je change le text en noir en utilisant le css // couleur par default = ihnerit
    function () {
      $('#text').css('color', 'inherit');
    });
});

//  Une methode qui functione très bien, mais la prémiere méthode est plus courte 
// // //quand la page est chargée (ready)
// $(document).ready(function () {
//   // quand la souris passe sur une couleur je demande de choisir la class color
//   $('.color').mouseenter(function () {
//     //je récupère la deuxième classe de l'élément sur lequel j'ai cliqué
//     var color = $(this).attr('class').split(' ')[1];
//     // je change le text en fonction de la couleur sur la quelle j'ai appuié
//     $('#text').css('color', color);
//   });
//   // quand la souris quitte le bouton je demande que le texte revienne noir en utilisant l'evenement .mouseleave
//   $('.color').mouseleave(function () {
//     // je change le text en noir en utilisant le css
//     $('#text').css('color', 'black');
//   });
// });