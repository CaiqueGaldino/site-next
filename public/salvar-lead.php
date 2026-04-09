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

// Define o arquivo CSV
$arquivo = __DIR__ . '/leads-investidores.csv';

// Cria o cabeçalho se o arquivo for novo
$novo = !file_exists($arquivo);

$fp = fopen($arquivo, 'a');
if (!$fp) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Não foi possível abrir o arquivo de dados']);
    exit();
}

if ($novo) {
    fputcsv($fp, ['Data', 'Nome', 'Telefone', 'Cidade']);
}

// Salva a linha com data/hora
fputcsv($fp, [
    date('d/m/Y H:i:s'),
    $nome,
    $telefone,
    $cidade,
]);

fclose($fp);

echo json_encode(['success' => true, 'message' => 'Lead salvo com sucesso']);
