bootstrap-modal-middle
======================

Center [Bootstrap] modals in the vertical middle of the screen.

Supports Bootstrap 3.

## Example

Demo: https://AndersDJohnson.github.io/bootstrap-modal-middle/example

With just a few extra lines of JavaScript...

```js
// create the modal, without showing
var $modal = $('#modal').modal({
  show: false
});

// make it a middle modal
$modal.modalMiddle();
```

...and some standard [Bootstrap modal] markup:

```html
<div id="modal" class="modal fade">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div><!-- /.modal-content -->
  </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
```

[bootstrap]: http://getbootstrap.com/
[bootstrap modal]: http://getbootstrap.com/javascript/#modals
