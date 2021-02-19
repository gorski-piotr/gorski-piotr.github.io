$(function() {
    $(".hamburger").click(function() {
        console.log("menu clicked");
        if ($(".main-menu").hasClass("open") === false) {
            $(".main-menu").addClass("open");
        } else {
            $(".main-menu").removeClass("open");
        }
        
    });

    $(".main-menu-item a").click(function(event){
        event.preventDefault();
        console.log("link clicked");
        $("body").fadeOut(2000, function() {
            // let hrefValue = $(".main-menu-item a").prop("href");
            let hrefValue = $(event.target).prop("href");
            // let hrefValue = $(event.target).attr("href");
            console.log(hrefValue);
            window.location.href = hrefValue;
        });
    });
});