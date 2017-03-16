$(document).ready(function() {
    $('.botones').click(function() {
        $('#boton1').hide();
    });
    $('#boton2').click(function(){
        $('#boton1').show();
    });

    $('#explicacion1').mouseover(function(){
            $('#demostracion1').show();
    });

    $('#demostracion1').hide();
    $('#explicacion1').mouseout(function(){
            $('#demostracion1').hide();
    });

    $('#mostrar2').click(function(){
        $('#adentro').show();
    });

    $('#adentro').click(function(){
        $('#adentro').fadeOut(5000);
    });
});