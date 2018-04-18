var db = require('../config/apidb');
module.exports = function (app) {
    app.get('/dashboard/geoinfo', function (req, resp) {
        db.executeSql('Select * from geo_province', function (result, err) {
            if (err) return req.flash('danger', err);
            resp.render('admin/geoinformation', {
                provinces: result,
                districts: null
            });
        })
    });
    app.post('/dashboard/getDistrict', function (req, resp) {
        var province_id = req.body.province;
        console.log(province_id);
        var getDistQry = `Select * from geo_district WHERE province_ID = ${province_id}`;
        db.getData(getDistQry, function (result, err) {
            if (err) return resp.json({
                'msg': err
            });
            resp.json(result);
        });
    });
}