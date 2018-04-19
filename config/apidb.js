const sql = require('mssql'),
  apiConfig = {
    user: 'sa',
    password: '7Cd29FhP2YQU4FtP',
    database: 'ACF MIS',
    server: '45.76.90.167'
  }
  dbConfig = {
    user: 'sa',
    password: '7Cd29FhP2YQU4FtP',
    database: 'ACF MIS',
    server: '45.76.90.167'
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