module.exports = function(app){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

  // GET TODOS OS EVENTOS REGISTRADOS
  app.get('/api/eventos',function(request,response){

    // RECUPERA TODOS OS EVENTOS REGISTRADOS
    EventosDAO.getAll(function(error,result){
      response.render('api/eventos/result', {result: JSON.stringify(result)});
    });
  });

  // GET UM ESVENTO ESPECIFICO - PASSAR ID COMO REFERENCIA
  app.get('/api/eventos/:id',function(request,response){

    var id = request.params.id;
    // RECUPERA SOMENTE UM REGISTRO
    EventosDAO.getOne(id,function(error,result){
      response.render('api/eventos/result', {result: JSON.stringify(result)});
    });
  });

  // EXCLUSAO DE EVENTO - PASSAR O ID DO EVENTO COMO REFERENCIA
  app.delete('/api/eventos/:id',function(request,response){

    var id = request.params.id;

    EventosDAO.delete(id,function(error,result){
      var retorno = [];

      // TRATA MENSAGEM DE ERRO
      if (result.affectedRows == 1) {
        retorno = {
          status:'success',
          affectedRows:1
        }
      }else {
        retorno = {
          status:'error',
          message:result.message
        }
      }
      // EXIBE NA PAGINA
      response.render('api/eventos/result', {result: JSON.stringify(retorno)});
    });
  });

  // POST - INSERCAO DE DADOS
  app.post('/api/eventos',function(request,response){

    EventosDAO.insert(request.body,function(error,result){
      response.render('api/eventos/result', {result: JSON.stringify(result)});
    });
  })

  // PUT - ATUALIZACAO DE DADOS
  app.put('/api/eventos',function(request,response){

    EventosDAO.update(request.body,function(error,result){
      response.render('api/eventos/result', {result: JSON.stringify(result)});
    });
  })

}
