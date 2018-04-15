const sql = require('mssql');
const config = {
    user: 'sa',
    password: 'smartest1',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'ACF MIS',
 };

module.exports = function(app){
    app.get('/dashboard/geoinfo', function(req, resp){
        sql.connect(config).then(function(pool){
            return pool.request()
                        .query('Select * from geo_province')
        }).then(function(result){
            resp.render('admin/geoinformation', {provinces: result.recordset});
            sql.close();            
        }).catch(function(err){
            console.log(err);
            sql.close();
        })
    });
}