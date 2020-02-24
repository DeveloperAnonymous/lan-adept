$(document).ready(function () {
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        n = 0;
    $(document).keydown(function (e) {
        if (e.keyCode === k[n++]) {
            if (n === k.length) {

                $("<link/>", {
                    rel: "stylesheet",
                    type: "text/css",
                    href: "assets/css/secret.css"
                }).appendTo("head");

                $('img#footer-logo').attr("src","assets/img/badgeHS.png");

                var audio = new Audio('assets/audio/secret.mp3')
                audio.volume = 0.025;
                audio.play();

                n = 0;
                return false;
            }
        }
        else {
            n = 0;
        }
    });
});