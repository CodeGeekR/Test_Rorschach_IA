// Cargar modelo de TensorFlow.js para clasificar las interpretaciones
const model = await tf.loadGraphModel("model/model.json");

// Cargar el clasificador KNN
const knn = new knnClassifier.KNNClassifier();

// Agregar interpretaciones previas como ejemplos para el clasificador
knn.addExample(interpretation, label);

// Guardar el clasificador en localStorage
localStorage.setItem("knnClassifier", knn.serialize());

// Enviar la interpretación al servidor
fetch("https://example.com/api/interpretations", {
  method: "POST",
  body: JSON.stringify({ interpretation: interpretation }),
});

// Funcion para contar los caracteres de la interpretación
const interpretacionInput = document.getElementById("interpretacion");
const contador = document.getElementById("contador");

interpretacionInput.addEventListener("input", () => {
  const caracteresRestantes =
    interpretacionInput.maxLength - interpretacionInput.value.length;
  contador.innerText = caracteresRestantes;
});
