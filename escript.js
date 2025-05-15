function mostrar(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Ejercicio 6
let z = 4.5;
document.getElementById("resultado6").innerHTML =
  "(a) Resultado: " + (0.4 * z ** 4 + 3.1 * z ** 2 - 162.3 * z - 80.7).toFixed(3) + "<br>" +
  "(b) Resultado: " + ((z ** 3 - 23) / Math.cbrt(z ** 2 + 17.5)).toFixed(3);

// Ejercicio 7
let t = 3.2;
document.getElementById("resultado7").innerHTML =
  "(a) Resultado: " + (0.5 * Math.exp(2 * t) - 3.8 * t ** 3).toFixed(3) + "<br>" +
  "(b) Resultado: " + ((6 * t ** 2 + 6 * t - 2) / (t ** 2 - 1)).toFixed(3);

// Ejercicio 8
let x = 6.5, y = 3.8;
document.getElementById("resultado8").innerHTML =
  "(a) Resultado: " + ((x ** 2 + y ** 2) ** (2 / 3) + (x * y) / (y - x)).toFixed(3) + "<br>" +
  "(b) Resultado: " + ((Math.sqrt(x + y) / (x - y) ** 2 + 2 * x ** 2 - x * y ** 2)).toFixed(3);

// Ejercicio 9
let c = 4.6, d = 1.7, a = c * d ** 2, b = (c + a) / (c - d);
document.getElementById("resultado9").innerHTML =
  "(a) Resultado: " + (Math.exp(d - b) + Math.cbrt(c + a - (c * a) ** d)).toFixed(3) + "<br>" +
  "(b) Resultado: " + (d / c + (c * d / b) ** 2 - c ** d - a / b).toFixed(3);

// Ejercicio 10
let xVal = Math.PI / 10;
document.getElementById("resultado10").innerHTML =
  "(a) Izq: " + (Math.cos(xVal) ** 2 - Math.sin(xVal) ** 2).toFixed(3) +
  " | Der: " + (1 - 2 * Math.sin(xVal) ** 2).toFixed(3) + "<br>" +
  "(b) Izq: " + (Math.tan(xVal) / (Math.sin(xVal - 2) * Math.tan(xVal))).toFixed(3) +
  " | Der: " + (1 / Math.cos(xVal - 2)).toFixed(3);
