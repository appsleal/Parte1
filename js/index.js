$(document).ready(function(){

    llenarCantidad();

    $('#btnGuardar').click(function(){
        var datos = $('#frmAjax').serialize();
        $.ajax({
            type:"POST",
            url:"agregar.php",
            data: datos,
            success: function(r){
                console.log(r);
                if(r==1){
                    llenarCantidad();
                    alert("agregado exitosamente");
                }else{
                    alert('error en servidor intente en un momento')
                }
            }
        });
        return false;
    });

    function llenarCantidad(){
        $.ajax({
            type:"POST",
            url:"cantidad.php",
            complete: function(data){
                console.log(data);
                $('#valor').text(data.responseText);
            },
        });
    }
});