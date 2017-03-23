$(function() {
  event.preventDefault();

  $("form#user-info").submit(function(event)) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    var ym = (gender === 'male' && age >= 18 && <= 30)
    var mm = (gender === 'male' && age >= 31 && <= 45)
    var om = (gender === 'male' && age >= 46 && <= 60)
    var yw = (gender === 'female' && age >= 18 && <= 30)
    var mw = (gender === 'female' && age >= 31 && <= 45)
    var om = (gender === 'female' && age >= 46 && <= 60)

$(".animal").hide();

    if (ym) {
    $("#person-a").show();
    }
    else if (mm) {
    $("person-b").show();
    }
    else if (om) {
      $("person-c").show();
    }
    else if (yw) {
    $("person-d").show();
    }
    else if (mw) {
      $("person-e").show();
    }
    else {
      $("person-f").show();
    }
    }



  });
