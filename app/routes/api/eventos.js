module.exports = function(app){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

  // GET TODOS OS EVENTOS REGISTRADOS
  app.get('/api/eventos',function(request,response){
    // RECUPERA TODOS OS EVENTOS REGISTRADOS
    app.app.controllers.eventos.getAll(app, request, response,true);
  });

  // GET UM ESVENTO ESPECIFICO - PASSAR ID COMO REFERENCIA
  app.get('/api/eventos/:id',function(request,response){

    var id = request.params.id;
    // RECUPERA SOMENTE UM REGISTRO
    app.app.controllers.eventos.getOne(app, request, response,id);
  });

  // EXCLUSAO DE EVENTO - PASSAR O ID DO EVENTO COMO REFERENCIA
  app.delete('/api/eventos/:id',function(request,response){

    var id = request.params.id;
    app.app.controllers.eventos.delete(app, request, response,id);
  });

  // POST - INSERCAO DE DADOS
  app.post('/api/eventos',function(request,response){

    app.app.controllers.eventos.insert(app, request, response);
  })

  // PUT - ATUALIZACAO DE DADOS
  app.put('/api/eventos/:id',function(request,response){

    var id = request.params.id;
    app.app.controllers.eventos.update(app, request, response,id);
  })

}
