$(document).ready(function () {
    $("#hide").click(function () {
        $("p").hide();
    });
});

$(function () {
  $("#show").click(function () {
    $("p").show();
  });
});

$("#toggle").click(function () {
    $("p").toggle();
});

//  Fade Effect

$("#fadein").click(function(){
    $(".box-1").fadeIn(1000);
})

$("#fadeout").click(function(){
    $(".box-2").fadeOut(1000);
})

$("#fadetoggle").click(function(){
    $(".box-3").fadeToggle(1000);
})

$("#fadeto").click(() => {
    $(".box-4").fadeTo(1000, 0.3);
})

// slide methods

$("#slidedownbtn").click(() => {
    $(".peregraf").slideDown(1000);
});

$("#slideupbtn").click(() => {
    $(".peregraf1").slideUp(1000);
});

$("#slidetogglebtn").click(() => {
    $(".peregraf2").slideToggle(1000);
});