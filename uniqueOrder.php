<?php

function uniqueInOrder($str){
$arr = str_split($str);
echo '<pre>';
var_dump($arr);
for ($i = 0; $i < $arr - 1; $i++){
    echo $i;
}
}

uniqueInOrder('12334567');

