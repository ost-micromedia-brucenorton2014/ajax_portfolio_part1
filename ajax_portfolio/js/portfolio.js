$( document ).ready(function() {
    
  //console.log( "ready!" );

  $( document ).on( "click", "#fallGallery", function() {
    console.log( $( this ).text() );
    $('#portfolio').load('fall.php');
  });
  $( document ).on( "click", "#winterGallery", function() {
    console.log( $( this ).text() );
    $('#portfolio').load('winter.php');
  });

});