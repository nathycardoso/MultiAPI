module.exports = function(app){

  app.get('/',function(request,response){
    app.app.controllers.eventos.getAll(app, request, response,false);
  })
}
