module.exports.getAll = function(app, request, response,json){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

  // RECUPERA TODOS OS EVENTOS REGISTRADOS
  EventosDAO.getAll(function(error,result){
    if (json) {
       response.render('api/eventos/result', {result: JSON.stringify(result)});
    }else {
      response.render('./hotsite/eventos', {eventos: result});
    }
  });
}

module.exports.getOne = function(app, request, response,id){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

  EventosDAO.getOne(id,function(error,result){
    response.render('api/eventos/result', {result: JSON.stringify(result)});
  });
}

module.exports.delete = function(app, request, response,id){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

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
}

module.exports.insert = function(app, request, response){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

  EventosDAO.insert(request.body,function(error,result){
    response.render('api/eventos/result', {result: JSON.stringify(result)});
  });
  response.end();
}

module.exports.update = function(app, request, response,id){

  // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
  var EventosDAO = new app.app.model.EventosDAO(app);

  EventosDAO.update(request.body,id,function(error,result){
    response.render('api/eventos/result', {result: JSON.stringify(result)});
  });
  response.end();
}
