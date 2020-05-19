<?php
    $conexion=mysqli_connect('localhost','root','','personas');
    
    $sql = "SELECT COUNT(*) total from prueba1";
    $result = mysqli_query($conexion,$sql);
    $fila = mysqli_fetch_assoc($result);
    echo $fila['total'];

?>