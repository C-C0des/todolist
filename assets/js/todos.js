


// 1. Check off specific todos by clicking

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


  // 2 . click on X to delete Todo
  // research event bubbling
  //event can also be rep by e or evt, etc. 
  // stopPropagation - jquery method that stops event bubbling, research more

  $("span").click(function(event){
      $(this).parent().fadeOut(500, function() {
         $(this).remove();
      });
      event.stopPropagation;
  })

  // 3. Adding todos

  $("input[type ='text']").keypress(function(event){
      if(event.which === 13){
          // grabbing the newtodo text (that the user as typed )
          // from input via val()
       var todoText =  $(this).val();
       
       // create a new li and add to ul 
       $("ul").append("<li>" + todoText + "</li>");

      }

  });