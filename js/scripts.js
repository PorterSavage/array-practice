$(document).ready(function(){
  $("form#favorite").submit(function(event) {
    var a = ($("#first").val());
    var b = ($("#second").val());
    var c = ($("#third").val());

    var fav = [a, b, c];
    $("#one").empty().append(fav[0])
    $("#two").empty().append(fav[1])
    $("#three").empty().append(fav[2])

    event.preventDefault();
  });
});
