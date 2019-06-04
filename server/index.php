<?php
$entityBody = file_get_contents('php://input');
$data = json_decode($entityBody);
$file = file_get_contents('history.json');
          
$paymentList = json_decode($file, TRUE);
$paymentList[] = array('payment'=>$data);
                        
unset($file);           
          
file_put_contents('history.json', json_encode($paymentList));  // Перекодировать в формат и записать в файл.
          
unset($paymentList); 

?>