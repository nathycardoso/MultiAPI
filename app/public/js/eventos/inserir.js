$(document).ready(function(){
  $('#btn-adicionar').click(function(){

    // PREENCHE O MODAL
    $('#nome').val('');
    $('#descricao').text('');
    $('#local').val('');
    $('#evento_id').val('');

    $('.modal-alterar').modal('show');

  });

});
