<?php
    $conexion=mysqli_connect('localhost','root','','personas');


    $nombre=$_POST['nombre'];
    $edad=$_POST['edad'];

    $sql="INSERT into prueba1(nombre,edad) values ('$nombre','$edad')";
    
    echo mysqli_query($conexion,$sql);

?> 