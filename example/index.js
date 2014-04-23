$(function () {

  var $short = $('#modal-short').modal({
    show: false
  });
  $short.find('.modal-body').html('I am short!');
  $short.modalMiddle();


  var message = '';
  for (var i = 0; i < 100; ++i) {
    message += '<p>Hello!</p>';
  }

  var $long = $('#modal-long').modal({
    show: false
  });
  $long.find('.modal-body').html(message);
  $long.modalMiddle();


  var $p = $('.ipsum');
  for (var i = 0; i < 20; ++i) {
    $p.after($p.clone());
  }

});
