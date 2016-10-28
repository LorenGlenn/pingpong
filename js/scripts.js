//Begin business logic
var pingPong = function(userNumber) {
  var countToArray = [];
  if (userNumber && userNumber > 0) {
    for (i = 1; i <= userNumber; i++) {
      if (i % 15 == 0) {
          countToArray.push("pingpong");
      } else if (i % 5 == 0) {
          countToArray.push("pong")
      } else if (i % 3 == 0) {
          countToArray.push("ping")
      } else {
          countToArray.push(i);
      }
    }
  } else {
    alert('please enter a positive number!');
  }
  var answerString = countToArray.join(", ");
  return answerString;
};
//begin front end logic
$(document).ready(function(){
  $('form#ping-pong').submit(function(event){
    var userNumber = parseInt($('#user-input').val());
    var result = pingPong(userNumber);
    answerAnimation();
    $('#answer').text(result);
    // $('#answer-section').show();
    event.preventDefault();
  });

  var answerAnimation = function() {
    $("#answer-section").animate({
      height: '60%',
      width: '100%'
    });
    $('#announce').show();
  }
});
