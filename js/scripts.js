$(document).ready(function() {
  $("#age-form").submit(function(event) {
    var ageInput = parseInt($("#age").val());

    if (ageInput < 18) {
      alert("We are excited you want to vote! Unfortunately, you must be 18 years old or older.");
      $("#vote-info").show();
    } else if (ageInput === 18) {
      alert("Hooray! You are exercising your right to vote. Choose your county.");
      $("#area-form").show();
    } else {
      alert("Choose your county.");
      $("#area-form").show();
    };
    event.preventDefault();
  });

});
