$( "#clickme" ).click(function() {
  $( "#book" ).toggle( "slow", function() {
    // Animation complete.
  });
});