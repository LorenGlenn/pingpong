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
    alert('please enter a positive number!')
  }

  var answerString = countToArray.join(", ");
  return answerString;
};


$(document).ready(function(){
  $('form#ping-pong').submit(function(event){
    var userNumber = parseInt($('#user-input').val());
    var result = pingPong(userNumber);
    $('#answer').text(result);
    $('#answer-section').show();
    event.preventDefault();
  });
});
