$(document).ready(function(){
  $('.btn-excluir').click(function(){

    $('.modal-loading').modal('show');

    $.ajax({
        url: '/api/eventos/'+$(this).attr('id'),
        type: 'DELETE',
        success: function(result) {
          setTimeout(function() {
            location.reload();
          }, 2000);
        }
    });

  });

});
