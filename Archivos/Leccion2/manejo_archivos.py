# Declaramos un avariable
try:
    archivo = open('prueba.txt', 'w', encoding='utf8') # La w es de white(escribir)
    archivo.write('Programamos con diferentes tipos de archivos, ahora en txt.\n')
    archivo.write('Los acentos son importantes para las palabras\n')
    archivo.write('como por ejemplo: acción, ejecución y producción,\n')
    archivo.write('Las letras son:\n "r" read,\n "a" append,\n "w" write,\n "x" crea un archivo,')
    archivo.write('\n "t" para texto o text, \n "b" tipo binario(imagenes, video etc.)\n "w+" y "r+" lee y escribe son iguales,\n')
    archivo.write('saludos a los alumnos de la tecnicatura\n')
    archivo.write('Con esto terminamos')
    
except Exception as e:
    print(e)
finally: # siempre se ejecuta
    archivo.close()# con esto se debe cerrar el archivos
# una vez cerrado el archivo no podemos agregar, leer o ejecutar el archivo 