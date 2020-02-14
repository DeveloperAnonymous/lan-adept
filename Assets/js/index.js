$(document).ready(function () {
    // Set the date we're counting down to
    var countDownDate = new Date("Mar 20, 2020 12:00:00").getTime();
// Update the count down every 1 second
    setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance % (1000 * 60 * 60 * 24 * 365.25) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".countDown").html(
            "<div class='row' style='color: white;'> " +
                "<div class='col-3'>" + "<div class='col-12'>"+ days + "</div>" + "Jours" + "</div> " +
                "<div class='col-3'>" + "<div class='col-12'>"+ hours + "</div>" + "<div class='col-12'> Heures</div>" + "</div> " +
                "<div class='col-3'>" + "<div class='col-12'>"+ minutes + "</div>" + "<div class='col-12'> Minutes</div>" + "</div> " +
                "<div class='col-3'>" + "<div class='col-12'>"+ seconds + "</div>" + "<div class='col-12'> Secondes</div>" + "</div> </div>");
    });
});