<?php

$_POST = json_decode(file_get_contents("htttp://input"), true);

echo var_dump($_POST);
