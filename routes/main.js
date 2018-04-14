module.exports = function(app){
    app.get('/', function(req, resp){
        res.render('pages/index');
    });

    app.get('/dashboard', function(req, resp){
        res.render('pages/dashboard');
    });
}