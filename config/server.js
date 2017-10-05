module.exports = function(){
  // INICIA COM O EXPRESS
  var express = require('express');
  this.server =  express();

  // ROTAS PARA LINKS DE JS E CSS
  this.server.use('/public',express.static('./app/public'));
  this.server.use('/node_modules',express.static('./node_modules'));

  // jquery/dist
  // bootstrap/dist

  var bodyParser = require('body-parser');
  this.server.use(bodyParser.urlencoded({extended: true}));
  this.server.use(bodyParser.json());

  // INDICA EM QUAL PORTA VAI RODAR O SERVIDOR
  this.server.port = 3000;

  // INDICA QUAL FRAMEWORK SERÁ ITILIZADO PARA RENDERIZAR AS VIEWS
  this.server.set('view engine','ejs')

  // INDICA A LOCALIZAÇÃO DAS VIEWS DENTRO DO PROJETO
  this.server.set('views','./app/views')

  this.server.listen(this.server.port,function(){
    console.log('SERVIDOR ATIVO');
  })

  // UTILIZA O CONSIGN PARA INDICAR O CAMINHO DAS ROTAS/MODELS/CONFIG DB
  this.server.consign = require('consign')()
                                      .include('./app/config/db.js')
                                      .then('./app/model')
                                      .then('./app/routes')
                                      .then('./app/controllers')
                                      .into(this.server);
  return this.server;
}
