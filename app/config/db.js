var mysql = require('mysql');

var connection = function(){
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'multitalentos_com_br'
  });
}

module.exports = function(){
  console.log('Conexão Realizada');
  return connection;
}
