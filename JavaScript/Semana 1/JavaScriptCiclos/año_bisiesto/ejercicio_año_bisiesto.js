let anio = prompt("Introduce un año:");
let aniobisiesto = false;

while (isNaN(anio) || anio < 0) {
  anio = prompt("Introduce un año válido:");
}

if (anio % 4 === 0) {
  if (anio % 100 === 0) {
    if (anio % 400 === 0) {
      aniobisiesto = true;
    }
  } else {
    aniobisiesto = true;
  }
}

if (aniobisiesto) {
  console.log(`${anio} es un año bisiesto`);
} else {
  console.log(`${anio} no es un año bisiesto`);
}
