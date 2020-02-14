import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
      // Set the date we're counting down to
      var date = new Date("Mar 20, 2020 12:00:00");
      var countDownDate = date.getTime();
      $("#date").html(date.toLocaleDateString("fr-fr", {minute: "2-digit", hour: "2-digit"}));
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

  }
}
