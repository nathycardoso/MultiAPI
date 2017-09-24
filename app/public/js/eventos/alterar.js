$(document).ready(function(){
  $('.btn-editar').click(function(){

    var id = $(this).attr('id');
    var box = $(this).parent().parent().parent();

    var nome = box.find('#nome_'+id).text();
    var local = box.find('#local_'+id).val();
    var descricao = box.find('#descricao_'+id).text();

    // PREENCHE O MODAL
    $('#nome').val(nome);
    $('#descricao').text(descricao);
    $('#local').val(local);
    $('#evento_id').val(id);

    $('.modal-alterar').modal('show');

  });

  $('#btn-update').click(function(){
    var errors = validateRequired('#form .required');

    var action, url = '';

    if ($('#evento_id').val() == '') {
      action = 'POST';
      url = '/api/eventos/';

    }else {
      action = 'PUT';
      url =  '/api/eventos/'+$('#evento_id').val();
    }

    if (errors == 0) {
      $('.modal-alterar').modal('hide');
      $('.modal-loading').modal('show');

      $.ajax({
          url: url,
          type: action,
          data:$('#form').serialize(),
          success: function(result) {
            setTimeout(function() {
              location.reload();
            }, 2000);
          }
      });
    }

  })

});
