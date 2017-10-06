$(document).ready(function () {
  $('#trips').DataTable({
    "searching": true,
    "filter": true,
    "oLanguage": {
      "sSearch": ""
    },
    "lengthChange": false,
    "bInfo": true,
    initComplete: function () {
      $("#trips_filter").detach().appendTo('#search');
      $("#trips_filter").find('input').attr("placeholder", "Search Trips");

      $("#trips_filter").find('input').on(" keydown", function (e) {

       
        $('html, body').animate({
          scrollTop: $("#trips").offset().top
        }, 1000);

        this.focus();


      });


    }
  });


  checkWidth();
});


function checkWidth() {
  var a = $('.cover-img').height();
  $('.cover').height(a);
}

// Bind event listener
$(window).resize(checkWidth);