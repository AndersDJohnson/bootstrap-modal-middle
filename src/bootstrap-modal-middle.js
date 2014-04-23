$.fn.modalMiddle = function () {
  this.each(function () {
    var $modal = $(this);
    var $dialog = $modal.find('.modal-dialog');
    var $modalBody = $modal.find('.modal-body');
    var $modalContent = $modal.find('.modal-content');

    $modal.addClass('modal-middle');

    var $window = $(window);

    var onResize = function () {
      var windowHeight = $window.height();
      var windowWidth = $window.width();
      var dialogHeight = $dialog.outerHeight(true);
      if (windowHeight > dialogHeight) {
        $modal.addClass('modal-middle-short');
        $modalContent.css('top', dialogHeight / -2 );
      }
      else {
        $modal.removeClass('modal-middle-short');
        $modalContent.css('top', '');
      }
      // if (windowWidth >= 768) {
      // }
      // else {
      // }
    };

    onResize();

    $window.on('resize', onResize);

  });
};
