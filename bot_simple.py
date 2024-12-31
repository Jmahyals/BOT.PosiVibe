import random

espacios = "-------------------------------------"
def saludo():
 print("BIENVENIDO A BOT.PosiVibe") 
 print(espacios)
 print("este bot te ayudara a motivarte o tener disciplina \n hola, como te llamas?")
 nombre = input("Ingrese su nombre: ")
 print(f"Hola {nombre} ")
 return nombre
print(espacios)

def estado_animo():
 print(espacios)
 estado_de_animo = input("Como estas hoy? (bien/mal): ")
 animo_1 = "bien"
 animo_2 = "mal"
 if estado_de_animo.lower() == animo_1:
    print("Que bueno que estes bien :)")
 elif estado_de_animo.lower() == animo_2.lower():
    print("Que mal, si quieres te recomiendo una pagina de psicología")
 else:
    print("Gracias por compartir tu estado de animo :)")

def recomendacion_pagina():
 print(espacios)
 pagina_recomendada = input("Quieres una pagina que te puede motivar y mejorar? (si/no): ")
 respuesta_1 = "si"
 respuesta_2 = "no"

 if pagina_recomendada.lower() == respuesta_1:
    print("Aqui esta el Link: https://www.uv.mx/veracruz/cess/vinculacion-y-extension/psicologia/")
 elif pagina_recomendada.lower() == respuesta_2:
    print("ok que tengas bonito dia :)")
 else:
    print("Por favor responda con 'si' o 'no'. " )

def frase_motivacional():
 print(espacios)
 frase_motivacional = input("Crees que necesistes una frase motivacional? (si/no): ")
 respuesta_3 = "si"
 respuesta_4 = "no"
 if frase_motivacional.lower() == respuesta_3:
    print("El éxito es la suma de pequeños esfuerzos repetidos día tras día.")
 elif frase_motivacional.lower() == respuesta_4:
    print("Entiendo, estoy aquí si quieres hablar de otra cosa")
 else:
    print("Por favor responda con 'si' o 'no'. ")

def recomendacion_libros():
 print(espacios)
 respuesta = input("¿Te gustaría recibir una recomendación de un libro? (si/no): ")
 respuesta_5 = "si"
 respuesta_6 = "no"
 libros = [
    "1. Si lo crees, lo creas",
    "2. Hábitos atómicos",
    "3. Maestría"
]

 def mostrar_libros():
    print(espacios)
    print("Aquí tienes algunos libros que podrías leer y mejorar:")
    for libro in libros:
        print(libro)

 mostrar_libros()

 if respuesta.lower() == respuesta_5:
  libro_recomendado = random.choice(libros)
  print(f"Aquí tienes una recomendación: {libro_recomendado}")
 elif respuesta.lower() == respuesta_6:
    print("Ok, está bien. Si cambias de opinión, aquí estaré.")
 else:
    print("Por favor, responde con 'si' o 'no'.")

def estado_animo_2():
 print(espacios)
 pregunta_estado_animo = input("Crees que ha mejorado tu estado de animo? (si/no):")  
 
 respuesta_7 = "si"
 respuesta_8 = "no"

 if pregunta_estado_animo.lower() == respuesta_7:
   print("Exelente sigue mejorando :)")
 elif pregunta_estado_animo.lower() == respuesta_8:
   print("Creo que necesitas ver una pelicula o escuchar musica")
 else:
   print("Por favor responda con ('si' o 'no'): ")

def recomendacion_peliculas():
 print(espacios)
 recomendacion_peliculas = input("quieres una recomendacion de alguna pelicula? (si/no):")
 
 respuesta_9 = "si"
 respuesta_10 = "mo"

 peliculas = [
   "1. Una mente maravillosa",
   "2. Un sueño posible ",
   "3. En busca de la felicidad"
 ]
 def mostrar_pelicula():
   print(espacios)
   print("Aqui tienes algunas peliculas interesantes:")
   for pelicula in peliculas:
     print(pelicula)
     
 mostrar_pelicula()
 if recomendacion_peliculas.lower() == respuesta_9:
    pelicula_recomendada = random.choice(peliculas)
    print(f"Aqui tienes una recomendacion: {pelicula_recomendada}")
 elif recomendacion_peliculas.lower() == respuesta_10:
   print("OK si cambias de opinion aqui estare.")
 else:
   print("Por favor responda con 'si' o 'no'.")

def recomendacion_rutina():
 print(espacios)
 recomendacion_rutina = input("Quieres una rutina efectiva? (si/no): ")

 respuesta_11 = "si"
 respuesta_12 = "no"

 rutinas = [
    "1. dormir temprano ",
    "2. levantarse temprano",
    "3. Mantener una dieta saludable ",
    "4. haz una lista de tus objetivos y metas",
    "5. haz algun tipo de entrenamiento fisico",
    "6. lee un libro de crecimiento personal"
    "7. mantente alejado de algun vicio ",
    "8. trata de aprender algo nuevo cada dia",
    "9. crea un grupo de amigos que te ayuden a ser mejor persona",
    "10. practica la meditacion dos veces al dia"
    
  ]
 def mostrar_rutina():
    print(espacios)
    print("Aqui tienes una rutina efectiva: ")
    for rutina in rutinas:
      print(rutina)

 mostrar_rutina()
 if recomendacion_rutina.lower() == respuesta_11:
     rutina_recomendada = random.choice(rutinas)
     print("La rutina del exito")
 elif recomendacion_rutina.lower() == respuesta_12:
    print("OK entiendo si cambias de opinion aqui estare.")
 else:
    print("Por favor responde con 'si' o 'no'.")




def main():
   saludo()
   estado_animo()
   recomendacion_pagina()
   frase_motivacional()
   recomendacion_libros()
   estado_animo_2()
   recomendacion_peliculas()
   recomendacion_rutina()
   print(espacios)
   print("Aquí te podemos ayudar a mejorar :) .")
   print(espacios)

if __name__ == "__main__":
    main()







