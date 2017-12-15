<?php
$wf3 = array(
    "Peter" => "PHP et du CSS",
    "Gerard" => "HTML",
    "Thibault" => "Photoshop",
    "Valentin" => "JavaScript"
);

foreach ($wf3 as $eleves => $job) {
    echo "<strong>$eleves</strong> fait du $job</br>";
}