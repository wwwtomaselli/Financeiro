<?php

echo file_get_contents('dados.json');

/* if($_SERVER['REQUEST_METHOD'] == 'GET'){
    echo file_get_contents('/dados.json');
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST'){
    //Comandos para inserir o registro no banco de dados
    echo '{"status": "inserido"}';
} elseif ($_SERVER['REQUEST_METHOD'] == 'PUT'){
    //Comandos para alterar o registro no banco de dados
    echo '{"status": "alterado"}';
} */