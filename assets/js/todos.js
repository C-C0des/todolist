


// Check off specific todos by clicking

$("li").click(function() {
    $(this).toggleClass("completed");
});
/*
$( "li" ).click( function() {
    if ($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color:"black",
            textDecoration:"none"
        });

    } else{
    $( this ).css( 
        { color:"gray",
          textDecoration: "line-through" }
     );   
    }
  });*/


  // click on X to delete Todo
  // research event bubbling
  //event can also be rep by e or evt, etc. 
  // stopPropagation - jquery method that stops event bubbling, research more

  $("span").click(function(event){
      $(this).parent().fadeOut(500, function() {
         $(this).remove();
      });
      event.stopPropagation;
  })
