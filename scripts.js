$(function() {
    $(".carousel").carousel( {interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
});

id="groupScheduleButton"
id="personalScheduleButton"

$(function() {
    $("#groupScheduleButton").click(function() {
        $("#groupSchedule").modal("show")
    });
    $("#personalScheduleButton").click(function() {
        $("#personalSchedule").modal("show")
    });
});