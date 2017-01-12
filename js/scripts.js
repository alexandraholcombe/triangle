$(document).ready(function() {
  $("#blanks").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#Side3").val());
    var sum =


if ((side1 + side2 <= side3) || (side1 + side3 <= side2) || (side2 + side3 <= side1)) 

if (side1 === side2 === side3) {
  $(".result").text("an equilateral");
}
else if ((side1 === side2) || (side2 === side3) || (side1 === side3)) {
    $(".result").text("an isoceles");
}
else () {

}
  });
});
