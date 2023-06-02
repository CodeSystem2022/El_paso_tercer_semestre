from NumerosIgualesException import NumerosIgualesException

resultado = None   # Necesita ser una variable global para incluirla dentro del bloque y fuera de el. Esta variable nos permite ver mejor el esatdo de las pruebas
'''a = 7
b = 5 '''   # Variables globales
try:
    a = int(input('Digite el primer numero: '))     # variables Locales dentro del bloque try
    b = int(input('Digite el segundo numero: '))
    if a == b:
        raise NumerosIgualesException ('Son numero iguales')   # Creamos una clase en otro archivo y la llamamos al principio. Aqui la invocamos para que nos diga si se cumple esta excepcion personalizada
    resultado = a/b
except TypeError as e:
    print(f'TypeError - Ocurrio un error: {type(e)}')
except ZeroDivisionError as e:
    print(f'ZeroDivisionError - Ocurrio un error: {type(e)}')   # Podemos trabajar con clases padre (exception) o ser mas especifico con las clases hijas, en este caso (TypeError) y (ZeroDivisionError)
except Exception as e:                                          # Cuando trabajamos con clases hijas y clases padres, la clase padre debe ir codeada a lo ultimo porque sino no sera preciso el error que queremos comunicar
    print(f'Exception - Ocurrio un error: {type(e)}')

# Al final de los bloques except podemos agregar dos bloque mas; el bloque else y el bloque finally.
# Bloque else: Unicamente se va ejecutar en caso de que no se haya lanzado ninguna excepcion.
else:
    print('No se arrojo ninguna excepcion')
# Bloque finally: Siempre se va a ejecutar.
finally:
    print('Ejecucion de este bloque finally')

print(f'El resultado es: {resultado}')
print('seguimos...')