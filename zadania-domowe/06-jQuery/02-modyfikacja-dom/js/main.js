$( function() {
    $("#firstButton").click(function(){
        $("#firstButton").after($("p").last());
    });

    $("#secondButton").click(function(){
        $("#secondButton").before($("p").first());
    });
});