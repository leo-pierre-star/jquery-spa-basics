<?php

session_start();

if (isset($_SESSION['security'])) {
    echo json_encode([
        'user' => $_SESSION['security']
    ]);

    exit;
}

echo json_encode([]);