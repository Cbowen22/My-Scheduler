var todayDate = moment().format("dddd, MMM Do YYYY");
$("currentDay").html(todayDate);

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, value);
    })

    function timeTracker() {
        var timeNow = moment().hour();

        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour"[1]);

            if (blockTime < timeNow) {
                 $(this).removeClass("future");
                 $(this).removeClass("present");
                 $(this).addClass("past");
             }
            else if (blockTime == timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
             }
             else {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
         }
    })
}


    $("#time09 .description").val(localStorage.getItem("time09"));
    $("#time10 .description").val(localStorage.getItem("time10"));
    $("#time11 .description").val(localStorage.getItem("time11"));
    $("#time12 .description").val(localStorage.getItem("time12"));
    $("#time01 .description").val(localStorage.getItem("time01"));
    $("#time02 .description").val(localStorage.getItem("time02"));
    $("#time03 .description").val(localStorage.getItem("time03"));
    $("#time04 .description").val(localStorage.getItem("time04"));
    $("#time05 .description").val(localStorage.getItem("time05"));

    timeTracker();
})
