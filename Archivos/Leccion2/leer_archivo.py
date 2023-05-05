
archivo = open('prueba.txt', 'r', encoding='utf8') # la R (read) es de leer, La letra A (Append)habre un archivo para anexar mas info o lo crea si no exite
# archivo = open('D:\\Proyectos\\tecnicatura_2023', 'r', encoding='utf8') # para buscar el archivo con la ruta, 
# si hay letras con conflictos(remarcadas o de otro color) hay qu ecolocar doble \\ y se soluciona
# print(archivo.read())

# print(archivo.read(16))
# print(archivo.read(10)) # continuamos desde la linea anterior

# print(archivo.readline()) # Lee la linea completa
# print(archivo.readline())

# vamos a iterar el archivo en cada una de las lineas

# for linea in archivo:
    # print(linea) # iteramos todos los elementos de la lista
    # print(archivo.readlines()[11]) # accedemos al archivo como si fuera una linea

# Anexamos información, copiamos a otro
archivo2 = open('copia.txt','w', encoding='utf8')
archivo2.write(archivo.read())
archivo.close() # cerramos el primer archivo
archivo2.close() # cerramos el segundo archivo

print('Se ha terminado el proceso de leer y copiar el archivo')
