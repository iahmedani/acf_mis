var db = require('../config/apidb');
const sqlMS = require('mssql');
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
            if (err) return console.log('getDistrict error :'+err);
            resp.jsonp(result);
        });
    });
    app.post('/dashboard/getTehsil', function (req, resp) {
        var district_id = req.body.district;
        console.log(req.body);
        var getDistQry = `Select * from geo_tehsil WHERE distirct_id = ${district_id}`;
        db.getData(getDistQry, function (result, err) {
            if (err) return console.log('getTehsil error :'+err);
            console.log(result);
            resp.jsonp(result);
        });
    });
    app.post('/dashboard/getUC', function (req, resp) {
        var tehsil_id = req.body.tehsil;        
        console.log(req.body);
        var getDistQry = `Select * from geo_uc WHERE tehsil_id = ${tehsil_id}`;
        db.getData(getDistQry, function (result, err) {
            if (err) return resp.json({
                'msg': err
            });
            resp.jsonp(result);
        });
    });
    app.post('/dashboard/addDistrict', function (req, resp) {
        var province = req.body.province;
        var district = req.body.district.toLowerCase();
        console.log(req.body);
        var qry = `INSERT INTO geo_district (province_ID, district_Name) SELECT ${province}, '${district}' WHERE NOT EXISTS (SELECT * FROM geo_district WHERE province_ID=${province} AND district_Name='${district}')`;
        var check = false;
        db.executeSqlInsert(qry, function (result, err) {
            if (err) return console.log('Insert District Error :' + err);
            if(result.rowsAffected[0] > 0){
                resp.jsonp({'msg':'District Added'});
            } else {
                resp.jsonp({'msg':'Duplicate district not allowed'});                
            }
        })
    });
    app.post('/dashboard/addTehsil', function (req, resp) {
        var province = req.body.province;
        var district = req.body.listDistrict;
        var tehsil = req.body.tehsil.toLowerCase();
        console.log(req.body);
        var qry = `INSERT INTO geo_tehsil (distirct_id, tehsil_Name) SELECT ${district}, '${tehsil}' WHERE NOT EXISTS (SELECT * FROM geo_tehsil WHERE distirct_id=${district} AND tehsil_Name='${tehsil}')`;
        var check = false;
        db.executeSqlInsert(qry, function (result, err) {
            if (err) return console.log('Insert Tehsil Error :' + err);
            if(result.rowsAffected[0] > 0){
                resp.jsonp({'msg':'Tehsil Added'});
            } else {
                resp.jsonp({'msg':'Duplicate tehsil not allowed'});                
            }
        })
    });
    app.post('/dashboard/addUC', function (req, resp) {
        var province = req.body.province;
        var district = req.body.listDistrict;
        var tehsil = req.body.listTehsil;
        var uc = req.body.uc.toLowerCase();
        console.log(req.body);
        var qry = `INSERT INTO geo_uc (tehsil_id, uc_Name) SELECT ${tehsil}, '${uc}' WHERE NOT EXISTS (SELECT * FROM geo_uc WHERE tehsil_id=${tehsil} AND uc_Name='${uc}')`;
        var check = false;
        db.executeSqlInsert(qry, function (result, err) {
            if (err) return console.log('Insert UC Error :' + err);
            if(result.rowsAffected[0] > 0){
                resp.jsonp({'msg':'UC Added'});
            } else {
                resp.jsonp({'msg':'Duplicate uc not allowed'});                
            }
        })
    });
}