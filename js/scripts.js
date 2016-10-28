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
    alert('please enter a positive integer!');
  }
  var answerString = countToArray.join(", ");
  return answerString;
};
//begin front end logic
$(document).ready(function(){
  $('form#ping-pong').submit(function(event){
    var userNumber = parseInt($('#user-input').val());
    var result = pingPong(userNumber);
    animation("#answer-section", "#announce", "60%");
    $('#answer').text(result);
    event.preventDefault();
  });

  $('button#start').click(function(){
    animation("#header", "#header-text", "20%");
    $('#landing-text').hide();
    $('#landing').animate({
      height: '10px',
      width: '10px'
    })
  });

  $('button#next').click(function(){
    animation("#input-div", "#form-div", "20%");
  });

  var animation = function(div, text, height) {
    $(div).animate({
      height: height,
      width: '100%'
    });
    $(text).show();
  }
});
