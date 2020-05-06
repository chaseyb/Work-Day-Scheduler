
$(document).ready(function(){

    // Display current day & time //
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // Assign saveBtn click listener for user input and time stamp //
    $(".saveBtn").on("click", function () {
        // Get nearby values
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Set items in local storage //
        localStorage.setItem(time, text);
    })

    //button to clear local storage and refresh the page
    $("#clear").click(function() {
        localStorage.clear();
        location.reload()
    });

    // load saved data from LocalStorage for each hour //
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // get current number of hours //
    function hourTracker() {
        var currentHour = moment().hour();

     // loop over time blocks //
     $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

    // check if we've moved past this time //
      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
}
hourTracker();
})

