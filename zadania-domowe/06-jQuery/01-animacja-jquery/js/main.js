$( function() {
    $(".myButton").click(function(){
        $(".myDiv").animate({
            height: "100px", 
            width: "100px", 
            left: "100px"
            }, 3000, function(){
                $(this).animate({
                    backgroundColor: "#0000FF"
                }, 5000, function(){
                    $(this).html("<h2>Animacja zakonczona</h2>").css("color", "white").css("font-size", "0.8em");
                });
        });
      });
});