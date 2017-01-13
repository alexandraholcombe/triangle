$(document).ready(function() {
  $("#blanks").submit(function(event) {
    $(".result").hide();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    console.log("1: " + side1);
    console.log("2: " + side2);
    console.log("3: " + side3);

    // if ((side1 === side2) && (side1 === side3)) {
    //   alert("equilateral");
    // } else {
    //   alert("done");
    // }

    if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)) {
      $("#neg-result").show();
      alert("Triggered not-a-triangle");
    } else {
      if ((side1 === side2) && (side2 === side3)) {
        $("#triangle").text("an equilateral");
        $("#pos-result").show();
      } else if ((side1 === side2) && (side1 !== side3)) {
        $("#triangle").text("an isosceles");
        $("#pos-result").show();
      } else {
        alert(done);
      };
      // } else if ((side1 !== side2) && (side2 !== side3) && (side1 !== side3)) {
      //   $("#triangle").text("a scalene");
      //   $("pos-result").show();
      // } else {
        // $("#triangle").text("an isosceles");
        // $("pos-result").show();
      // };
    };

    event.preventDefault();
  });
});
