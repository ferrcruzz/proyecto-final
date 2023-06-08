const preguntas = [
    {
      pregunta: "¿Cuál es la casa a la que pertenece Harry Potter en Hogwarts?",
      opciones: ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"],
      respuesta: 0
    },
    {
      pregunta: "¿Cuál es el nombre completo de Voldemort?",
      opciones: ["Tom Malfoy Riddle", "Tom Marvolo Slytherin", "Tom Marvolo Riddle", "Tom Marvolo Gaunt"],
      respuesta: 2
    },
    {
      pregunta: "¿Quién es el padrino de Harry Potter?",
      opciones: ["Albus Dumbledore", "Remus Lupin", "Sirius Black", "Severus Snape"],
      respuesta: 2
    },
    {
      pregunta: "¿Cuál es la profesión de Hermione Granger cuando es adulta?",
      opciones: ["Aurologa", "Ministra de Magia", "Profesora en Hogwarts", "Investigadora del Ministerio de Magia"],
      respuesta: 1
    },
    {
      pregunta: "¿Cuál es la varita mágica de Harry Potter?",
      opciones: ["Varita de acebo", "Varita de Saúco", "Varita de Sauce", "Varita de Nogal"],
      respuesta: 0
    }
  ];
  
  let respuestasUsuario = [];
  
  function mostrarPreguntas() {
    const preguntasContainer = document.getElementById("preguntas-container");
  
    preguntas.forEach((pregunta, indice) => {
      const preguntaHTML = document.createElement("div");
      preguntaHTML.classList.add("pregunta");
      preguntaHTML.innerHTML = `
        <p>${pregunta.pregunta}</p>
        <div class="opciones">
          ${pregunta.opciones.map((opcion, i) => `
            <input type="radio" name="pregunta-${indice}" id="opcion-${indice}-${i}" value="${i}">
            <label for="opcion-${indice}-${i}">${opcion}</label>
            <br>
          `).join("")}
        </div>
      `;
  
      preguntasContainer.appendChild(preguntaHTML);
    });
  }
  
  function verificarRespuestas() {
    const preguntasContainer = document.getElementById("preguntas-container");
    const preguntasHTML = preguntasContainer.getElementsByClassName("pregunta");
  
    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;
  
    for (let i = 0; i < preguntasHTML.length; i++) {
      const opciones = preguntasHTML[i].querySelectorAll(`input[name="pregunta-${i}"]`);
  
      let respuestaSeleccionada = -1;
  
      for (let j = 0; j < opciones.length; j++) {
        if (opciones[j].checked) {
          respuestaSeleccionada = parseInt(opciones[j].value);
          break;
        }
      }
  
      if (respuestaSeleccionada === -1) {
        console.log(`Pregunta ${i + 1}: No se ha seleccionado una respuesta.`);
        respuestasIncorrectas++;
      } else if (respuestaSeleccionada === preguntas[i].respuesta) {
        console.log(`Pregunta ${i + 1}: ¡Respuesta correcta!`);
        respuestasCorrectas++;
      } else {
        console.log(`Pregunta ${i + 1}: Respuesta incorrecta.`);
        respuestasIncorrectas++;
      }
  
      respuestasUsuario.push(respuestaSeleccionada);
    }
  
    console.log(`Respuestas correctas: ${respuestasCorrectas}`);
    console.log(`Respuestas incorrectas: ${respuestasIncorrectas}`);
  
    const resultado = document.getElementById("resultado");
    resultado.textContent = "Revisa los resultados en la consola.";
  }
  
  mostrarPreguntas();
  
  