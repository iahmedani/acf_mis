module.exports = function(app){
    app.get('/', function(req, resp){
        resp.render('pages/index');
    });

    app.get('/dashboard', function(req, resp){
        resp.render('pages/dashboard');
    });
    app.get('/dashboard/screening', function(req, resp){
        resp.render('dataentry/screening');
    });
}