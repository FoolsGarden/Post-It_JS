var Board = function( selector ) {
  // Aqui denerá ir el código que tenga que ver con tu tablero 
  
  // Utiliza esta sintaxis para referirte al selector que representa al tablero.
  // De esta manera no dependerás tanto de tu HTML.  
  elem = $(selector);
  
  function initialize() {
    // Que debe de pasar cuando se crea un nuevo tablero?
  };

  initialize();
};

var PostIt = function() {
  // Aquí va el código relacionado con un post-it
  $("#board").dblclick(function(e){
    e.stopPropagation();
    post = $('#master').clone().css({ 'left': e.pageX, 'top': e.pageY }).appendTo('#board');
    console.log(e.pageX, e.pageY);
    console.log(post);
    $(post).draggable({
    }); 
  });
};

$(function() {
  // Esta es la fucnión que correrá cuando este listo el DOM 
  $('#master').draggable({});
  var popi = new Board('#board');
  PostIt();

});


