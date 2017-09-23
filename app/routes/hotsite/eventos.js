module.exports = function(app){

  app.get('/',function(request,response){

    // INCIA UMA NOVA INSTANCIA DA CLASSE DE EVENTOS - DAO
    var EventosDAO = new app.app.model.EventosDAO(app);

    // RECUPERA TODOS OS EVENTOS REGISTRADOS
    EventosDAO.getAll(function(error,result){
      console.log(result);
        response.render('./hotsite/eventos', {eventos: result});
    });
  })
}
