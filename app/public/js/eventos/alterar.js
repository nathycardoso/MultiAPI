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

    if (errors == 0) {
      $.ajax({
          url: '/api/eventos/'+$('#evento_id').val(),
          type: 'PUT',
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
