// EMAIL VALIDATION

var component = {
    input   : $('input[name="email"]'),
    mensage : {
        fields  : $('.msg'),
        success : $('.success'),
        error   : $('.error')
    }
},
    regex  = /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;

component.input.blur(function () {
    component.mensage.fields.hide();
    regex.test(component.input.val()) ? component.mensage.success.show() : component.mensage.error.show();
});

// PASSWORD VALIDATIE

$(function() {
    $("#txtConfirmPassword").keyup(function() {
        var password = $("#txtNewPassword").val();
        $("#divCheckPasswordMatch").html(password == $(this).val() ? "<p>Wachwoorden komen overeen.</p>" : "<a>2e Wachtwoord klopt niet!</a>");
    });

});

 // IMAGE CHANGE VAN http://stackoverflow.com/questions/18502734/how-to-change-image-onclick-javascript-function

 function changeImage(element) {
     element.src = element.bln ? "image/heart.png" : "image/heart_grey.png";

     element.bln = !element.bln;  /* assigns opposite boolean value always */
 }

// SCROLL TO TOP BUTTON VAN THOMAS HUURMAN

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
  $('#gototop').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('activated')
    } else {
      $(this).removeClass('activated')
    }
  });

});

// SMOOTH SCROLL VAN https://css-tricks.com/snippets/jquery/smooth-scrolling/

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

