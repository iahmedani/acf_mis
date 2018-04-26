function SUM_of_Screening_Child() {
  var value1 = document.getElementById('CMAM_SCREENING_DATA_VAR_MSCR').value;
  var value2 = document.getElementById('CMAM_SCREENING_DATA_VAR_FSCR').value;
  var value3 = document.getElementById('CMAM_SCREENING_DATA_VAR_MSCR24').value;
  var value4 = document.getElementById('CMAM_SCREENING_DATA_VAR_FSCR24').value;
  var total = parseFloat(value1) + parseFloat(value2) + parseFloat(value3) + parseFloat(value4) ;
  document.getElementById('Total_Screening').value = total;


}
function SUM_of_Screening_Plw() {
  var value5 = document.getElementById('CMAM_SCREENING_DATA_VAR_PSCR').value;
  var value6 = document.getElementById('CMAM_SCREENING_DATA_VAR_LSCR').value;

  var total = parseFloat(value5) + parseFloat(value6);
  document.getElementById('Total_Screening').value = total;
}
//Total_screening sum
$(document).ready(function(){
  $(this).change(function(){
    var sum = 0;
    $(".e").each(function(){
      sum+= parseFloat(this.value);
    })
    var x = document.getElementById('Total_Screening');
    x.value = sum;
  })  
});
//Total_odema sum
$(document).ready(function(){
  $(this).change(function(){
    var sum = 0;
    $(".oe").each(function(){
      sum+= parseFloat(this.value);
    })
    var x = document.getElementById('Total_Odema');
    x.value = sum;
  })  
});
//Total_screening_115 sum
$(document).ready(function(){
  $(this).change(function(){
    var sum = 0;
    $(".f").each(function(){
      sum+= parseFloat(this.value);
    })
    var x = document.getElementById('Total_Screening_115');
    x.value = sum;
  })  
});
//Total_Screening_115124 sum
$(document).ready(function(){
  $(this).change(function(){
    var sum = 0;
    $(".ga").each(function(){
      sum+= parseFloat(this.value);
    })
    var x = document.getElementById('Total_Screening_115124');
    x.value = sum;
  })  
});
//Total_Screening_124 sum
$(document).ready(function(){
  $(this).change(function(){
    var sum = 0;
    $(".h").each(function(){
      sum+= parseFloat(this.value);
    })
    var x = document.getElementById('Total_Screening_124');
    x.value = sum;
  })  
});
//Total_Screening_P sum
$(document).ready(function () {
  $(this).change(function () {
      var sum = 0;
      $(".l").each(function () {
          //add only if the value is #
          sum += parseFloat(this.value);

      });
      var x = document.getElementById('Total_Screening_P');
      x.value = sum;

  });

});
//Total_Screening_21 sum
$(document).ready(function(){
  $(this).change(function(){
    var sum = 0;
    $(".p").each(function(){
      sum+= parseFloat(this.value);
    })
    var x = document.getElementById('Total_Screening_21');
    x.value = sum;
  })  
});