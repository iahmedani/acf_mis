const sql = require('mssql'),
  apiConfig = {
    user: 'apiv1',
    password: 'imran123',
    database: 'ACF MIS',
    server: '10.11.71.37'
  }
  dbConfig = {
    user: 'sa',
    password: 'imran123',
    database: 'ACF MIS',
    server: '10.11.71.37'
  }
// exports.close = sql.close();
exports.getData = function (query, callback) {
  sql.connect(apiConfig)
    .then(function (pool) {
      return pool.request()
        .query(query)
    })
    .then(function (result) {
      callback(result.recordset);
      sql.close();
    })
    .catch(function (err) {
      callback(null, err);
      sql.close();
    })
}

exports.executeSql = function (query, callback) {
  sql.connect(dbConfig)
    .then(function (pool) {
      return pool.request()
        .query(query)
    })
    .then(function (result) {
      callback(result.recordset);
      sql.close();
    })
    .catch(function (err) {
      callback(null, err);
      sql.close();
    })
}

exports.executeSqlInsert = function (query, callback) {
  sql.connect(dbConfig)
    .then(function (pool) {
      return pool.request()
        .query(query)
    })
    .then(function (result) {
      callback(result);
      sql.close();
    })
    .catch(function (err) {
      callback(null, err);
      sql.close();
    })
}