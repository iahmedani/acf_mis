$(document).ready(function () {

  function addDistrict(val) {
    $.ajax({
      url: '/dashboard/getDistrict',
      method: 'POST',
      data: {
        'province': val
      },
      dataType: 'JSON',
      success: function (districts) {
        if (districts.length > 0) {
          $('#district_list').remove();
          var list = `<div class="input-fields" id="district_list"><select name="listDisricts"><option value=" " selected>District:</option>`;
          districts.forEach(function (district) {
            list += `<option value="${district.district_ID}">${district.district_Name}</option>`;
          })
          list += `</select><label for="listDistricts">Districts</label></div>`;

          $('#dataFields').append(list);
          console.log(list);
        }
        var newDistrict = '<div class="input-fields"><input type="text name="district"><label for="District">District</label></div>';
        $('input[name=district]').remove();
        $('#dataFields').append(newDistrict);
      }
    });
  };

  $('#addDistrict').on('click', function (e) {
    var province = $('select[name=province]').val();
    if (province) {
      addDistrict(province);
    } else {
      alert('Please select province')
    }
    e.preventDefault();
  })
})