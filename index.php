<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IMEI Scanner System</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
  <div class="container py-5">
    <h1 class="mb-4">IMEI Scanner System</h1>

    <!-- IMEI Input -->
    <div class="mb-3">
      <label for="imeiInput" class="form-label">Введите IMEI</label>
      <input type="text" id="imeiInput" class="form-control" placeholder="15 цифр IMEI">
    </div>

    <button id="checkBtn" class="btn btn-primary mb-3">Проверить IMEI</button>

    <!-- Optional QR Scanner -->
    <div class="mb-3">
      <button id="scanBtn" class="btn btn-secondary">Сканировать QR / Barcode</button>
      <div id="scanner" style="width: 300px; height: 300px; margin-top: 10px;"></div>
    </div>

    <!-- Result -->
    <div id="result" class="mt-4"></div>
  </div>

  <!-- Libraries -->
  <script src="assets/libs/html5-qrcode.min.js"></script>
  <script src="config.js"></script>
  <script src="app.js"></script>
</body>
</html>
