<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Apenas POST é aceito
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método não permitido']);
    exit();
}

// Configurações do Banco de Dados
$host = 'localhost';
$db   = 'fitnessexclusive_investidores';
$user = 'fitnessexclusive_investidores';
$pass = '@bacaxi03210';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($DSN = $dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    echo json_encode(['success' => false, 'error' => 'Falha na conexão com o banco de dados']);
    exit();
}

// Lê o body JSON
$input = file_get_contents('php://input');
$data  = json_decode($input, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Corpo da requisição inválido']);
    exit();
}

// Sanitização e validação
$nome     = trim(strip_tags($data['nome']     ?? ''));
$telefone = trim(strip_tags($data['telefone'] ?? ''));
$cidade   = trim(strip_tags($data['cidade']   ?? ''));

if (empty($nome) || empty($telefone) || empty($cidade)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Todos os campos são obrigatórios']);
    exit();
}

// Insere no banco de dados
try {
    $sql = "INSERT INTO leads_investidores (nome, telefone, cidade) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$nome, $telefone, $cidade]);

    echo json_encode(['success' => true, 'message' => 'Lead salvo com sucesso no banco de dados']);
} catch (\PDOException $e) {
    // Se a tabela não existir, podemos tentar criar ou apenas retornar erro
    // Aqui retornamos o erro para o usuário saber que precisa criar a tabela
    echo json_encode(['success' => false, 'error' => 'Erro ao salvar: ' . $e->getMessage()]);
}
