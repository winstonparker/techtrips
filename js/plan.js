
//setup date fields
$( "#start-date" ).datepicker();
$( "#end-date" ).datepicker();

// //setup time fields
$('#start-time').timepicker({ 
    'scrollDefault': 'now',
    'disableTextInput': true    
 });
$('#end-time').timepicker({ 
    'scrollDefault': 'now',
    'disableTextInput': true    
});


//book trip
$('#book').on("click touch", function(){

    $.ajax({
        url: 'php/book.php',
        type: 'POST',
        dataType: "text",
        data: { 
            'trip_name': $("#trip-name").val(), 
            'location_name': $("#location-name").val(),
            'address': $("#address").val(),
            'meeting_location': $("#meeting-location").val(),
            'exta': "hello"
            
        } ,
        success: function(data, status) {
            console.log(data);
           window.location.replace("php/book.php")
        }
    });




});