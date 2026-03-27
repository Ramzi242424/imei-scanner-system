// Проверка IMEI (алгоритм Луна)
function validateIMEI(imei) {
  if (!/^\d{15}$/.test(imei)) return false;
  let sum = 0;
  for (let i = 0; i < 14; i++) {
    let digit = Number(imei[i]);
    if (i % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  sum += Number(imei[14]);
  return sum % 10 === 0;
}

// Mock API (имитация imeipro)
function getDeviceInfo(imei) {
  // Симуляция запроса API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        brand: "Samsung",
        model: "Galaxy S21",
        memory: "128GB",
      });
    }, 500);
  });
}

// Обработка кнопки проверки
document.getElementById("checkBtn").addEventListener("click", async () => {
  const imei = document.getElementById("imeiInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!validateIMEI(imei)) {
    resultDiv.innerHTML = `<div class="alert alert-danger">IMEI некорректный</div>`;
    return;
  }

  resultDiv.innerHTML = `<div class="alert alert-info">Проверка API...</div>`;

  const device = await getDeviceInfo(imei);

  resultDiv.innerHTML = `
    <div class="alert alert-success">
      <strong>IMEI: ${imei}</strong><br>
      Бренд: ${device.brand}<br>
      Модель: ${device.model}<br>
      Память: ${device.memory}
    </div>
  `;

  // TODO: Сохранение в Firebase после настройки
  console.log("Сохраняем в Firebase:", imei, device);
});

// QR / Barcode сканер
let scanner;
document.getElementById("scanBtn").addEventListener("click", () => {
  if (scanner) {
    scanner.stop().then(() => { scanner = null; });
    return;
  }

  scanner = new Html5Qrcode("scanner");
  scanner.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      document.getElementById("imeiInput").value = decodedText;
      scanner.stop();
      scanner = null;
      document.getElementById("checkBtn").click();
    },
    (errorMessage) => {
      // console.log(errorMessage); // можно включить для отладки
    }
  ).catch(err => console.error(err));
});
