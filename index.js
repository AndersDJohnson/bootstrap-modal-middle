$(function () {

  // $(document.body).modalmanager('loading');

  // bootbox.alert('ok');

  var $p = $('.ipsum');
  for (var i = 0; i < 20; ++i) {
    $p.after($p.clone());
  }

  var message = '';
  for (var i = 0; i < 100; ++i) {
    message += '<p>Hello!</p>';
  }

  var modalMiddle = function ($modal, message) {
    var $dialog = $modal.find('.modal-dialog');
    var $modalBody = $modal.find('.modal-body');
    var $modalContent = $modal.find('.modal-content');

    $modalBody.html(message);
    $modal.addClass('modal-middle');

    $modal.modal({
      show: false
    });

    var $window = $(window);

    var onResize = function () {
      var windowHeight = $window.height();
      var windowWidth = $window.width();
      var dialogHeight = $dialog.outerHeight(true);
      if (windowWidth >= 768 && windowHeight > dialogHeight) {
        $modal.addClass('modal-middle-short');
        $modalContent.css('top', dialogHeight / -2 );
      }
      else {
        $modal.removeClass('modal-middle-short');
        $modalContent.css('top', '');
      }
    };

    onResize();
    $window.on('resize', onResize);

  };

  modalMiddle($('#modal-short') ,'I am short!');
  modalMiddle($('#modal-long'), message);

});
