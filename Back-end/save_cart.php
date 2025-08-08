<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "supplements_store");
if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "DB Connection failed: " . $conn->connect_error]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!isset($data['cart']) || !is_array($data['cart'])) {
    echo json_encode(["success" => false, "error" => "Invalid input"]);
    exit;
}

// Prepare statement for insert
$stmt = $conn->prepare("INSERT INTO orders (product_id, product_name, flavor, weight, price, quantity, total_price) VALUES (?, ?, ?, ?, ?, ?, ?)");

if (!$stmt) {
    echo json_encode(["success" => false, "error" => "Prepare failed: " . $conn->error]);
    exit;
}

foreach ($data['cart'] as $item) {
    if (!isset($item['product_id'], $item['name'], $item['flavor'], $item['weight'], $item['price'], $item['quantity'])) {
        echo json_encode(["success" => false, "error" => "Missing fields in item"]);
        exit;
    }
    $product_id = intval($item['product_id']);
    $name = $item['name'];
    $flavor = $item['flavor'];
    $weight = $item['weight'];
    $price = floatval($item['price']);
    $quantity = intval($item['quantity']);
    $total = $price * $quantity;

    if ($price <= 0 || $quantity <= 0) {
        echo json_encode(["success" => false, "error" => "Invalid price or quantity"]);
        exit;
    }

    $stmt->bind_param("isssdid", $product_id, $name, $flavor, $weight, $price, $quantity, $total);
    if (!$stmt->execute()) {
        echo json_encode(["success" => false, "error" => "Insert failed: " . $stmt->error]);
        exit;
    }
}

$stmt->close();
echo json_encode(["success" => true]);

?>