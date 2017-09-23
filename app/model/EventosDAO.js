function EventosDAO(app){
  // INICIA A CONEXÃO COM O BANCO DE DE DADOS
   this._connection = app.app.config.db();;
}

EventosDAO.prototype.getAll = function (callback) {
  console.log('entrou');
  this._connection.query('SELECT * FROM eventos',callback);
};

EventosDAO.prototype.getOne = function (id,callback) {
  this._connection.query('SELECT * FROM eventos WHERE id = ?',[id],callback);
};

EventosDAO.prototype.delete = function (id,callback) {
  this._connection.query('DELETE FROM eventos WHERE id = ?',[id],callback);
};

EventosDAO.prototype.insert = function (data,values,callback) {
  values = Object.keys(data).map(function (key) { return data[key]; });
  this._connection.query('INSERT INTO eventos VALUES (?)',[values],callback);
};

EventosDAO.prototype.update = function (data,callback) {
  values = Object.keys(data).map(function (key) { return data[key]; });
  this._connection.query('UPDATE eventos SET nome = (?) WHERE ID = (?)',[data.nome,data.id],callback);
};

module.exports = function(){
  return EventosDAO;
}
