$(function() {
    $("#count-sum").click(function() {
        let sum = 0;
        $(".salary").each( function() {
            sum += parseInt($(this).text());
            console.log(sum);
        });

        $("#sum").text(sum);
    });
});
