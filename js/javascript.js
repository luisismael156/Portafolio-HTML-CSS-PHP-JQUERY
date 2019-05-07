
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:3000,
    margin: 10,
    nav: true,
    merge:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})})

$(document).ready(function(){

    $('#btn-enviar').click(function() {
      var nombre = $('txtnombre').val();
      var correo = $('txtemail').val();
      var asunto = $('txtmensaje').val();
    
    
      if (nombre == "")  {
        $('#txtnombre').css('border-bottom', '2px solid red');
        return false;
      } else {
        $('#txtnombre').css('border-bottom', '1px solid #90CAF9');
    
      if (correo == "") {
        $('#txtemail').css('border-bottom', '2px solid red');
        return false;
      } else {
        $('#txtemail').css('border-bottom', '1px solid #90CAF9');
    
      if (asunto == "") {
        $('#txtmensaje').css('border-bottom', '2px solid red');
        return false;
      }
    }
      $('#btn-enviar').fadeOut();
      $('#mensaje4').fadeIn();
    }
    
    })
    