function encriptar() {
  let texto = document.getElementById("textoInicial").value;

  //let mensajeInicial = texto
  return texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
}
document.getElementById("encriptando").addEventListener("click", function () {
  let inputText = document.getElementById("textoInicial").value;
  let textoSalida = encriptar(inputText);
  document.getElementById("resultDiv").innerHTML = textoSalida;
});

//funcion para DESENCRIPTAR
function desencriptar() {
  let texto = document.getElementById("textoInicial").value;

  return texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  //let textoSalida = document.write(`<h2>${mensajeInicial}</h2>`);
}
//desencriptar();
document
  .getElementById("desencriptando")
  .addEventListener("click", function () {
    let inputText = document.getElementById("textoInicial").value;
    let textoSalida = desencriptar(inputText);
    document.getElementById("resultDiv").innerHTML = textoSalida;
  });

/*
fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!


*/
