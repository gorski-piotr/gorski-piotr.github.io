$( function() {
    $(".item1").click( function() {
        $(".content1").slideToggle();
        $(this).toggleClass("pressed")
    });

    $(".item2").click( function() {
        $(".content2").slideToggle();
        $(this).toggleClass("pressed")
    });

    $(".item3").click( function() {
        $(".content3").slideToggle();
        $(this).toggleClass("pressed")
    });
    $(".item4").click( function() {
        $(".content4").slideToggle();
        $(this).toggleClass("pressed")
    });
});