var pingPong = function(userNumber) {
  var countToArray = [];
  for (i = 1; i <= userNumber; i++) {
    if (i % 15 == 0) {
          countToArray.push("ping");
    } else if (i % 5 == 0) {
      
    }
  }

};


$(document).ready(function(){
  $('form#ping-pong').submit(function(event){
    var userNumber = parseInt($('#user-input').val());
    pingPong(userNumber);
    event.preventDefault();
  });
});
