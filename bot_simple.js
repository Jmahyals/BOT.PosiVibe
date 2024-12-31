const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const espacios = '-------------------------------------';

function saludo() {
  console.log('BIENVENIDO A BOT.PosiVibe');
  console.log(espacios);
  console.log('Este bot te ayudará a motivarte o tener disciplina \n Hola, ¿cómo te llamas?');

  return new Promise((resolve) => {
    rl.question('Ingrese su nombre: ', (nombre) => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    });
  });
}

function estadoAnimo() {
  console.log(espacios);
  return new Promise((resolve) => {
    rl.question('¿Cómo estás hoy? (bien/mal): ', (estadoDeAnimo) => {
      if (estadoDeAnimo.toLowerCase() === 'bien') {
        console.log('¡Qué bueno que estés bien :)');
      } else if (estadoDeAnimo.toLowerCase() === 'mal') {
        console.log('Qué mal, si quieres te recomiendo una página de psicología');
      } else {
        console.log('Gracias por compartir tu estado de ánimo :)');
      }
      resolve();
    });
  });
}

function recomendacionPagina() {
  console.log(espacios);
  return new Promise((resolve) => {
    rl.question('¿Quieres una página que te puede motivar y mejorar? (si/no): ', (paginaRecomendada) => {
      if (paginaRecomendada.toLowerCase() === 'si') {
        console.log('Aquí está el Link: https://www.uv.mx/veracruz/cess/vinculacion-y-extension/psicologia/');
      } else if (paginaRecomendada.toLowerCase() === 'no') {
        console.log('Ok, que tengas bonito día :)');
      } else {
        console.log("Por favor responda con 'si' o 'no'.");
      }
      resolve();
    });
  });
}

function fraseMotivacional() {
  console.log(espacios);
  return new Promise((resolve) => {
    rl.question('¿Crees que necesitas una frase motivacional? (si/no): ', (fraseMotivacional) => {
      if (fraseMotivacional.toLowerCase() === 'si') {
        console.log('El éxito es la suma de pequeños esfuerzos repetidos día tras día.');
      } else if (fraseMotivacional.toLowerCase() === 'no') {
        console.log('Entiendo, estoy aquí si quieres hablar de otra cosa.');
      } else {
        console.log("Por favor responda con 'si' o 'no'.");
      }
      resolve();
    });
  });
}

function recomendacionLibros() {
  console.log(espacios);
  const libros = [
    '1. Si lo crees, lo creas',
    '2. Hábitos atómicos',
    '3. Maestría'
  ];

  function mostrarLibros() {
    console.log(espacios);
    console.log('Aquí tienes algunos libros que podrías leer y mejorar:');
    libros.forEach((libro) => console.log(libro));
  }

  mostrarLibros();

  return new Promise((resolve) => {
    rl.question('¿Te gustaría recibir una recomendación de un libro? (si/no): ', (respuesta) => {
      if (respuesta.toLowerCase() === 'si') {
        const libroRecomendado = libros[Math.floor(Math.random() * libros.length)];
        console.log(`Aquí tienes una recomendación: ${libroRecomendado}`);
      } else if (respuesta.toLowerCase() === 'no') {
        console.log('Ok, está bien. Si cambias de opinión, aquí estaré.');
      } else {
        console.log("Por favor, responde con 'si' o 'no'.");
      }
      resolve();
    });
  });
}

function estadoAnimo2() {
  console.log(espacios);
  return new Promise((resolve) => {
    rl.question('¿Crees que ha mejorado tu estado de ánimo? (si/no): ', (preguntaEstadoAnimo) => {
      if (preguntaEstadoAnimo.toLowerCase() === 'si') {
        console.log('Excelente, sigue mejorando :)');
      } else if (preguntaEstadoAnimo.toLowerCase() === 'no') {
        console.log('Creo que necesitas ver una película o escuchar música');
      } else {
        console.log("Por favor responda con 'si' o 'no'.");
      }
      resolve();
    });
  });
}

function recomendacionPeliculas() {
  console.log(espacios);
  const peliculas = [
    '1. Una mente maravillosa',
    '2. Un sueño posible',
    '3. En busca de la felicidad'
  ];

  function mostrarPelicula() {
    console.log(espacios);
    console.log('Aquí tienes algunas películas interesantes:');
    peliculas.forEach((pelicula) => console.log(pelicula));
  }

  mostrarPelicula();

  return new Promise((resolve) => {
    rl.question('¿Quieres una recomendación de alguna película? (si/no): ', (recomendacionPeliculas) => {
      if (recomendacionPeliculas.toLowerCase() === 'si') {
        const peliculaRecomendada = peliculas[Math.floor(Math.random() * peliculas.length)];
        console.log(`Aquí tienes una recomendación: ${peliculaRecomendada}`);
      } else if (recomendacionPeliculas.toLowerCase() === 'no') {
        console.log('Ok, si cambias de opinión aquí estaré.');
      } else {
        console.log("Por favor responda con 'si' o 'no'.");
      }
      resolve();
    });
  });
}

function recomendacionRutina() {
  console.log(espacios);
  const rutinas = [
    '1. Dormir temprano',
    '2. Levantarse temprano',
    '3. Mantener una dieta saludable',
    '4. Haz una lista de tus objetivos y metas',
    '5. Haz algún tipo de entrenamiento físico',
    '6. Lee un libro de crecimiento personal',
    '7. Mantente alejado de algún vicio',
    '8. Trata de aprender algo nuevo cada día',
    '9. Crea un grupo de amigos que te ayuden a ser mejor persona',
    '10. Practica la meditación dos veces al día'
  ];

  function mostrarRutina() {
    console.log(espacios);
    console.log('Aquí tienes una rutina efectiva:');
    rutinas.forEach((rutina) => console.log(rutina));
  }

  mostrarRutina();

  return new Promise((resolve) => {
    rl.question('¿Quieres una rutina efectiva? (si/no): ', (recomendacionRutina) => {
      if (recomendacionRutina.toLowerCase() === 'si') {
        const rutinaRecomendada = rutinas[Math.floor(Math.random() * rutinas.length)];
        console.log('La rutina del éxito');
      } else if (recomendacionRutina.toLowerCase() === 'no') {
        console.log('Ok, entiendo. Si cambias de opinión, aquí estaré.');
      } else {
        console.log("Por favor responde con 'si' o 'no'.");
      }
      resolve();
    });
  });
}

async function main() {
  await saludo();
  await estadoAnimo();
  await recomendacionPagina();
  await fraseMotivacional();
  await recomendacionLibros();
  await estadoAnimo2();
  await recomendacionPeliculas();
  await recomendacionRutina();
  console.log(espacios);
  console.log('Aquí te podemos ayudar a mejorar :)');
  console.log(espacios);
  rl.close();
}

main();
