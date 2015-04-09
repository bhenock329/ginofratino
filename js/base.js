$(document).keydown(function(event) {
  if (event.keyCode == 88) {
      $('.main').show();
    }
})

$(document).keyup(function(event) {
  if (event.keyCode == 88) {
       $('.main').hide();
    }
})