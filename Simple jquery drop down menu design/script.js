$(document).ready(function() {
    // on click on  setting button
    $(".button").click(function() {
        var val = $(this).attr('id');
        if (val == 1) {
            $("ul").hide();
            $(this).attr('id', '0');
        } else {
            $("ul").show();
            $(this).attr('id', '1');
        }

    });

    //Mouse click on setting button and ul list
    $("ul, .button").mouseup(function() {
        return false;
    });

    //Document Click
    $(document).mouseup(function() {
        $("ul").hide();
        $(".button").attr('id', '0');
    });
});