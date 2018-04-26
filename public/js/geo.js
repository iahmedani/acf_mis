function getDistrict(val) {
  $.ajax({
    url: '/dashboard/getDistrict',
    method: 'POST',
    data: {
      'province': val
    },
    dataType: 'JSON',
    success: function (districts) {
      if(districts.length > 0){
        var html = '<option selected>Select District</option>\n';
        districts.forEach(district => {
          console.log(district);
          html+=`<option value="${district.district_ID}">${district.district_Name.toUpperCase()}</option>\n`;
        });
        $('#listDistrict').find('option').remove();
        $('#listDistrict').append(html);
        $('select').formSelect();
        console.log(html);
      } else {
        $('#listDistrict').find('option').remove();
        $('select').formSelect();
        Materialize.toast('No district in this province', 4000)
      }

    }
  });
};

function getDistrictForTehsil(val) {
  $.ajax({
    url: '/dashboard/getDistrict',
    method: 'POST',
    data: {
      'province': val
    },
    dataType: 'JSON',
    success: function (districts) {
      if(districts.length > 0){
        var html = '<option >Select District</option>\n';
        districts.forEach(district => {
          console.log(district);
          html+=`<option value="${district.district_ID}">${district.district_Name.toUpperCase()}</option>\n`;
        });
        $('#listDistrictTehsil').find('option').remove();
        $('#listDistrictTehsil').append(html);
        $('select').formSelect();
        console.log(html);
      } else {
        $('#listDistrictTehsil').find('option').remove();
        $('select').formSelect();
        Materialize.toast('No district in this province', 4000)
      }

    }
  });
};

function getDistrictForUC(val) {
  $.ajax({
    url: '/dashboard/getDistrict',
    method: 'POST',
    data: {
      'province': val
    },
    dataType: 'JSON',
    success: function (districts) {
      if(districts.length > 0){
        var html = '<option >Select District</option>\n';
        districts.forEach(district => {
          console.log(district);
          html+=`<option value="${district.district_ID}">${district.district_Name.toUpperCase()}</option>\n`;
        });
        $('#listDistrictUC').find('option').remove();
        $('#listDistrictUC').append(html);
        $('select').formSelect();
        console.log(html);
      } else {
        $('#listDistrictUC').find('option').remove();
        $('select').formSelect();
        Materialize.toast('No district in this province', 4000)
      }

    }
  });
};





function addDist (){
  $.ajax({
      url:'/dashboard/addDistrict',
      type:'post',
      data:$('#frmAddDist').serialize(),
      success:function(data){
        Materialize.toast(data.msg, 3000);
          console.log(data);
          $('#frmAddDist').trigger("reset");
        $('select').formSelect();
      }
  });
}

function addTeh (){
  $.ajax({
      url:'/dashboard/addTehsil',
      type:'post',
      data:$('#frmAddTehsil').serialize(),
      success:function(data){
        Materialize.toast(data.msg, 3000);
          console.log(data);
          $('#frmAddTehsil').trigger("reset");
          $('select').formSelect();
      }
  });
}

function addUC (){
  $.ajax({
      url:'/dashboard/addUC',
      type:'post',
      data:$('#frmAddUC').serialize(),
      success:function(data){
        Materialize.toast(data.msg, 3000);
          console.log(data);
          $('#frmAddUC').trigger("reset");
          $('select').formSelect(); 

      }
  });
}

function getTehsil(val) {
  $.ajax({
    url: '/dashboard/getTehsil',
    method: 'POST',
    data: {
      'district': val
    },
    dataType: 'JSON',
    success: function (tehsils) {
      if(tehsils.length > 0){
        var html = '<option >Select Tehsil</option>\n';
        tehsils.forEach(tehsil => {
          console.log(tehsil);
          html+=`<option value="${tehsil.tehsil_id}">${tehsil.tehsil_Name.toUpperCase()}</option>\n`;
        });
        $('#listTehsil').find('option').remove();
        $('#listTehsil').append(html);
        $('select').formSelect();
        console.log(html);
      } else {
        $('#listTehsil').find('option').remove();
        $('select').formSelect();
        Materialize.toast('No Tehsil in this district', 4000)
      }

    }
  });
};

function getTehsilForUC(val) {
  $.ajax({
    url: '/dashboard/getTehsil',
    method: 'POST',
    data: {
      'district': val
    },
    dataType: 'JSON',
    success: function (tehsils) {
      if(tehsils.length > 0){
        var html = '<option >Select Tehsil</option>\n';
        tehsils.forEach(tehsil => {
          console.log(tehsil);
          html+=`<option value="${tehsil.tehsil_id}">${tehsil.tehsil_Name.toUpperCase()}</option>\n`;
        });
        $('#listTehsilUC').find('option').remove();
        $('#listTehsilUC').append(html);
        $('select').formSelect();
        console.log(html);
      } else {
        $('#listTehsilUC').find('option').remove();
        $('select').formSelect();
        Materialize.toast('No Tehsil in this district', 4000)
      }

    }
  });
};

function getUC(val) {
  $.ajax({
    url: '/dashboard/getUC',
    method: 'POST',
    data: {
      'tehsil': val
    },
    dataType: 'JSON',
    success: function (ucs) {
      if(ucs.length > 0){
        var html = '<option >Select Tehsil</option>\n';
        ucs.forEach(uc => {
          console.log(uc);
          html+=`<option value="${uc.uc_id}">${uc.uc_Name.toUpperCase()}</option>\n`;
        });
        $('#listUC').find('option').remove();
        $('#listUC').append(html);
        $('select').formSelect();
        console.log(html);
      } else {
        $('#listUC').find('option').remove();
        $('select').formSelect();
        Materialize.toast('No UC in this Tehsil', 4000)
      }

    }
  });
};


$(document).ready(function () {
  $('.modal').modal();

})