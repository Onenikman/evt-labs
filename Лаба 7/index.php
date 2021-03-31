<?php
    $template = file_get_contents("template.html");

    // Определение параметров
    $meta = file_get_contents("templates/meta.html");
    $title = "Pizza Ninja";
    $fonts = file_get_contents("templates/fonts.html");
    $style = file_get_contents("templates/style.html");

    $header = file_get_contents("templates/header.html");
    $main = file_get_contents("templates/main.html");
    $footer = file_get_contents("templates/footer.html");
    $scripts = file_get_contents("templates/scripts.html");

    // Замена параметров
    $template = str_replace("{meta}", $meta, $template);
    $template = str_replace("{title}", $title, $template);
    $template = str_replace("{fonts}", $fonts, $template);
    $template = str_replace("{style}", $style, $template);
    $template = str_replace("{header}", $header, $template);
    $template = str_replace("{main}", $main, $template);
    $template = str_replace("{footer}", $footer, $template);
    $template = str_replace("{scripts}", $scripts, $template);

    echo $template;
?>