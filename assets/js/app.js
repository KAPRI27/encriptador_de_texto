function encriptar() {
  let texto = document.getElementById("textoInicial").value;

  let mensajeInicial = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  let nuevoTexto = mensajeInicial;
  document.write(`<h2>${nuevoTexto}</h2>`);
}

encriptar();

function desencriptar() {
  let texto = document.getElementById("textoInicial").value;

  let mensajeInicial = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  let nuevoTexto = mensajeInicial;
  document.write(`<h2>${nuevoTexto}</h2>`);
}
desencriptar();

/*
fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!


*/
