// Función para convertir decimal (0-255) a HEX de 2 dígitos
function toHex(value) {
  let hex = Number(value).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

// Función para actualizar el color verde
function updateGreen() {
  const greenIntensity = greenSlider.value;

  // Crear verde puro donde solo el componente verde cambia
  const greenColor = `rgb(0, ${greenIntensity}, 0)`;
  const greenHex = `#${toHex(greenIntensity)}`;

  franjaVerde.style.backgroundColor = greenColor;
  greenValue.textContent = greenHex;
  greenValue.style.backgroundColor = greenColor;
  greenValue.style.color = greenIntensity > 128 ? '#ffffff' : '#000000';
}

// Función para actualizar el color rojo
function updateRed() {
  const redIntensity = redSlider.value;

  // Crear rojo puro donde solo el componente rojo cambia
  const redColor = `rgb(${redIntensity}, 0, 0)`;
  const redHex = `#${toHex(redIntensity)}`;

  franjaRoja.style.backgroundColor = redColor;
  redValue.textContent = redHex;
  redValue.style.backgroundColor = redColor;
  redValue.style.color = redIntensity > 128 ? '#ffffff' : '#000000';
}

// Event listeners para los sliders
greenSlider.addEventListener('input', updateGreen);
redSlider.addEventListener('input', updateRed);

// Inicializar colores al cargar
updateGreen();
updateRed();

// Efecto de hover mejorado para las franjas
document.querySelectorAll('.franja').forEach(franja => {
  franja.addEventListener('mouseenter', function () {
    this.style.transform = 'scaleY(1.05)';
    this.style.zIndex = '10';
  });

  franja.addEventListener('mouseleave', function () {
    this.style.transform = 'scaleY(1)';
    this.style.zIndex = '1';
  });
});
