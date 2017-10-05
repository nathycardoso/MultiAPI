var mysql = require('mysql');

var connection = function(){
  // NATHY HOME
  // return mysql.createConnection({
  //   host : 'localhost',
  //   user : 'root',
  //   password : 'root',
  //   database : 'multitalentos_com_br'
  // });
  // FIAP
  return mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'fiap',
    database : 'multitalentos_com_br'
  });
}

module.exports = function(){
  console.log('Conexão Realizada');
  return connection;
}
